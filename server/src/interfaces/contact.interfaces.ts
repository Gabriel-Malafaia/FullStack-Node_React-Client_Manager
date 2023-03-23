interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface IContactEdit {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export { IContact, IContactEdit };
