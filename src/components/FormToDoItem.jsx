import React from 'react';

const FormToDoItem = ({ formik }) => {
  return (
    <div className="FormToDoItem">
      <input
        id="item"
        name="item"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.tem}
      />
    </div>
  );
};

export default FormToDoItem;
