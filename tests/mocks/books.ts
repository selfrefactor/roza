export interface Company{
  id: string
  name: string,
  country: string
}
export interface Person{
  id: string
  name: string,
}
export interface Author extends Person{
  aka?: string
}
export type BookType = 'compilation' | 'novel' | 'story' | 'poem'
export type Genre = 'comedy' | 'book' | 'fiction'
export interface Book{
  id: string
  name: string
  aka?: string,
  author: Author,
  released?: number,
  translators?: Person[],
  type?: BookType,
  publishedBy: Company
  genres?: Genre[]
}

export const pgWoodhauseAuthor: Author = {
  id: 'foo-author-id-0',
  name: 'PG Woodhause'
}

export const authors: Author[] = [
  pgWoodhauseAuthor
]

export const pinguinCompany: Company = {
  id: 'company-0',
  name: 'Pinguin',
  country: `UK`
}

export const carryOnJeevesBook: Book = {
  id: 'book-0',
  name: 'Carry on, Jeeves!',
  author: pgWoodhauseAuthor,
  type: 'novel',
  genres: ['comedy'],
  publishedBy: pinguinCompany
}
