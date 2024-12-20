import { Component } from '@angular/core';
import { TitleDirective } from '../../directives/title.directive';
import { UppercasePipe } from '../../pipes/uppercase.pipe';
import { EuroPipe } from '../../pipes/euro.pipe';

@Component({
  selector: 'app-header',
  imports: [TitleDirective, UppercasePipe, EuroPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  monTitle: string = 'Coucou mon title';

  constructor() {
  }
}
