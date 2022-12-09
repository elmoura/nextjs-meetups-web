import Head from "next/head";
import { Fragment } from "react";
import { ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getMeetupsCollection } from "../../utils/getMeetupsCollection";

// This function is needed when you use "getStaticProps" for a dynamic page (like this one)
// It will make Nextjs pre-generate the page for all the needed values during the build process
export async function getStaticPaths() {
  const { meetupsCollection, client } = await getMeetupsCollection();
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // The values specified in "paths" array will be available later
    // at the "context" object inside getStaticProps function.
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    // This indicates if the values inside the "paths" prop contemplates
    // all the needed scenarios; If set to true or "blocking", Nextjs will try to generate dynamically
    // for the incoming unexpected values
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const { meetupsCollection, client } = await getMeetupsCollection();
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        address: meetup.address,
      },
    },
  };
}

export default function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail
        title={props.meetup.title}
        description={props.meetup.description}
        image={props.meetup.image}
        address={props.meetup.address}
      />
    </Fragment>
  );
}
