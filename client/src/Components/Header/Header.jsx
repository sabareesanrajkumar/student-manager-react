import React from 'react';
import { useStudents } from '../Students/StudentContext';

const Header = () => {
  const { students } = useStudents();
  return (
    <>
      <h1 className="my-4 text-center">Student Manager</h1>
      <h4 className="text-center">{students.length}</h4>
    </>
  );
};

export default Header;
