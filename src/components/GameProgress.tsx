import { Text } from "@chakra-ui/react";
import React from "react";

interface GameProgressProps {
    stageNumber: number;
}

export const GameProgress = ({ stageNumber }: GameProgressProps) => (
    <Text fontSize={20}>{`Deel ${stageNumber}`}</Text>
);