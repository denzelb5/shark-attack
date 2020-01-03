import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import Gravestone from '../Gravestone/Gravestone';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const gravestoneCards = deadStudents.map((deadStudent) => <Gravestone key={deadStudent.id} deadStudent={deadStudent} />);

    return (
      <div className="graveyard">
        <div className="graveyard-header">
          <h1 className="graveyard-header">Grave Yard</h1>
        </div>
        <div className="d-flex flex-wrap gravestone-zone">
          {gravestoneCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
