import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  public title: string;
  public series: Serie[];

  constructor(
    private _seriesService: SeriesService
  ){
    this.title = "Series del Club"
  }

  ngOnInit(): void {
    //A penas se cargue la vista cargamos las series
    this.getSeries();
  }

  getSeries(){
    this._seriesService.getSeries().subscribe(
      res => {
        if (res.series) {
          this.series = res.series; 
          console.log(this.series);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
