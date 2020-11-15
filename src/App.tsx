import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { GameView } from "./components/GameView"
import { game } from "./data/game"
import { GameHelp } from "./components/GameHelp"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" background="gray.900" color="green.400">
      <Grid minH="100vh" p={10}>
        <GameHelp />
        <GameView game={game} />
      </Grid>
    </Box>
  </ChakraProvider>
)
