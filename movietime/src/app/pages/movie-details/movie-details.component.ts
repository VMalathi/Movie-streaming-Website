import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private movieService:MovieApiService, private router:ActivatedRoute){}
  movieDetailResult:any;
  movieVideoResult:any;
  movieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    //console.log(getParamId);
    this.showMovieDetails(getParamId);
    this.showMovieVideo(getParamId);
    this.showMovieCast(getParamId);
  }

  showMovieDetails(id:any){
    this.movieService.getMovieDetails(id).subscribe((res)=>{
      console.log(res);
      this.movieDetailResult = res;
    })
  }

  showMovieVideo(id:any){
    this.movieService.getMovieVideo(id).subscribe((res)=>{
      res.results.forEach((element:any) => {
        if(element.type==="Trailer"){
          this.movieVideoResult = element.key;
        }
      });
    })
  }

  showMovieCast(id:any){
    this.movieService.getMovieCast(id).subscribe((res)=>{
      this.movieCastResult = res.cast;
    })
  }

}
