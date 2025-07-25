import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from 'react-router-dom';


export const Contact = ({ name, address, phone, email, id, setName, setID}) => {

    return (
        <li className="list-group-item col-12 d-flex justify-content-between align-items-center">
            <img src={rigoImageUrl} className="col-2 d-flex justify-content-start rounded-circle" alt={name} />
            <div className="col-8 d-flex flex-column justify-content-center align-items-start ms-3 mt-2 mb-2">
                <h5 className="mb-2 mt-2">{name}</h5>
                <p className="mb-1">{address}</p>
                <p className="mb-1">{phone}</p>
                <p className="mb-1">{email}</p>
            </div>
            <div className="col-2">
                <Link to={`/contactEdit/${id}`}>
                    <button type="button" className="btn btn-light m-1"><i className="fa-solid fa-pencil"></i></button>
                </Link>

                <button type="button" className="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {setID(id); setName(name)}}><i className="fa-solid fa-trash"></i></button>

                
            </div>
        </li>
    );
}