import { CardBuilder } from '../create-card/create-card';

interface CardManager {
  clean(): void;
  add(...books: BookInfo[]): void;
  changeOrder(callback: (books: BookInfo[]) => void);
}

class CardManager {
  public static cache: BookInfo[];

  private static cardWrapper: HTMLDivElement =
    document.querySelector('.card-wrapper');

  public static clean() {
    CardManager.cardWrapper.innerHTML = '';
  }

  public static add(...books: BookInfo[]) {
    CardManager.cache = books;

    books.forEach((book) => {
      let $bookCard = CardBuilder.createCard(book);
      CardManager.cardWrapper.appendChild($bookCard);
    });
  }

  public static changeOrder(callback: (books: BookInfo[]) => void) {
    callback(CardManager.cache);
    
    CardManager.clean();
    CardManager.cache.forEach((book) => {
      let $bookCard = CardBuilder.createCard(book);
      CardManager.cardWrapper.appendChild($bookCard);
    });
  }
}

export { CardManager };
