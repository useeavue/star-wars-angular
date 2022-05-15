import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlanetsDataService } from 'src/app/shared/planets-data.service';
import { PlanetResident } from 'src/app/shared/types/IPlanetResident';
import { Planet } from 'src/app/shared/types/IPlanet';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public displayedColumns: string[];
  public residents: PlanetResident[] = [];
  public showResidents = true;
  public dataSourse: MatTableDataSource<PlanetResident>;
  public planet: Planet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetsDataService: PlanetsDataService
  ) {
    this.subscription = new Subscription();
    this.dataSourse = new MatTableDataSource();
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
    this.planet = {
      name: '',
      rotationPeriod: '',
      orbitalPeriod: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      population: '',
      residents: [],
      url: '',
    };
  }

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.planetsDataService
          .getDataByUrl(params['url'])
          .subscribe((value) => {
            this.planet = {
              ...value,
              rotationPeriod: value.rotation_period,
              orbitalPeriod: value.orbital_period,
            };
            if (this.planet.residents.length) {
              this.getResidents(this.planet.residents);
            } else {
              this.showResidents = false;
            }
          });
      })
    );
  }

  private getResidents(residents: string[]) {
    residents.forEach((value) => {
      this.subscription.add(
        this.planetsDataService.getDataByUrl(value).subscribe((resident) => {
          this.residents.push({
            name: resident.name,
            mass: resident.mass,
            height: resident.height,
            gender: resident.gender,
            hairColor: resident.hair_color,
            skinColor: resident.skin_color,
            eyeColor: resident.eye_color,
            birthYear: resident.birth_year,
          });
          this.dataSourse.data = this.residents;
        })
      );
    });
  }

  public filterResidents(gender: string) {
    if (gender == 'All') {
      this.dataSourse.data = this.residents;
      return;
    }
    this.dataSourse.data = this.residents.filter(
      (resident) => resident.gender === gender.toLowerCase()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
