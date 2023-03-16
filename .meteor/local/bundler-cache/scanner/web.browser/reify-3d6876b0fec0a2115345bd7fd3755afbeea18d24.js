module.export({getTablePaginationUnstyledUtilityClass:()=>getTablePaginationUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getTablePaginationUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTablePagination', slot);
}
const tablePaginationUnstyledClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
module.exportDefault(tablePaginationUnstyledClasses);