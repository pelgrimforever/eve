import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';

import Store from '../services/store.js';

//data models
//services

function User_add(props) {

  const useradd = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const username = formdata.get('username');
    const result = await props.onUseradd(username);
  }

  const bodyheight = {height: '15rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={useradd}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">add user</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true">
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="mx-auto bg-light p-1">
                <div className="d-flex">
                  <div className="p-2 flex-fill bg-info">
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>username</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="text" id="username" name="username" className="form-control" style={{width:'200px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <button type="submit" className="btn btn-primary">add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={() => props.onCancel()}>close</button>
      </ModalFooter>
        </Form>

    </Modal>  
  );
}

export default User_add;