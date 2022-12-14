export function formatDate(value: any): string {
  const date = new Date(value);
  const day = date.toLocaleDateString('default', { day: '2-digit' });
  const month = date.toLocaleDateString('default', { month: 'short' });
  const year = date.toLocaleDateString('default', { year: 'numeric' });

  return `${month} ${day}, ${year}`;
}
export function formatDateQuery(date: any) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
