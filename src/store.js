import { Contact } from "./components/Contact";

export const initialStore = () => {
  return {
    usuario: "Nader",
    contacts: []
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
      case `edit_contact`:
        return {
          ...store,
          
        }
    default:
      throw Error('Unknown action.');
  }
}
