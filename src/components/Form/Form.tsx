import React, { FormEvent, useRef } from "react";
import { PiUser, PiCalendar } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.Module.css"; // Import the CSS file for styles

const FormComponent: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <div className="container mt-5">
      <div className="glass-box p-4 rounded shadow form-width">
        <h2 className="text-center mb-4">User Information Form</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <PiUser className="me-2" />
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              ref={nameRef}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              <PiCalendar className="me-2" />
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              ref={ageRef}
              placeholder="Enter your age"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
