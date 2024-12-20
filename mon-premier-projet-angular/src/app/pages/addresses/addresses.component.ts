import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { AdresseService } from '../../services/adresse.service';
import { SearchResult } from '../../classes/search-result';
import { Feature } from '../../classes/feature';

@Component({
  selector: 'app-addresses',
  imports: [FormsModule],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {
  searchValue: string = '';
  logService = inject(LogService);
  addressService = inject(AdresseService);
  features: Feature[] = [];

  private searchAddress() {
    this.logService.log("Lancement de la recherche d'adresse avec la valeur : " + this.searchValue);
    this.addressService.checkAddress(this.searchValue).subscribe((searchResult : SearchResult) => {
      this.features = searchResult.features;

      this.searchValue = '';
    });
  }

  search() {
    this.searchAddress();
  }
}
