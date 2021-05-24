import { Flex, Box, Grid, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { RandomPerson } from "../components/RandomPerson";
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
  };
  email: string;
  phone: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    api.get('/?results=10')
       .then(response => {
         setUsers(response.data.results)
       })
  }, [])

  async function handleLoadMoreUsers() {
    setisLoading(true)
    const { data } = await api.get('/?results=10');
    await new Promise(resolve => setTimeout(resolve, 2000)).then()
    setUsers([...users, ...data.results])
    setisLoading(false)
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
            <RandomPerson user={user} key={user.login?.uuid}/>
          ))}
        </Grid>
        {users.length > 0 && (
          <>
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
                  isLoading={isLoading}
                  loadingText="Loading"
                  onClick={() => handleLoadMoreUsers()}
                >
                  Load more 10 users
                </Button>
            </Box>
            <Flex align="center" justify="center" w="100%">
              <Text color="gray.400">Proudly made in 🇧🇷 by Enos Domingues</Text>
            </Flex>
          </>
        )}
      </Flex>
    </> 
  )
}
