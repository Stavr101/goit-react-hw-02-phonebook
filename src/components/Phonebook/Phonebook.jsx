import { Component } from 'react';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import { nanoid } from 'nanoid';

export default class MyPhonebook extends Component {
  state = {
    contacts: [],
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

  // handleChange = event => {
  //   // console.log(event.target);

  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();

  //   const { name } = this.state;
  //   // console.log(name);
  //   this.addContact({ name });
  //   this.setState({ name: '' });
  // };

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    // console.log(contacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={addContact} />

        <h2>Contacts</h2>
        <ContactsList items={contacts} />
      </div>
    );
  }
}
