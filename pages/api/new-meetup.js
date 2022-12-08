// Path: /api/new-meetup

export default function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body;

    const { title, image, address, description } = data;
  }
}
