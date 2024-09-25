const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());



app.get('/api/notion/:pageId', async (req, res) => {
    const { pageId } = req.body
    console.log(pageId)
    const notionApiKey = process.env.REACT_APP_NOTION_API_KEY; 
    
    try {
      // Call Notion API
      const response = await axios.get(`https://api.notion.com/v1/blocks/d5b287b6167844c7b0688041dc9e5e6b/children`, {
        headers: {
          'Authorization': `Bearer ${notionApiKey}`,
          'Notion-Version': '2022-06-28', 
        }
      });

      let content = '';
    response.data.results.forEach(block => {
      if (block.type === 'paragraph' && block.paragraph.rich_text.length > 0) {
        content += block.paragraph.rich_text[0].plain_text + '\n';
      }
    });
    res.json({ content });
    } catch (error) {
      console.error('Error fetching Notion data:', error);
      res.status(500).send('Error fetching Notion data');
    }
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
