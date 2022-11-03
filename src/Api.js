import axios from "axios";


const API_URL = 'http://localhost:3002/accomodation'

export const addAccomodation = async(data) => {
    try{
       return await axios.post(API_URL,data);
    }catch(error){
        console.log('Error while calling addAccomodation api', error.message);
    }
}