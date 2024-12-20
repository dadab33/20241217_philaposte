import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'phila-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  buttonClicked = output({
    alias: 'jeSuisUnOutputQuiReagitAuClickSurMonBouton'
  });

  search = model<string>();

  onButtonClicked() {
    this.buttonClicked.emit();
  }
}
