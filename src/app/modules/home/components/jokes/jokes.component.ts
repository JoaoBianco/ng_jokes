import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { JokesService } from '../../../../shared/services/jokes.service'
import { Joke } from '../../../../shared/services/models/jokes.model'
import { jokesObservable } from '../../../../shared/services/observables/jokes.observable'
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

  jokes: Joke[] = []

  ngOnInit() {
    this.jokesService.getAllJokes().subscribe((response) => {
      if (response.jokes) {
        jokesObservable.next(response.jokes)
      }
    })
    jokesObservable.subscribe((jokes) => {
      this.jokes = jokes
    })
  }
}
