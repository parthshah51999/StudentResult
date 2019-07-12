import React from 'react';

const DetailResult = (props) => {
  const { indStudent } = props;
  return (
    <div className="centerAlign">
      <h4>Please see {indStudent.firstName}'s detailed result below.</h4>
      <div className ="Table">
        <div className="CellHeadings">First Name</div>
        <div className="CellHeadings">Last Name</div>
        <div className="CellHeadings">English</div>
        <div className="CellHeadings">Hindi</div>
        <div className="CellHeadings">Mathematics</div>
        <div className="Row">
          <div className="Cell">{indStudent.firstName}</div>
          <div className="Cell">{indStudent.lastName}</div>
          <div className="Cell">{indStudent.marks.english}</div>
          <div className="Cell">{indStudent.marks.hindi}</div>
          <div className="Cell">{indStudent.marks.mathematics}</div>
        </div>
      </div>
    </div>
  );
};
export default DetailResult;
