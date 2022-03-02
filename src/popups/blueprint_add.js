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
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';

function Blueprint_add(props) {

  const [blueprints, setBlueprints] = useState([]);
  const [blueprint, setBlueprint] = useState(null);
  const [displaylist, setDisplaylist] = useState([]);
  const [searchstring, setSearchstring] = useState('');
  const [original, setOriginal] = useState(true);

  useEffect(async () => {
  }, []);

  const filterTypes = async (searchstring) => {
    const result = await Rsviewevetypes.getblueprints(Store.user, searchstring + ':*:');
    setDisplaylist(result);
  };

  const searchtextChange = (searchtextevent) => {
    setSearchstring(searchtextevent.target.value);
    filterTypes(searchtextevent.target.value);
  }

  const onBlueprintclick = (item) => {
    setBlueprint(item);
  }

  const addblueprint = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amount = formdata.get('amount');
    const bpprice = formdata.get('bpprice');
    const researchcost = formdata.get('researchcost');
    const stationfee = formdata.get('stationfee');
    if(blueprint!==null) {
      props.onBlueprintadd(blueprint, original, amount, bpprice, researchcost, stationfee);
    }
  }

  const bodyheight = {height: '40rem'};

  const col_name = {width: '20rem'};
  const col_type = {width: '12rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={addblueprint}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add blueprint</ModalTitle>
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
                        <span className="mx-2">name filter</span>
                        <div style={{width:'200px'}}>
                          <input type="text" className="form-input" style={{width:'200px'}} onChange={searchtextChange} defaultValue={searchstring} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containercontent container-relative">
              <div className="root fullheight">
                <div className="containercontent container-relative">
                  <div className="table-container container-fluid p-0">

                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_name}>type</th>
                        <th style={col_type}>name</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {displaylist.map((item, index) => (
                      <tr className={blueprint!==null && item.id===blueprint.id ? "table-active" : "table-info"}  key={index} onClick={() => { onBlueprintclick(item); } }>
                        <td style={col_name}>{item.typegroupname}</td>
                        <td style={col_type}>{item.name}</td>
                        <td>
                        </td>
                      </tr>  
    ))}

                    </tbody>
                  </table>

                  </div>
                </div>
              </div>
            </div>
            <div className="containerheader">
              <div className="mx-auto bg-light p-1">
                <div className="d-flex">
                  <div className="p-2 flex-fill bg-info">
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'200px'}}>original</span>
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" checked={original} className="form-check-input mx-2" onClick={() => setOriginal(!original)}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'200px'}}>runs</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="number" id="amount" name="amount" defaultValue={1} style={{width:'150px'}} />  
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'200px'}}>bp price</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="bpprice" name="bpprice" className="form-control" defaultValue={1} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'200px'}}>research cost</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="researchcost" name="researchcost" className="form-control" defaultValue={1} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'200px'}}>production station fee</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="stationfee" name="stationfee" className="form-control" defaultValue={1} style={{width:'150px'}}/>
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

export default Blueprint_add;