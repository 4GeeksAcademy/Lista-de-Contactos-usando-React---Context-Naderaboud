import { useEffect } from "react";
import { Contact } from "../components/Contact.jsx";
import { getContacts } from "../services/ServicesAPI.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
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
						/>	
					))}
				</ul>
			</div>
		</div>
	);
}; 