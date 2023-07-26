function onBeforeRender(sender) {
    let dashboardControl = sender;

    dashboardControl.registerExtension(new DevExpress.Dashboard.DashboardPanelExtension(dashboardControl));

    let toolbarExtension = dashboardControl.findExtension("designerToolbar");

    if (toolbarExtension) {
        toolbarExtension.on("preparing", customizeDesignerToolbar);
    }
}

function customizeDesignerToolbar(e) {
    let dashboardControl = e.component;

    e.items.unshift({
        widget: 'dxButton',
        location: 'before',
        cssClass: 'dx-refresh-custom-button',
        options: {
            text: 'DB1',
            type: 'default'
        },
        onClick: () => {
            dashboardControl.option('fetchRemoteService.headers', { "database": "nwind" });
            dashboardControl.reloadData();
        }
    }, {
        widget: 'dxButton',
        location: 'before',
        cssClass: 'dx-refresh-custom-button',
        options: {
            text: 'DB2',
            type: 'default'
        },
        onClick: () => {
            dashboardControl.option('fetchRemoteService.headers', { "database": "nwind2" });
            dashboardControl.reloadData();
        }
    });
}