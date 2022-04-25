
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


  departments: string[]=["Marketing","Development"];

  users: UserEntity[]=[];
  user: UserEntity =this.users[0];
  editable =false;
  userselected: UserEntity =this.users[0];
  console = console;
  currentindex : number =0;
  showit:boolean =false;
  editing:boolean=false;
  olduser: UserEntity;

  /*constructor(private usersService: UsersService) {
    this.usersService.getusers().then(
      users=>this.users=users
    )
   }*/


   constructor (
     @Inject(DOCUMENT) private document: Document ,
    private usersService: UsersService) {
    this.usersService.getusers().subscribe(
       users=>this.users=users);

      this.olduser={
        id: -1,
        name: '',
        email: '',
        department: '',//enum
        created: '',
      }

     /* this.usersService.getFirst().subscribe(
        user=>this.olduser=user);*/
   }


  ngOnInit(): void {
  }
  edit(index :number=0,user:UserEntity){
    this.editable=!this.editable
    this.userselected = JSON.parse(JSON.stringify(user))
    this.console.log("olduser:"+this.olduser.id+" "+this.olduser.name)
    //this.olduser=user
    this.console.log("olduser:"+this.olduser.id+" "+this.olduser.name)
    this.console.log("EDIT userselected:"+this.userselected.id+" " + this.userselected.name+" "+this.userselected.email);

   }

   cancel(index :number=0){
    this.console.log("CANCEL userselected:"+this.userselected.id+" " + this.userselected.name+" "+this.userselected.email);
    this.editable=!this.editable
    this.console.log("CANCEL olduser:"+this.olduser.id+" " + this.olduser.name+" "+this.olduser.email);
    var elemento =this.document.getElementById("#labelname"+index)


    //elemento?.nodeValue=this.olduser.name

   // this.olduser=this.userselected;


   // this.userselected=JSON.parse(JSON.stringify(this.olduser));

   }

   save(index :number,user:UserEntity){
    this.editable=!this.editable
    this.console.log("SAVE user:"+user.id+" " + user.name+" "+ user.email);
    this.console.log("SAVE userselected:"+this.userselected.id+" " + this.userselected.name+" "+this.userselected.email);
    //user=this.userselected;
    this.console.log("SAVE userselected:"+this.userselected.id+" " + this.userselected.name+" "+this.userselected.email);
    //this.userselected=JSON.parse(JSON.stringify(this.olduser));
    //sendWS
   }
   modify(event: KeyboardEvent){
    const target =event.target as HTMLInputElement;
    //this.userselected.name=target.value;
    this.olduser.name=target.value;
   }

   show(index :number=0){
     if(this.editable==false){
      let table=this.document.getElementById("tablecompleta");
      if(table!=null){
        let tr = table.getElementsByTagName("tr");
        if(tr!=null && tr[index]!=null){
          this.currentindex=index;
          this.showit=true;
        }
      }
     }
  }

    hide(index :number=0){
      if(this.editable==false){
        let table=this.document.getElementById("tablecompleta");
        if(table!=null){
          let tr = table.getElementsByTagName("tr");
          if(tr!=null && tr[index]!=null){
            this.currentindex=index;
            this.showit=false;
          }
        }
      }

   }

   selectuser(index: number){
     if(this.users!=null){
          this.userselected=this.users[index];
     }
   };


}
