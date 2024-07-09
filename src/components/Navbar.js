import React from 'react';
import { Box, Flex, Link, Button, useColorModeValue, Text } from '@chakra-ui/react';
import { FaHome, FaRocket, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box bg={useColorModeValue('gray.800', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="xl" fontWeight="bold" color="white">Spaceship Store</Text>
        <Flex alignItems={'center'}>
          <Link
            px={4}
            py={2}
            rounded={'md'}
            _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.700', 'gray.600') }}
            href={'/'}
            color={isActive('/') ? 'teal.400' : 'white'}
          >
            <FaHome style={{ marginRight: '8px' }} />
            Home
          </Link>
          <Link
            px={4}
            py={2}
            rounded={'md'}
            _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.700', 'gray.600') }}
            href={'/products'}
            color={isActive('/products') ? 'teal.400' : 'white'}
          >
            <FaRocket style={{ marginRight: '8px' }} />
            Products
          </Link>
          <Link
            px={4}
            py={2}
            rounded={'md'}
            _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.700', 'gray.600') }}
            href={'/about'}
            color={isActive('/about') ? 'teal.400' : 'white'}
          >
            <FaInfoCircle style={{ marginRight: '8px' }} />
            About
          </Link>
          <Link
            px={4}
            py={2}
            rounded={'md'}
            _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.700', 'gray.600') }}
            href={'/contact'}
            color={isActive('/contact') ? 'teal.400' : 'white'}
          >
            <FaEnvelope style={{ marginRight: '8px' }} />
            Contact
          </Link>
          <Button ml={4} px={4} py={2} colorScheme={'teal'}>Sign In</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
