import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // GET /filteredimage?image_url={{URL}}
  // Filters the image and returns the file in the response
  app.get("/filteredimage", async (req, res) => {
    const {image_url} = req.query;
    
    if (!image_url) {
      res.status(400).send("Invalid Request! Query parameter image_url is missing.");
    }

    try {
      const filteredImagePath = await filterImageFromURL(image_url);
      res.sendFile(filteredImagePath, async (error) => {
        await deleteLocalFiles([filteredImagePath]);
        if (res.headersSent && !error) {
          res.status(200);
        }
        res.status(500).send(" Error encountered while returning filteredPath of the image.");
      });
    }
    catch(error) {
      res.status(500).send("An error occurred while filtering the image!");
    }

  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();