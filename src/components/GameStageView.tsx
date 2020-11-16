import React, { useState } from "react";
import Countdown from "./CountDown";
import { Stage } from "../model/Stage";
import { Box, Input, Tag, Text, VStack } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { Button } from "../atoms/Button";
import { GameMetricsCollector } from "../utils/GameMetricsCollector";
import ReactGA from 'react-ga';

export interface GameStageViewProps {
    stage: Stage
    onStageCompleted: () => void
}
export interface WithMetricsCollectorProps {
    metricsCollector: GameMetricsCollector;
}

export const GameStageView = ({ stage, onStageCompleted, metricsCollector }: GameStageViewProps & WithMetricsCollectorProps) => {
    return <Countdown date={stage.startDate}>
        <UnlockedStageView stage={stage} onStageCompleted={onStageCompleted} metricsCollector={metricsCollector} />
    </Countdown>
}

const UnlockedStageView = ({ stage, onStageCompleted, metricsCollector }: GameStageViewProps & WithMetricsCollectorProps) => {
    const [stageComplete, setStageComplete] = useState(false);
    return (
        <Box>
            { !stageComplete
                ? <StageQuestionView stage={stage} onCorrectAnswer={() => { setStageComplete(true) }} metricsCollector={metricsCollector} />
                : <EndOfStageView stage={stage} onStageCompleted={() => {
                    setStageComplete(false);
                    onStageCompleted();
                }} />
            }
        </Box>
    )
};

interface StageQuestionViewProps extends WithMetricsCollectorProps {
    stage: Stage;
    onCorrectAnswer: () => void
}

const StageQuestionView = ({ stage, onCorrectAnswer, metricsCollector }: StageQuestionViewProps) => {
    const [submittedAnswer, setSubmittedAnswer] = useState("");
    const toast = useToast();
    const validateAnswer = () => {
        if (submittedAnswer === stage.answer) {
            metricsCollector.logSolution();
            toast({
                title: "Correct antwoord.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            onCorrectAnswer();
        } else {
            metricsCollector.logAttempt();
            toast({
                title: "Fout antwoord",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            ReactGA.event({
                category: 'Game',
                action: 'Bad answer',
                label: submittedAnswer
            });
        }
    }
    return (
        <VStack spacing={4} maxW="700px">
            <Text fontSize={35}>{stage.question}</Text>
            <Input colorScheme="green" maxW="500px"
                onChange={({ target }) => {
                    setSubmittedAnswer(target.value);
                }}
                onKeyUp={({ key }) => {
                    if (key === "Enter") {
                        validateAnswer();
                    }
                }} />
            <Button onClick={() => {
                validateAnswer();
            }}>Antwoorden</Button>
        </VStack>
    );
};

const EndOfStageView = ({ stage, onStageCompleted }: GameStageViewProps) => (
    <VStack spacing={10}>
        <VStack spacing={2}>
            <Text fontSize={35}>{`Dit is jullie clue:`}</Text>
            <Tag size="lg" bgColor="green.400">{stage.clue}</Tag>
        </VStack>
        <Button onClick={onStageCompleted}>Volgende uitdaging</Button>
    </VStack>
)