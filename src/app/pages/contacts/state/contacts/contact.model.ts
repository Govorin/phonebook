import { ID } from '@datorama/akita';

export interface Contact {
  id: ID;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  job: string;
  email: string;
}

export function createContact(params: Partial<Contact>) {
  return {
  ...params
  } as Contact;
}
