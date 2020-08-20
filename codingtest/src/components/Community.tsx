import React, { Component } from "react";
import "./Community.css";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

class Community extends Component {

    state = {
        //holds the community data pulled from the REST endpoints
        communities: []
    }

    componentDidMount() {
        //Get the community data from the endpoint provided. 
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => (a.name > b.name) ? 1 : -1);

                this.setState({ communities: data })
                console.log(this.state.communities);
            }).catch(f => {
                alert("There is an error with the page you are requesting");
            });
    }
    addDefaultSrc = (ev) => {
        ev.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
    }
    render() {
        return (
            //displays Community Information in a Table
            <div className="comTable">
                <h2>Community Information</h2>
                <Table variant="dark" striped bordered hover>
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

                            return <tr><td>{output.name}</td><td><img onError={this.addDefaultSrc} src={output.imgUrl} alt={output.name} width={200} height={200}></img></td><td>{output.group}</td></tr>
                        }
                        )}
                    </tbody>
                </Table>

            </div>
        )
    }


}

export default Community;
