import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
i:number;
words2 = [];
   
constructor() { 

  

}

  ngOnInit() {
  }


  welcome()
  {
    
      

  }


   
  add() {
    this.words2.push({value: 'gsre'});
  }

  thank()
  {
    this.words2.pop(); 
  }

}
