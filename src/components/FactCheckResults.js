import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const FactCheckResults = ({ results }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Text fontWeight="bold" fontFamily={'poppins, sans-serif'} mb={2}>
        Fact-Check Results:
      </Text>
      <VStack align="start" spacing={2}>
        {results.map((result, index) => (
          <Text key={index}>{result}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default FactCheckResults;