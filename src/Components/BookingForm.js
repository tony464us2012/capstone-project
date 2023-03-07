import React from 'react'
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

  return (

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
  <button type="submit" className="btn btn-warning m-3"  aria-label="Make Your reservation">
    Make Your reservation
  </button>
</form>
  )
}

export default BookingForm