import React from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, Grid, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Navbar />
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Routes>
                <Route exact path="/" element={
                  <>
                    <Heading as="h1" size="2xl">
                      Spaceship Store
                    </Heading>
                    <Text>
                      Welcome to the ultimate destination for buying spaceships!
                    </Text>
                  </>
                } />
                <Route path="/products" element={
                  <>
                    <Heading as="h1" size="2xl">
                      Products
                    </Heading>
                    <Text>
                      Explore our wide range of spaceships!
                    </Text>
                  </>
                } />
                <Route path="/about" element={
                  <>
                    <Heading as="h1" size="2xl">
                      About Us
                    </Heading>
                    <Text>
                      Learn more about our mission and values.
                    </Text>
                  </>
                } />
                <Route path="/contact" element={
                  <>
                    <Heading as="h1" size="2xl">
                      Contact Us
                    </Heading>
                    <Text>
                      Get in touch with us for any inquiries.
                    </Text>
                  </>
                } />
              </Routes>
            </VStack>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
