export interface APIResponseMultiple<T extends unknown> {
  count: number
  next: string | null
  previous: string | null
  results: Array<T>
}

export type APIResponseSingle<T extends unknown> = T
