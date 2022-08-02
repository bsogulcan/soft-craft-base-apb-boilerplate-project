import {GridColumn} from './gridColumn';
import {DialogOptions} from './dialogOptions';

export class DataGridOptions {
    //Services
    crudService: any;

    //Data Source & Components
    keyExpr: string = 'id';
    dataSource: any;
    columns: GridColumn[];
    exportCols : string[] = [];

    createComponent : any;
    editComponent : any;
    dialogConfig : DialogOptions;

    //Permissions
    createPermissionName: string = '';
    editPermissionName: string = '';
    deletePermissionName: string = '';

    //Button Controls
    createButtonIsActive : boolean = true;
    createButtonIsHidden : boolean = false;

    importButtonIsActive : boolean = false;
    importButtonIsHidden : boolean = true;

    exportButtonIsActive : boolean = false;
    deleteButtonIsActive : boolean = true;
    editButtonIsActive : boolean = true;

    //Header & Footer Text
    entityName: string = '';
    currentPageReportTemplate : string = "Showing {first} to {last} of {totalRecords} entries";

    //Pagination
    paginator : boolean = true;
    pageSize: string = '10';
    pageSizes: number[] = [5, 10, 20];
    pageReport  :boolean = true;

    //Sorting
    sortingMode: string = 'single';

    //Filtering
    globalFilter: boolean = true;
    globalFilters: any[];
    globalFilterWidth: string = '240px';

    //Toast Settings
    toastPosition : string = "bottom-right";
    toastLife : number = 3000;
    toastSticky : boolean = false;
    toastClosable : boolean = true;

    //Grid Styling
    showBorders: boolean = false;
    rowHover : boolean = true;
    scrollable : boolean = true;

    //Selection
    selectionEnabled: boolean = false;
    selection: string = 'single';
    selectedItems : any;

    //Grid Column Config
    allowColumnReordering: boolean = true;
    allowColumnResizing: boolean = true;
    allowcolumnAutoWidth: boolean = true;
}
