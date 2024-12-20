import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  httpClient = inject(HttpClient);
  config : any;

  constructor() { }

  initApp() {
    return this.httpClient.get<any>('/assets/app-config.json').pipe(
      tap((config : any) => {
        this.config = config[environment.name];
      })
    );
  }
}
