import React from "react";
import Countdown from "./CountDown";
import { Stage } from "../model/Stage";
import { Text } from "@chakra-ui/react"

export interface GameStageViewProps {
    stage: Stage
}

export const GameStageView = ({ stage }: GameStageViewProps) => {
    return <Countdown date={stage.startDate}>
        <Text>{stage.question}</Text>
    </Countdown>
}
