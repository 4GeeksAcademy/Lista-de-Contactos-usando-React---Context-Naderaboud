import { array } from "prop-types";

export const getContacts = async (dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Nader/contacts');
    const data = await response.json();

    console.log(data)
    if (Array.isArray(data.contacts)) {
        dispatch({
            type: "set_contacts",
            payload: data.contacts
        });
    }
}

export const createContact = async (newContact, dispatch, navigate) => {
    const newCont = {
        name: newContact.name,
        adress: newContact.adress,
        email: newContact.email,
        phone: newContact.phone,
    }
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Nader/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCont)
    });

    if (response.ok) {
        console.log("Creado");

        const data = await response.json();
        dispatch({
            type: "add_contact",
            payload: data
        });
        getContacts(dispatch);
        navigate("/")
    }
}
