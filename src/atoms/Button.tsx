import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";

interface ButtonProps {
    onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ onClick, children }) => (
    <ChakraButton colorScheme="green" color="gray.900" onClick={onClick} rounded="0px">
        {children}
    </ChakraButton>
);