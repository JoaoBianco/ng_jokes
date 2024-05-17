import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { JokesService } from '../../../shared/services/jokes.service'
import { jokesObservable } from '../../../shared/services/observables/jokes.observable'

interface Form {
  categories: Array<{ value: string; checked: boolean }>
  blacklists: Array<{ value: string; checked: boolean }>
  search: string
  [key: string]: Array<{ value: string; checked: boolean }> | string
}
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass

  categories = [
    { value: 'programming', checked: false },
    { value: 'dark', checked: false },
    { value: 'pun', checked: false },
    { value: 'spooky', checked: false },
    { value: 'christmas', checked: false },
    { value: 'misc', checked: false },
  ]

  blacklists = [
    { value: 'nsfw', checked: false },
    { value: 'religious', checked: false },
    { value: 'political', checked: false },
    { value: 'racist', checked: false },
    { value: 'sexist', checked: false },
    { value: 'explicit', checked: false },
  ]

  form: Form = {
    categories: this.categories,
    blacklists: this.blacklists,
    search: '',
  }

  constructor(private jokesService: JokesService) {}

  updateFormSearch(data: any) {
    this.form.search = data.target?.value
  }

  updateFormCheckboxes(type: 'categories' | 'blacklists', field: string) {
    this.form[type] = this.form[type].map((item) => {
      if (item.value === field) {
        return { ...item, checked: !item.checked }
      }
      return item
    })
  }

  async submit(e: any) {
    e.preventDefault()
    const categoriesFilter = this.form['categories']
      .filter((category) => category.checked)
      .map((category) => category.value)
    const blacklistFilter = this.form['blacklists']
      .filter((blacklist) => blacklist.checked)
      .map((blacklist) => blacklist.value)

    this.jokesService
      .getJokesWithFilters(categoriesFilter, blacklistFilter, this.form.search)
      .subscribe((response) => {
        if (response.jokes) {
          jokesObservable.next(response.jokes)
        }
        if (response.error) {
          jokesObservable.next([])
        }
      })
  }
}
