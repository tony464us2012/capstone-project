import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../API';

const BookingForm = ({updateTimes, availableTimes}) => {

    const navigate = useNavigate();

    const [guest, setGuest] = useState(1)
    const [date, setDate] = useState("")
    const [finalTime, setFinalTime] = useState(
       availableTimes.map((times) => <option>{times}</option>));
    const [occasion, setOccasion] = useState("Birthday")

    function handleOccasion(e) {
        setOccasion(e.target.value) }
    
      function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        updateTimes(date);
        setFinalTime(availableTimes.map((times) => <option>{times}</option>));
      }

      function submitHandle(e) {
        e.preventDefault();
        const submitted = submitAPI({
          date,
          time: finalTime,
          guest,
          occasion
        })
        if (submitted) {
          navigate('/confirmation')
        }
      }

  return (
    <form className="reservation-form" onSubmit={submitHandle}>
    <div className='mb-3'>
      <label htmlFor="date">Select Date</label> <br></br>
      <input
        type="date"
        id="date"
        required
        value={date}
        onChange={handleDateChange}
      ></input>
    </div>

    <div className='mb-3'>
      <label htmlFor="time">Select Time</label> <br></br>
      <select id="time" required>
        { finalTime.length > 0 ? finalTime : <option>No Times Available</option>}
      </select>
    </div>

    <div className='mb-3'>
      <label htmlFor="guest">Number of People</label> <br></br>
      <input
        type="number"
        id="guest"
        placeholder="Number of Guests"
        value={guest}
        required
        min={1}
        max={10}
        onChange={(e) => setGuest(e.target.value)}
      ></input>
    </div>
    <div className='mb-3'>
      <label htmlFor="occasion">Occasion</label><br></br>
      <select value={occasion} onChange= {handleOccasion} id="occasion">
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
      </select>
    </div>
    <div>
      <button className="btn btn-warning m-3" type='submit'>
        Book Table
      </button>
    </div>
      <small>
        <p>
          Note: You cannot edit your reservation after submission. Please
          double-check your answer before submitting your reservation request.
        </p>
      </small>
  </form>
  )
}

export default BookingForm