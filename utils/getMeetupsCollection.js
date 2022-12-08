import { MongoClient } from "mongodb";

export const getMeetupsCollection = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const meetupsCollection = client.db().collection("meetups");

  return {
    client,
    meetupsCollection,
  };
};
