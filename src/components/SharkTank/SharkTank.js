import React from 'react';
import PropTypes from 'prop-types';
import Student from '../LiveStudent/LiveStudent';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    deadStudent: PropTypes.func,
  }

  render() {
    const myStudents = this.props.students;
    const { deadStudent } = this.props;

    const studentCards = myStudents.map((student) => <Student key={student.id} student={student} deadStudent={deadStudent} />);

    return (
      <div className="d-flex flex-wrap sharkTank">{studentCards}</div>
    );
  }
}

export default SharkTank;
