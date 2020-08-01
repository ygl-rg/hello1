import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  Login(name: string, pwd: string): boolean {
    if(name === 'test' && pwd === 'test') {
      return true;
    } else {
      return false;
    }
  }
}
