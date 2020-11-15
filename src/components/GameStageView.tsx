import React, { useState } from "react";
import Countdown from "./CountDown";
import { Stage } from "../model/Stage";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react"

export interface GameStageViewProps {
    stage: Stage
    onStageCompleted: () => void
}

export const GameStageView = ({ stage, onStageCompleted }: GameStageViewProps) => {
    return <Countdown date={stage.startDate}>
        <UnlockedStageView stage={stage} onStageCompleted={onStageCompleted} />
    </Countdown>
}

const UnlockedStageView = ({ stage, onStageCompleted }: GameStageViewProps) => {
    const [stageComplete, setStageComplete] = useState(false);
    return (
        <Box>
            { !stageComplete
                ? <StageQuestionView stage={stage} onCorrectAnswer={() => { setStageComplete(true) }} />
                : <EndOfStageView stage={stage} onStageCompleted={onStageCompleted} />
            }
        </Box>
    )
};

interface StageQuestionViewProps {
    stage: Stage;
    onCorrectAnswer: () => void
}

const StageQuestionView = ({ stage, onCorrectAnswer }: StageQuestionViewProps) => (
    <VStack spacing={4}>
        <Text>{stage.question}</Text>
        <Input onChange={({ target }) => {
            if (target.value === stage.answer) {
                onCorrectAnswer();
            }
        }} />
    </VStack>
);

const EndOfStageView = ({ stage, onStageCompleted }: GameStageViewProps) => (
    <VStack spacing={4}>
        <Text>{`Dit is jullie clue: ${stage.clue}`}</Text>
    </VStack>
)