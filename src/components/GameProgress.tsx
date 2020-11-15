import { Text } from "@chakra-ui/react";
import React from "react";

interface GameProgressProps {
    stageNumber: number;
    amountOfStages: number;
}

export const GameProgress = ({ stageNumber, amountOfStages }: GameProgressProps) => (
    <Text fontSize={15}>{`Deel ${stageNumber} van ${amountOfStages}`}</Text>
);