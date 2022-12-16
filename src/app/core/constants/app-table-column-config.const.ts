import { ColumnConfig } from 'src/app/shared/components/table/table.model';
import { formatDate } from '../utils';

export const USER_COLUMNS_CONFIG: Array<ColumnConfig> = [
  {
    field: 'email',
    label: 'User Email',
    sortable: true,
    width: '15%',
    uncapitalized: true,
    sortedValue: (data) => data.name || '',
  },
  {
    field: 'roleId',
    label: 'Role',
    sortable: true,
    width: '15%',
    uncapitalized: true,
    sortedValue: (data) => data.name || '',
  },
  {
    field: 'phone',
    label: 'Phone',
    sortable: true,
    width: '15%',
    sortedValue: (data) => data.assignedBy || '',
  },
  {
    field: 'createdAt',
    label: 'Join Date',
    sortable: true,
    width: '15%',
    render: (data) => (data.createdAt ? formatDate(data.createdAt) : '-'),
    sortedValue: (data) =>
      data.createdAt ? new Date(data.createdAt) : new Date('1/1/1977'),
  },
];

export const PROPERTY_COLUMNS_CONFIG: Array<ColumnConfig> = [
  {
    field: 'name',
    label: 'Property Name',
    sortable: true,
    width: '15%',
    uncapitalized: true,
    sortedValue: (data) => data.name || '',
  },
  {
    field: 'rating',
    label: 'Rating',
    sortable: true,
    width: '5%',
    alignCenter: true,
    uncapitalized: true,
    sortedValue: (data) => data.name || '',
  },
  {
    field: 'categoryId',
    label: 'Category',
    sortable: true,
    width: '15%',
  },
  {
    field: 'isVerified',
    label: 'Verified',
    sortable: true,
    render: (data) => (''),
    alignCenter: true,
    width: '10%',
  },
  {
    field: 'createdAt',
    label: 'Join Date',
    sortable: true,
    width: '15%',
    render: (data) => (data.createdAt ? formatDate(data.createdAt) : '-'),
    sortedValue: (data) =>
      data.createdAt ? new Date(data.createdAt) : new Date('1/1/1977'),
  },
];

// export const MANAGE_ASSIGNMENT_COLUMNS_CONFIG: Array<ColumnConfig> = [
//   {
//     field: 'select',
//     label: '',
//     sortable: true,
//     width: '6%',
//   },
//   {
//     field: 'name',
//     label: 'Assignment Name',
//     sortable: true,
//     uncapitalized: true,
//     width: '30%',
//     sortedValue: (data) => data.name || '',
//   },
//   {
//     field: 'createdAt',
//     label: 'Due Date',
//     sortable: true,
//     width: '17%',
//     render: (data) => (data.createdAt ? formatDate(data.createdAt) : '-'),
//     sortedValue: (data) =>
//       data.createdAt ? new Date(data.createdAt) : new Date('1/1/1977'),
//   },
//   {
//     field: 'dateAssigned',
//     label: 'Date Assigned',
//     sortable: true,
//     width: '17%',
//     render: (data) => (data.dateAssigned ? formatDate(data.dateAssigned) : '-'),
//     sortedValue: (data) =>
//       data.dateAssigned ? new Date(data.dateAssigned) : new Date('1/1/1977'),
//   },
//   {
//     field: 'typeName',
//     label: 'Type',
//     sortable: true,
//     width: '10%',
//     sortedValue: (data) => data.typeName || '',
//   },
//   {
//     field: 'estTime',
//     label: 'Est Time',
//     sortable: true,
//     width: '10%',
//     render: (data) => `${data.estTime || 0} minutes`,
//     sortedValue: (data) => data.estTime || 0,
//   },
//   {
//     field: 'assignedBy',
//     label: 'Assigned By',
//     sortable: true,
//     width: '10%',
//     sortedValue: (data) => data.assignedBy || '',
//   },
// ];
