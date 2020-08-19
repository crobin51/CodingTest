import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import "../index.css";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
class Home extends Component{

    state={
        columnDefs: [{
            headerName: "Price", field: "price" , sortable: true, filter: true
          }, {
            headerName: "Area", field: "area" , sortable: true, filter: true
          }, {
            headerName: "Type", field: "type", sortable: true, filter: true
          },
        ],
        columnDefsAvg: [{
            headerName: "Name", field: "name" , sortable: true, filter: true
          }, {
            headerName: "Average", field: "average" , sortable: true, filter: true
          }
        ],
        homes: [],
        averageData: []
    }

    componentDidMount(){
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes")
        .then(response => response.json())
        .then(data =>{
            fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
            .then(response => response.json())
            .then(community =>{
                this.setState({homes:data})
                let i = 0;
                let total = 0;
                let aver = 0;
                let temp: any = [];
                community.forEach(element => {
                    data.forEach(e => {
                        if(element.id===e.communityId){
                            i++;
                            total = total + e.price;
                        }
                    })
                    if(total !== 0){
                        aver = total/i;
                    }
                    const coms = {name: element.name, average: aver};
                    i = 0;
                    total = 0;
                    aver = 0;

                    temp.push(coms);
                });

                this.setState({averageData: temp});
       //  console.log(this.state.homes);
       //  console.log(this.state.averageData);
            }).catch(f =>{
                alert("There is an error with the page you are requesting");
            });
           // data.sort((a,b) => (a.communityID> b.communityID) ? 1 : -1)
            
        }).catch(f =>{
            alert("There is an error with the page you are requesting");
        });
    }

render(){
    return(
    <div className="test">
        <div
        className="ag-theme-alpine "
        style={{
            display: 'inline-block',
        height: '250px',
        width: '600px', }}
      >
        <h3>Housing Analysis </h3>
        <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.homes}>
        </AgGridReact>
       
        
      </div>

      <div
        className="ag-theme-alpine"
        style={{
            display: 'inline-block',
        height: '250px',
        width: '400px' }}
      >
          <h3>Community Averages </h3>
      <AgGridReact
          columnDefs={this.state.columnDefsAvg}
          rowData={this.state.averageData}>
        </AgGridReact>
        
      </div>
    </div>
    )
}


}

export default Home;
