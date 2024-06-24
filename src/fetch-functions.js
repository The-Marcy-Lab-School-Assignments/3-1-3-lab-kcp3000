export const getFirstThreeFantasyBooks = async () => {
  try {
    const res = await fetch('https://openlibrary.org/subjects/fantasy.json')
    if (!res.ok) throw new Error(`Failed to get fantasy books`)

    const bookInfo = await res.json()

    console.log(bookInfo)

    const authorWork = bookInfo.works.map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    })

    return authorWork.slice(0, 3)

  } catch (err) {
    console.warn(err.message);
    return null
  };
};

export const getAuthor = async (urlKey) => {
  try {
    const res = await fetch(`https://openlibrary.org${urlKey}.json`)
    if (!res.ok) throw new Error('Failed to get author')

    const authorInfo = await res.json();

    return {
      birthDate: authorInfo.birth_date,
      bio: authorInfo.bio,
      wikipediaUrl: authorInfo.wikipedia,
      name: authorInfo.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${authorInfo.photos[0]}-M.jpg`,
    }

  } catch (err) {
    console.warn(err.message)
    return null
  }
};

export const createNewUser = async (userObj) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(userObj)
    })
    if (!res.ok) throw new Error(`Failed to create new user`)

    const data = await res.json();

    return data

  } catch (err) {
    console.warn(err)
    return null
  }
}
