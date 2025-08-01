// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { createContact, editContact } from "../services/ServicesAPI";
import { useEffect, useState } from "react";

export const ContactCreation = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)


  const { id } = useParams()

  const [newContact, setNewContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newContact.name || !newContact.address || !newContact.phone || !newContact.email) {
      alert("Please fill in all fields.");
      return;
    }

    if (isEditing) {
      editContact(id, newContact, dispatch, navigate)

    } else {
      createContact(newContact, dispatch, navigate);
    }


  }

  useEffect(() => {
    if (id) {
      setNewContact(store.contacts?.filter(contact => contact.id == id)[0])
      setIsEditing(true);
    } else
      setIsEditing(false)
  }, [isEditing])

  return (
    <>
      <div className="container text-center mt-4">
        <h1>CREATE A NEW CONTACT</h1>

        <form className="container-fluid row d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
          <div className="input-group mb-3 col-12">
            <span className="input-group-text" id="inputGroup-sizing-default">Full Name</span>
            <input type="text" className="form-control" name="name" value={newContact.name} onChange={handleInputChange} />
          </div>

          <div className="input-group mb-3 col-12 mx-auto">
            <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
            <input type="text" className="form-control" name="address" value={newContact.address} onChange={handleInputChange} />
          </div>

          <div className="input-group mb-3 col-12 mx-auto">
            <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
            <input type="text" className="form-control" name="phone" value={newContact.phone} onChange={handleInputChange} />
          </div>

          <div className="input-group mb-3 col-12 mx-auto">
            <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
            <input type="text" className="form-control" name="email" value={newContact.email} onChange={handleInputChange} />
          </div>

          <button type="submit"
            className="btn btn-success"
            value={newContact}
          >Create Contact</button>
        </form>
        <Link to="/" className="d-flex mt-3 justify-content-end">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </>
  );
};
