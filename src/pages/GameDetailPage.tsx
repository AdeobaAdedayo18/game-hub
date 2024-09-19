import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import ExpandableText from "../components/ExpandableText";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import DefintionItems from "../components/DefintionItems";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id}></GameTrailer>
    </>
  );
};

export default GameDetailPage;
