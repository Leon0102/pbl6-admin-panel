export interface ColumnConfig {
  field: string;
  label: string;
  sortable?: boolean;
  width?: string;
  hideResponsive?: boolean;
  alignCenter?: boolean;
  uncapitalized?: boolean;
  render?: (data: any) => any;
  sortedValue?: (data: any) => any;
}
