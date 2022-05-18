import { IPlanet } from './IPlanet';

export interface IPlanetsResponse {
  count: string;
  next: string;
  previous: string;
  results: IPlanet[];
}
