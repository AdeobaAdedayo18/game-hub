import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/api-clients";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


const apiClient = new APIClient<Platform>("/platforms/lists/parents")


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //24h
    initialData: {count: platform.length, results: platform}
    //check mosh source code to get initial data from here
    
})

export default usePlatforms;