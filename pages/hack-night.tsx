import { GetStaticProps } from 'next'
import { fetchEvents } from '../lib/fetchEvents'

const HackNight = ({ events }: { events: PHEvent[] }) => {
  return (
    <div className="flex flex-row px-20">
      {events.map((event) => (
        <div className="p-4 rounded-lg bg-amber-500">{event.name}</div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchEvents('Hack Night')

  return {
    props: { events },
    revalidate: 10
  }
}

export default HackNight
