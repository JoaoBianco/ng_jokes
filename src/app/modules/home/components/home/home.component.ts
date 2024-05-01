import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgxMasonryModule } from 'ngx-masonry'
import { JokesService } from '../../../../shared/services/jokes.service'
import { GetAllJokes } from '../../../../shared/services/models/jokes.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxMasonryModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private jokesService: JokesService) {}

  jokes: GetAllJokes = {} as GetAllJokes

  ngOnInit() {
    this.jokesService.getAllJokes().subscribe((response) => {
      this.jokes = response
    })
  }
}
