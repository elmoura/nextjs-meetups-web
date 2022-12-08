import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// Static Site Generation (SSG) approach
// This function only runs during the build process
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const meetupsCollection = client.db().collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    // [required key] passes props to the page components
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // description: meetup.description,
      })),
    },
    // [optional key] adds Incremental Static Generation (ISG), which updates
    //    the data passed in props. The revalidation time is passed in seconds.
    revalidate: 10,
  };
}

// Server side rendering (SSG) approach
// Executes on every incoming request
// export async function getServerSideProps(context) {
//   // fetch data from API, databases or filesystems

//   // you can use the req/res context
//   const request = context.req;
//   const response = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}
