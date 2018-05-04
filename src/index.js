import React from 'react';
import { render } from 'react-dom';
// import { DFPSlotsProvider, AdSlot } from 'react-dfp';
// import Dfp from 'react-simple-dfp';

import TodoStore from './stores/todo';

const { Fragment } = React;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>DEMO</h1>
        <TodoStore>
          {({ state, actions }) => {
            return (
              <Fragment>
                {state.todo.map(item => <p key={item}>{item}</p>)}
                <input type="text" ref={ref => (this.input = ref)} />
                <button
                  onClick={() => {
                    actions.add(this.input.value);
                  }}
                >
                  Add
                </button>
              </Fragment>
            );
          }}
        </TodoStore>
        <h3>Another todo store</h3>
        <TodoStore>
          {({ state }) => state.todo.map(item => <p key={item}>{item}</p>)}
        </TodoStore>
        {/* <Dfp adUnitPath="/8125220/300x250_mtf" adSize={[300, 250]} /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
