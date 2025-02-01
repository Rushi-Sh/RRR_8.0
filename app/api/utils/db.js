import { DataAPIClient } from "@datastax/astra-db-ts";

const client = new DataAPIClient(process.env.CONNECTION_STRING);
const db = client.db('https://56069cf7-133d-41ec-9388-e91e1c65ea7f-us-east-2.apps.astra.datastax.com');

export { db };