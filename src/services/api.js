import fetchJsonp from 'fetch-jsonp'
export default function getAirlines() {
  return fetchJsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', {
    jsonpCallback: 'jsonp'
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
    .catch(error => console.log(error))
}
