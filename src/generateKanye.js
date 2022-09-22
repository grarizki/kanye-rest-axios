import axios from 'axios'

function generateKanye() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://api.kanye.rest/', config).then((res) => {
    document.getElementById('kanye').innerHTML = res.data.quote
  })
}

export default generateKanye
