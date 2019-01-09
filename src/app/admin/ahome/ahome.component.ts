

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {
  Regdetails: any;

  constructor() {

    this.Regdetails=
    {
      ename:'',
      epassword:'',
      erepassword:'',
      erole:''
    }
   }

  ngOnInit() {
  }

submit()
{
  console.log(this.Regdetails);
}



  

}
