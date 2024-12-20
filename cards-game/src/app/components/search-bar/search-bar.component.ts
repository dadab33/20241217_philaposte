import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  //@Output() searchBtnClicked = new EventEmitter();
  //@Output() searchChange = new EventEmitter<string>();
  //@Input() search = 'Initial';
  searchBtnClicked = output({
    alias: 'searchBtnClicked'
  });

  count = model<number>(0);

  search = model<string>('Initial');
  // Supprimable en transformant le search de input => model
  //searchChange = output<string>();


  searchClick () {
    console.log('Click !');
    //this.searchBtnClicked.emit();
    this.count.set(this.count() +1);
  }

  /*updateSearch(value: string) {
    this.search.set(value);
  }*/
}
