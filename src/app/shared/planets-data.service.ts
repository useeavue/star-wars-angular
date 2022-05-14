import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PLANETS_API_LINK } from '../common/config';
import { Planet } from './types/IPlanet';
import { PlanetsResponse } from './types/IPlanetsResponse';

@Injectable()
export class PlanetsDataService {
  constructor(private http: HttpClient) {}

  public getPlanets(): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(PLANETS_API_LINK);
  }

  public getDataByUrl(url: string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }
}
