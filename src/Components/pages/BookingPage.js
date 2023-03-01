import React from 'react'
import { useReducer } from "react";
import ReservationForm from '../BookingForm'
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../API";


const BookingPage = () => {

  const navigate = useNavigate();

    function updateTimes(date) {
        return fetchAPI(date);
      }

      const output = fetchAPI(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, output);

      const submit = (data) => {
       const submitted = submitAPI(data);
        if (submitted) {
                navigate('/confirmation')
              }
      };

  return (
    <>
        <h2 className='title'>Reserve a table</h2>
        <ReservationForm availableTimes={availableTimes} submitHandler={submit} updateTimes={dispatch} />
    </>
  )
}

export default BookingPage