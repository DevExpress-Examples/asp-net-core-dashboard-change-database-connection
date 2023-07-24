# Dashboard for ASP.NET Core - How to change database connection in the dashboard designer using UI

The main purpose of this example is to illustrate how to pass custom parameters (not [Dashboard Parameters](https://docs.devexpress.com/Dashboard/117062/web-dashboard/create-dashboards-on-the-web/data-analysis/dashboard-parameters)) to from the client side to the server to implement conditional logic for Dashboards. In this specific example we switch the database connection.

To complete this task we add two buttons in the [Designer Toolbar](https://docs.devexpress.com/Dashboard/403426/web-dashboard/ui-elements-and-customization/designer-toolbar). Once any button is clicked, we put the custom parameter to the [AjaxRemoteService.headers](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.AjaxRemoteService#js_devexpress_dashboard_ajaxremoteservice_headers) dictionary. After that, the [DashboardControl.reloadData](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControl#js_devexpress_dashboard_dashboardcontrol_reloaddata) method call initiates a data reloding callback (See also: [Manage an In-Memory Data Cache](https://docs.devexpress.com/Dashboard/400983/web-dashboard/dashboard-backend/manage-an-in-memory-data-cache)).

On the server, the [IHttpContextAccessor](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-context?view=aspnetcore-3.0) with dependency injection is used to access the passed working mode in code (`HttpContext.Request.Headers["database"]`) in the [DashboardConfigurator.ConfigureDataConnection](https://docs.devexpress.com/Dashboard/DevExpress.DashboardWeb.DashboardConfigurator.ConfigureDataConnection) event handler. Note that we use the [CustomStringConnectionParameters](https://docs.devexpress.com/CoreLibraries/DevExpress.DataAccess.ConnectionParameters.CustomStringConnectionParameters) class instance to initialize and apply a custom connection string in a convenient manner

## Files to Review

* [Program.cs](./CS/Program.cs)
* [Index.cshtml](./CS/Pages/Index.cshtml)

## Documentation

* [Designer Toolbar](https://docs.devexpress.com/Dashboard/403426/web-dashboard/ui-elements-and-customization/designer-toolbar)
* [Manage an In-Memory Data Cache](https://docs.devexpress.com/Dashboard/400983/web-dashboard/dashboard-backend/manage-an-in-memory-data-cache)).

## More Examples

* [Dashboard for ASP.NET Core - How to Limit Data Displayed in Designer Mode](https://github.com/DevExpress-Examples/asp-net-core-dashboard-limit-designer-data)
* [Dashboard for ASP.NET Core - How to Use Parameters to Update a Specific Dashboard Item Without Refreshing the Entire Dashboard](https://github.com/DevExpress-Examples/asp-net-core-dashboard-refresh-item-on-parameter-change)
* [Dashboard for ASP.NET Core - How to implement authentication](https://github.com/DevExpress-Examples/aspnet-core-dashboard-jwt-authentication)