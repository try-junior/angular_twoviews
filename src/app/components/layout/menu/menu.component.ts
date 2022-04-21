import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Output() selectView = new EventEmitter<boolean>();

  option=false;
  constructor() { }

  ngOnInit(): void {
  }

  viewChange(){
    // var this.selectView.emit(false);
      this.option=!this.option;
      this.selectView.emit(this.option);
      }


}
