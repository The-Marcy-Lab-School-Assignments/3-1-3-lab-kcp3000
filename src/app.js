import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';
import { get } from 'fetch-mock';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);

  // Render the form!
  renderNewUserForm(newUserFormEl)

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  console.log(books)
  // render out the books
  renderBookList(bookListEl, books)

  const author = await getAuthor()

  //bookListEl.addEventListener('click', renderAuthorInfo())

  //newUserFormEl.addEventListener('submit', (createNewUser()))

  //renderNewUser(newUserEl)
}
