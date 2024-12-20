import { AfterViewInit, Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.css'
})
export class CompteurComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  nomBouton = input.required<string>();
  compteur = input.required<number>();

  constructor() {
    console.log("Constructeur");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['nomBouton'] != null && changes['nomBouton'].isFirstChange()) {
      console.log("On est sur le ngOnChanges de l'init");  
    } else {
      console.log("ngOnChanges");
    }
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
