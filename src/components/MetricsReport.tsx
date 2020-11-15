import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaPoll } from "react-icons/fa";
import { GameMetrics } from "../utils/GameMetricsCollector";

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
                onClick={onOpen}
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
                    <HStack spacing={2}>
                        {metrics.stageMetrics.map(stageMetric => <Box>{stageMetric.attempts}</Box>)}
                    </HStack>
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