import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'john@doe.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Tomek',
        lastName: 'Szymanski',
        email:'tomek_szymanski@onet.pl',
        registered: new Date('03/11/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Ktoś',
        lastName: 'Jeszcze',
        email:'ktos@jeszcze.pl',
        isActive: true,
        registered: new Date('05/02/2016 07:30:00'),
        hide: true
      },
    ];
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);

     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
     this.users.unshift(user);

   }



}
