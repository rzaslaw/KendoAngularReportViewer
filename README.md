# KendoAngularReportViewer
This sample project implements an instance of Telerik Reporting's HTML5 Report Viewer within an Angular 6 view (https://docs.telerik.com/reporting/angular-report-viewer). The report that is displayed in the Report Viewer's content area can be toggled by means of a selection in the integrated Kendo UI DropDownList for Angular (https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist/). Handling the selectionChange event allows for resetting the reportSource -> report property.

The serviceURL that connects the embedded Report Viewer to a server implementation of a Telerik Reporting REST Service (https://docs.telerik.com/reporting/telerik-reporting-rest-conception) is set to an implementation of the ReportingRestServiceCors C# project available here: https://github.com/rzaslaw/ReportingRestServiceCors.

<tr-viewer #reportviewer
    [containerStyle]="viewerContainerStyle"
    [serviceUrl]="'http://localhost/ReportingRestServiceCors/api/reports'"
    [reportSource]="{
        report: 'Barcodes.trdp',
        parameters: {}
    }"
    [viewMode]="'INTERACTIVE'"
    [scaleMode]="'SPECIFIC'"
    [scale]="1.0">
</tr-viewer>


