import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../classes/user';

@Component({
  selector: 'app-template-driven-user-form',
  imports: [FormsModule],
  templateUrl: './template-driven-user-form.component.html',
  styleUrl: './template-driven-user-form.component.css'
})
export class TemplateDrivenUserFormComponent {

  user: User = new User();

  onSubmit() {
    console.log(this.user);

    this.user.firstName = '';
    this.user.lastName = '';
    this.user.login = '';
  }
}
