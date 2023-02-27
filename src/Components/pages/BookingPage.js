import React from 'react'
import { useReducer } from "react";
import ReservationForm from '../BookingForm'
import { fetchAPI } from "../../API";

const BookingPage = () => {

    function updateTimes(date) {
        return fetchAPI(date);
      }

      const output = fetchAPI(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
        <h2 className='title'>Reserve a table</h2>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  )
}

export default BookingPage