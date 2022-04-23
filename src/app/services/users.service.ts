import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getusers():Promise<UserEntity[]>{
    return fetch(`http://34.241.217.201/users_aeb`)
    .then((response)=>response.json())
  }
}
