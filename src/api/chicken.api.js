import baseApis from "./base.api";
import axios from "axios";
const BaseApi = new baseApis().baseApi
class ChickenApi {
    constructor(api){
        this.globalApi = api 
    }
    postDiseaseChicken(data){
        return axios.post(`${BaseApi}/upload_fera5_AI/`, data)
    }
    getChickenEgg(){
        return axios.get(`${BaseApi}/get_fera5_egg`)
    }
    getChickenFat(){
        return axios.get(`${BaseApi}/get_fera5_tasmeen`)
    }
    postChickenTasmeen(data){
        return axios.post(`${BaseApi}/get_data_fera5_tasmeen`, data)
    }
    postChickenEgg(data){
        return axios.post(`${BaseApi}/get_data_fera5_egg`, data)
    }

}
export default ChickenApi