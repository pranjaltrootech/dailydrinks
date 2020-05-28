import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import ReactHtmlParser from 'react-html-parser';
import { Link, useHistory } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

export default function List() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('order_data')))
    const history = useHistory();
  
    let arr = [];
    if(localStorage.getItem('order_data') !== null && localStorage.getItem('order_data')){
      arr = JSON.parse(localStorage.getItem('order_data'));
    }
    
    function deleteOrder(id) {
      if (window.confirm("Are you sure you want to delete this order?")) {
        arr.splice(id, 1);
        localStorage.removeItem('order_data')
        localStorage.setItem('order_data', JSON.stringify(arr))
        setData(JSON.parse(localStorage.getItem('order_data')))
      }
    }
    function editOrder(id) {
      history.push('order/edit/'+(id+1));
    } 
    return (
        <Container fluid className="main-content-container px-4">
            <div className="app-container notification" >
                <ReactNotification />
            </div>
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <Link to="/order/add" className="btn btn-info pull-right">Add</Link>
            </Row>

            {/* Default Light Table */}
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Order</h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">#</th>
                                        <th scope="col" className="border-0">Name</th>
                                        <th scope="col" className="border-0">Price</th>
                                        <th scope="col" className="border-0">Notes</th>
                                        <th scope="col" className="border-0">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {(data && data.length > 0) ?
                                    data && data.map((item, key) => {
                                      return <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{(item.notes) ? ReactHtmlParser(item.notes) : "N/A"}</td>
                                        <td>
                                          <i className="material-icons edit-icon" onClick={() => editOrder(key)}>edit</i>
                                          <i className="material-icons delete-icon" onClick={() => deleteOrder(key)}>delete</i>
                                        </td>
                                      </tr>

                                    })
                                    :
                                    <tr>
                                      <td colSpan="5" align={'center'}>No data available</td>
                                    </tr>
                                  }
                                    
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
