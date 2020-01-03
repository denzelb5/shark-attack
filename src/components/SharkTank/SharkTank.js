import React from 'react';
import PropTypes from 'prop-types';
import Student from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';
import './SharkTank.scss';

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
        <div className="sharkTank">
          <img src="http://pngimg.com/uploads/shark/shark_PNG18832.png" id="shark" alt=""/>
          <div>
          <button className="btn btn-danger" onClick={this.deadStudentEvent}>Shark Attack</button>
          </div>
          <div className="d-flex flex-wrap">
            {studentCards}
          </div>
      </div>
    );
  }
}

export default SharkTank;
