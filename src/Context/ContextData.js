import React, { Component } from 'react'


const AppContextData = React.createContext();

 class ContextDataProvider extends Component {
    state = {
        menuOpen: false,
        name: 'magnus',
        signedIn: false,
        age: 33,
        startLoginProcess: false,
    }
    render() {
        return (
            <AppContextData.Provider value={{
                ...this.state,
                toggleMenu: () => {
                    this.setState({
                        menuOpen: !this.state.menuOpen
                    })
                },
                toggleLogInnProcess: (bool) => {
                    this.setState({
                        startLoginProcess: bool
                    })
                }
            }}>
                {this.props.children}
            </AppContextData.Provider>
        )
    }
}

export {
    ContextDataProvider,
    AppContextData
}