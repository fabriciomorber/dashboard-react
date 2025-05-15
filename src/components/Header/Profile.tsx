import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fabricio Bertrand</Text>
        <Text color="gray.300" fontSize="small">
          fabmorber@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Fabricio Bertrand"
        //src="https://github.com/fabriciomorber.png"
      />
    </Flex>
  )
}