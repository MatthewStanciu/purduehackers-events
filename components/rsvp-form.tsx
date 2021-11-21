import { useState } from 'react'

const RSVPForm = ({ slug }) => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    let submission = await fetch(
      '/api/addEmail',
      {
        method: 'POST',
        body: JSON.stringify({ email, slug }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    if (submission.ok) {
      submission = await submission.json()
      setEmail('')
      setSubmitting(false)
      setDone(true)
    } else {
      setSubmitting(false)
      setError('Something went wrong')
    }
  }

  return (
    <div className="flex flex-col items-left mt-6">
      <p className="text-sm text-gray-500">Enter your email</p>
      <form onSubmit={onSubmit} className="flex flex-row items-left gap-x-2 mb-1">
        <input type="email" name="email" id="email" value={email} placeholder="phacker@purdue.edu"
        onChange={(e) => setEmail(e.target.value)} className="rounded border-none outline-none"></input>
        <button type="submit" className="bg-yellow-400 rounded-md shadow-md px-2 font-bold hover:scale-105 transform transition
        disabled:opacity-50 disabled:hover:scale-100" disabled={email.length === 0}>
          {submitting ? '•••' : 'Submit'}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}
      {done && (
        <p className="text-green-500 text-sm">All done! We'll remind you about the event a day before.</p>
      )}
    </div>
  )
}

export default RSVPForm