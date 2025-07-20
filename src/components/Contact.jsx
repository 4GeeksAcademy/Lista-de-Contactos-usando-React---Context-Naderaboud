import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const Contact = ({ contact }) => {
    return (
        <li className="list-group-item col-12 d-flex justify-content-between align-items-center">
            <img src={rigoImageUrl} className="col-2 d-flex justify-content-start" alt={contact.fullName}/>
            <div className="col-10 d-flex flex-column justify-content-center align-items-start ms-3 mt-2 mb-2">
                <h5 className="mb-3">{contact.fullName}</h5>

                <p>{contact.direction}</p>
                <p>{contact.phoneNumber}</p>
                <p>{contact.email}</p>
            </div>
        </li>
    );
}