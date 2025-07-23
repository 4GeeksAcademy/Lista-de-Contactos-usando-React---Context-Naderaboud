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

    const response = await fetch('https://playground.4geeks.com/contact/agendas/Nader/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
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

export const deleteContact = async (id, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Nader/contacts/${id}`, {
        method: 'DELETE'
    }
    )
    if (response.ok) {
        getContacts(dispatch)
        location.reload
    }
}

export const editContact = async(id, newContact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Nader/contacts/${id}`, {
        method: 'PUT',
        body: 'Content-Type: application/json',
        headers: JSON.stringify(newContact)
    })
    if (response.ok) {
        getContacts(dispatch)
        navigate("/")
    }
}
