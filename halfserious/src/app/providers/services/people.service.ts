import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';

import {
  environment
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) {}

  getAllPeople(page: Number): Observable < any > {
    return this.http.get(this.baseUrl + '/people/?page=' + page, {}).pipe(
      map(
        (data: any) => {
          if (data) {
            return data;
          } else {
            console.error('Error');
          }

          throw new HttpErrorResponse({
            status: 401,
            statusText: 'Unauthorized',
            error: data.errorType
          });
        }
      )
    );
  }

  getCharacter(id: string) {
    return this.http.get(this.baseUrl + '/people/' + id, {}).pipe(
      map(
        (data: any) => {
          if (data) {
            return data;
          } else {
            console.error('Error');
          }

          throw new HttpErrorResponse({
            status: 401,
            statusText: 'Unauthorized',
            error: data.errorType
          });
        }
      )
    );
  }
}
