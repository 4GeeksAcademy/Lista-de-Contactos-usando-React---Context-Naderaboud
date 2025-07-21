import { Contact } from "./components/Contact";

export const initialStore = () => {
  return {
    usuario: "Nader",
    contacts: [
      {
        name: "",
        phone: "",
        email: "",
        address: "",
        profileimg: ""
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      }; 
    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };
    default:
      throw Error('Unknown action.');
  }
}
