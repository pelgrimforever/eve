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
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
//services
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';

function Blueprint_change(props) {

  const efficiencyoptions = [ 
    { name:'0', text: '0', value: 0 }, 
    { name:'1', text: '1', value: 1 }, 
    { name:'2', text: '2', value: 2 }, 
    { name:'3', text: '3', value: 3 }, 
    { name:'4', text: '4', value: 4 }, 
    { name:'5', text: '5', value: 5 }, 
    { name:'6', text: '6', value: 6 }, 
    { name:'7', text: '7', value: 7 }, 
    { name:'8', text: '8', value: 8 }, 
    { name:'9', text: '9', value: 9 }, 
    { name:'10', text: '10', value: 10 } 
  ];
  //const [efficiency, setEfficiency] = useState(props.viewuserbp.materialefficiency);

  const changeuserblueprint = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amountproduced = formdata.get('amountproduced');
    const efficiency = formdata.get('efficiency');
    const researchcost = formdata.get('researchcost');
    const result = await props.onUserbpchange(amountproduced, efficiency, researchcost);
  }

  /*const changeEfficiency = (selection) => { 
    setEfficiency(selection.value);
  };*/

  const bodyheight = {height: '15rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={changeuserblueprint}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Change blueprint properties</ModalTitle>
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
                          <Form.Control type="number" id="efficiency" name="efficiency" defaultValue={props.viewuserbp.materialefficiency} style={{width:'70px'}} />  
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>tot research cost</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="researchcost" name="researchcost" className="form-control" defaultValue={props.viewuserbp.researchcost} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>produced</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="number" id="amountproduced" name="amountproduced" className="form-control" defaultValue={props.viewuserbp.amountproduced} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <button type="submit" className="btn btn-primary">change</button>
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

export default Blueprint_change;