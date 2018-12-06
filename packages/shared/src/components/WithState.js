


import React, { Component } from 'react';

const State = {
    IDLE: 1,
    PENDING: 2,
    SUCCESS: 3,
    ERROR: 4,
};

export default function WithState(TargetComponent) {
    return class StateMachineWrapper extends Component {
        state = {
            current: State.IDLE
        }

        apiState = {
            pending: () => this.setState(prevState => ({
                ...prevState,
                current: State.PENDING,
            })),
            success: () => this.setState(prevState => ({
                ...prevState,
                current: State.SUCCESS
            })),
            error: () => this.setState(prevState => ({
                ...prevState,
                current: State.ERROR,
            })),
            idle: () => this.setState(prevState => ({
                ...prevState,
                current: State.IDLE,
            })),
            isPending: () => this.state.current === State.PENDING,
            isSuccess: () => this.state.current === State.SUCCESS,
            isError: () => this.state.current === State.ERROR,
            isIdle: () => this.state.current === State.IDLE
        }

        render() {
            return <TargetComponent {...this.props} apiState={this.apiState} />;
        }
    }
}