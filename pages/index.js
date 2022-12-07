import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Paris React Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg",
    address: "Some Street 5, 123 - Paris, France",
    description: "Sample description",
  },
  {
    id: "m1",
    title: "Prague Vuejs Meetup",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRtDk1qH7TEFjzO9UvReZt-FIGe4E3zOQKCDSS_gCOrEj1oVPytahfV2pW8rMeWUOuv",
    address: "Some Street 5, 123 - Prague, Czech Republic",
    description: "Sample description",
  },
];

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
