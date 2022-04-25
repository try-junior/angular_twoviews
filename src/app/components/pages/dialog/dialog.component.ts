import { Component, OnInit,Input } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() userr:any;

  newuser: UserEntity
  departments: string[]=["Marketing","Development"];

  constructor(private usersService: UsersService) {

   this.newuser={
      id: -1,
      name: '',
      email: '',
      department: '',//enum
      created: '',
    }
   }

  ngOnInit(): void {
  }

  remove(){
    this.usersService.delete(this.userr.id)
  }

  save(){
    this.newuser.created=Date.now.toString();
    this.usersService.adduser(this.newuser)
  }

}
