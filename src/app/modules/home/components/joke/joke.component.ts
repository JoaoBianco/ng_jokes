import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'
import { Joke } from '../../../../shared/services/models/jokes.model'

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
})
export class JokeComponent {
  @HostBinding('class') get class() {
    return this.isJokeOpen ? 'joke-open' : ''
  }

  @Input() joke: Joke = {} as Joke

  isJokeOpen = false
}
