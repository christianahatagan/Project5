// Inițializează BaguetteBox pentru lightbox
baguetteBox.run('.gallery');

class Filter {
  constructor(inputId, dataAttribute) {
    this.input = document.getElementById(inputId);
    this.dataAttribute = dataAttribute;
    this.items = document.querySelectorAll(`[${dataAttribute}]`);

    this.init();
  }

  init() {
    this.input.addEventListener('input', () => this.filterItems());
  }

  filterItems() {
    const query = this.input.value.toLowerCase();

    this.items.forEach(item => {
      const attributeValue = item.getAttribute(this.dataAttribute).toLowerCase();
      if (attributeValue.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// Inițializează filtrul de căutare
const search = new Filter('search', 'data-caption');
