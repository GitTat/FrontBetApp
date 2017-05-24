import React, { Component } from 'react';
import TableHeader from'./TableHeader.js';
import TableRow from './TableRow.js';
import AddRowTable from './AddRowTable.js';
import '../StyleSheet/UserTable.css';

import array from '../array.js';

class Table extends Component{
			constructor(props){
				super(props);
				this.state={
				  data:array
				};
				this.updateTable=this.updateTable.bind(this);
			}
			updateTable(){
		      this.setState({data:array});
		      console.log("update table, and Data",array);
			}
			render(){
		     	return(
		     	<div className="UserTable">
					 <h2 id="theader">User Info List</h2>
			     	<table className="table">
			     	<TableHeader headerdata={this.state.data[0]} className="tableheader"/>
			     	<TableRow update={this.updateTable} dataArray={this.state.data}/>
			     	</table>
			     	<AddRowTable  update={this.updateTable} Id={this.state.data.length + 1} className="addrowtable"/>
			     </div>
		     	);
		     }
     	
	}
    export default Table;