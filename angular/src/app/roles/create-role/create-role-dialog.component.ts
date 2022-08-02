import {
  Component,
  Injector,
  OnInit,
  EventEmitter,
  Output,
} from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { AppComponentBase } from "@shared/app-component-base";
import {
  RoleServiceProxy,
  RoleDto,
  PermissionDto,
  CreateRoleDto,
  PermissionDtoListResultDto,
} from "@shared/service-proxies/service-proxies";
import { MainPermission, ChildPermission } from "../dtos/RoleDto";
import { forEach as _forEach, map as _map } from "lodash-es";

@Component({
  templateUrl: "create-role-dialog.component.html",
})
export class CreateRoleDialogComponent
  extends AppComponentBase
  implements OnInit
{
  saving = false;
  role = new RoleDto();
  permissions: PermissionDto[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = false;

  mainPermissions: MainPermission[] = [];
  childPermissions: ChildPermission[];

  mainPermissionsDS: MainPermission[];
  childPermissionsDS: ChildPermission[];

  selectedMainPermission = new MainPermission();
  selectedChildPermissions : ChildPermission[] = [];
  allPermissions : boolean;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    private _roleService: RoleServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._roleService
      .getAllPermissions()
      .subscribe((result: PermissionDtoListResultDto) => {
        this.permissions = result.items;
        this.setInitialPermissionsStatus();
        this.permissions.forEach((permission) => {
          this.groupByPermissionName(permission);
        });
        this.mainPermissions.forEach(permission => {
          permission.checked = (permission.childPermissions.some( x => x.checked == false) == false);
        });
        this.mainPermissionsDS = this.mainPermissions;
      });
  }

  setInitialPermissionsStatus(): void {
    _map(this.permissions, (item) => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(
        item.name
      );
      this.allPermissions = true;
      this.permissions.forEach(element => {
        if (this.isPermissionChecked(element.name) == false) {
          this.allPermissions = false;
        }
      });
    });
  }

  isPermissionChecked(permissionName: string): boolean {
    // just return default permission checked status
    // it's better to use a setting
    return this.defaultPermissionCheckedStatus;
  }

  onPermissionChange(permission: PermissionDto, $event) {
    this.checkedPermissionsMap[permission.name] = $event.target.checked;
  }

  getCheckedPermissions(): string[] {
    const permissions: string[] = [];
    _forEach(this.checkedPermissionsMap, function (value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }

  save(): void {
    this.saving = true;

    const role = new CreateRoleDto();
    role.init(this.role);
    role.grantedPermissions = this.getCheckedPermissions();

    this._roleService.create(role).subscribe(
      () => {
        this.notify.info(this.l("SavedSuccessfully"));
        this.bsModalRef.hide();
        this.onSave.emit();
      },
      () => {
        this.saving = false;
      }
    );
  }

  groupByPermissionName(permission: PermissionDto) {
    const permissionNames = permission.name.split(".");
    if (permissionNames.length >= 0) {
      const parentPermissionName = permissionNames[0];
      if (this.mainPermissions.some((x) => x.name == parentPermissionName)) {
        if (permissionNames.length == 1) {
          let currentPermission = this.mainPermissions.find(
            (x) => x.name == parentPermissionName
          );
          currentPermission.displayName = permission.displayName;
          if (
            !currentPermission.childPermissions.some(
              (x) => x.name == permission.name
            )
          ) {
            let newChildPermission = new ChildPermission();
            newChildPermission.name = permission.name;
            newChildPermission.displayName = permission.displayName;
            newChildPermission.checked = this.isPermissionChecked(permission.name);
            currentPermission.childPermissions.push(newChildPermission);
          }
        } else {
          let currentPermission = this.mainPermissions.find(
            (x) => x.name == parentPermissionName
          );
          let newChildPermission = new ChildPermission();
          newChildPermission.name = permission.name;
          newChildPermission.displayName = permission.displayName;
          newChildPermission.checked = this.isPermissionChecked(permission.name);
          currentPermission.childPermissions.push(newChildPermission);
        }
      } else {
        let newPermission = new MainPermission();
        newPermission.name = parentPermissionName;
        newPermission.displayName = permission.displayName;
        this.mainPermissions.push(newPermission);
        let parentPermission = this.mainPermissions.find(
          (x) => x.name == newPermission.name
        );
        if (permissionNames.length >= 1) {
          let newChildPermission = new ChildPermission();
          newChildPermission.name = permission.name;
          newChildPermission.displayName = permission.displayName;
          newChildPermission.checked = this.isPermissionChecked(permission.name);
          parentPermission.childPermissions.push(newChildPermission);
        }
      }
    }
  }

  onSelectMainPermission(value: MainPermission) {
    this.selectedChildPermissions = [];
    this.childPermissions = value.childPermissions;
    this.childPermissionsDS = [];
    this.childPermissions.forEach(x => {
      this.childPermissionsDS.push(x);
      if (x.checked) {
        this.selectedChildPermissions.push(x);
      }
    });
  }

  onSelectChildPermission(value: any) {
    this.selectedMainPermission.childPermissions.forEach(element => {
      if (this.selectedChildPermissions.some(x => x.name == element.name)) {
        element.checked = true;
        this.checkedPermissionsMap[element.name] = true;
      } else {
        element.checked = false;
        this.checkedPermissionsMap[element.name] = false;
      }
    });
    this.selectedMainPermission.checked = (this.selectedMainPermission.childPermissions.some(x => x.checked == false) == false);
  }
  
  selectAllPermission() {
    if (this.allPermissions) {
      this.mainPermissions.forEach(mainPermission => {
        mainPermission.childPermissions.forEach(childPermission => {
          childPermission.checked = true;
          this.checkedPermissionsMap[childPermission.name] = true;
        })
        if (this.selectedMainPermission != undefined) {
          this.onSelectMainPermission(this.selectedMainPermission);
        }
        mainPermission.checked = (mainPermission.childPermissions.some(x => x.checked == false) == false);
      })
    } else {
      this.mainPermissions.forEach(mainPermission => {
        mainPermission.childPermissions.forEach(childPermission => {
          childPermission.checked = false;
          this.checkedPermissionsMap[childPermission.name] = false;
        })
        if (this.selectedMainPermission != undefined) {
          this.onSelectMainPermission(this.selectedMainPermission);
        }
        mainPermission.checked = (mainPermission.childPermissions.some(x => x.checked == false) == false);
      })
    }
  }

  selectAllChildPermission(current : MainPermission) {
    if (current.checked) {
      current.childPermissions.forEach(childPermission => {
        childPermission.checked = true;
        this.checkedPermissionsMap[childPermission.name] = true;
      });
      if (this.selectedMainPermission != undefined) {
        this.onSelectMainPermission(this.selectedMainPermission);
      }
      current.checked = (current.childPermissions.some(x => x.checked == false) == false);
    } else {
      current.childPermissions.forEach(childPermission => {
        childPermission.checked = false;
        this.checkedPermissionsMap[childPermission.name] = false;
      });
      if (this.selectedMainPermission != undefined) {
        this.onSelectMainPermission(this.selectedMainPermission);
      }
      current.checked = (current.childPermissions.some(x => x.checked == false) == false);
    }
  }
}
