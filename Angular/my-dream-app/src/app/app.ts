import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Carlo Corrales D.';
  email = 'ccorrales@unsa.edu.pe';
  webpage = 'http://www.unsa.edu.pe';
}

bootstrapApplication(AppComponent);
