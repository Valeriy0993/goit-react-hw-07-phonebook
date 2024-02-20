import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';

import styles from './contacts-filter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      onChange={handleChange}
      name="filter"
      placeholder="Search"
      className={styles.filterInput}
    />
  );
};

export default ContactFilter;
