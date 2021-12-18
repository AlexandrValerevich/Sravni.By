// .card-book
//     a.card-book__link(href="#" target="_blank")
//     .card-bool__inner
//         .card-book__image
//             img.img(src="#" alt="Фото книги")
//         .card-book__about
//             p.card-book__price 22.5 BYN
//             p.card-book__title Айн Рэнд, Атлант расправил плечи

declare global {
  interface BookInfo {
    name: string;
    price: number;
    currency: string;
    brand: string;
    uriSite: string;
    uriImage: string;
  }
}

class CardBuilder {
  public static createCard(book: BookInfo): HTMLDivElement {
    let $cardBook = document.createElement('div');
    $cardBook.classList.add('card-book');

    let $cardBookLink = this.createCardLink(book.uriSite);
    let $cardBookInner = this.createCardInner(book);

    $cardBook.appendChild($cardBookLink);
    $cardBook.appendChild($cardBookInner);

    return $cardBook;
  }

  private static createCardLink(uri: string) {
    let $cardBookLink = document.createElement('a');
    $cardBookLink.classList.add('card-book__link');
    $cardBookLink.href = uri;
    $cardBookLink.target = '_blank';

    return $cardBookLink;
  }

  private static createCardInner(book: BookInfo) {
    let $cardInner = document.createElement('div');
    $cardInner.classList.add('card-book__inner');

    let $cardImg = this.createCardImage(book.uriImage);
    let $cardBookAbout = this.createCardBookAbout(book.price, book.currency, book.name);

    $cardInner.append($cardImg);
    $cardInner.append($cardBookAbout);

    return $cardInner;
  }

  private static createCardImage(imgUri: string) {
    let $cardImg = document.createElement('div');
    $cardImg.classList.add('card-book__img');

    let $img = this.createImg(imgUri);
    $cardImg.append($img);

    return $cardImg;
  }

  private static createImg(imgUri: string) {
    let $img = document.createElement('img');

    $img.classList.add('img');
    $img.src = imgUri;
    $img.alt = 'Фото книги';

    return $img;
  }

  private static createCardBookAbout(price: number, currency: string, title: string) {
    let $cardBookAbout = document.createElement('div');
    $cardBookAbout.classList.add('card-book__about');

    let $cardPrice = this.createCardBookPrice(price, currency);
    let $cardTitle = this.createCardBookTitle(title);

    $cardBookAbout.append($cardPrice);
    $cardBookAbout.append($cardTitle);

    return $cardBookAbout;
  }

  private static createCardBookPrice(price: number, currency: string) {
    let $cardPrice = document.createElement('p');
    $cardPrice.classList.add('card-book__price');
    $cardPrice.innerHTML = price + ' ' + currency;

    return $cardPrice;
  }

  private static createCardBookTitle(title: string) {
    let $cardPrice = document.createElement('p');
    $cardPrice.classList.add('card-book__title');
    $cardPrice.innerHTML = title;

    return $cardPrice;
  }
}

export { CardBuilder };
