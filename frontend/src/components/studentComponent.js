import React, { useState, useEffect } from 'react';


const StudentComponent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from the backend
    fetch('http://localhost:5000/api/student')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data.response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Student List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">Photo</th> */}
              <th scope="col">Name</th>
              <th scope="col">Father's Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                {/* <td>
                  
                    {console.log("Profile Photo URL:", student.profilePhoto)}
                    <img src={student.profilePhoto} alt={`${student.firstName}`} style={{ width:"50px", weight: "50px" }} />
                  
                </td> */}
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.fatherName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentComponent;
