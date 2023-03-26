import { IClientContacts } from "../interfaces/pages/dashboard";

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getDate()}/${
    dateObject.getMonth() + 1
  }/${dateObject.getFullYear()}`;

  return formattedDate;
};

function formatPhoneNumber(phone: string) {
  const cleaned = ("" + phone).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return null;
}

const createData = (
  name: string,
  createdAt: string,
  clientContacts: IClientContacts[],
  id: string
) => {
  return {
    name,
    createdAt,
    clientContacts,
    id
  };
};

export { formatDate, formatPhoneNumber, createData };
