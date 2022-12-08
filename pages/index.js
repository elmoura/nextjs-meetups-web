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
    id: "m2",
    title: "Prague Vuejs Meetup",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRtDk1qH7TEFjzO9UvReZt-FIGe4E3zOQKCDSS_gCOrEj1oVPytahfV2pW8rMeWUOuv",
    address: "Some Street 5, 123 - Prague, Czech Republic",
    description: "Sample description",
  },
];

// Static Site Generation (SSG) approach
// This function only runs during the build process
export async function getStaticProps() {
  // code that runs on a Node.js server
  // fetch data from API, databases, filesystem, etc.

  return {
    // [required key] passes props to the page components
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // [optional key] adds Incremental Static Generation (ISG), which updates
    //    the data passed in props. The revalidation time is passed in seconds.
    revalidate: 10,
  };
}

export default function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}
