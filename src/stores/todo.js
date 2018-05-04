/* @flow */

import React, { Component } from 'react';
const { Fragment } = React;
const ApplicationContext = React.createContext('demo');
const { Consumer, Provider } = ApplicationContext;

type Props = {
  children: any,
};
type State = {
  todo: Array<any>,
};

class TodoStore extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todo: [],
    };
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            add: task => {
              this.setState({ todo: [...this.state.todo, task] });
            },
          },
        }}
      >
        <Consumer>{this.props.children}</Consumer>
      </Provider>
    );
  }
}

export default TodoStore;
