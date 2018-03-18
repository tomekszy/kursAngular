import { Component, OnInit } from '@angular/core';
// import { User } from '../models/User';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  isSuccess: boolean = true;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st.',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Tomek',
          lastName: 'Szymanski',
          age: 33,
          address: {
            street: 'Marynarzy',
            city: 'Sopot',
            state: 'PL'
          },
          registered: new Date('03/11/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Ktoś',
          lastName: 'Jeszcze',
          // age: 25,
          // address: {
          //   street: 'Ulica',
          //   city: 'Miasto',
          //   state: 'Kraj'
          // }
          isActive: true,
          registered: new Date('05/02/2016 07:30:00'),
          hide: true
        },
      ];

      this.loaded = true;
    }, 20);

  }

  addUser(user: User) {
    this.users.push(user);
  }


  setButton() {
    this.showExtended ? this.showExtended = false : this.showExtended = true;
  }
  // toggleHide(user : User) {
  //   user.hide = !user.hide;
  // }
}


