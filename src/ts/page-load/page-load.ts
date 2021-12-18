import { CardManager } from '../card-manager/card-manager';
import { getDefaultBooks } from '../get-books/get-books';

let load = async () => {
  console.log('начало иветра');
  let books = await getDefaultBooks();
  CardManager.clean();
  CardManager.add(...books);
};

window.addEventListener('load', load);
