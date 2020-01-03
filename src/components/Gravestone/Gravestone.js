import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    deadStudent: studentShape.studentShape,
  }

  render() {
    const { deadStudent } = this.props;
    return (
      <div className="col-3">
        <div className="gravestone card-body">
          <img className="card-img-top" src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_960_720.png" alt="gravestone"/>
          <h5 className="gravestone-name card-title">{deadStudent.firstName} {deadStudent.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Gravestone;
