import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('You dont have contacts');
  } else {
    console.log('All contacts:', contacts);
  }
};

console.log(await getAllContacts());
