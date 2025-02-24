import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const createContacts = async (number) => {
  try {
    const contactsData = await readContacts();

    for (let i = 0; i < number; i += 1) {
      const contact = createFakeContact();

      contactsData.push(contact);
      await writeContacts(contactsData);
    }
  } catch (error) {
    console.log(error);
  }
};

createContacts(4);
