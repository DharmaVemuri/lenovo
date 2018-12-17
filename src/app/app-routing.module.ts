import { LayoutComponent } from './layout/layout.component';
import { LoginService } from './service/login.service';
import { AStatusComponent } from './admin/status/astatus.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { StatusService } from './service/status.service';
import { AhomeComponent } from './admin/ahome/ahome.component';



const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutComponent,
    children: [

      { path: "home", component: HomeComponent },
      { path: "top", component: TopComponent },
      { path: "status", component: StatusComponent },
      { path: "Adminhome", component: AhomeComponent },
      { path: "Astatus", component: AStatusComponent }

    ]


  },



]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class RoutingModule { }
