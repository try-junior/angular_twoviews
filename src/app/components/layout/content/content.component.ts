import { Component, Input, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() selector:boolean =true;

  headersColumn=['NAME','EMAIL','DEPARTAMENT',''];


  user: UserEntity;
  constructor() {
    this.user={
      id: -1,
      name: '',
      email: '',
      department: '',//enum
      created: '',
    }

   }

  ngOnInit(): void {
  }

}
