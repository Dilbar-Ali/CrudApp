import axios from "axios";
const API_URL="http://localhost:3002/users"


export const addUser=async(data)=>{
    try{ 
    return await axios.post(API_URL,data);
    } catch(error){
        console.log(`Error while calling addUser Api `, error.message)
    }
}