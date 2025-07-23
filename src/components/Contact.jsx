import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../services/ServicesAPI";

export const Contact = ({ name, address, phone, email, id }) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

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
                <button type="submit" onSubmit={"deleteContact(id, dispatch)"} className="btn btn-light m-1"><i class="fa-solid fa-pencil"></i></button>

                <button type="button" class="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                               Are you sure you want to delete this contact?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() =>{deleteContact(id,dispatch, navigate)}}>DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}