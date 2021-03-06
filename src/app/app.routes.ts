
import { Routes, RouterModule, Router } from '@angular/router';

import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];
export const APP_ROUTING = RouterModule.forRoot(routes);
