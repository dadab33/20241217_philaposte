import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  httpClient = inject(HttpClient);
  config: any;

  initializeApp() {
    return this.httpClient.get<any>('/assets/app.config.json').pipe(
      tap((result: any) => {
        console.log('Env : ' + environment.name);
        this.config = result;
      })
    );
  }
}
