// // app/api/test.js
// import { DataAPIClient } from "@datastax/astra-db-ts";
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// // Initialize the client
// const client = new DataAPIClient(process.env.CONNECTION_STRING);
// const db = client.db('https://14cff81f-199c-4377-9244-51ebbe081081-us-east-2.apps.astra.datastax.com');

// (async () => {
//   const colls = await db.listCollections();
//   console.log('Connected to AstraDB:', colls);
// })();





const dotenv = require('dotenv');
const { DataAPIClient } = require("@datastax/astra-db-ts");

// Load environment variables from .env file
dotenv.config();

// Initialize the client
const client = new DataAPIClient(process.env.CONNECTION_STRING);
const db = client.db('https://14cff81f-199c-4377-9244-51ebbe081081-us-east-2.apps.astra.datastax.com');
const connectData = async() => {
  try {
    const colls = await db.listCollections();
    console.log('Connected to AstraDB:', colls);
  } catch (error) {
    console.error('Error connecting to AstraDB:', error);
  }
}

// const insertData = async () => {
//   try {
//     const collection = db.collection('brand_info');

//     const newDoc = {
//       basicInfo: {
//         brandName: "TechNova",
//         tagline: "Innovating the Future",
//         industryType: "Technology",
//         productOrServiceType: "SaaS",
//         targetAudience: "Small Businesses"
//       },
//       productServiceDetails: {
//         features: [
//           "Cloud-based collaboration tools",
//           "AI-driven analytics",
//           "Seamless integrations with other platforms"
//         ],
//         USPs: [
//           "Real-time data insights",
//           "Highly scalable platform",
//           "Affordable pricing plans"
//         ],
//         primaryProblemSolved: "Enabling small businesses to leverage technology for better decision-making."
//       },
//       articleDetails: {
//         articleType: "Blog",
//         articleLength: 1200,
//         keywordsToEmphasize: [
//           "cloud computing",
//           "small business tools",
//           "AI analytics"
//         ],
//         callToAction: "Start your free trial today!"
//       },
//       mediaInsights: {
//         primaryAudienceDemographics: "Small business owners aged 30-50, primarily in urban areas.",
//         painPointsAddressed: [
//           "Difficulty in accessing advanced analytics",
//           "High costs of enterprise solutions",
//           "Integration challenges with existing tools"
//         ],
//         competitors: [
//           "CloudWise",
//           "BizAnalytics Pro",
//           "AI Sync Solutions"
//         ],
//         marketPosition: "Affordable and user-friendly platform tailored for small businesses."
//       },
//       articleGeneration: {
//         englishArticle: "TechNova: Empowering Small Businesses with Cutting-Edge Cloud Solutions. Discover how TechNova is revolutionizing the SaaS industry with affordable, scalable, and AI-driven tools designed for small businesses.",
//         translations: {
//           hindi: "",
//           marathi: "",
//           gujarati: "",
//           tamil: "",
//           kannada: "",
//           telugu: "",
//           bengali: "",
//           malayalam: "",
//           punjabi: "",
//           odia: ""
//         }
//       }
//     };

//     const result = await collection.insertOne(newDoc);
//     console.log('Document Created:', result);
//   } catch (error) {
//     console.error('Error during CREATE operation:', error);
//   }
// };


const insertData = async () => {
  try {
    const collection = db.collection('brand_info');

    const newDoc = {
      basicInfo: {
        brandName: "TechNova",
        tagline: "Innovating the Future",
        industryType: "Technology",
        productOrServiceType: "SaaS",
        targetAudience: "Small Businesses"
      },
      productServiceDetails: {
        features: [
          "Cloud-based collaboration tools",
          "AI-driven analytics",
          "Seamless integrations with other platforms"
        ],
        USPs: [
          "Real-time data insights",
          "Highly scalable platform",
          "Affordable pricing plans"
        ],
        primaryProblemSolved: "Enabling small businesses to leverage technology for better decision-making."
      },
      articleDetails: {
        articleType: "Blog",
        articleLength: 1200,
        keywordsToEmphasize: [
          "cloud computing",
          "small business tools",
          "AI analytics"
        ],
        callToAction: "Start your free trial today!"
      },
      mediaInsights: {
        primaryAudienceDemographics: "Small business owners aged 30-50, primarily in urban areas.",
        painPointsAddressed: [
          "Difficulty in accessing advanced analytics",
          "High costs of enterprise solutions",
          "Integration challenges with existing tools"
        ],
        competitors: [
          "CloudWise",
          "BizAnalytics Pro",
          "AI Sync Solutions"
        ],
        marketPosition: "Affordable and user-friendly platform tailored for small businesses."
      },
      articleGeneration: {
        englishArticle: "TechNova: Empowering Small Businesses with Cutting-Edge Cloud Solutions. Discover how TechNova is revolutionizing the SaaS industry with affordable, scalable, and AI-driven tools designed for small businesses.",
        translations: {
          hindi: "",
          marathi: "",
          gujarati: "",
          tamil: "",
          kannada: "",
          telugu: "",
          bengali: "",
          malayalam: "",
          punjabi: "",
          odia: ""
        }
      }
    };

    const result = await collection.insertOne(newDoc);
    console.log('Document Created:', result);
  } catch (error) {
    console.error('Error during CREATE operation:', error);
  }
};


const readData = async() => {
  try {
    const collection = db.collection('brand_info'); // Updated collection name

    const docs = await collection.find({}).toArray(); // .toArray() is needed to return results
    console.log('Documents Found:', docs);
  } catch (error) {
    console.error('Error during READ operation:', error);
  }
}



connectData()
// insertData()
// readData()