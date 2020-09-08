import Book from '@/pages/Book'
import Contact from '@/pages/Contact'

export default [
  {
    path: '',
    component: Book
  },
  {
    path: '/contact/:index',
    component: Contact
  }
]
