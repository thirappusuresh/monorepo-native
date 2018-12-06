
import React, { Component } from 'react';
import WithState from "./WithState";

export default function WithData(TargetComponent) {
    class WithData extends Component {
        static defaultProps = { mapper: f => f };

        state = { data: null, errors: null };

        componentDidMount() {
            //this.fetchData();
        }

        fetchData = async () => {
            alert("Hey!!!!");
            /* const { apiState, fetcher, mapper } = this.props;

            try {
                apiState.pending();
                const result = await fetcher();
                const data = mapper(result);
                this.setState({ data });
                apiState.success();
            } catch (errors) {
                apiState.error();
                this.setState({ errors });
            } */
        }

        render() {
            const { mapper, fetcher, ...rest } = this.props;
            return (
                <TargetComponent
                    {...rest}
                    data={this.state.data}
                    errors={this.state.errors}
                    refetchData={this.fetchData}
                />
            );
        }
    }

    return WithState(WithData);
}
