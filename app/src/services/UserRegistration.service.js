import axios from "axios";
import formDataToUpload from '../Register.jsx'

let API_URL = 'http://localhost:3000/main/'

const UserRegistration = async () => {
    try {

        let process = await axios.post(API_URL + "register", formDataToUpload);
        alert('User has been registered');
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserRegistration;