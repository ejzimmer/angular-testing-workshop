import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceTestComponent } from './service-test/service-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    ResultsComponent,
    ServiceTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
