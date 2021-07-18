import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path:'',component:TopheadingComponent},//home
  { path:'tech',component:TechnewsComponent},//Tech News
  { path:'business',component:BusinessnewsComponent},//Business News
  {path:'entertainment',component:EntertainmentnewsComponent}//Entertainment News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
