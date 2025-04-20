import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useStudents } from './StudentContext';

const StudentForm = ({ show, handleClose }) => {
  const { addOrUpdateStudent, studentToEdit, setStudentToEdit } = useStudents();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEmail(studentToEdit.email);
      setPhone(studentToEdit.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [studentToEdit]);

  const onSubmit = () => {
    setName('');
    setEmail('');
    setPhone('');
    addOrUpdateStudent({ name, email, phone });
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        setStudentToEdit(null);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {studentToEdit ? 'Edit Student' : 'Add Student'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          onClick={() => {
            handleClose();
            setStudentToEdit(null);
          }}
        >
          Cancel
        </Button>
        <Button variant="success" onClick={onSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentForm;
