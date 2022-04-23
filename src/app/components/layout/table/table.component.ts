import { Component, OnInit, Input, ViewChildren ,QueryList, Injectable, Inject} from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { UsersService } from 'src/app/services/users.service';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headers:any;
  @Input() rows:any;

  keys = Object.keys;

  departments: string[]=["Marketing","Development"];

  users: UserEntity[]=[];
  editable =false;
  userselected: UserEntity =this.users[0];
  console = console;
  currentindex : number =0;
  showit:boolean =false;

  /*constructor(private usersService: UsersService) {
    this.usersService.getusers().then(
      users=>this.users=users
    )
   }*/

   constructor (@Inject(DOCUMENT) private document: Document ,
   private usersService: UsersService
   ) {
    this.usersService.getusers().then(
      users=>this.users=users);
   }

   edit(){
    this.editable=!this.editable;
   }

   /*updateValue(user: any){
    const input = this.users.find(matInput => matInput.id === user.id);
   }*/
   show(index :number=0){
    let table=this.document.getElementById("tablecompleta");
    if(table!=null){
      let tr = table.getElementsByTagName("tr");
      if(tr!=null && tr[index]!=null){
        this.currentindex=index;
        this.showit=true;
      }
    }
  }

    hide(index :number=0){
      let table=this.document.getElementById("tablecompleta");
      if(table!=null){
        let tr = table.getElementsByTagName("tr");
        if(tr!=null && tr[index]!=null){
          this.currentindex=index;
          this.showit=false;
        }
      }
   }

   selectuser(index: number){
     if(this.users!=null){
          this.userselected=this.users[index];
          this.console.log("this.users[index]"+this.users[index]);
     }
     else{
          this.console.log("nullllllll");
     }
   };

  ngOnInit(): void {
  }

}
