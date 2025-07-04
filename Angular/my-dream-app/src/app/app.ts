import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name = "Carlo Corrales D.";
  email = "ccorrales@unsa.edu.pe";
  webpage = "http://www.unsa.edu.pe";

  hobbies: string[] = [];
  filteredHobbies: string[] = [];

  constructor() {
    this.hobbies = ['Leer', 'Programar', 'Correr',
       'Videojuegos', 'Cocinar'];

    // Usando for e if para filtrar hobbies con más de 5 letras
    for (let hobby of this.hobbies) {
      if (hobby.length > 5) {
        this.filteredHobbies.push(hobby);
      }
    }
  }
}

bootstrapApplication(AppComponent);
