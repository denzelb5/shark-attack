import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  deadStudent = () => {
    studentData.randomVictims();
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  render() {
    return (
      <div className="App">
      <SharkTank students={this.state.students} deadStudent={this.deadStudent} />
      <Graveyard deadStudents={this.state.deadStudents} />
      </div>
    );
  }
}
export default App;
