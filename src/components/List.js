import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $containerTitle = document.createElement('h2');
    $containerTitle.className = 'donates-container__title';
    $containerTitle.textContent = 'Список донатов';

    const $listContainer = document.createElement('div');
    $listContainer.className = 'donates-container__donates';

    this.$listContainer = $listContainer;

    this.$rootElement.append($containerTitle, this.$listContainer);
    // this.$rootElement.addEventListener('click', this.deleteDonat.bind(this));
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}