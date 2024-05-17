import { BehaviorSubject } from 'rxjs'
import { Joke } from '../models/jokes.model'

export const jokesObservable = new BehaviorSubject<Array<Joke>>([])
