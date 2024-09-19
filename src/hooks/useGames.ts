import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import useGameQueryStore from "../components/store";
import APIClient, { FetchResponse } from "../services/api-clients";
import { Platform } from "./usePlatforms";



const apiClient = new APIClient<Game>("/games")

 
export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;

    
  }
  
 
  const useGames = () => 
  {
    const gameQuery = useGameQueryStore(s=> s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({pageParam =1}) =>
        apiClient.getAll({
          params: {
            genres: gameQuery.genreId, // Optional genres parameter
            parent_platforms: gameQuery.platformId, // Optional platforms parameter
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
          },
        }),
        getNextPageParam: (lastpage, allPages) => {
          return lastpage.next ?  allPages.length + 1 : undefined;
        },
        staleTime: ms('24h') //24h

    })

  }

   



export default useGames