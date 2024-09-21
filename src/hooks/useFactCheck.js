import { useState, useEffect } from 'react';
import { checkFactsWithAI } from '../services/aiService';

const useFactCheck = (content, facts) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const checkFacts = async () => {
      if (content && facts) {
        const checkResults = await checkFactsWithAI(content, facts);
        setResults(checkResults);
      }
    };

    const debounce = setTimeout(() => {
      checkFacts();
    }, 1000); // 1 second delay from when user stops typing

    return () => clearTimeout(debounce);
  }, [content, facts]);

  return results;
};

export default useFactCheck;