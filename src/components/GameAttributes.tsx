import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefintionItems from "./DefintionItems";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefintionItems term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefintionItems>
      <DefintionItems term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefintionItems>
      <DefintionItems term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefintionItems>
      <DefintionItems term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefintionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
