import { Component } from '@angular/core';
import { MultipleWinnersComponent } from './components/multiple-winners/multiple-winners.component';
import { TopStudiosWinnersComponent } from './components/top-studios-winners/top-studios-winners.component';
import { ProducersWinsComponent } from './components/producers-wins/producers-wins.component';
import { MovieWinnersComponent } from './components/movie-winners/movie-winners.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MultipleWinnersComponent,
    TopStudiosWinnersComponent,
    ProducersWinsComponent,
    MovieWinnersComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
