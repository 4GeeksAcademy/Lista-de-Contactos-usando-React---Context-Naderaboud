import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const Contact = ({ name,adress,phone, profileURL, email, key }) => {
    return (
        <li className="list-group-item col-12 d-flex justify-content-between align-items-center" key={key}>
            <img src={profileURL} className="col-2 d-flex justify-content-start rounded-circle" alt={name} />
            <div className="col-10 d-flex flex-column justify-content-center align-items-start ms-3 mt-2 mb-2">
                <h5 className="mb-2 mt-2">{name}</h5>
                <p className="mb-1">{adress}</p>
                <p className="mb-1">{phone}</p>
                <p className="mb-1">{email}</p>
            </div>
        </li>
    );
}