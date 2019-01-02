import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions'; 
import EmployeeForm from './EmplyeeForm';
import { Card, CardSection, Button } from './common';


class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee , (value, prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    render() {
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button buttonText="Save Changes"  onPress={this.onButtonPress.bind(this)}/>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return ({ name, phone, shift });
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);