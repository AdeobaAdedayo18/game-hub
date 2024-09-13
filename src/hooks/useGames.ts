
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";



export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms?: Platform[];  
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
    
  }
  
 
  const useGames = (gameQuery: GameQuery) => {
    let platformsParam: string | undefined; // Initialize platformsParam as undefined
  
    if (gameQuery.platform) {
      if (gameQuery.platform.id === 2) {
        platformsParam = "187,18,16,15,27,19,17"; // Special case for PlayStation (id=2)
      } else {
        platformsParam = String(gameQuery.platform.id); // Convert id to string
      }
    }
  
    return useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id, // Optional genres parameter
          platforms: platformsParam, // Optional platforms parameter
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      },
      [gameQuery]
    );
  };


export default useGames