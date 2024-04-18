import { MongoClient, ServerApiVersion } from "mongodb";

const DB_URL = process.env.REACT_APP_MONGODB_URI;
const DB_NAME = process.env.REACT_APP_MONGODB_DATABASE;
const DB_COLLECTION = process.env.REACT_APP_MONGODB_COLLECTION;
const mongoClient = new MongoClient(DB_URL,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const clientPromise = mongoClient.connect();

const dbHandler = async(event) => {
    try {
        const database = (await clientPromise).db(DB_NAME);
        const collection = database.collection(DB_COLLECTION);
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode : 200,
            body: JSON.stringify(results)
        }
    } catch (error) {
        return { 
            statusCode: 500, body: error.toString() 
        }
    }
}

module.exports = { dbHandler }

/* const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler } */