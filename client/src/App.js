import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

import Header from './Components/Header/Header';
import { StudentProvider } from './Components/Students/StudentContext';
import StudentForm from './Components/Students/StudentForm';
import StudentList from './Components/Students/StudentList';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <StudentProvider>
        <Container>
          <Header />
          <Button
            variant="outline-primary"
            className="d-grid mx-auto"
            style={{ marginBottom: '15px' }}
            onClick={() => setShowForm(true)}
          >
            Add Student
          </Button>
          <StudentList
            openForm={() => {
              setShowForm(true);
            }}
          />
          <StudentForm show={showForm} handleClose={() => setShowForm(false)} />{' '}
        </Container>
      </StudentProvider>
    </>
  );
}

export default App;
