import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}

export default axios.create({
    
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "655cb083d19b4963876e4a189b95b357"
    }
})