import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url='http://34.241.217.201/users_aeb';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  console=console;

  getusers():Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>(url);
  }

  setuser(user:UserEntity){
    this.http.put(`${url}/${user.id}`,user)
    .subscribe(
      data => {

      console.log("PUT Request is successful ", data);
    });
  }

  adduser(user:UserEntity){
    return this.http.post(url,user).subscribe(
      data => {
      console.log("PUT Request is successful ", data);
    });
  }

  delete(id:number) {
    return this.http.delete(`${url}/${id}`).subscribe(
      data => {
      console.log("PUT Request is successful ", data);
    });
  }

}
