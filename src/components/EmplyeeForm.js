import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { CardSection, Input} from './common';
import { employeeUpdate } from '../actions'; 
import { connect } from 'react-redux';

class EmployeeForm extends Component {
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name} 
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value: value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5558" 
                        value={this.props.phone}
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value: value })}
                    />
                </CardSection>

                <CardSection>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker
                            style={{ flex: 1 }}
                            selectedValue={this.props.shift}
                            onValueChange={ value => this.props.employeeUpdate({ prop:'shift', value: value })}
                        >
                            <Picker.Item label="Monday"    value="Monday"    />
                            <Picker.Item label="Tueasday"  value="Tueasday"  />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday"  value="Thursday"  />
                            <Picker.Item label="Friday"    value="Friday"    />
                            <Picker.Item label="Saturday"  value="Saturday"  />
                            <Picker.Item label="Sunday"    value="Sunday"    />
                        </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return ({ name, phone, shift });
};

export default connect(mapStateToProps, { employeeUpdate } )(EmployeeForm);