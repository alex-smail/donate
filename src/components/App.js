import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$total = this.state.total;
    const $totalAmount = document.createElement('h1');
    $totalAmount.className = 'total-amount';
    $totalAmount.innerHTML = `Итого: $<span>${this.$total}</span>`;
    this.$totalAmount = $totalAmount;
    this.$rootElement.appendChild(this.$totalAmount);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount: amount });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total = this.state.total;
    this.$totalAmount.innerHTML = `Итого: $<span>${this.$total}</span>`;
  }
}
