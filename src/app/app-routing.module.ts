import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { ServiceTestComponent } from './service-test/service-test.component';

const routes: Routes = [
  { path: 'service-test', component: ServiceTestComponent },
  { path: '', component: ContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
