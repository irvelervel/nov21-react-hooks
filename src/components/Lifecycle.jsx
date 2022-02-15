import { useEffect, useState } from 'react'

const Lifecycle = () => {
  // useEffect takes up to 2 arguments:
  // the first one is the code you want to execute (this is mandatory)
  // the second one, if present, will tell the hook HOW OFTEN to invoke your code
  useEffect(
    () => {
      console.log('this is like componentDidMount!')
      getReservations()
    },
    [
      // this is an array of dependencies
      // every element in this array will be a condition for re-invoking the function
      // every time one of the elements you put in the deps array changes, the function gets re-invoked
    ]
  )
  // the useEffect above is 100% equal to a componentDidMount
  // the signature for a useEffect === componentDidMount is:
  // useEffect(() => {}, [])

  const [reservations, setReservations] = useState([])

  const getReservations = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        let data = await response.json()
        setReservations(data)
      } else {
        console.log('error happened')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ul>
        {reservations.map((r) => (
          <div key={r._id}>{r.name}</div>
        ))}
      </ul>
    </div>
  )
}

export default Lifecycle

// for injecting our logic into specific moments of the lifecycle of this component
// in a class you would use componentDidMount and componentDidUpdate
// in a functional component, you can use useEffect()
