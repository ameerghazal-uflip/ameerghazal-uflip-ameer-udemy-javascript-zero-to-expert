import View from './View.js';
import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline'); // gets the button html

      if (!btn) return; // if no button flake.

      const goToPage = +btn.dataset.goto; // gets the page number needed to go to.

      handler(goToPage); // pases the page into the handler
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // console.log(numPages); // the data for this certain pagination object, which is inherited from the View class.

    // Page 1, and there are other pages. Only creates a next page button
    if (currentPage === 1 && numPages > 1) {
      return `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    // Last Page: creates only a back button
    if (currentPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`;
    }

    // Other Page but not the first or the last: creates both buttons
    if (currentPage < numPages) {
      return `
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        
        <button data-goto="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    // Page 1, with no other pages returns nothing.
    return '';
  }
}

export default new PaginationView();
