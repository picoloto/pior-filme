export interface MultipleWinnerListDto {
  years: YearWinnerCount[];
}

export interface YearWinnerCount {
  year: number;
  winnerCount: number;
}
