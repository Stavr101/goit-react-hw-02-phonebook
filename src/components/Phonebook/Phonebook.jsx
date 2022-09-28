import { Component } from 'react';
import ContactsList from './ContactsList';
import { nanoid } from 'nanoid';

export default class MyPhonebook extends Component {
  state = {
    // title: '',
    contacts: [],
    name: '',
  };

  addContact = data => {
    this.setState(prev => {
      const newData = {
        id: nanoid(),
        ...data,
      };

      return {
        contacts: [...prev.contacts, newData],
      };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    this.addContact({ name });
    this.setState({ name: '' });
    // console.log(event);
  };

  render() {
    const { handleSubmit } = this;
    const { contacts } = this.state;
    // console.log(contacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={handleSubmit} action="">
          Name
          <label htmlFor="title"></label>
          <input
            id="title"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactsList items={contacts} />
      </div>
    );
  }
}
