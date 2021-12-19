import { SortCardBook } from '../sort-book/sort-book';

let $selectSort = <HTMLSelectElement>document.getElementById('sort-select');

let changeSort = function () {
	let chosenSort = $selectSort.value;
	
	SortCardBook[chosenSort]();
};

$selectSort.addEventListener('change', changeSort);
