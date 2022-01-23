import React, { useState, useEffect } from 'react';
import NumericInput from 'react-numeric-input';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';
import Sortmode from '../utilities/sortmode.js';

import Store from '../services/store.js';

//data models
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
//services
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';

function Material_add(props) {

  const [minerals, setMinerals] = useState([]);
  const [salvagedminerals, setSalvagedminerals] = useState([]);
//  const [shipdrones, setShipdrones] = useState([]);
//  const [shipdeployables, setShipdeployables] = useState([]);
  const [material, setMaterial] = useState(null);
  const [displaylist, setDisplaylist] = useState([]);
  const [searchstring, setSearchstring] = useState('');
  const sort_mineral = 'mineral';
  const sort_salvage = 'salvage';
  const sort_drone = 'drone';
  const sort_deploy = 'deployable';
  const materialtypes = [ 
    { name:sort_mineral, text: 'minerals' }, 
    { name:sort_salvage, text: 'salvaged mat.' }, 
//    { name:sort_drone, text: 'drone' }, 
//    { name:sort_deploy, text: 'deployable' }, 
  ];
  const [activematerial, setActivematerial] = useState(materialtypes[0]);

  useEffect(async () => {
    const minerals = await Rsviewevetypes.getminerals();
    setMinerals(minerals);
    setDisplaylist(minerals);
    const salvagedmineralslist = await Rsviewevetypes.getsalvagedmaterials();
    setSalvagedminerals(salvagedmineralslist);
/*    const shipdroneslist = await Rsviewevetypes.getdrones();
    setShipdrones(shipdroneslist);
    const shipdeployableslist = await Rsviewevetypes.getdeployables();
    setShipdeployables(shipdeployableslist);*/
  }, []);

  const filterTypes = async (selectedmaterial, searchstring) => {
    let activelist = [];
    if(selectedmaterial.name==sort_mineral) {
      activelist = minerals;
    } else if(selectedmaterial.name==sort_salvage) {
      activelist = salvagedminerals;
/*    } else if(selectedmaterial.name==sort_drone) {
      activelist = shipdrones;
    } else if(selectedmaterial.name==sort_deploy) {
      activelist = shipdeployables;*/
    }
    let result = activelist.filter(obj => {
      return obj.name.includes(searchstring);
    });
    setDisplaylist(result);
  };

  const searchtextChange = (searchtextevent) => {
    setSearchstring(searchtextevent.target.value);
    filterTypes(activematerial, searchtextevent.target.value);
  }

  const onMaterialclick = (item) => {
    setMaterial(item);
  }

  const addmaterial = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amount = formdata.get('amount');
    const unitprice = formdata.get('unitprice');
    if(amount>0 && material!==null) {
      props.onMaterialadd(material, amount, unitprice);
    }
  }

  const changeActivematerial = (selection) => { 
    setActivematerial(selection);
    filterTypes(selection, searchstring);
  };

  const bodyheight = {height: '40rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={addmaterial}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add Ship module</ModalTitle>
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
                        <div style={{width:'400px'}}>
                          <input type="text" className="form-input" style={{width:'200px'}} onChange={searchtextChange} defaultValue={searchstring} />
                        </div>
                      </div>
                      <div className="col col-sm-12 d-flex mt-2">
                        <div style={{width:'100%'}}>
                          <Sortmode modes={materialtypes} sortmode={activematerial} onModeselected={changeActivematerial} />
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
                      <tr className={material!==null && item.id===material.id ? "table-active" : "table-info"}  key={index} onClick={() => { onMaterialclick(item); } }>
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
                        <span className="mx-2" style={{width:'150px'}}>amount</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="number" id="amount" name="amount" defaultValue={1} style={{width:'150px'}} />  
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>unit price</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="unitprice" name="unitprice" className="form-control" defaultValue={1} style={{width:'150px'}}/>
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

export default Material_add;