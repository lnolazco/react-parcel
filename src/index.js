import React from 'react';
import { render } from 'react-dom';

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
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
