import React from 'react';
const { Fragment } = React;

const ApplicationContext = React.createContext();
const { Consumer, Provider } = ApplicationContext;

class TodoStore extends React.Component {
  constructor(props) {
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
