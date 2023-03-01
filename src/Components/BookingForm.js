import React, { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";

const BookingForm = ({submitHandler, updateTimes, availableTimes}) => {

  let y = new Date()
  y.setDate(y.getDate() - 1)

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "1",
      occasion: "",
    },
    onSubmit: (values) => {
      submitHandler(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().min(y, "Choose a future date").required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Atleast one member is required")
        .max(10, "Maximum 10 guests are allowed")
        .required("Guests are required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

    // const [guest, setGuest] = useState(1)
    // const [date, setDate] = useState("")
    // const [finalTime, setFinalTime] = useState(
    //    availableTimes.map((times) => <option>{times}</option>));
    // const [occasion, setOccasion] = useState("Birthday")

    // function handleOccasion(e) {
    //     setOccasion(e.target.value) }
    
    //   function handleDateChange(e) {
    //     setDate(e.target.value);
    //     var stringify = e.target.value;
    //     const date = new Date(stringify);
    //     updateTimes(date);
    //     setFinalTime(availableTimes.map((times) => <option>{times}</option>));
    //   }

    //   function submitHandle(e) {
    //     e.preventDefault();
    //     const submitted = submitAPI({
    //       date,
    //       time: finalTime,
    //       guest,
    //       occasion
    //     })
    //     if (submitted) {
    //       navigate('/confirmation')
    //     }
    //   }

  return (
  //   <form className="reservation-form" onSubmit={submitHandle}>
  //   <div className='mb-3'>
  //     <label htmlFor="date">Select Date</label> <br></br>
  //     <input
  //       type="date"
  //       id="date"
  //       required
  //       value={date}
  //       onChange={handleDateChange}
  //     ></input>
  //   </div>

  //   <div className='mb-3'>
  //     <label htmlFor="time">Select Time</label> <br></br>
  //     <select id="time" required>
  //       { finalTime.length > 0 ? finalTime : <option>No Times Available</option>}
  //     </select>
  //   </div>

  //   <div className='mb-3'>
  //     <label htmlFor="guest">Number of People</label> <br></br>
  //     <input
  //       type="number"
  //       id="guest"
  //       placeholder="Number of Guests"
  //       value={guest}
  //       required
  //       min={1}
  //       max={10}
  //       onChange={(e) => setGuest(e.target.value)}
  //     ></input>
  //   </div>
  //   <div className='mb-3'>
  //     <label htmlFor="occasion">Occasion</label><br></br>
  //     <select value={occasion} onChange= {handleOccasion} id="occasion">
  //         <option value='Birthday'>Birthday</option>
  //         <option value='Anniversary'>Anniversary</option>
  //     </select>
  //   </div>
  //   <div>
  //     <button className="btn btn-warning m-3" type='submit'>
  //       Book Table
  //     </button>
  //   </div>
  //     <small>
  //       <p>
  //         Note: You cannot edit your reservation after submission. Please
  //         double-check your answer before submitting your reservation request.
  //       </p>
  //     </small>
  // </form>

  <form className="col-6 mt-3" onSubmit={formik.handleSubmit} data-testid='form'>
  <div className='mb-3'>
    <label htmlFor="date">Choose date</label>
    <input
      type="date"
      id="date"
      name="date"
      className="form-control"
      onChange={(e) => {
        formik.handleChange(e)
        var stringify = e.target.value;
        const date = new Date(stringify);
        updateTimes(date);
      }}
      value={formik.values.date}
    />
    <label className="error">{formik.errors.date}</label>
  </div>
  <div className='mb-3'>
    <label htmlFor="time">Choose time</label>
    <select
      id="time"
      className="form-control"
      onChange={formik.handleChange}
      value={formik.values.time}
    >
      <option>Choose Time</option>
      {availableTimes.map((time) => {
        return <option key={time}>{time}</option>;
      })}
    </select>
    <label className="error">{formik.errors.time}</label>
  </div>
  <div className='mb-3'>
    <label htmlFor="guests">Number of guests</label>
    <input
      type="number"
      placeholder="1"
      min="1"
      max="10"
      id="guests"
      name="guests"
      className="form-control"
      onChange={formik.handleChange}
      value={formik.values.guests}
    />
    <label className="error">{formik.errors.guests}</label>
  </div>
  <div className='mb-3'>
    <label htmlFor="occasion">Occasion</label>
    <select
      id="occasion"
      name="occasion"
      className="form-control"
      onChange={formik.handleChange}
      value={formik.values.occasion}
    >
      <option>Choose Occasion</option>;
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <label className="error">{formik.errors.occasion}</label>
  </div>
  <button type="submit" className="btn btn-warning m-3" role="button" aria-label="Make Your reservation">
    Make Your reservation
  </button>
</form>
  )
}

export default BookingForm