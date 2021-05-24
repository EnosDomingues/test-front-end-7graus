import { Box, Text } from "@chakra-ui/react";

type PersonInfoProps = {
  label: string;
  content: string;
}

export function PersonInfo({ label, content }: PersonInfoProps) {
  return (
    <Box
    border="2px"
    borderColor="gray.200"
    bg="gray.100"
    borderRadius="8"
    w="100%"
    h="12"
    mt="4"
  >
    <Text
      fontSize="0.7rem"
      fontWeight="semibold"
      mt="1"
      ml="1.5"
      color="gray.400"
    >
      {label}
    </Text>
    <Text
      color="gray.700"
      fontSize="sm"
      fontWeight="semibold"
      my="1"
      ml="1.5"
      mt="-1.9px"
    >
      {content}
    </Text>
  </Box>
  )
}