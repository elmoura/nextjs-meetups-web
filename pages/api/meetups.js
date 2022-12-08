// Path: /api/meetup

import { MongoClient } from "mongodb";
import { getMeetupsCollection } from "../../utils/getMeetupsCollection";

export default async function handler(request, response) {
  if (request.method === "POST") {
    return createMeetup(request, response);
  }
}

const createMeetup = async (request, response) => {
  try {
    const data = request.body;

    const { title, image, address, description } = data;

    const { meetupsCollection, client } = await getMeetupsCollection();
    const result = await meetupsCollection.insertOne({
      title,
      description,
      image,
      address,
    });

    client.close();

    return response.status(201).json(result);
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "An error ocurred creating a meetup",
      error,
    });
  }
};
