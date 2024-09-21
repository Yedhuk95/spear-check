import React from 'react';
import { Box, Flex, Heading} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="linear-gradient(92deg, #ffe0e7, #f3e0ff);" py={4} width={'100%'} boxShadow="sm">
      <Flex justifyContent="space-around" align="center">
        <Heading fontFamily={'poppins, sans-serif'}>Spear Check</Heading>
      </Flex>
    </Box>
  );
};

export default Header;