import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { GetAllJokes } from './models/jokes.model'

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  API_BASE_ROUTE = 'https://v2.jokeapi.dev/'

  constructor(private httpClient: HttpClient) {}

  getAllJokes() {
    return this.httpClient.get<GetAllJokes>(
      `${this.API_BASE_ROUTE}/joke/Any?amount=10`
    )
  }

  getJokesWithFilters(
    categories: string[],
    blacklists: string[],
    search?: string
  ) {
    return this.httpClient.get<GetAllJokes>(
      `${this.API_BASE_ROUTE}/joke/${
        categories?.length ? categories.join(',') : 'Any'
      }?contains=${search}&amount=10&blacklistFlags=${blacklists?.join(',')}`
    )
  }
}
