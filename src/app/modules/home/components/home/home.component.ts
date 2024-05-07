import { Component } from '@angular/core'
import { JokesComponent } from '../jokes/jokes.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JokesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
