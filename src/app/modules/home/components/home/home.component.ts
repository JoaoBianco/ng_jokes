import { Component } from '@angular/core'
import { SearchComponent } from '../../../search/search/search.component'
import { JokesComponent } from '../jokes/jokes.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JokesComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
