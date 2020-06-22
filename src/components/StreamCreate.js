import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';


class StreamCreate extends Component {


    onSubmit = (formValues)  =>{
        this.props.createStream(formValues)       
    }
    render() {
        return (
          <div>
              <h3>Create a Stream</h3>
              <StreamForm onSubmit ={this.onSubmit}/>
          </div>
        );
    }
}
// const validate = (formValues) => {
//     const errors = {};

//     if (!formValues.title) {
//         errors.title = "You mast enter title"
//     }
//     if (!formValues.description) {
//         errors.title = "You mast enter description"
//     }
//     return errors
// }

// const formWrapper =  reduxForm({ form: 'streamCreate', validate })(StreamCreate)

export default connect(null, {createStream})(StreamCreate) ;