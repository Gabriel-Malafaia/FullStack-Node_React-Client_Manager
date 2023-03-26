export interface IClientProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IUserLoggedClientContacts {
  id: string;
  email: string;
  phone: string;
  clientId: string;
}

export interface IUserLoggedClient {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  contacts: IUserLoggedClientContacts[];
}

export interface IUserLogged {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IClientContacts {
  email: string;
  phone: string;
  id: string;
}

///////////////// DIALOGS TYPES /////////////

export interface IConfirmDialog {
  title: string;
  subTitle: string;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<string>>;
  actionFunction: any;
}

export interface IRegisterClientContactProps {
  phone: string;
  email: string;
}

export interface ICreateContactDialogProps {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<string>>;
}

export interface IEditContactDialogProps {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  actionFunction: any;
  clientName: string;
  phone: string;
  email: string;
}

export interface IEditClientContactProps {
  phone?: string;
  email?: string;
}
