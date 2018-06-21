import { Component, ViewChild } from '@angular/core';
import { TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("reportviewer") reportViewer: TelerikReportViewerComponent;

  title = 'Telerik Reporting Angular Report Viewer';

  public defaultItem: { text: string, value: number } = { text: "Select report...", value: null };
  public reports: Array<{ text: string, value: string }> = [
    { text: "Barcodes", value: "Barcodes.trdp" },
    { text: "Dashboard", value: "Dashboard.trdp" },
    { text: "Invoices", value: "Invoice.trdp" }
  ];

  viewerContainerStyle = {
    position: 'relative',
    width: '1500px',
    height: '800px',
    ['font-family']: 'ms sans serif'
  };

  public selectionChange(value: any): void {
    if (value != null) {
      var reportSource = this.reportViewer.getReportSource();
      reportSource.report = value.value;
  
      this.reportViewer.setReportSource(reportSource); 
    }
  }
}
