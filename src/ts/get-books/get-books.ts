let getBooks = async function (name: string) {
  name.replace(/%s/g, '+');
  let url = 'https://localhost:5001/findbook/search=' + name;

  let response = await fetch(url);
  let books: BookInfo[] = await response.json();

  books.sort((a, b) => a.price - b.price);
  return books;
};

let getDefaultBooks = async function () {
  let booksName = [
    'Angular',
    'React',
    'Требования к разработке',
    'Java',
    '.Net',
    'Kotlin',
    'UI UX',
  ];
  let len = booksName.length;

  let rnd = Math.random() * len;
  rnd = Math.floor(rnd);

  let books = getBooks(booksName[rnd]);

  return books;
};

export { getDefaultBooks, getBooks };
