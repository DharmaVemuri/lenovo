import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  role: any;
  loginpath: any;
  logincheck: any;


  constructor(private loginsrv: LoginService) {



    this.logincheck = this.loginsrv.loginprototype


//     if (this.logincheck[0] == 'admin') {
 
//          this.loginpath =
// {
//      pathhome:'Adminhome',
//      status:'Astatus'
// }
 
//     }
//     else if (this.logincheck[1] == 'consultent') {
//       this.loginpath =
// {
//      pathhome:'home',
//      status:'status'
// }
// console.log( this.loginpath['pathhome'] );

//     }
//     else {

//        console.log('i am in out side');
//     }

               if(this.role == 'narendra')
               {

                         this.loginpath =
{
     pathhome:'Adminhome',
     status:'Astatus'
}


               }
                else
                {
    
                  this.loginpath =
                  {
                       pathhome:'home',
                       status:'status'
                  }
                  
                }



  }

  ngOnInit() {

    console.log(this.logincheck[0]);


    this.role = this.loginsrv.roleproperty();

      
    console.log(this.role);

    if(this.role == 'narendra')
    {

              this.loginpath =
                       {
                          pathhome:'/Adminhome',
                          status:'/Astatus'
                      }
              console.log('hello');

    }
     else
     {

       this.loginpath =
       {
            pathhome:'/home',
            status:'/status'
       }
       
     }
  }




}
