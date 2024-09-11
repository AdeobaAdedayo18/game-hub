import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";



interface FetchResponse<T>{
    count: number;
    results: T[]
}

const useData = <T>(endpoint:string) => {
    
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(true);
    
      useEffect(() => {
        const controller = new AbortController();
        
       
        
        apiClients
          .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
            
            
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
          });
    
          return () => controller.abort()
      }, []);
    
      return { data, error, isLoading}
    
}

export default useData;