import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE_BAR = 32
}

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  nextInstruction: number = 0; //variable to increment to the next instruction


  constructor() { }

  @HostListener('window:keyup', ['$event']) //use this to listen to the button press and pass the value to "event"
  keyEvent(event: KeyboardEvent){
    if(event.keyCode === KEY_CODE.RIGHT_ARROW){
      this.nextInstruction++;
    } else if(event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.nextInstruction--;
    }

    //Limit the instructions from 0 to 3 incremnts
    if(this.nextInstruction > 3){ //if the counter greater than the last instruction decrement it
      this.nextInstruction--;
    } else if(this.nextInstruction < 0){ //if the counter less than the last instruction increment it
      this.nextInstruction++;
    }

  }

  ngOnInit() {
  }

}
