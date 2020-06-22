
import React, { Component } from 'react';
import Modal from './Modal';
import history from '../history';
import { connect } from 'react-redux';
import{ deleteStream, fetchStream }from '../actions/index'
import { Link } from 'react-router-dom';



class StreamDelete extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

    renderAction() {
        return (
            <>
                <button
                 onClick = {() => this.props.deleteStream(this.props.match.params.id)}
                className="ui button negative">Delete</button>
                <Link 
                     to = '/streams' 
                   className="ui button">Cancel</Link >
            </>
        )
    }
    renderContent(){
         if(!this.props.stream){
            return 'Are you sure you want to delete this striam?'
        }
        return `Are you sure you want to delete the stream with title:${this.props.stream.title}`
    }

    render() {
        return (
            <>
                <Modal
                    title= 'Delete Stream'
                    // content = {this.renderContent()}
                    description={this.renderContent()}
                    actions={this.renderAction()}
                    onDismis={() => history.push('/streams')}
                />
            </>
        );
    }
}
const mapStateToProps =( state, ownProps )=> {
    return {
       stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStream, fetchStream}) (StreamDelete);