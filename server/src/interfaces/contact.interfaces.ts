interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface IContactEdit {
  firstName?: string;
  lastName?: string;
}

interface IContactInfo {
  email: string;
  phone: string;
}

interface IContactEditInfo {
  email?: string;
  phone?: string;
}

export { IContact, IContactEdit, IContactEditInfo, IContactInfo };
