import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  logindetails:any;

  constructor( private loginsrc:LoginService ,private router:Router ) {

this.logindetails={

  email:'',
  password:'',


}



   }

  ngOnInit() {
  }


  logincredential()
  {
    console.log(this.logindetails);
    if( this.logindetails.email == 'narendra' )
    {
      console.log( 'i am enter' );
   this.loginsrc.logindetails('admin' , this.logindetails.email,this.logindetails.password );
   this.loginsrc.role = this.logindetails.email;
   this.router.navigate(['/home']);
  }
  else
  {
    this.loginsrc.logindetails('consultent' , this.logindetails.email,this.logindetails.password );
    this.loginsrc.role = this.logindetails.email;
    this.router.navigate(['/Adminhome']);
  }
             
  }


}
