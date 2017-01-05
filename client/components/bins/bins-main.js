import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../lib/collections/bins';
import BinsEditor from './bins-editor';
import BinsViewer from './bins-viewer'; 
import BinsShare from './bins-share';

class BinsMain extends Component {
    render(){
        if(!this.props.bin) { return <div>Loading...</div>; }

        return (
            <div>
                <BinsEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        );
    }
}
// A container does data fetching and then renders its corresponding sub-component. That's it.
export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);