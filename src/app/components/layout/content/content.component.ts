import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() selector:boolean =true;

  headersColumn=['NAME','EMAIL','DEPARTAMENT',''];

  constructor() { }

  ngOnInit(): void {
  }

}
