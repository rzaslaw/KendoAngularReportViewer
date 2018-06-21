import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    TelerikReportingModule,
    DropDownsModule,
    BrowserAnimationsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
