export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = '';

  books.forEach((book) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`

    p.textContent = `Title: ${book.title}`
    button.textContent = `View ${book.author.name}`
    button.dataset.authorUrlKey = book.author.urlKey;

    li.append(img, p, button);
    bookListEl.append(li);
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';

  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const a = document.createElement('a');

  h2.textContent = author.name

  img.src = author.pictureUrl
  img.alt = `A picture of ${author.name}`

  p1.textContent = `Born: ${author.birthDate}`
  p2.textContent = `${author.bio}`

  a.href = author.wikipediaUrl
  a.textContent = `Wikipedia Link`

  authorInfoEl.append(h2, img, p1, p2, a)

}

export const renderNewUserForm = (newUserFormEl) => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  const label2 = document.createElement('label');
  const input2 = document.createElement('input');
  const label3 = document.createElement('label');
  const select = document.createElement('select');

  label.setAttribute('for', 'username')
  label.textContent = `Username`

  input.setAttribute('id', 'username')
  input.setAttribute('name', 'username')

  label2.setAttribute('for', 'is-cool')
  label2.textContent = `Is this user cool?`

  input2.setAttribute('id', 'is-cool')
  input2.setAttribute('name', 'isCool')
  input2.setAttribute('type', 'checkbox')

  label3.setAttribute('for', 'favorite-language')
  label3.textContent = `Favorite Language`

  select.setAttribute('id', 'favorite-language')
  select.setAttribute('name', 'favoriteLanguage')

  const option = document.createElement('option')
  option.setAttribute('value', 'None')
  option.textContent = 'None'

  const option2 = document.createElement('option')
  option2.setAttribute('value', 'JavaScript')
  option2.textContent = 'JavaScript'

  const option3 = document.createElement('option')
  option3.setAttribute('value', 'Python')
  option3.textContent = 'Python'

  const option4 = document.createElement('option')
  option4.setAttribute('value', 'Ruby')
  option4.textContent = 'Ruby'

  select.append(option, option2, option3, option4)

  const button = document.createElement('button')
  button.setAttribute('type', 'submit')
  button.textContent = 'Create User'

  newUserFormEl.append(label, input, label2, input2, label3, select, button)
}

export const renderNewUser = (newUserEl, newUser) => {

  newUserEl.innerHTML = ''

  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  const p2 = document.createElement('p')

  h2.textContent = newUser.username
  h2.dataset.userId = newUser.id

  if (newUser.isCool) {
    p.textContent = 'The hippest in the house!'
  } else {
    p.textContent = 'A real square.'
  }

  p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`

  newUserEl.append(h2, p, p2)

}