import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

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
      <div className="col-3">
        <div className="fish card-body">
          <img src='https://cdn.pixabay.com/photo/2016/02/03/15/00/fish-1177215_960_720.png' className="card-img-top" alt='fish'/>
          <h5 className="fish-name card-title">{student.firstName} {student.lastName}</h5>
          {/* <div className="btn" onClick={this.deadStudentEvent}>Attack</div> */}
        </div>
      </div>
    );
  }
}

export default Student;
