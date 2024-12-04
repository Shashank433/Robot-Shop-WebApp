// 3 Methods to implement lifecycle hook
import { Component , OnInit } from '@angular/core'; //1- import the lifecycle( OnInit)

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { //2- Implement the lifecycle in the component you want to use
  constructor() {}

  ngOnInit(): void { //3- create a method inside the component class to write the logic inside which runs
  // when the lifecycle hook gets called
    

  }

}
