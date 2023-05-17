// exports the class itself. Only used as a parent class for the childs.
import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures

export default class View {
  _data;

  /**
   * Render the recived object to the DOM
   * @param {Object | Object[]}} data The data to be renderd (e.g. recipe)
   * @param {boolean} [render=true] if false, create markup string instead of rendering to the dom
   * @returns {undefined | string } A markup string is returned if render=false.
   * @this {Object} View Instance
   * @author Ameer G
   * @todo Finish Implmenetation
   */
  render(data, render = true) {
    // console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(); // already has the default error message if empty. Checks if it is an array and is empty.

    this._data = data;
    const markup = this._generateMarkup(); // uses the generate markup from whatever is called. for example, the buttons for the pages. This will call that generate markup in the pagination view, while a call for the results view would call that generate markup. This is evidenet throughout the project.

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // #2 Challenge
  renderNewIngr(data) {
    this._data = data; // sets for the markup

    const markup = this._generateMarkup(); // generates the markup

    this._addIngrColumn.insertAdjacentHTML('beforeend', markup); // inserts it
  }

  // ADDED FOR ADDITIONAL FEATURE ADVANCED!!!!
  renderList(data, render = true) {
    // console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(); // already has the default error message if empty. Checks if it is an array and is empty.

    this._data = data;
    const markup = this._generateMarkupList(); // uses the generate markup from whatever is called. for example, the buttons for the pages. This will call that generate markup in the pagination view, while a call for the results view would call that generate markup. This is evidenet throughout the project.

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    console.log(this);
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup); // converts string html into a dom object.
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, index) => {
      const curEl = curElements[index];

      // Updated changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed Attributes
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(
          attr => curEl.setAttribute(attr.name, attr.value)
          // replacing the current attriubutes with the new attribtes.
        );
    });
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
