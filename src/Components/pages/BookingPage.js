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
        <header className="reserve-table">
        <img
        className="header-reserve"
            //   src={HeroImage}
        alt="Little Lemon Ingredients"
        ></img>
        <div className="reserve-header-text">
        <h1>Reserve a table</h1>
        </div>
        </header>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  )
}

export default BookingPage