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
  /* getusers():Promise<UserEntity[]>{
   return fetch(`http://34.241.217.201/users_aeb`)
    .then((response)=>response.json())}*/

     /* setuser(user:UserEntity){
    return fetch(`http://34.241.217.201/users_aeb`)
    .then((response)=>response.json())
  }*/


  getusers():Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>(url);
  }

  setuser(user:UserEntity){
    return this.http.patch(`${url}/${user.id}`,JSON.stringify(user))
  }

  adduser(user:UserEntity){
    return this.http.post(url,JSON.stringify(user))
  }

  delete(id:number) {
    return this.http.delete(`${url}/${id}`);
  }




  /*this.httpClient.patch("http://127.0.0.1:3000/customers/1",
{
"email": "newcustomer001@gmail.com"
})
.subscribe(
data => {
console.log("PUT Request is successful ", data);
},
error => {
console.log("Error", error);
}
); */

 /* getFirst():Observable<UserEntity>{
    return this.http.get<UserEntity>('http://34.241.217.201/users_aeb/1');
  }*/


}
