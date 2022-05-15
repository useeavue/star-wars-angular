import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { PlanetsDataService } from './shared/planets-data.service';

@NgModule({
  declarations: [AppComponent, PlanetsListComponent, PlanetInfoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [PlanetsDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
