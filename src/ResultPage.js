import React from 'react';

export default class ResultPage extends React.Component {
  displayResult(displayPage, student) {
    const { displayResult } = this.props;
    return displayResult(displayPage, student);
  }

  render() {
    const { studentsData } = this.props;
    return (
      <div>
        Click on the person to get the detailed result.
        <ul><b>FirstName LastName Percentage </b></ul>
        {
          studentsData.map((student) => {
            const total = (student.marks.english + student.marks.hindi + student.marks.mathematics),
              percentage = parseInt(total / 3, 10);
            return (
              <ul key={student.firstName + student.lastName} onClick={this.displayResult.bind(this, 'DetailResult', student)}>
                {student.firstName}
                {student.lastName}
                {percentage}%
              </ul>
            );
          })
        }
      </div>
    );
  }
}
