import { Component } from 'react';
import SmileCard from '../SmileCard';
import smileyEnum from '../helpers/smileyEnum';

import './Voting.scss';

export default class Voting extends Component {
  state = {
    candidates: [],
    votes: {},
    winners: [],
  }

  /*
  {
    ID: COUNT
    1: 0,
    2: 0,
    3: 0
  }
  */

  componentDidMount() {
    fetch('http://localhost:3000/data.json')
      .then(res => res.json())
      .then(result => {
        console.log('result', result);
        const votesInit = result.reduce((acc, candidate) => {
          acc[candidate.id] = 0;
          return acc;
        }, {});

        this.setState({
          candidates: result,
          votes: votesInit
        })
      });
  }

  handleVote = (id) => {
    this.setState(prevState => ({
      votes: {
        ...prevState.votes,
        [id]: prevState.votes[id] + 1
      }
    }));
  };

  showResults = () => {
    const { votes } = this.state;
    const maxVotes = Math.max(...Object.values(votes));
    const winners = this.state.candidates.filter(candidate => votes[candidate.id] === maxVotes);
    this.setState({ winners });
  };


  render() {
    return (
      <div className='Voting'>
        <h1>Choose the best smile ever:</h1>
        <div className='container'>
          {!this.state.candidates.length && <div>No candidates yet...</div>}

          {this.state.candidates.map(item => (
            <div key={item.id} className='smile-card-container'>
              <SmileCard
                className={this.state.winners.length > 0 ? 'non-clickable' : ''}
                id={item.id}
                title={item.title}
                description={item.description}
                smile={item.smile}
                onVote={this.handleVote}
              />
              <span className='vote-count'>Votes: {this.state.votes[item.id]}</span>
            </div>
          ))}
        </div>
        <button onClick={this.showResults} className="results-button">Show Results</button>

        {this.state.winners && this.state.winners.length > 0 && (
        <div className='winners'>
          <h2>{this.state.winners.length > 1 ? 'Winners': 'Winner'}</h2>
          {this.state.winners.map(winner => (
            <SmileCard
              className={this.state.winners.length > 0 ? 'non-clickable' : ''}
              key={winner.id}
              id={winner.id}
              title={winner.title}
              description={winner.title}
              smile={smileyEnum[winner.smile]}
            />
          ))}
        </div>
      )}
      </div>
    )
  }
}
