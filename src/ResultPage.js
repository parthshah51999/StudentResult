import React from 'react';

export default class ResultPage extends React.Component {
  displayResult(displayPage, student) {
    this.props.displayResult(displayPage, student);
  }

  render() {
    return (
      <div>
        Click on the person to get the detailed result.
        <ul><b>FirstName LastName Percentage </b></ul>
        {
          this.props.studentsData.map((student, i) => {
            let total = (student.marks.english + student.marks.hindi + student.marks.mathematics);
            let percentage = parseInt(total / 3, 10);
            return (
              <ul key={i} onClick={this.displayResult.bind(this, 'DetailResult', student)}>
                {student.firstName} {student.lastName} {percentage}%
              </ul>
            );
          })
        }
      </div>
    );
  }
}
