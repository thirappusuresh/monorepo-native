

import { Component } from 'react';
import  WithState from "./WithState";

class WithDataWrapper extends Component {
    static defaultProps = { mapper: f => f };

    state = { data: null, errors: null };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const { apiState, fetcher, mapper } = this.props;

        try {
            apiState.pending();
            const result = await fetcher();
            const data = mapper(result);
            this.setState({ data });
            apiState.success();
        } catch (errors) {
            apiState.error();
            this.setState({ errors });
        }
    }

    render() {
        const { apiState } = this.props;
        console.log('apiState => ', apiState)
        return this.props.render({
            apiState,
            fetchData: this.fetchData,
            data: this.state.data,
            errors: this.state.errors
        })
    }
    
}

export default WithState(WithDataWrapper);
