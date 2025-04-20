import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const StudentContext = createContext();
const API_URL =
  'https://crudcrud.com/api/192dbd67bc3b4f4c8bda5de08e8c92b7/students';

export const useStudents = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get(API_URL);
    setStudents(res.data);
  };

  const addOrUpdateStudent = async (student) => {
    if (studentToEdit) {
      await axios.put(`${API_URL}/${studentToEdit._id}`, student);
      setStudentToEdit(null);
    } else {
      await axios.post(API_URL, student);
    }
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchStudents();
  };

  const editStudent = (student) => {
    setStudentToEdit(student);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        studentToEdit,
        setStudentToEdit,
        addOrUpdateStudent,
        deleteStudent,
        editStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
