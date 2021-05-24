import { Flex, Image, Text, Badge } from "@chakra-ui/react";
import { PersonInfo } from "./PersonInfo";

type User = {
  login: {
    uuid: string;
  }
  name: {
    first: string;
    last: string;
  }
  location: {
    country: string;
  }
  picture: {
    large: string;
  };
  email: string;
  phone: string;
}

type RandomPersonProps = {
  user: User;
}

export function RandomPerson({ user }: RandomPersonProps) {
  return (
    <Flex
      key={user.login.uuid}
      w="100%"
      h="sm"
      maxW="1120px"
      borderRadius="8"
      align="center"
      direction="column"
      bg="gray.50"
      px="6"
      transition="filter 0.2s"
      _hover={{
        filter: 'brightness(102%)'
      }}
    >
      <Image
        src={user.picture.large} 
        h="32"
        w="32"
        mt="5"
        borderRadius="50%"
        border="4px"
        borderColor="gray.200"
      />
      <Text fontWeight="semibold" fontSize="20" my="3">
        {`
          ${user.name.first} 
          ${user.name.last} 
        `}
      </Text>
      <Badge
        colorScheme="green"
        borderRadius="4"
        py="1"
        px="2"
      >
        {user.location.country}
      </Badge>
      <PersonInfo label="Email" content={user.email}/>
      <PersonInfo label="Phone" content={user.phone}/>
    </Flex>
  )
}