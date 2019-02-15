import { Component, OnIni, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE_BAR = 32
}

@Component({
  selector: 'app-usertest',
  templateUrl: './usertest.component.html',
  styleUrls: ['./usertest.component.css']
})
export class UsertestComponent implements OnInit {

  show: number = 1;
  selectedMagnification: number = 1;
  showSelectedResult: boolean = false;

  constructor() { }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent){
    // console.log('show:', this.show);
    if(event.keyCode === KEY_CODE.RIGHT_ARROW){
        this.show++;

      } else if(event.keyCode === KEY_CODE.LEFT_ARROW) {
        this.show--;
      }

      if(this.show<1){
        // console.log('lesthan');
        this.show++;

      } else if(this.show > 9) {
        this.show--;
        // console.log('greater');
      }

      if(event.keyCode == KEY_CODE.SPACE_BAR){
        this.showSelectedResult = true;

          switch(this.show){
            case 1:
              console.log('your need +1.00');
              this.selectedMagnification = 1.00;
                break;
            case 2:
              console.log('your need +1.25');
              this.selectedMagnification = 1.25;
                break;
            case 3:
              console.log('your need +1.50');
              this.selectedMagnification = 1.50;
                break;
            case 4:
              console.log('your need +1.75');
              this.selectedMagnification = 1.75;
                break;
            case 5:
              console.log('your need +2.00');
              this.selectedMagnification = 2.00;
                break;
            case 6:
              console.log('your need +2.25');
              this.selectedMagnification = 2.25;
                break;
            case 7:
              console.log('your need +2.50');
              his.selectedMagnification = 2.50;
                break;
            case 8:
              console.log('your need +2.75');
              this.selectedMagnification = 2.75;
                break;
            case 9:
              console.log('your need +3.25');
              this.selectedMagnification = 3.25;
                break;
            default: console.log('error');
              break;
          }
      }

    }

  ngOnInit() {
  }

}
