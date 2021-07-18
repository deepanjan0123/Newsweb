import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { CustomStyleDirective } from './custom-style.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomStyleDirective,
    NavbarComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    EntertainmentnewsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule
   
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
