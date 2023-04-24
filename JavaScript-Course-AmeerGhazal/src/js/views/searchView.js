class SearchView {
  #parentEl = document.querySelector('.search');

  // returns the query.
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput(); // clears the input
    return query; // returns the query.
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); // prevents the default reload
      handler();
    });
  }
}

export default new SearchView(); // export an instance to not mess up encapsulation
