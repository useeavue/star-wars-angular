import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlanetsDataService } from 'src/app/shared/planets-data.service';
import { PlanetResident } from 'src/app/shared/types/IPlanetResident';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public displayedColumns: string[];
  public residents: PlanetResident[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetsDataService: PlanetsDataService
  ) {
    this.subscription = new Subscription();
    this.displayedColumns = [
      'name',
      'height',
      'mass',
      'gender',
      'birthYear',
      'eyeColor',
      'hairColor',
      'skinColor',
    ];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
