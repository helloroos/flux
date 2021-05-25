import React from 'react';

class PlanBox extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.plan.title}</h1>
                <div>{this.props.plan.description}</div>
            </div>
        )
    }
};

export default PlanBox;