import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions';

class StreamShow extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    render() { 
        console.log(this.props);
     if(!this.props.stream){
         return <div>One moment pleasse...</div>
     }   
     const {title, description} = this.props.stream
        return ( 
            <div className="">
                <h1>{title}</h1>
                  <h5>{description}</h5>
                 </div>
         );
    }
}
const mapSateteToProps =(state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
 
export default connect(mapSateteToProps, {fetchStream}) (StreamShow);

