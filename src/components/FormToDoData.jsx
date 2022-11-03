import React from 'react';

const FormToDoData = ({ formik }) => {
  return (
    <div className="FormToDoData">
      <input
        id="data"
        name="data"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.data}
      />
    </div>
  );
};

export default FormToDoData;
