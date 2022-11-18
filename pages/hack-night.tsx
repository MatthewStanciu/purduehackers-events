import { orderBy } from 'lodash'
import { GetStaticProps } from 'next'
import { fetchEvents } from '../lib/fetchEvents'
import Nav from '../components/nav'
import Head from 'next/head'
import EventCard from '../components/event-card'
import Footer from '../components/footer'

const HackNight = ({ events }: { events: PHEvent[] }) => {
  const ogUrl = `https://og.purduehackers.com/Hack%20Night.png?theme=dark&md=1&fontSize=250px&caption=${encodeURIComponent(
    'Fridays • 7pm • WALC 1087'
  )}`
  return (
    <>
      <Nav />
      <div className="min-h-screen overflow-hidden flex flex-col font-title dark:bg-gray-900">
        <Head>
          <meta property="og:site_name" content="Purdue Hackers" />
          <meta property="og:name" content="Hack Night — Purdue Hackers" />
          <meta property="og:title" content="Hack Night — Purdue Hackers" />
          <meta property="og:image" content={ogUrl} />
          <meta
            property="og:description"
            content="Every Friday night, uninterrupted time to work on personal projects. ✨🧑‍🔬"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="website" />
          <title>Hack Night — Purdue Hackers</title>
        </Head>
        <div className="flex flex-col grow-0 items-center justify-top w-full flex-1 px-5 pb-8 sm:pb-16 text-center sm:px-20 bg-gray-100 dark:bg-gray-800">
          <div className="mt-20 sm:mt-28">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold text-amber-450 dark:text-amber-500">
              Hack Night
            </h1>
          </div>
        </div>
        <div className="flex flex-col flex-auto container mx-auto my-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="border-2 border-dashed rounded-lg p-4 border-amber-400 dark:border-amber-500 w-11/12 md:w-96">
              <p>
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
                Some text about Hack Night. This is some text about Hack Night.
              </p>
            </div>
            <img
              className="rounded-lg w-64"
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fv5.airtableusercontent.com%2Fv1%2F11%2F11%2F1668816000000%2Fn9gy7loBbfj2tq7S3JQGSQ%2FrICZhhggOioHTV2jGb5hKZw-A_CMB4egf0ccfXfEC1TeskeNEdczUUyEuA7AWvXlbp3RtKyyycBN2SkL5snEPsAKI2kN8_0YgqDkoagX_SE%2Fa6fxgZcajyXF8PdLTQJYx-YpPFgvyriCc5tnXPYcSK8&w=1920&q=75"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:auto-cols-fr text-center mt-8">
            {Object.keys(events).map((key: string, i: number) => (
              <EventCard key={key} {...events[i]} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchEvents('Hack Night')

  return {
    props: { events: orderBy(events, 'end', 'desc') },
    revalidate: 10
  }
}

export default HackNight
