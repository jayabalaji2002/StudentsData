import React, { useState } from "react";

const Trail = () => {
  const [newTrailId, setNewTrailId] = useState("");
  const [newTrailName, setNewTrailName] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [newNoOfPatients, setNewNoOfPatients] = useState("");
  const [newAdvanceMedication, setNewAdvanceMedication] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const createNewData = () => {
    const newData = {
      trailid: newTrailId,
      trailname: newTrailName,
      startdate: newStartDate,
      enddate: newEndDate,
      noOfpatients: newNoOfPatients,
      advancemedication: newAdvanceMedication,
      notes: newNotes,
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
    <div>
      <input
        type="text"
        value={newTrailId}
        onChange={(e) => setNewTrailId(e.target.value)}
        placeholder="Trail ID"
      />
      <input
        type="text"
        value={newTrailName}
        onChange={(e) => setNewTrailName(e.target.value)}
        placeholder="Trail Name"
      />
      <input
        type="text"
        value={newStartDate}
        onChange={(e) => setNewStartDate(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="text"
        value={newEndDate}
        onChange={(e) => setNewEndDate(e.target.value)}
        placeholder="End Date"
      />
      <input
        type="text"
        value={newNoOfPatients}
        onChange={(e) => setNewNoOfPatients(e.target.value)}
        placeholder="Number of Patients"
      />
      <input
        type="text"
        value={newAdvanceMedication}
        onChange={(e) => setNewAdvanceMedication(e.target.value)}
        placeholder="Advanced Medication"
      />
      <input
        type="text"
        value={newNotes}
        onChange={(e) => setNewNotes(e.target.value)}
        placeholder="Notes"
      />
      <button onClick={createNewData}>Create Data</button>
    </div>
  );
};

export default Trail;