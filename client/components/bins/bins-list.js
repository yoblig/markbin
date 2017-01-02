import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Bins } from '../../../lib/collections/bins';


class BinsList extends Component {
    render(){
        console.log(this.props.bins);
        return (
            <div>Bins List</div>
        );
    }
}


export default createContainer(() => {
    Meteor.subscribe('bins');

    return { bins: Bins.find({}).fetch() };
}, BinsList);