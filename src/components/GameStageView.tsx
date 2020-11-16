import React, { useState } from "react";
import Countdown from "./CountDown";
import { Stage } from "../model/Stage";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Input, Tag, Text, VStack } from "@chakra-ui/react"
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
            ReactGA.event({
                category: 'Game',
                action: `BA [${submittedAnswer}]`,
            });
        }
    }
    return (
        <VStack spacing={10} maxW="700px">
            <Accordion defaultIndex={0} orientation="vertical" w="500px" fontSize={18} allowToggle textAlign="left" border="none" outline="none">
                <AccordionItem border="none">
                    <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize={25}>
                            Vraag
                         </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {stage.question}
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                    <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize={25}>
                            Tips
                         </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {
                            stage.tips ?
                                <ul>
                                    {stage.tips.map(tip => <li key={tip}>{tip}</li>)}
                                </ul>
                                : "Geen tips beschikbaar."}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <VStack spacing={2}>
                <Input colorScheme="green" w="450px" borderColor="green.400" rounded="0px"
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