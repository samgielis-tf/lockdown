import { Text, Box, Button, Heading, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaPoll } from "react-icons/fa";
import { GameMetrics, StageMetrics } from "../utils/GameMetricsCollector";
import ReactGA from 'react-ga';

interface MetricsReportProps {
    metrics: GameMetrics;
}

export const MetricsReport = ({ metrics }: MetricsReportProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton
                fontSize="xl"
                variant="ghost"
                aria-label="Show game report"
                icon={< FaPoll />}
                onClick={() => {
                    ReactGA.event({
                        category: 'Game',
                        action: 'Open metrics',
                    });
                    onOpen();
                }}
            />
            <MetricsReportModal metrics={metrics} isOpen={isOpen} onClose={onClose} />
        </>
    );
}

interface MetricsReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    metrics: GameMetrics;
}

const MetricsReportModal = ({ isOpen, onClose, metrics }: MetricsReportModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Jouw rapport</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {metrics.stageMetrics.length > 0
                        ? <Box >
                            {metrics.stageMetrics.map((value, index) => <StageMetricsReport key={index} metrics={value} stageNumber={index} />)}
                        </Box>
                        : <Text>Er is onvoldoende data beschikbaar</Text>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="green" mr={3} onClick={onClose}>
                        Sluiten
                        </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

interface StageMetricsReportProps {
    metrics: StageMetrics
    stageNumber: number
}

const StageMetricsReport = ({ metrics, stageNumber }: StageMetricsReportProps) => (
    <Box textAlign="start" mb={4}>
        <Heading size="md" mb={2}>{`Deel ${stageNumber + 1}`}</Heading>
        <Text>{`Pogingen: ${metrics.attempts}`}</Text>
        <Text> {metrics.solutionTime && `Geraden op: ${metrics.solutionTime.toLocaleString("Nl-be")}`}</Text>
    </Box>
);