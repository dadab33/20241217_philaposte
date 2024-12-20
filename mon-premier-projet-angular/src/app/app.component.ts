import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TitleDirective } from './directives/title.directive';
import { PhilaBtnComponent } from "./components/phila-btn/phila-btn.component";
import { CompteurComponent } from "./components/compteur/compteur.component";
import { CommonModule } from '@angular/common';
import { User } from './classes/user';
import { LogService } from './services/log.service';
import { AdresseService } from './services/adresse.service';
import { SearchResult } from './classes/search-result';
import { Feature } from './classes/feature';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PhilaBtnComponent, CompteurComponent, CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mon-premier-projet-angular';
  compteurBoutonValider: number = 0;
  compteurBoutonEnregistrer: number = 0;
  nomBouton1: string = 'Valider';
  nomBouton2: string = 'Enregistrer';
  compteursVisibles: boolean = true;
  router = inject(Router);
  configService = inject(ConfigService);

  ngOnInit(): void {
    var conf = this.configService.config;
    debugger;
    // this.addressService.checkAddressANESURTOUTPASUTILISER("avenue frachon").subscribe(response => {
    //   var type = response.type;
    //   var features = response.features;
    //   var version = response.versiion;
    //   debugger;
    // });
  }

  validerClicked() {
    this.compteurBoutonValider += 1;
  }

  enregistrerClicked() {
    this.compteurBoutonEnregistrer += 1;
  }

  toggleCompteursVisibility() {
    this.compteursVisibles = !this.compteursVisibles;
  }

  goToUsersPage() {
    this.router.navigate(['users']);
  }

  goToAddressesPage() {
    this.router.navigate(['addresses']);
  }

  goToTemplateFormPage() {
    this.router.navigate(['template-form']);
  }

  goToReactiveFormPage() {
    this.router.navigate(['reactive-form']);
  }
}
