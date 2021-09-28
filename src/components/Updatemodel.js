import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class Updatemodel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.displayUpdateModel} onHide={this.props.onHideModel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update fruit</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.props.handelUpdate} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name ="name" defaultValue={this.props.selectedFruit.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter Image" name="image" defaultValue={this.props.selectedFruit.image} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price" name="price" defaultValue={this.props.selectedFruit.price} />
                        </Form.Group>
                            <Button type="submit">
                                Update
                            </Button>
                    </Form>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Updatemodel
