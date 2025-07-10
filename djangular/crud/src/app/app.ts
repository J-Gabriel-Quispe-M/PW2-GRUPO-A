import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{id: 1, title: 'peli1', desc: 'demo', 
    year: 2021}, {id: 2, title: 'peli2', desc: 'otro demo', year: 2022}];

  constructor(private api: ApiService) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
          this.movies = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}
