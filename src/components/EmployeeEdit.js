import React , { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmplyeeForm';
import { employeeUpdate, employeeSave } from '../actions'; 
import { Card, CardSection, Button, Confirm } from './common';
import _ from 'lodash';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }
    componentWillMount(){
        _.each(this.props.employee , (value, prop)=>{
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcomming shift is on ${shift}`);
    }

    onFireButton(){
        return null
    }

    render() {
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button buttonText="Save Changes"  onPress={this.onButtonPress.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Button buttonText="Text Schedule"  onPress={this.onTextPress.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Button buttonText='Fire Employee' onPress={()=> this.setState({showModal: !this.state.showModal})} />
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                >
                    Are you sure you want to delete this? 
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return ({ name, phone, shift });
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);