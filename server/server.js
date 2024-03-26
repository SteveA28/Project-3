import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { MutationType, QueryType } from "./graphql/TypeDefs.js";

const app = express();
const PORT = 3000;

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
app.post("/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail as the service
    auth: {
      user: "vacationbundles123@gmail.com", // Your Gmail email address
      pass: "qlbr jcra umvx jcaf", // Your Gmail password
    },
  });

  const { name, email, message } = req.body;

  const mailOptions = {
    from: "vacationbundles123@gmail.com", // Your Gmail email address
    to: email, // Use the provided email address from the form
    subject: "New Contact Us Message", // Email subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
