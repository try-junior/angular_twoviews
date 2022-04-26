import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { UsersService } from 'src/app/services/users.service';
const day =86400000;
@Component({
  selector: 'app-thumbnail-table',
  templateUrl: './thumbnail-table.component.html',
  styleUrls: ['./thumbnail-table.component.css']
})
export class ThumbnailTableComponent implements OnInit {

  searchvalue:string="";
  departments: string[]=["Marketing","Development"];
  users: UserEntity[]=[];
  currentindex : number =0;


  constructor(private usersService: UsersService) {
    this.usersService.getusers().subscribe(
      users=>
      //this.users=users
      this.users=users.concat(users)
    )


   }

getUsersFromDepartment(dep:string){
  return this.users.filter(u=>u.department==dep);
}

selectlabel(dateexperience: string):string{

  var date = new Date();
  var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
   date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

   var dateuser=Date.parse(dateexperience);

   var diference= (now_utc-dateuser)/day;

   if(diference > 3){
     return "Expert"
   }
   else if(diference >2){
     return "Senior"
   }
   else if(diference >1){
    return "Advanced"
  }
  else{
    return "Experienced"
  }
}

UriImage(experience:string)
{
    return "https://www.plytix.com/hubfs/00%20Culture%20and%20branding/Branding%20-%20Logos/Plytix-logo-purple-120px.svg"
}

  ngOnInit(): void {
  }

}
