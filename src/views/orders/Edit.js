import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Form, FormInput, Button } from "shards-react";
import { useHistory } from "react-router-dom";

import Ckeditor from "react-ckeditor-component/lib/ckeditor";
import PageTitle from "../../../src/components/common/PageTitle";

export default function Edit(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [notes, setNotes] = useState(null)
    const history = useHistory();

    function onChange(evt) {
        var newContent = evt.editor.getData();
        setNotes(newContent)
    }

    function onBlur(evt) {
    }

    function afterPaste(evt) {
        var newContent = evt.editor.getData();
        setNotes(newContent)
    }
    function handleSubmit(event) {
        event.preventDefault();
        var id = props.match.params.id;
        let arr = [];
        if (localStorage.getItem('order_data') !== null && localStorage.getItem('order_data')) {
            arr = JSON.parse(localStorage.getItem('order_data'));
        }
        arr[id-1].name = name;
        arr[id-1].price = price;
        arr[id-1].notes = notes;
        localStorage.setItem('order_data', JSON.stringify(arr))
        history.push('/')
    }
    function goBack() {
        history.push('/')
    }

    useEffect(() => {
        let arr = [];
        if (localStorage.getItem('order_data') !== null && localStorage.getItem('order_data')) {
            arr = JSON.parse(localStorage.getItem('order_data'));
        }
        let data = arr[props.match.params.id - 1];
        setName(data.name);
        setPrice(data.price);
        setNotes(data.notes);
    }, [])

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title="Edit Order" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
                <Col lg="12">
                    <Card small className="mb-4">
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Row>
                                    <Col>
                                        <Form onSubmit={handleSubmit}>
                                            <Row form>
                                                {/* Name */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="fename">Name</label>
                                                    <FormInput
                                                        id="fename"
                                                        placeholder="Name"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}
                                                        required
                                                    />
                                                </Col>
                                                {/* Price */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feprice">Price</label>
                                                    <FormInput
                                                        id="feprice"
                                                        placeholder="Price"
                                                        value={price}
                                                        onChange={e => setPrice(e.target.value)}
                                                        type='number'
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                {/* Notes */}
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="fenotes">Notes</label>
                                                    <Ckeditor
                                                        activeClass="p10"
                                                        content={notes}
                                                        events={{
                                                            "blur": (e) => onBlur(e),
                                                            "afterPaste": (e) => afterPaste(e),
                                                            "change": (e) => onChange(e)
                                                        }}
                                                        required={true}
                                                    />
                                                </Col>
                                            </Row>

                                            <Button id="submit" className="btn btn-primary mr-2" theme="accent">Update</Button>
                                            <Button id="submit" className="btn btn-danger" onClick={() => goBack()}>Cancel</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

};