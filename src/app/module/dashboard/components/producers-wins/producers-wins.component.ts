import { Component } from '@angular/core';
import { MovieService } from '../../../../shared/services/movie.service';
import {
  MaxMinWinProducersDto,
  ProducerInterval,
} from '../../../../model/max-min-win-producers-dto.model';
import { ProducerWinsTableComponent } from './components/producer-wins-table/producer-wins-table.component';

@Component({
  selector: 'app-producers-wins',
  standalone: true,
  imports: [ProducerWinsTableComponent],
  templateUrl: './producers-wins.component.html',
  styleUrl: './producers-wins.component.scss',
})
export class ProducersWinsComponent {
  producerMaxInterval: ProducerInterval[] = [];
  producerMinInterval: ProducerInterval[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMinMaxWinProducers();
  }

  getMinMaxWinProducers() {
    this.movieService
      .getMinMaxWinProducers()
      .subscribe((data: MaxMinWinProducersDto) => {
        console.log(data, 'data');
        this.producerMaxInterval = data.max;
        this.producerMinInterval = data.min;
      });
  }
}
