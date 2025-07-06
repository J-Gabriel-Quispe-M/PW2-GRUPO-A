import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world';
import { UserComponent } from './user/user';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, HelloWorldComponent, UserComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Carlo Corrales D.';
  email = 'ccorrales@unsa.edu.pe';
  webpage = 'http://www.unsa.edu.pe';

  hobbies: string[] = [];
  filteredHobbies: string[] = [];
  mostrarHobbies: boolean = false;

  constructor() {
    this.hobbies = ['Leer', 'Programar', 'Correr', 'Videojuegos', 'Cocinar'];

    for (let hobby of this.hobbies) {
      if (hobby.length > 5) {
        this.filteredHobbies.push(hobby);
      }
    }
  }

  toggleHobbies() {
    this.mostrarHobbies = !this.mostrarHobbies;
  }

  agregarHobby(nuevo: string) {
    if (nuevo.length > 5) {
      this.filteredHobbies.push(nuevo);
    }
  }

  users = ['ryan', 'joe', 'cameron', 'john'];
  activated = false;

  mostrarAlerta(nombre: string) {
    alert(`Hola, ${nombre}!`);
  }

  eliminarUsuario(nombre: string) {
    this.users = this.users.filter(user => user !== nombre);
  }

  addUser(newUser: any): boolean {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

}
