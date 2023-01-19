const VerifyEmail = ({
  list,
  email,
  eventName,
  uuid
}: {
  list: string
  email: string
  eventName: string
  uuid: string
}) => {
  return (
    <div style={{ padding: '1.25rem' }}>
      <div
        style={{
          backgroundColor: '#f3f4f6',
          border: '2px solid rgb(0,0,0, 0.1)',
          borderRadius: '0.25rem',
          padding: '1rem'
        }}
      >
        <img src="https://www.purduehackers.com/ph-logo.png" width={42}></img>
        <p style={paragraph}>Hey there! 👋</p>
        <p style={paragraph}>
          Thanks for signing up for our event,{' '}
          <span style={{ fontWeight: '700' }}>{eventName}</span>!
        </p>
        <p style={paragraph}>
          One more thing:{' '}
          <span style={{ fontWeight: '700' }}>
            please click the button below
          </span>{' '}
          to confirm your email address and receive the reminder.
        </p>
        <a
          href={`https://events.purduehackers.com/api/addToMailingList?list=${list}&email=${email}&eventName=${eventName}&uuid=${uuid}`}
          style={{
            backgroundColor: '#fbbf24',
            color: 'black',
            fontFamily,
            fontSize: '0.75rem',
            textDecoration: 'none',
            borderRadius: '0.25rem',
            padding: '1rem',
            border: '2px solid black',
            fontWeight: '700',
            marginTop: '0.5rem',
            marginBottom: '0.5rem'
          }}
        >
          Confirm Email Address
        </a>
        <p style={paragraph}>💛 Purdue Hackers</p>
        <p style={paragraph}>
          (If you don't know why you're receiving this email, don't click that
          button & you won't get any emails from us.)
        </p>
      </div>
    </div>
  )
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
const paragraph = { fontFamily, fontSize: '0.875rem', lineHeight: '1.25rem' }

export default VerifyEmail
