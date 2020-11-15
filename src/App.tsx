import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { GameView } from "./components/GameView"
import { game } from "./data/game"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" background="gray.900" color="green.400">
      <GameView game={game} />
    </Box>
  </ChakraProvider>
)
