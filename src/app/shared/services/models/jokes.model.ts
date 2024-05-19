export interface Joke {
  category: string
  type: 'single' | 'twopart'
  joke?: string
  flags: {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
  }
  id: number
  lang: string
  safe: boolean
  setup?: string
  delivery?: string
  jokeId?: number
  reference?: string
  error?: boolean
  code?: number
  message?: string
}

export interface GetAllJokes {
  error: boolean
  amount: number
  jokes?: Joke[]
}
