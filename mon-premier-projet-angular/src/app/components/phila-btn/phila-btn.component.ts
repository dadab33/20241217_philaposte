import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'phila-btn',
  imports: [],
  templateUrl: './phila-btn.component.html',
  styleUrl: './phila-btn.component.css'
})
export class PhilaBtnComponent {
  // @Input({
  //   required: true
  // }) content: string = '';

  content = input<string>();
  btnClicked = output<string>();
  logService = inject(LogService);

  buttonClicked() {
    this.logService.warn("Le bouton " + this.content() + " a été cliqué !!!");
    this.btnClicked.emit('J\'ai été cliqué !');
  }
}
