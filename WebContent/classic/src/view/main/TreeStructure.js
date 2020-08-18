Ext.define('Myapp.view.main.TreeStructure', {
    extend:'Ext.tree.Panel',
    xtype:'tree',
    title: 'Simple Tree',
    width: 600,
    height: 370,
    rootVisible: false,
    multiSelect: true,
    requires : [ 'Myapp.model.Task' ],
    store: {
        type: 'tree',
        model: 'Myapp.model.Task',
        folderSort: true,
        proxy: {
            type: 'ajax',
            url: 'Data/treegrid.json'
        }
    },

    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: 'Task',
        dataIndex: 'task',

        flex: 2,
        sortable: true
    }, {
        text: 'Assigned To',
        dataIndex: 'user',

        flex: 1,
        sortable: true
    }]
//    root: {
//        text: 'Root',
//        expanded: true,
//        children: [
//            {
//                text: 'Child 1',
//                leaf: true
//            },
//            {
//                text: 'Child 2',
//                leaf: true
//            },
//            {
//                text: 'Child 3',
//                expanded: true,
//                children: [
//                    {
//                        text: 'Grandchild',
//                        leaf: true
//                    }
//                ]
//            }
//        ]
//    }
});