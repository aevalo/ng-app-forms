import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTemplateDrivenFormComponent } from './basic-template-driven-form/basic-template-driven-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic-form', pathMatch: 'full' },
  { path: 'basic-template-driven-form', component: BasicTemplateDrivenFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
