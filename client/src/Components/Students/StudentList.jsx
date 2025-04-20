import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useStudents } from './StudentContext';

const StudentList = ({ openForm }) => {
  const { students, deleteStudent, editStudent } = useStudents();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => {
                  editStudent(student);
                  openForm();
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteStudent(student._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
