import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE_BAR = 40,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  showWarning = true;
  showInstructions: boolean = false;
  showUsertest: boolean = false;
  counter: number = 0;


  constructor() {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent){
    // console.log(this.counter);
    if(event.keyCode === KEY_CODE.SPACE_BAR){

      if(this.counter === 0){
        this.showWarning = false;
        this.showInstructions = true;
        this.counter++;

      } else if(this.counter === 1){
        this.showInstructions = false;
        this.showUsertest = true;
        this.counter++;
      }
    }
  }


  ngOnInit() {}
}
