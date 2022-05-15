import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PLANETS_API_LINK } from 'src/app/common/config';
import { PlanetsDataService } from 'src/app/shared/planets-data.service';
import { Planet } from 'src/app/shared/types/IPlanet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit, OnDestroy {
  public planetsList: Planet[] = [];
  public nextPage: string | null = '';
  public previousPage: string | null = '';
  private subscription: Subscription;

  constructor(private planetsDataService: PlanetsDataService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.loadPlanets(PLANETS_API_LINK));
  }

  public loadPlanets(url: string | null) {
    if (!url) return;
    this.subscription.add(
      this.planetsDataService.getDataByUrl(url).subscribe((res) => {
        this.planetsList = res.results;
        this.nextPage = res.next;
        this.previousPage = res.previous;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
