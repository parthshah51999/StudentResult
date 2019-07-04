import React from 'react';

const DetailResult = (props) => {
  const { indStudent } = props;
  return (
    <div className="Result">
      <div><b>Name English Hindi Mathematics</b></div>
      <div>
        {indStudent.firstName}
        {indStudent.lastName}
        {indStudent.marks.english}
        {indStudent.marks.hindi}
        {indStudent.marks.mathematics}
      </div>
    </div>
  );
};
export default DetailResult;
