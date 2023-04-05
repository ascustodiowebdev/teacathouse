import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { MenuComponent } from './menu/menu.component';
import { WorkBoothComponent } from './work-booth/work-booth.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'work-booth', component: WorkBoothComponent },
  { path: '**', component: HomeComponent }
];
