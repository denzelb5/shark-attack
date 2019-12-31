import React from 'react';
import PropTypes from 'prop-types';
import Student from '../LiveStudent/LiveStudent';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    deadStudent: PropTypes.func,
  }

  deadStudentEvent = (e) => {
    const { deadStudent } = this.props;
    deadStudent();
  }

  render() {
    const myStudents = this.props.students;
    const { deadStudent } = this.props;

    const studentCards = myStudents.map((student) => <Student key={student.id} student={student} deadStudent={deadStudent} />);

    return (
      <div className="d-flex flex-wrap sharkTank">
        {studentCards}
        <button className="btn btn-danger" onClick={this.deadStudentEvent}>Shark Attack</button>
      </div>
    );
  }
}

export default SharkTank;
