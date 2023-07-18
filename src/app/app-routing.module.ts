import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { TravelComponent } from './travel/travel.component';
import { WhiskyComponent } from './whisky/whisky.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'whisky', component: WhiskyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
