import { AirtablePlusPlus, AirtablePlusPlusRecord } from 'airtable-plusplus'
import { orderBy } from 'lodash'

const airtable = new AirtablePlusPlus({
  apiKey: `${process.env.AIRTABLE_API_KEY}`,
  baseId: 'appfaalz9AzKDwSup',
  tableName: 'Recurring Events'
})

interface RecurringEventFields {
  'Event Name': string
  Events: string[]
}

export const fetchRecurringEvent = async (
  name: string
): Promise<RecurringEvent[]> => {
  const event = (await airtable.read({
    filterByFormula: `Event Name = '${name}'`
  })) as unknown as AirtablePlusPlusRecord<RecurringEventFields>[]
  for (const eventRecID of event[0].fields['Events']) {
  }
  return airtableEvents.map(({ id, fields }) => ({
    id,
    name: fields['Event Name'] ?? '???',
    events: fields['Events'] ?? ['?', '??', '???']
  }))
}
