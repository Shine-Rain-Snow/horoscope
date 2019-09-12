import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologyComponent } from './astrology.component';

const routes: Routes = [
	{
		path: '',
		component: AstrologyComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AstrologyComponent],
})
export class AstrologyRoutingModule { }
