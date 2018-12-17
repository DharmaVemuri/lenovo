import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './app-routing.module';
import { LoginService } from './service/login.service';
import { AStatusComponent } from './admin/status/astatus.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { StatusService } from './service/status.service';
import { AhomeComponent } from './admin/ahome/ahome.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent,
    StatusComponent,
    LoginComponent,
    AhomeComponent,
    AStatusComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ StatusService,LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
