import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Joke } from '../../../../shared/services/models/jokes.model'

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
})
export class JokeComponent {
  randomSeed = (Math.random() * 30).toFixed(0)
  randomHeight = (Math.random() * 100 + 300).toFixed(0)
  @Input() joke: Joke = {} as Joke
}
