import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {connect} from 'react-redux';
import { emailChanged , passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
    onEmailChange(text){ // action creator 
        this.props.emailChanged(text)
    }

    onPasswordChange(text){ // action creator 
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser(email, password); 
    }

    renderError(){
        if(this.props.error){
            return (
                <View>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return (
            <Button 
                onPress={this.onButtonPress.bind(this)}
                buttonText='Login'
            />
        )
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
                {this.renderError()}
                <CardSection>
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return ({
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading      
    });
}

const mapDispatchToProps = dispatch => {
    return({
        loginUser: (email, password) => {dispatch(loginUser(email, password))},
        emailChanged: (text) => {dispatch(emailChanged(text))},
        passwordChanged: (text) => {dispatch(passwordChanged(text))}
    })
}

export default connect(mapStateToProps,  mapDispatchToProps)(LoginForm);