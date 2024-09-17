import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-clients";
import { Platform } from "./usePlatform";



const apiClient = new APIClient<Game>("/games")

 
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
    
  }
  
 
  const useGames = (gameQuery: GameQuery) => 
    useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({pageParam =1}) =>
        apiClient.getAll({
          params: {
            genres: gameQuery.genre?.id, // Optional genres parameter
            parent_platforms: gameQuery.platform?.id, // Optional platforms parameter
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
          },
        }),
        getNextPageParam: (lastpage, allPages) => {
          return lastpage.next ?  allPages.length + 1 : undefined;
        }

    })

   



export default useGames