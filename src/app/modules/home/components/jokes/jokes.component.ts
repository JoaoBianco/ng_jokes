import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { JokesService } from '../../../../shared/services/jokes.service'
import { GetAllJokes } from '../../../../shared/services/models/jokes.model'
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [CommonModule, JokeComponent],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.scss',
})
export class JokesComponent {
  constructor(private jokesService: JokesService) {}

  jokes: GetAllJokes = {} as GetAllJokes

  ngOnInit() {
    this.jokesService.getAllJokes().subscribe((response) => {
      this.jokes = response
    })
  }
}
