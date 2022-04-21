import { Pipe, PipeTransform } from '@angular/core';
import { UserEntity } from '../model/UserEntity';

@Pipe({
  name: 'selectByDepartment'
})
export class SelectByDepartmentPipe implements PipeTransform {

  transform(users: UserEntity[], department:string):  UserEntity[] {
    return users.filter(
      user=>
      user.department.toLowerCase().includes(department.toLowerCase())
    );
  }

}
