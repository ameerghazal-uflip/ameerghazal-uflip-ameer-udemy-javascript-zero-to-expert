class SearchView {
  _parentEl = document.querySelector('.search');

  // returns the query.
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput(); // clears the input
    return query; // returns the query.
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); // prevents the default reload
      handler();
    });
  }
}

export default new SearchView(); // export an instance to not mess up encapsulation
