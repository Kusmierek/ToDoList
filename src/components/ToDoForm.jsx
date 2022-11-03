import { React, useState } from 'react';
import FormToDoData from './FormToDoData';
import FormToDoItem from './FormToDoItem';
import { useFormik } from 'formik';
import FormToDoMessages from './FormToDoMessages';

const ToDoForm = ({ items, use }) => {
  const formik = useFormik({
    initialValues: {
      item: '',
      data: '',
    },

    onSubmit: (values) => {
      if (values.data === '' && values.item === '') {
        setMessage('Należy uzupełnić datę i tekst');
      } else if (values.data === '') {
        setMessage('Należy uzupełnić datę');
      } else if (values.item === '') {
        setMessage('Należy uzupełnić tekst');
      } else if (validateDate(values.data)) {
        setMessage('Podaj poprawną datę');
      } else {
        setMessage('');
        use(values);
        console.log();
      }
    },
  });

  const [message, setMessage] = useState('');
  const validateDate = (date) => {
    const arr = date.split('-');
    const now = new Date();
    if (
      now.getMonth() + 1 >= +arr[1] &&
      now.getDate() > +arr[2] &&
      now.getFullYear() >= +arr[0]
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form className="ToDoForm" onSubmit={formik.handleSubmit}>
      <FormToDoItem formik={formik} />
      <FormToDoData formik={formik} />
      <button type="submit">Submit</button>
      <FormToDoMessages message={message} />
    </form>
  );
};

export default ToDoForm;
