import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Article-Search-App';
}
