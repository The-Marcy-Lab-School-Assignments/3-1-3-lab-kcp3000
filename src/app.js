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

  /*
  FEEDBACK: 
  The goals of each event listener here should be 
  1: 
    First check if the element that you clicked on in the bookListEl a button. 
    If it is, we want to get the data set of the button, 
    next, run getAuthor with the dataset as the argument.
    Afterwards, you'll take what that returns, lets call it the author object,
    and run renderAuthorInfo with the authorInfoEl and the author obj as arguments.
  2:
    Firstly, since this is a submit event listener, 
    we'd wanna prevent the page from refreshing. 
    After, we'd wanna get the form data from the form
    we would then run createNewUser while running the form data as the argument,
    lastly we'd wanna take the user that function returned and run renderNewUser with the newUserEl and the new user passed in. 
  */

  //bookListEl.addEventListener('click', renderAuthorInfo())

  //newUserFormEl.addEventListener('submit', (createNewUser()))

  //renderNewUser(newUserEl)
}
