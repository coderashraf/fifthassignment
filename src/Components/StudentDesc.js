import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { DataContext } from "./DataContext";

const StudentDesc = () => {
  let navigate = useNavigate();
  const [rows, setRows] = useContext(DataContext);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  useEffect(() => {
    console.log(rows);
    rows.map((row) => {
      if (id == row.id) {
        setData({
          name: row.name,
          age: row.age,
          course: row.course,
          batch: row.batch,
        })
      }
    });
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      let newArr = { ...data, id: new Date().getTime().toString() }
      // setData({ ...data, id: new Date().getTime().toString() });
      setRows([...rows, newArr])
    } else {
      setRows((prevState) =>
        prevState.map((student
        ) =>
          (student.id == id) ?
            {
              "id": id,
              "name": data.name,
              "age": data.age,
              "course": data.course,
              "batch": data.batch,
            } : student

        )
      )
    }
    console.log(rows);
    navigate("/students")
  }



  return (
    <div id="studentDesc">
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Name:</legend>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset>
          <legend>Age:</legend>
          <input
            type="number"
            id="age"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset>
          <legend>Course:</legend>
          <input
            type="text"
            id="course"
            name="course"
            value={data.course}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset>
          <legend>Department:</legend>
          <input
            type="text"
            id="batch"
            name="batch"
            value={data.batch}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <button type="submit" className="updateBtn">Update</button>
        <Link to="/students">
          <button className="backBtn">Go Back</button>
        </Link>
      </form>
    </div>
  );
};

export default StudentDesc;
