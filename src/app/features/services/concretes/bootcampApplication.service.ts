import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { BootcampApplicationRequest } from '../../models/requests/bootcampapplication/bootcamp-application-request';
import { BootcampApplicationResponse } from '../../models/responses/bootcampapplication/bootcamp-application-response';
import { BootcampApplicationBaseService } from '../abstracts/bootcampapplication-base.service';
import { CheckRegisteredRequest } from '../../models/requests/bootcampapplication/check-registered-request';
import { CheckRegisteredResponse } from '../../models/responses/bootcampapplication/check-registered-response';

@Injectable({
  providedIn: 'root'
})
export class BootcampApplicationService extends BootcampApplicationBaseService {
    private readonly apiUrl:string = `${environment.API_URL}/ApplicationInformations`
    constructor(private httpClient:HttpClient) {super() }

    override apply(bootcampApplicationRequest:BootcampApplicationRequest): Observable<BootcampApplicationResponse> {
        return this.httpClient.post<BootcampApplicationResponse>(`${this.apiUrl}`, bootcampApplicationRequest).pipe(
          map(response => response),
          catchError(responseError => {
            throw responseError;
          })
        );
    }

    override CheckBootcamp(BootcampId: Number): Observable<BootcampApplicationResponse> {
      return this.httpClient.get<BootcampApplicationResponse>(`${this.apiUrl}/bootcamp/${BootcampId}`).pipe(
        map(response => response),
        catchError(responseError => {
          throw responseError;
        })
      );
    }

    CheckRegistered(checkRegisteredRequest: CheckRegisteredRequest): Observable<boolean> {
      return this.httpClient.get<boolean>(`${this.apiUrl}/CheckRegistered`, { params: { ...checkRegisteredRequest } }).pipe(
        map(response => response),
        catchError(responseError => {
          throw responseError;
        })
      );
    }
  
}