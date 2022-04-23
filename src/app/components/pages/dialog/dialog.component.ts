import { Component, OnInit,Input } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() userr:any;
  @Input() users:UserEntity[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
