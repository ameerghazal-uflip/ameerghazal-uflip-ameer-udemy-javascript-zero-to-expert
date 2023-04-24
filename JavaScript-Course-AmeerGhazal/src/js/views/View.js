// exports the class itself. Only used as a parent class for the childs.
import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures

export default class View {
  _data;

  render(data) {
    console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(); // already has the default error message if empty. Checks if it is an array and is empty.

    this._data = data;
    const markup = this._generateMarkup(); // uses the generate markup from whatever is called. for example, the buttons for the pages. This will call that generate markup in the pagination view, while a call for the results view would call that generate markup. This is evidenet throughout the project.
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
         <use href="${icons}#icon-alert-triangle"></use>
       </svg>
      </div>
      <p>${message}</p>
    </div>`;

    this._clear(); // clears the parent
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // inserts it into the parent recipe class element.
  }

  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
         <use href="${icons}#icon-simile"></use>
       </svg>
      </div>
      <p>${message}</p>
    </div>`;

    this._clear(); // clears the parent
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // inserts it into the parent recipe class element.
  }
}
