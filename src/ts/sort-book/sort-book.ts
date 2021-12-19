import { CardManager } from '../card-manager/card-manager';

class SortCardBook {
  static SortByPrice() {
    CardManager.changeOrder((books) => {
      books.sort((a, b) => a.price - b.price);
    });
	}
	
	static SortByPriceDesc() {
    CardManager.changeOrder((books) => {
      books.sort((a, b) => b.price - a.price);
    });
	}
	
	static SortByAlphabetically() {
		CardManager.changeOrder((books) => {
      books.sort((a, b) => a.name > b.name ? 1 : -1);
    });
	}

	static SortByAlphabeticallyDesc() {
		CardManager.changeOrder((books) => {
      books.sort((a, b) => b.name > a.name ? 1 : -1);
    });
	}
}

export { SortCardBook };
