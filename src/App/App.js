import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    const sharkBait = studentData.dearlyBeloved();
    this.setState({ students, sharkBait });
  }

  deadStudent = () => {
    studentData.randomVictims();
    const students = studentData.livingStudents();
    const sharkBait = studentData.dearlyBeloved();
    this.setState({ students, sharkBait });
  }

  render() {
    return (
      <div className="App">
      <h1>Shark Attack</h1>
      <SharkTank students={this.state.students} deadStudent={this.deadStudent} />
      </div>
    );
  }
}
export default App;
