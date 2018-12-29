import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import {connect} from 'react-redux';
import { emailChanged , passwordChanged} from '../actions';

class LoginForm extends Component {
    onEmailChange(text){ // action creator 
        this.props.emailChanged(text)
    }
    onPasswordChange(text){ // action creator 
        this.props.passwordChanged(text)
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label='Password'
                        placeholder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        buttonText='Login'
                    />
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = state => {
    return ({
        email: state.auth.email,
        password: state.auth.password,        
    });
}


export default connect(mapStateToProps, {emailChanged, passwordChanged} )(LoginForm);