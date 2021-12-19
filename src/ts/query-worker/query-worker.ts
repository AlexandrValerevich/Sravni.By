import { getBooks } from '../get-books/get-books';
import { CardManager } from '../card-manager/card-manager';
import { LoadingHolder } from '../loading-holder/loading-holder';

let $search: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('search')
);
let $btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn');

function searchText() {
  return $search.value;
}

let findBook = async () => {
  LoadingHolder.show();

  let bookName = searchText();
  let books = await getBooks(bookName);

  CardManager.clean();
  CardManager.add(...books);

  LoadingHolder.hide();
};

$btn.addEventListener('click', findBook);
