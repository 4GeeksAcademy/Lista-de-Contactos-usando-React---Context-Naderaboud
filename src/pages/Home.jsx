import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contact } from "../components/Contact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>

			<div className="container-fluid">
				<ul className="list-group row-11">
					<li className="list-group-item col-12 d-flex justify-content-between align-items-center">
						<img src={rigoImageUrl} className=" col-2" alt="Rigo Baby" style={{ display: "flex", justifyContent: "start" }} />
						<div className="col-10 d-flex flex-column justify-content-center align-items-start ms-3">
							<h5 className="mb-3">Full Name</h5>
							
							<p>Direction</p>
							<p>Phone Number</p>
							<p>Email</p>
						</div>
					</li>
						<Contact contact={{ fullName: "Rigo", direction: "Calle Falsa 123", phoneNumber: "123-456-7890", email: "rigo@example.com" }} />
						<li className="list-group-item">A third item</li>
						<li className="list-group-item">A fourth item</li>
						<li className="list-group-item">And a fifth one</li>
				</ul>

			</div>
		</div>

	);
}; 