import { Pipe, PipeTransform } from '@angular/core';
import { UserEntity } from '../model/UserEntity';

@Pipe({
  name: 'searchByEmailByName'
})
export class SearchByEmailByNamePipe implements PipeTransform {

  transform(users: UserEntity[], email:string ,name: string):  UserEntity[] {
    return users.filter(
      user=>
      user.email.toLowerCase().includes(email.toLowerCase())
      ||
       user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

}
