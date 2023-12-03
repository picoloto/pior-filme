export interface TopStudioWinnerListDto {
  studios: StudioWinnerCount[];
}

export interface StudioWinnerCount {
  name: String;
  winCount: number;
}
