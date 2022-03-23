export class WeatherForecast {
  public date: Date;
  public temperatureC: number;
  public temperatureF: number;
  public temperatureG: number;
  public temperatureH: number;
  public summary: string;

  /**
   *
   */
  constructor(public _date : Date,public _temperatureC : number, public _temperatureF : number, public _temperatureG : number,public _temperatureH : number, public _summary : string) {

    this.date = _date;
    this.temperatureC = _temperatureC;
    this.temperatureF = _temperatureF;
    this.temperatureG = _temperatureG;
    this.temperatureH = _temperatureH;
    this.summary = _summary;
  }
}
