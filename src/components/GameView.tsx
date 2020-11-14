import { Spinner } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Game } from "../model/Game";
import { GameState } from "../model/GameState";
import { loadGameState } from "../utils/persistance";
import { EndOfGame } from "./EndOfGame";
import { GameStageView } from "./GameStageView";

interface GameViewProps {
    game: Game
}

export const GameView = ({ game }: GameViewProps) => {
    const [gameState, setGameState] = useState<GameState | undefined>();

    useEffect(() => {
        let previousGameState = loadGameState();

        if (!previousGameState) {
            previousGameState = {
                currentStage: 0
            }
        }
        setGameState(previousGameState);
    }, [])

    if (!gameState) {
        return <Spinner size="xl" />
    }

    const hasNextStage = gameState.currentStage < game.stages.length;

    if (hasNextStage) {
        const currentStage = game.stages[gameState.currentStage];
        return <GameStageView stage={currentStage} />
    }

    return <EndOfGame />
}