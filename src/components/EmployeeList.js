import React, { Component } from 'react';
import { View , Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
        // nextProps are the next set of props that this component will render with. 
        // this.props is still the old set of props
        this.createDataSource(nextProps)
    }

    // This Funtion will always build the data source both then componentMounts and when we receive new props
    createDataSource({ employees }){ 
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    render(){
        return(
            <View>
                <Text>Employeed List 1</Text>
                <Text>Employeed List 2</Text>
                <Text>Employeed List 3</Text>
                <Text>Employeed List 4</Text>
                <Text>Employeed List 5</Text>
                <Text>Employeed List 6</Text>
            </View>
        )
    }
};

const mapStateToProps = state => {
    return ({
        employees : state.employees
    });
};

export default connect( mapStateToProps , { employeesFetch } )(EmployeeList);
