import { useQuery } from "@tanstack/react-query";
import { FetchResponse} from "../services/api-clients"
import apiClients from "../services/api-clients";
import platform from "../data/platform";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
        apiClients.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => (res.data)),
    staleTime: 24*60*60*1000, //24h
    initialData: {count: platform.length, results: platform}
    //check mosh source code to get initial data from here
    
})

export default usePlatforms;