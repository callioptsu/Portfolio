import axios from 'axios'

interface Params {
  subject: string
  email: string
  message: string
}

export default async function postEmail(payload: Params) {
  try {
    const { data } = await axios.post(
      'http://localhost:3000/api/send-email/',
      payload,
    )

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
