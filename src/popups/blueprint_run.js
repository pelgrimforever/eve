import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';
import NumericInput from 'react-numeric-input';

import Store from '../services/store.js';

//data models
//services

function Blueprint_run(props) {

  const userblueprintrun = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amount = formdata.get('amount');
    const result = await props.onUserbprun(amount);
  }

  const bodyheight = {height: '15rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={userblueprintrun}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Run blueprint</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true" style={bodyheight}>
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="mx-auto bg-light p-1">
                <div className="d-flex">
                  <div className="p-2 flex-fill bg-info">
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>group</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          {props.viewuserbp.typegroupname}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>name</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          {props.viewuserbp.blueprintname}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>bpo</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <input type="checkbox" checked={props.viewuserbp.original} className="form-check-input"/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>total amount</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          {props.viewuserbp.totalamount}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>material efficiency</span>
                        <div className="mx-2">
                          {props.viewuserbp.materialefficiency}  
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>runs</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="number" id="amount" name="amount" className="form-control" defaultValue={1} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <button type="submit" className="btn btn-primary">run</button>
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

export default Blueprint_run;