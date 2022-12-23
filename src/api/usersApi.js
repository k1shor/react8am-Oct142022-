import { API } from "../config";

export const getAllUsers = () => {
    return fetch(`${API}/userlist`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}