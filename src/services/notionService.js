import axios from 'axios';

const extractPageId = (url) => {
    const match = url.match(/([a-f0-9]{32})/);
    return match ? match[1] : null;
  };

export const fetchNotionContent= async (notionLink) => {
    try {
        const pageId = extractPageId(notionLink)
       
      const response = await axios.get(`/api/notion/${pageId}`);
      console.log(response.data)
      const {content} = response.data
      console.log(content)
      return content;
    } catch (error) {
      console.error('Error fetching data from the server:', error);
      throw error;
    }
  }

