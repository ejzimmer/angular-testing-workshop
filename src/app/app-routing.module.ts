import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { ServiceDependencyTestComponent } from './service-dependency-test/service-dependency-test.component';
import { ServiceHttpTestComponent } from './service-http-test/service-http-test.component';

const routes: Routes = [
  { path: 'service-test', component: ServiceTestComponent },
  { path: 'service-dependency-test', component: ServiceDependencyTestComponent },
  { path: 'service-http-test', component: ServiceHttpTestComponent },
  { path: '', component: ContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
