import React from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

const NotionLinkInput = ({ notionLink, setNotionLink, onFetchContent }) => {
  return (
    <VStack spacing={4}>
      <Input
        placeholder="Enter Notion document link"
        fontFamily={'poppins, sans-serif'}
        value={notionLink}
        style={{boxShadow: '2px 2px 0 0', border: '1.5px solid', borderRadius:'1rem', width: '200%'}}
        onChange={(e) => setNotionLink(e.target.value)}
      />
      <Button colorScheme="pink" onClick={onFetchContent} fontFamily={'poppins, sans-serif'} style={{boxShadow: '4px 4px 0 0 black', border: '1.5px solid black', borderRadius:'1.25rem',}}>
        Fetch Content
      </Button>
    </VStack>
  );
};

export default NotionLinkInput;