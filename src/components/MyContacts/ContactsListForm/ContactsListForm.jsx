import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../../redux/selectors';

import styles from './contacts-list-form.module.css';

const ContactListForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const phonebookName = e.target.elements.name;
    const phonebookNumber = e.target.elements.number;

    const normalizedName = phonebookName.value.toLowerCase();
    const isDublicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isDublicate) {
      alert(`${phonebookName.value} is already in contacts`);
      e.target.reset();
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: phonebookName.value,
          number: phonebookNumber.value,
        })
      );
      e.target.reset();
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formContainer}>
          <label htmlFor="phonebookName">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter a name"
            className={styles.phonebookInput}
          />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor="phonebookNumber">Number</label>
          <input
            type="tel"
            name="number"
            required
            className={styles.phonebookInput}
            placeholder="Enter the number"
          />
        </div>
        <button className={styles.phonebookButton} type="submit">
          Add contact
        </button>
      </form>
      <h2>Contacts</h2>
    </>
  );
};

export default ContactListForm;
