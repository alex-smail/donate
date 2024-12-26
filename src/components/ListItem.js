import { Component } from '../core/Component';
export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const currentDate = `
      ${this.state.date.getDate()}/${
      this.state.date.getMonth() + 1
    }/${this.state.date.getFullYear()}`;

    const currentTime = `
      ${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()}`;

    this.$rootElement.innerHTML = `${currentDate}, ${currentTime} - <b>$${this.state.amount}</b>`;

    //delete-button
    const $deleteButton = document.createElement('button');
    $deleteButton.className = 'delete-button';
    $deleteButton.textContent = 'Удалить';
    $deleteButton.id = this.state.id;
    this.$deleteButton = $deleteButton;

    this.$rootElement.append(this.$deleteButton);
    this.$rootElement.addEventListener('click', this.deleteDonat.bind(this));
  }

  deleteDonat(event) {
    const currentButton = event.target.closest('.delete-button');
    if (currentButton) {
      this.$rootElement.remove();
    }
  }
}
