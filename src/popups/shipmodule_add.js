import React, { useState, useEffect } from 'react';
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
//services
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';

function Shipmodule_add(props) {

  const [shipmodules, setShipmodules] = useState([]);
  const [shipcharges, setShipcharges] = useState([]);
  const [shipdrones, setShipdrones] = useState([]);
  const [shipdeployables, setShipdeployables] = useState([]);
  const [shipmodule, setShipmodule] = useState(null);
  const [displaylist, setDisplaylist] = useState([]);
  const [searchstring, setSearchstring] = useState('');
  const sort_module = 'module';
  const sort_charge = 'charge';
  const sort_drone = 'drone';
  const sort_deploy = 'deployable';
  const moduletypes = [ 
    { name:sort_module, text: 'module' }, 
    { name:sort_charge, text: 'charge' }, 
    { name:sort_drone, text: 'drone' }, 
    { name:sort_deploy, text: 'deployable' }, 
  ];
  const [activemodule, setActivemodule] = useState(moduletypes[0]);

  useEffect(async () => {
    const modules = await Rsviewevetypes.getmodules(Store.user);
    setShipmodules(modules);
    setDisplaylist(modules);
    const shipchargeslist = await Rsviewevetypes.getcharges(Store.user);
    setShipcharges(shipchargeslist);
    const shipdroneslist = await Rsviewevetypes.getdrones(Store.user);
    setShipdrones(shipdroneslist);
    const shipdeployableslist = await Rsviewevetypes.getdeployables(Store.user);
    setShipdeployables(shipdeployableslist);
  }, []);

  const filterTypes = async (selectedmodule, searchstring) => {
    let activelist = [];
    if(selectedmodule.name==sort_module) {
      activelist = shipmodules;
    } else if(selectedmodule.name==sort_charge) {
      activelist = shipcharges;
    } else if(selectedmodule.name==sort_drone) {
      activelist = shipdrones;
    } else if(selectedmodule.name==sort_deploy) {
      activelist = shipdeployables;
    }
    let result = activelist.filter(obj => {
      return obj.name.includes(searchstring);
    });
    setDisplaylist(result);
  };

  const searchtextChange = (searchtextevent) => {
    setSearchstring(searchtextevent.target.value);
    filterTypes(activemodule, searchtextevent.target.value);
  }

  const onShipmoduleclick = (item) => {
    setShipmodule(item);
  }

  const addshipmodule = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amount = formdata.get('amount');
    if(amount>0 && shipmodule!==null) {
      props.onShipmoduleadd(shipmodule, amount);
    }
  }

  const changeActivemodule = (selection) => { 
    setActivemodule(selection);
    filterTypes(selection, searchstring);
  };

  const bodyheight = {height: '40rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={addshipmodule}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add Ship module</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true" style={bodyheight}>
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="p-2 flex-fill bg-info">
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline mx-2">
                    <label for="searchtext" className="mx-2">name filter</label>
                    <input type="text" id="searchtext" className="form-input" style={{width:'200px'}} onChange={searchtextChange} defaultValue={searchstring} />
                  </div>
                  <div className="mt-2">
                    <Sortmode modes={moduletypes} sortmode={activemodule} onModeselected={changeActivemodule} />
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
                      <tr className={shipmodule!==null && item.id===shipmodule.id ? "table-active" : "table-info"}  key={index} onClick={() => { onShipmoduleclick(item); } }>
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
              <div className="p-2 flex-fill bg-info">
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline mx-2">
                    <label for="amount" className="mx-2">amount</label>
                    <Form.Control type="number" id="amount" name="amount" defaultValue={1} style={{width:'100px'}} />  
                    <button type="submit" className="btn btn-primary mx-2">add</button>
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

export default Shipmodule_add;