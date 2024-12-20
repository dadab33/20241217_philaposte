import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-users',
  imports: [NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];

  constructor() {
    this.users.push(new User('Bertrand', 'Alexis', 'alexis.bertrand'));
    this.users.push(new User('Garrabella', 'Gilles', 'gilles.garrabella'));
    this.users.push(new User('Bertrand', 'Damien', 'damien.bertrand'));
  }
}
