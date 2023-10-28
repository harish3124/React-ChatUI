import './App.css'

import { Box, Heading, Text } from "@chakra-ui/react";

function App() {
    return (
        <Box flex="1" display="flex" flexDir="column">
            <Box display="flex" flexDir="column" gap="5" textAlign="left" pb="4">
                <Box>
                    <Heading size="xl">
                        Trip
                    </Heading>
                </Box>
                <Box display="flex" gap="3">
                    <Box as='img' src='https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0' borderRadius="full" h="14" />
                    <Box flex="1">
                        <Box>
                            <Text as="span" mr="2" fontSize="lg" className='text-grey'>
                                From
                            </Text>
                            <Text as="span" fontSize="xl" fontWeight="bold">
                                Source
                            </Text>
                        </Box>
                        <Box>
                            <Text as="span" mr="2" fontSize="lg" className='text-grey'>
                                To
                            </Text>
                            <Text as="span" fontSize="xl" fontWeight="bold">
                                Dest
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        {/* DropDown */}
                    </Box>
                </Box>
            </Box>
            <Box flex="9">
                Chat Body Section
            </Box>
            <Box flex="1">
                Chat Input Section
            </Box>
        </Box>
    )
}

export default App
