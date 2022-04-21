import { Component, OnInit, Input, ViewChildren ,QueryList } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { UsersService } from 'src/app/services/users.service';

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


  constructor(private usersService: UsersService) {
    this.usersService.getusers().then(
      users=>this.users=users
    )
   }

   edit(){
    this.editable=!this.editable;
   }

   updateValue(user: any){
    const input = this.users.find(matInput => matInput.id === user.id);

   }

   selectuser(index: number){
     this.console.log(  "this.users.length"+this.users.length);
     this.console.log(  "index"+index);

     if(this.users!=null){
          this.userselected=this.users[index];
          this.console.log("this.users[index]"+this.users[index]);

     }
     else{
     
          this.console.log("nullllllll");

     }

   }

  ngOnInit(): void {
  }


}
