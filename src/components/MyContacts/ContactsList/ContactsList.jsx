import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  deleteContact,
  fetchContacts,
} from '../../../redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getIsLoading,
  getError,
} from '../../../redux/selectors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './contacts-list.module.css';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {' '}
      {name}: {number}{' '}
      <button
        onClick={() => handleDeleteContact(id)}
        className={styles.buttonDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      <ul>{elements}</ul>
    </div>
  );
};

export default ContactList;
