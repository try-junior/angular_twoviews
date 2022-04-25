import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-thumbnail-table',
  templateUrl: './thumbnail-table.component.html',
  styleUrls: ['./thumbnail-table.component.css']
})
export class ThumbnailTableComponent implements OnInit {

  searchvalue:string="";
  departments: string[]=["Marketing","Development"];
  labelsexperience: string[]=["Marketing","Development"];
  users: UserEntity[]=[];


  constructor(private usersService: UsersService) {
    this.usersService.getusers().subscribe(
      users=>this.users=users
    )


   }

getUsersFromDepartment(dep:string){
  return this.users.filter(u=>u.department==dep);
}

  ngOnInit(): void {
  }

}
