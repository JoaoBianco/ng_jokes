import { Component } from '@angular/core'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  categories = ['programming', 'misc', 'dark', 'pun', 'spooky', 'christmas']
  blacklists = [
    'nsfw',
    'religious',
    'political',
    'racist',
    'sexist',
    'explicit',
  ]
}
