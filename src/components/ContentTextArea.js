import React from 'react';
import { Textarea } from '@chakra-ui/react';
import '../App.css'

const ContentTextarea = ({ content, setContent }) => {
  return (
    <Textarea style={{boxShadow: '4px 4px 0 0', border: '1.5px solid', borderRadius:'1.25rem',}}
      placeholder="Type your content here..."
      fontFamily={'poppins, sans-serif'}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      minHeight="200px"
    />
  );
};

export default ContentTextarea;