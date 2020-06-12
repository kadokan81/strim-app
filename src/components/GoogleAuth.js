import React, { Component } from 'react';

class GoogleAuth extends Component {
 state = {
    isSignedIn: null
 }
 
    componentDidMount() {
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId:'35600759224-k54f9bn0hiki5g8rhncvo8gmv0gdqssg.apps.googleusercontent.com',
                scope:'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthchange)
            })
        })
    }
    onAuthchange = isSignedIn => {
       this.setState=({ isSignedIn:  this.auth.isSignedIn.get()})
    };

    renderAuthButton (){
        if(this.state.isSignedIn === null){
            return<div>I dont now if we are signed in</div>
        } else if (this.state.isSignedIn){
            return <div>I am signed in !</div>
        }else {
            return <div>I am not signed in</div>
        }
    }
    render() { 
        return ( 
            <div> {this.renderAuthButton}</div>
            
            
         );
    }
}
 
export default GoogleAuth;