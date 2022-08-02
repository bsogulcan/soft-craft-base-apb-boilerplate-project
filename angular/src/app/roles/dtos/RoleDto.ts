export class MainPermission {
    name: string;
    displayName: string;
    checked: boolean;
    childPermissions: ChildPermission[] = [];
}

export class ChildPermission {
    name: string;
    displayName: string;
    checked: boolean;
}