import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Output() selectView = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  viewChange(option: boolean | undefined){
    // var this.selectView.emit(false);
      //this.option=!this.option;
      this.selectView.emit(option);

      }


}
