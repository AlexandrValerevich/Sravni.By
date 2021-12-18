let getDefaultBooks = async function () {
  let url = 'https://localhost:5001/findbook/';

  let response = await fetch(url);
  let books: BookInfo[] = await response.json();

  return books;
};

let getBooks = async function (name: string) {
  name.replace(/%s/g, '+');
  let url = 'https://localhost:5001/findbook/search=' + name;

  let response = await fetch(url);
  let books: BookInfo[] = await response.json();

  return books;
};

export { getDefaultBooks, getBooks };
