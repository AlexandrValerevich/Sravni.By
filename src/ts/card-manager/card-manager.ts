import { CardBuilder } from '../create-card/create-card';

interface CardManager {
  clean(): void;
  add(...books: BookInfo[]): void;
}

class CardManager {
  private static cardWrapper: HTMLDivElement = document.querySelector('.card-wrapper');

  public static clean() {
    CardManager.cardWrapper.innerHTML = '';
  }

  public static add(...books: BookInfo[]) {
    books.forEach((book) => {
      let $bookCard = CardBuilder.createCard(book);
      CardManager.cardWrapper.appendChild($bookCard);
    });
  }
}

export { CardManager };
