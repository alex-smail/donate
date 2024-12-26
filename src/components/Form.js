import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    };
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $inputLabel = document.createElement('label');
    $inputLabel.className = 'donate-form__input-label';
    $inputLabel.textContent = 'Введите сумму в $';

    const $donateInput = document.createElement('input');
    $donateInput.className = 'donate-form__donate-input';
    $donateInput.name = 'amount';
    $donateInput.type = 'number';
    $donateInput.max = '100';
    $donateInput.min = '1';
    $donateInput.setAttribute('required', '');

    $inputLabel.append($donateInput);

    const $submitButton = document.createElement('button');
    $submitButton.setAttribute('disabled', '');
    $submitButton.className = 'donate-form__submit-button';
    $submitButton.type = 'submit';
    $submitButton.textContent = 'Задонатить';

    this.$input = $donateInput;
    this.$button = $submitButton;

    this.$rootElement.append($inputLabel, this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (!this.isValid) {
      this.$button.disabled = true;
    } else {
      this.$button.disabled = false;
    }
  }

  get isValid() {
    const currentNumber = Number(this.state.amount);
    if (currentNumber >= 1 && currentNumber <= 100) {
      return true;
    }
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount))
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
