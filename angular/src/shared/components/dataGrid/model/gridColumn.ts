export class GridColumn {
  dataField: string;
  caption: string;
  width: string;
  alignment: string;
  dataType: string;
  format: string;
  allowEditing: boolean;
  sortOrder:string;
  setHidden : boolean;
  enableSort : boolean;
  enableFilter : boolean;
  filterData : any[];

  constructor(
    dataField: string,
    caption: string,
    dataType: string,
    width: string = null,
    alignment: string = null,
    allowEditing: boolean =true,
    sortOrder: string = null,
    format: string = null,
    setHidden: boolean = false,
    enableSort:boolean = true,
    enableFilter:boolean = true,
    filterData : any[] = []
  ) {
    this.caption = caption;
    this.dataField = dataField;
    this.dataType = dataType;
    this.allowEditing = allowEditing;
    this.sortOrder = sortOrder == null ? "" : sortOrder;
    this.format = format == null ? "" : format;
    this.width = width == null ? "100%" : width;
    this.alignment = alignment == null ? "" : alignment;
    this.setHidden = setHidden,
    this.enableSort = enableSort,
    this.enableFilter = enableFilter,
    this.filterData = filterData
  }
}
