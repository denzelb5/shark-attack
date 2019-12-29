import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }

  deadStudent = (studentId) => {
    studentData.killAStudent(studentId);
    const students = studentData.getStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
      <button className="btn btn-warning">WTF</button>
      <SharkTank students={this.state.students} deadStudent={this.deadStudent} />
      </div>
    );
  }
}
export default App;
