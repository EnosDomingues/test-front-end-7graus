import { Flex, Box, Grid, Button } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { UserInfo } from "../components/UserInfo";
import api from "../services/api";

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
    medium: string;
    thumbnail: string;
  };
  email: string;
  phone: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('/?results=10')
       .then(response => {
         setUsers(response.data.results)
       })
  }, [])

  async function handleLoadMoreUsers() {
    const { data } = await api.get('/?results=10');
    setUsers([...users, ...data.results])
  }

  return (
    <>
      <Flex w="100%" h="100vh" direction="column" p="2" align="center">
        <Head>
          <title>Test - 7Graus</title>
        </Head>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap="2"
          maxW="1440px"
        >
          {users.map(user => (
            <UserInfo user={user} key={user.login?.uuid}/>
          ))}
        </Grid>
        <Box>
          <Button
            colorScheme="blackAlpha"
            h="16"
            maxW="200px"
            bg="gray.600"
            mb="10"
            mt="10"
            _hover={{
              bg: 'gray.500'
            }}
            onClick={() => handleLoadMoreUsers()}
          >
            Load more 10 users
          </Button>
        </Box>
      </Flex>
    </> 
  )
}
