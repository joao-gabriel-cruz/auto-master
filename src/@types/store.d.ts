export type StoreState<T> = {
  data: T
  status: 'idle' | 'loading' | 'success' | 'error'
  error: string | null
}