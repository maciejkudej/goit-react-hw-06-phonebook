import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, remove } from 'redux/myContactSlice';
import { contactFilter } from 'redux/myFilterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addContacts = ({ id, name, number }) => {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id,
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const filterChange = e => {
    dispatch(contactFilter(e.currentTarget.value));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContacts={addContacts} />
        <h2>Contacts</h2>
        <Filter filter={filterChange} />
        <ContactList filter={filterContact} onDeleteContact={remove} />
      </div>
    </>
  );
}
