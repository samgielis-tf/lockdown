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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p="auto">
        <VStack spacing={8}>
          <GameView game={game} />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
