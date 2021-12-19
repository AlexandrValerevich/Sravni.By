import { getBooks } from '../get-books/get-books';
import { CardManager } from '../card-manager/card-manager';

let $search: HTMLInputElement = <HTMLInputElement>document.getElementById('search');
let $btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn');

function searchText() {
  return $search.value;
}

let findBook = async () => {
  let bookName = searchText();
	let books = await getBooks(bookName);
	

  CardManager.clean();
  CardManager.add(...books);
};

$btn.addEventListener('click', findBook);
