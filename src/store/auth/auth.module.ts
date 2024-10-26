import { atom } from 'jotai'


interface Auth {
  token: string
  user: {
    id: number
    email: string
  }
  isAuthenticated: boolean
}

export const authAtom = atom()