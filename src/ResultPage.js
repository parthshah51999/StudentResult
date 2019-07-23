import React from 'react';

export default class ResultPage extends React.Component {
  displayResult(displayPage, student) {
    const { displayResult } = this.props;
    return displayResult(displayPage, student);
  }

  render() {
    const { studentsData } = this.props;
    return (
      <div className="centerAlign">
        <h3>Click on the first name to get the detailed result.</h3>
        <div className="Table">
            <div className="cellHeadings">First Name</div>
            <div className="cellHeadings">Last Name</div>
            <div className="cellHeadings">Percentage</div>
          {
            studentsData.map((student) => {
              const total = (student.marks.english + student.marks.hindi + student.marks.mathematics),
                percentage = parseInt(total / 3, 10);
              return (
                <div key={student.firstName + student.lastName}
                     className="Row"
                     >
                  <span className={percentage < 35 ? 'Cell failure-cell' : 'Cell'}
                       onClick={this.displayResult.bind(this, 'DetailResult', student)}
                       >{student.firstName}
                  </span>
                  <div className={percentage < 35 ? 'Cell failure-cell' : 'Cell'}>{student.lastName}</div>
                  <div className={percentage < 35 ? 'Cell failure-cell' : 'Cell'}>{percentage+'%'}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
