import { CardManager } from '../card-manager/card-manager';
import { getDefaultBooks } from '../get-books/get-books';
import { LoadingHolder } from '../loading-holder/loading-holder';

let load = async () => {
  LoadingHolder.show();

  let books = await getDefaultBooks();
  CardManager.clean();
  CardManager.add(...books);

  LoadingHolder.hide();
};

window.addEventListener('load', load);
