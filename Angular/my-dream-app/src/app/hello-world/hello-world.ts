import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.html',
  styleUrls: ['./hello-world.css']
})
export class HelloWorldComponent {
  mensaje: string = '¡Hola desde HelloWorldComponent!';
}
