import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  post :any;
  selectvieww:boolean=true;

  headersColumn=['NAME','EMAIL','DEPARTAMENT',''];

  constructor(){}

  ngOnInit(): void {
     // this.usersService.getusers().subscribe(result=>this.post = result)
  }
}
