import { useEffect, useState } from "react";
import { Contact } from "../components/Contact.jsx";
import { getContacts } from "../services/ServicesAPI.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact } from "../services/ServicesAPI";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [ID, setID] = useState(null)
	const [name, setName] = useState("")

	useEffect(() => {
		getContacts(dispatch)


	}, [])



	return (
		<>
			<div className="text-center mt-4">
				<h1>CONTACTS</h1>
				<div className="container-fluid col-11">
					<ul className="list-group row-11">
						{store.contacts?.map(contact => (
							<Contact
								id={contact.id}
								key={contact.id}
								name={contact.name}
								address={contact.address}
								email={contact.email}
								phone={contact.phone}
								setID={setID}
								setName={setName}
							/>
						))}
					</ul>
				</div>
			</div>
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="staticBackdropLabel">{name}</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Are you sure you want to delete this contact?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { deleteContact(ID, dispatch) }}>DELETE</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}