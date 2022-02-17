export const tableDefault = {
    stripe: true,
    border: true,
    fit: true,
    showHeader: true,
    highlightCurrentRow: false,
    emptyText: "No Data",
    defaultExpandAll: false,
    defaultSort: {order: "ascending"},
    tooltipEffect: "dark",
    showSummary: false,
    sumText: "合计",
    selectOnIndeterminate: true,
    indent: 16,
    treeProps: {hasChildren: 'hasChildren', children: 'children'}
};
export const tableColumnDefault = {
    sortable: false,
    sortOrders: ['ascending', 'descending', null],
    resizable: false,
    showOverflowTooltip: false,
    align: "left",
    reserveSelection: false,
    filterMultiple: true
};

export const pageDefault = {
    isNeedPage: true,
    small: false,
    background: false,
    pageSize: 15,
    pagerCount: 7,
    currentPage: 1,
    layout: 'total, sizes, prev, pager, next, jumper',
    pageSizes: [15, 30, 50, 100],
    disabled: false
};

export const formConfigDefault = {
    btnShow: false,
    contentWidth: "auto"
};
