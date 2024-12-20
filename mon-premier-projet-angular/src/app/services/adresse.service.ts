import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, tap, throwError } from 'rxjs';
import { SearchResult } from '../classes/search-result';
import { SearchResultOptim } from '../classes/search-result-optim';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  httpClient = inject(HttpClient);

  checkAddressOptim(value: string): Observable<SearchResultOptim> {
    return this.httpClient.get<SearchResultOptim>("https://api-adresse.data.gouv.fr/search/?q=" + value + "&limit=5").pipe(
      map((response) => {
        return new SearchResultOptim(response);
      }),
      catchError((error : HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  checkAddress(value: string): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>("https://api-adresse.data.gouv.fr/search/?q=" + value + "&limit=5");
  }

  checkAddressANESURTOUTPASUTILISER(value: string): Observable<any> {
    return this.httpClient.get<any>("https://api-adresse.data.gouv.fr/search/?q=" + value + "&limit=5");
  }
}
