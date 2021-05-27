import React from 'react';

class Upvote extends React.Component {

    constructor(props) {
        super(props)
        let up = props.upvotes.length;
        let down = props.downvotes.length;
        
        this.state = {
            numUpvotes: up,
            numDownVotes: down,
            numDiff: (up - down)
        }
    }

    render() {
        debugger
        return (
            <div>
                <button>
                    {this.props.sugg}
                </button>
            </div>
        )
    }
};

export default Upvote;