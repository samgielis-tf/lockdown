import { Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaArchive } from "react-icons/fa";

interface ClueVaultProps {
    clues: string[];
}

export const ClueVault = ({ clues }: ClueVaultProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {clues.length > 0 && <IconButton
                fontSize="xl"
                variant="ghost"
                aria-label="Open vault"
                icon={< FaArchive />}
                onClick={onOpen}
            />}
            <ClueVaultModal clues={clues} isOpen={isOpen} onClose={onClose} />
        </>
    );
}

interface ClueVaultModalProps {
    isOpen: boolean;
    onClose: () => void;
    clues: string[];
}

const ClueVaultModal = ({ isOpen, onClose, clues }: ClueVaultModalProps) => {
    return (

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Gevonden clues</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack spacing={2}>
                        {clues.map(clue => <Tag size="lg" key={clue} bgColor="green.400">{clue}</Tag>)}
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