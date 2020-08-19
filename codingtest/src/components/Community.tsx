import React, { Component } from "react";
import "../index.css";
import Table from 'react-bootstrap/Table'

class Community extends Component{

    state={
        
        communities: []
    }

    componentDidMount(){

        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
        .then(response => response.json())
        .then(data =>{
            data.sort((a,b) => (a.name> b.name) ? 1 : -1);
          
            this.setState({communities:data})
         console.log(this.state.communities);
        }).catch(f =>{
            alert("There is an error with the page you are requesting");
        });
    }
    addDefaultSrc = (ev) => {
        ev.target.src= "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
    }
render(){
    return(
        <Table striped bordered hover size="sm">
<thead>
    <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Group</th>
    </tr>
</thead>
<tbody>
    {this.state.communities.map(item => {
        let output: any = item

        
        
        return <tr><td>{output.name}</td><td><img src={output.imgUrl} width={200} height={200}></img></td><td>{output.group}</td></tr>
    }
    )}
</tbody>
        </Table>
    )
}


}

export default Community;
