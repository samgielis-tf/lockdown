import React from "react"
import CountdownDependency from "react-countdown"
import { Box } from "@chakra-ui/react"

interface CountdownProps {
    date: Date
}

const Countdown: React.FC<CountdownProps> = ({ date, children }) => (
    <Box fontSize="6xl">
        <CountdownDependency date={date} >
            <div>{children}</div>
        </CountdownDependency>
    </Box >
)

export default Countdown;