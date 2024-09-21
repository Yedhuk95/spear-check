import React, { useState } from 'react';
import { VStack, Container, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import NotionLinkInput from '../components/NotionLinkInput';
import ContentTextarea from '../components/ContentTextArea';
import FactCheckResults from '../components/FactCheckResults';
import { fetchNotionContent } from '../services/notionService';
import useFactCheck from '../hooks/useFactCheck';

const FactCheckPage = () => {
  const [notionLink, setNotionLink] = useState('');
  const [content, setContent] = useState('');
  const [facts, setFacts] = useState('');

  const results = useFactCheck(content, facts);

  const handleFetchContent = async () => {
    //setIsLoading(true);
    try {
      const fetchedContent = await fetchNotionContent(notionLink);
      setFacts(fetchedContent);
    //   toast({
    //     title: "Facts loaded successfully",
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    } catch (error) {
      console.error('Error fetching Notion content:', error);
    //   toast({
    //     title: "Error fetching Notion content",
    //     description: error.message,
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    } finally {
      //setIsLoading(false);
    }
  };

  return (
    <VStack spacing={8}>
      <Header />
      <Container maxW="container.md">
        <VStack spacing={6}>
          <NotionLinkInput
            notionLink={notionLink}
            setNotionLink={setNotionLink}
            onFetchContent={handleFetchContent}
          />
          {facts && <Text fontWeight="bold">Facts loaded from Notion</Text>}
          <ContentTextarea content={content} setContent={setContent} />
          {results.length > 0 && <FactCheckResults results={results} />}
        </VStack>
      </Container>
    </VStack>
  );
};

export default FactCheckPage;