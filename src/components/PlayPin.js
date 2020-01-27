import React, { Component } from 'react'

const MyContext = React.createContext();

// This is where data lives
class MyProvider extends Component {
   state = {
      name: 'Magnus',
      age: 38
   }
   render() {
      return (
         <MyContext.Provider value={{
            state: this.state,
            updateState: () => this.setState({
               age: this.state.age + 1
            })
         }}>
            {this.props.children}
         </MyContext.Provider>
      )
   }
}

function Child() {
   return (
      <div>
         <h4>This is child</h4>
         <Baby />
      </div>
   )
}

function Baby() {
   return (
      <div>
         <h4>this is child of child</h4>
         How do i get data here ?
            <MyContext.Consumer>
               {(context) => (
                  <div>
                     <p> I am inside the consumer, and this is data: {context.state.name} </p>
                     <p> Age {context.state.age} </p>
                     <button onClick={context.updateState} >Upddate age</button>
                  </div>
               )}
         </MyContext.Consumer>
      </div>
   )
}

// pretent this is app
class PlayPin extends Component {
   render() {
      return (
         <MyProvider>
            <Child></Child>
         </MyProvider>
      )
   }
}

export default PlayPin;