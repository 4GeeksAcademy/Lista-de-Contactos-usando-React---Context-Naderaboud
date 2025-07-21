import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
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
					{store.contacts.map(contact => (
						<Contact
							name={contact.name}
							profileURL={contact.profileURL}
							adress={contact.adress}
							email={contact.email}
							phone={contact.phone}
							key={contact.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}; 