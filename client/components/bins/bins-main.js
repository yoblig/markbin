import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../lib/collections/bins';

class BinsMain extends Component {
    render(){
        console.log(this.props.bin);
        return (
            <div>BINSMAIN</div>
        );
    }
}
// A container does data fetching and then renders its corresponding sub-component. That's it.
export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);