import baseApis from "./base.api";
import axios from "axios";
const BaseApi = new baseApis().baseApi
class AnimalApi {
    
    constructor(api){
        this.globalApi = api 
    }
    getAnimalFattening(){
        return axios.get(`${BaseApi}/get_animal_fattening`)
    }
    getAnimalMilking(){
        return axios.get(`${BaseApi}/get_animal_milking`)
    }
    getLargeData(data){
        return axios.post(`${BaseApi}/get_large_data`, data)
    }
    postDiseaseChicken(data){
        return axios.post(`${BaseApi}/upload_fera5_AI/`, data, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }})
    }
    
}
export default AnimalApi