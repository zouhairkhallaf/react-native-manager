import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

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

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render(){
        console.log("THIS.PROPS: ", this.props)
        return(
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
};

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid)=> {
        return ({...val, uid})
     });

    return ( {employees} );
};

export default connect( mapStateToProps , { employeesFetch } )(EmployeeList);
