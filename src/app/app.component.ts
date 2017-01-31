import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'API CHALLENGE'
}
