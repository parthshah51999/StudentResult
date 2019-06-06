import React from 'react';

export default class DetailResult extends React.Component {
  render() {
    const indStudent = this.props.indStudent;
    return (
      <div className="Result">
        <div><b>Name English Hindi Mathematics</b></div>
        <div>{indStudent.firstName} {indStudent.lastName} {indStudent.marks.english} {indStudent.marks.hindi} {indStudent.marks.mathematics}</div>
      </div>
    );
  }
}
