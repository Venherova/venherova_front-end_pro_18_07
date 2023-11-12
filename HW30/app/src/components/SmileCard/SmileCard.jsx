import { Component } from 'react';
import {string} from 'prop-types';
import smileyEnum from '../helpers/smileyEnum';

import './SmileCard.scss';

export default class SmileCard extends Component {
  render() {
    const { smile, title, description, onVote, id, className } = this.props;
    const emoji = smileyEnum[smile] || smile; 
    return (
      <div
        className={`SmileCard ${className}`}
        onClick={() => onVote && onVote(id)}
      >
        <div className='smile'>{emoji}</div>
        <div className='content'>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    )
  }
}

SmileCard.propTypes = {
  smile: string,
  title: string,
  description: string,
};

SmileCard.defaultProps = {
  smile: 'SMILE',
  title: 'TITLE',
  description: 'DESCRIPTION',
}
