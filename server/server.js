import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from 'path'; // Import path module

import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { MutationType, QueryType } from "./graphql/TypeDefs.js";

const app = express();
const PORT = process.env.PORT || 3000; // Updated to use an environment variable for port

// Initialize the GraphQL schema
const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

// Middlewares
app.use(cors());
app.use(express.json()); // Use express.json() to parse JSON bodies

// Existing GraphQL setup
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Add the /send-email POST route
app.post('/send-email', (req, res) => {
  // Your existing nodemailer code here
});

// Add this BEFORE your server listening call, and AFTER all other route definitions
// Serve static files from the React app
app.use(express.static('client'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
