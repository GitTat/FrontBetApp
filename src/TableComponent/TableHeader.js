import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 console.log(obj)
		 let headers =[];
			 	for(let i in obj){
			  		headers.push(i);
					  console.log(headers);
				}
		 	return(
		 <thead>
		 	<tr >
		 		<th>Full Name</th>
		  		<th>Company Name </th>	
		  		<th>Position</th>	
		  		<th>Country </th>
		  		<th>Email </th>
		 	</tr>
		 </thead>
		 	);
		 }
	}
    export default TableHeader;