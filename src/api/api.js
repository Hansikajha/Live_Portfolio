import axios from "axios";

export const FetchApi = async ()=>{

    try{
        const response = await axios.get('')
        return response.data;

    }
    catch(error){
        console.log("Error in fetching data", error)
    }

}