import React, { Component } from 'react'


const AppContextData = React.createContext();

 class ContextDataProvider extends Component {
    state = {
        menuOpen: false,
        signedIn: false,
        startLoginProcess: false,
        activeStepper: 0,
        enableSecondStep: false,
        enableThirStep: false
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
                },
                updateStepper: (val) => {
                    this.setState({
                        activeStepper: val
                    })
                },
                toggleSecondStep: () => {

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