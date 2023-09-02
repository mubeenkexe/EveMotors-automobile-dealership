import axios from "axios";
import {formDataToUpload} from '../Dashboard.jsx'

let API_URL = 'http://localhost:3000/admin/'

export const FormDashboard = async () => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formDataToUpload);
        alert('The car has been added!');
        return process.data;

    } catch (error) {
        console.error(error);
        alert('Could not add the car')
    }

};