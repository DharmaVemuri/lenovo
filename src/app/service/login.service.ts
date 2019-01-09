import { Injectable } from '@angular/core';



@Injectable()

export class LoginService {

    login =[];
    role = '';
    loginprototype =['admin','consultent','narendra'];
    constructor()
    {
         console.log(this.role);
    }


    logindetails ( role:any,email:any,pwd:any )
    {
        this.role = email;
        console.log(this.role)
        console.log([role,email,pwd]);
        this.login.push( {role,email,pwd} )
    }

     roleproperty()
     {
         console.log(  this.role );

         return this.role
     }

}