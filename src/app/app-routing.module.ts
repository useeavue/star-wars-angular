import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'planets' },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planet-info', component: PlanetInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
