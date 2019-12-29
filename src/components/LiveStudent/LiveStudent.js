import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    deadStudent: PropTypes.func,
  }

  deadStudentEvent = (e) => {
    const { deadStudent, student } = this.props;
    e.preventDefault();
    deadStudent(student.id);
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card col-3">
        <div className="card-body">
          <h5 className="card-title">{student.firstName}</h5>
          <p className="card-text">{student.lastName}</p>
          <p>{student.isDead}</p>
          <div className="btn" onClick={this.deadStudentEvent}>Attack</div>
        </div>
      </div>
    );
  }
}

export default Student;
