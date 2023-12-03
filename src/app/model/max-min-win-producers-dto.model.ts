export interface MaxMinWinProducersDto {
  min: ProducerInterval[];
  max: ProducerInterval[];
}

export interface ProducerInterval {
  producer: String;
  interval: number;
  previousWin: number;
  followingWin: number;
}
