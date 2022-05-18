import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PlanetsDataService {
  constructor(private http: HttpClient) {}

  public getDataByUrl<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
