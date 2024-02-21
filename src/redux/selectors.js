export const getAllContacts = store => store.contacts;
export const getFilter = store => store.filter;
export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();

    return normalizedName.includes(normalizedFilter);
  });

  return filteredContacts;
};

export const getIsLoading = store => store.contacts.isLoading;
export const getError = store => store.contacts.error;
