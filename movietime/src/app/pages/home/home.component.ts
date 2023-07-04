import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private movieService: MovieApiService ){ }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerData(){
    this.movieService.bannerApiData().subscribe((res)=>{
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
    })
  }

  trendingMovieData(){
    this.movieService.trendingMoviesApiData().subscribe((movieres=>{
      console.log(movieres);
      this.trendingMovieResult = movieres.results;
    }))
  }

  // action 
  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((res) => {
      this.actionMovieResult = res.results;
    });
  }

  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((res) => {
      this.adventureMovieResult = res.results;
    });
  }

  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((res) => {
      this.animationMovieResult = res.results;
    });
  }

  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((res) => {
      this.comedyMovieResult = res.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((res) => {
      this.documentaryMovieResult = res.results;
    });
  }

  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((res) => {
      this.sciencefictionMovieResult = res.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((res) => {
      this.thrillerMovieResult = res.results;
    });
  }

}
