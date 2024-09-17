import { Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { GameQuery } from "../App";
import failure from "../assets/gray orange minimalist controller video game logo design (2).svg";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error)
    return (
      <VStack>
        <Image src={failure} width={"350px"}></Image>
        <Text
          fontSize={"20px"}
          paddingLeft={"3px"}
          paddingRight={"3px"}
          textAlign={"center"}
        >
          Something went wrong try reloading the page
        </Text>
      </VStack>
    );
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data?.results.map((d) => (
        <GameCardContainer key={d.id}>
          {" "}
          <GameCard game={d}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
