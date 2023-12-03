import { Routes } from '@angular/router';
import { MovieListComponent } from './module/movie-list/movie-list.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }, // Normalmente utilizaod para pagina não encontrada, mas vou implementar para voltar ao inicio.
];
