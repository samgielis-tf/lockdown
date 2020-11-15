import React, { useState } from "react";
import Countdown from "./CountDown";
import { Stage } from "../model/Stage";
import { Box, Input, Text, VStack } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { Button } from "../atoms/Button";

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
                : <EndOfStageView stage={stage} onStageCompleted={() => {
                    setStageComplete(false);
                    onStageCompleted();
                }} />
            }
        </Box>
    )
};

interface StageQuestionViewProps {
    stage: Stage;
    onCorrectAnswer: () => void
}

const StageQuestionView = ({ stage, onCorrectAnswer }: StageQuestionViewProps) => {
    const [submittedAnswer, setSubmittedAnswer] = useState("");
    const toast = useToast();
    return (
        <VStack spacing={4}>
            <Text>{stage.question}</Text>
            <Input onChange={({ target }) => {
                setSubmittedAnswer(target.value);
            }} />
            <Button onClick={() => {
                if (submittedAnswer === stage.answer) {
                    toast({
                        title: "Correct antwoord.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    })
                    onCorrectAnswer();
                } else {
                    toast({
                        title: "Fout antwoord",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    })
                }
            }}>Antwoorden</Button>
        </VStack>
    );
};

const EndOfStageView = ({ stage, onStageCompleted }: GameStageViewProps) => (
    <VStack spacing={4}>
        <Text>{`Dit is jullie clue: ${stage.clue}`}</Text>
        <Button onClick={onStageCompleted}>Volgende uitdaging</Button>
    </VStack>
)