export class MenuItem {
  id: number;
  parentId: number;
  label: string;
  route: string;
  icon: string;
  permissionNames: string[];
  isActive?: boolean;
  isCollapsed?: boolean;
  children: MenuItem[];

  constructor(
    label: string,
    route: string,
    icon: string,
    permissionNames: string[] = null,
    children: MenuItem[] = null
  ) {
    this.label = label;
    this.route = route;
    this.icon = icon;
    this.permissionNames = permissionNames;
    this.children = children;
  }
}
