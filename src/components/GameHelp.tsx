import { Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'
import React from "react";

export const GameHelp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton  fontSize="xl" variant="ghost" aria-label="Get help" icon={< InfoIcon />} onClick={onOpen} />
            <GameHelpModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}

interface GameHelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GameHelpModal = ({ isOpen, onClose }: GameHelpModalProps) => {
    return (

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Info</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Om het spel efficient te spelen is het aangeraden om deze website steeds te openen met dezelfde browser op hetzelfde toestel. Mocht er technisch iets mis zijn mag je altijd contact opnemen met Sam.
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