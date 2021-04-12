import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wilson Faustino</Text>
          <Text color="gray.300" fontSize="sm">
            wilson.rfaustino@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Wilson Faustino"
        src="https://github.com/wilsonfaustino.png"
      />
    </Flex>
  );
}
