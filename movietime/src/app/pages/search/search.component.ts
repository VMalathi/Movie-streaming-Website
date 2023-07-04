import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private search:MovieApiService){}

  ngOnInit():void{

  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    // console.log(this.searchForm.value);
    this.search.getSearchMovie(this.searchForm.value).subscribe((res)=>{
      console.log(res);
      this.searchResult = res.results;
    })
  }
}
