import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddData = () => {
  // const [newTrailId, setNewTrailId] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastDate, setNewLastDate] = useState("");
  const [newFatherName, setNewFatherName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAge, setNewAge] = useState("");

  const createNewData = () => {
    const newData = {
      // trailid: newTrailId,
      firstName: newFirstName,
      lastName: newLastDate,
      fatherName: newFatherName,
      email: newEmail,
      phone: newPhone,
      age: newAge,
    };

    fetch("http://localhost:5000/api/student/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    // <div>
    //   {/* <input
    //     type="text"
    //     value={newTrailId}
    //     onChange={(e) => setNewTrailId(e.target.value)}
    //     placeholder="Trail ID"
    //   /> */}
    //   <input
    //     type="text"
    //     value={newFirstName}
    //     onChange={(e) => setNewFirstName(e.target.value)}
    //     placeholder="First Name"
    //   />
    //   <input
    //     type="text"
    //     value={newLastDate}
    //     onChange={(e) => setNewLastDate(e.target.value)}
    //     placeholder="Last Name"
    //   />
    //   <input
    //     type="text"
    //     value={newFatherName}
    //     onChange={(e) => setNewFatherName(e.target.value)}
    //     placeholder="Father's Name"
    //   />
    //   <input
    //     type="text"
    //     value={newEmail}
    //     onChange={(e) => setNewEmail(e.target.value)}
    //     placeholder="ABC@gmail.com"
    //   />
    //   <input
    //     type="text"
    //     value={newPhone}
    //     onChange={(e) => setNewPhone(e.target.value)}
    //     placeholder="(9677493459)"
    //   />
    //   <input
    //     type="text"
    //     value={newAge}
    //     onChange={(e) => setNewAge(e.target.value)}
    //     placeholder="18"
    //   />
    //   <button onClick={createNewData}>Create Data</button>
    // </div>

    <Form>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={newLastDate}
          onChange={(e) => setNewLastDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicFatherName">
        <Form.Label>Father's Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter father's name"
          value={newFatherName}
          onChange={(e) => setNewFatherName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter age"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={createNewData}>
        Create Data
      </Button>
    </Form>
  );
};

export default AddData;
