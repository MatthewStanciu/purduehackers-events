import { orderBy } from 'lodash'
import { GetStaticProps } from 'next'
import { fetchEvents } from '../lib/fetchEvents'
import Nav from '../components/nav'
import Head from 'next/head'

const HackNight = ({ events }: { events: PHEvent[] }) => {
  const ogUrl = `https://og.purduehackers.com/Hack%20Night.png?theme=dark&md=1&fontSize=250px&caption=${encodeURIComponent(
    'Every Friday • 7pm • WALC 1087'
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
            <h1 className="text-4xl sm:text-7xl lg:text-8-xl font-bold text-amber-450 dark:text-amber-500">
              Hack Night
            </h1>
          </div>
        </div>
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
