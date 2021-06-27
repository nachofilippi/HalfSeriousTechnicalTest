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

  getAllPeople(_page: Number): Observable < any > {
    return this.http.get(this.baseUrl + '/people/?page=' + _page, {}).pipe(
      map(
        (data: any) => {
          console.log(data);
          if (data)
            return data;

          throw new HttpErrorResponse({
            status: 401,
            statusText: data.errorMessage,
            error: data.errorType
          });
        }
      )
    );
  }
}
