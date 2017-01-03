import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../lib/collections/bins';
import BinsEditor from './bins-editor';

class BinsMain extends Component {
    render(){
        return (
            <BinsEditor bin={this.props.bin} />
        );
    }
}
// A container does data fetching and then renders its corresponding sub-component. That's it.
export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);