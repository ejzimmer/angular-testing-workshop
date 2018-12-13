import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceTestComponent } from './service-test/service-test.component';
import { ScoreComponent } from './score/score.component';
import { ServiceDependencyTestComponent } from './service-dependency-test/service-dependency-test.component';
import { ServiceHttpTestComponent } from './service-http-test/service-http-test.component';
import { ServiceAsyncTestComponent } from './service-async-test/service-async-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    ResultsComponent,
    ServiceTestComponent,
    ScoreComponent,
    ServiceDependencyTestComponent,
    ServiceHttpTestComponent,
    ServiceAsyncTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
