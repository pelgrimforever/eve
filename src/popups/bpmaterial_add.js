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

function Bpmaterial_add(props) {

  const [minerals, setMinerals] = useState([]);
  const [salvagedminerals, setSalvagedminerals] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [plancommodities, setPlancommodities] = useState([]);
  const [material, setMaterial] = useState(null);
  const [displaylist, setDisplaylist] = useState([]);
  const [searchstring, setSearchstring] = useState('');
  const sort_mineral = 'mineral';
  const sort_salvage = 'salvage';
  const sort_commodity = 'commodity';
  const sort_material = 'material';
  const sort_planetarycommodities = 'plancommodity';
  const materialtypes = [ 
    { name:sort_mineral, text: 'minerals' }, 
    { name:sort_salvage, text: 'salvaged mat.' }, 
    { name:sort_commodity, text: 'commodity' }, 
    { name:sort_material, text: 'material' }, 
    { name:sort_planetarycommodities, text: 'plan. commodity' }, 
  ];
  const [activematerial, setActivematerial] = useState(materialtypes[0]);

  useEffect(async () => {
    const minerals = await Rsviewevetypes.getminerals(Store.user);
    setMinerals(minerals);
    setDisplaylist(minerals);
    const salvagedmineralslist = await Rsviewevetypes.getsalvagedmaterials(Store.user);
    setSalvagedminerals(salvagedmineralslist);
    const materialslist = await Rsviewevetypes.getmaterials(Store.user);
    setMaterials(materialslist);
    const planetarycommoditieslist = await Rsviewevetypes.getplanetarycommodities(Store.user);
    setPlancommodities(planetarycommoditieslist);
  }, []);

  const filterTypes = async (selectedmaterial, searchstring) => {
    let activelist = [];
    if(selectedmaterial.name===sort_mineral) {
      activelist = minerals.filter(obj => {
        return obj.name.includes(searchstring);
      });
    } else if(selectedmaterial.name===sort_salvage) {
      activelist = salvagedminerals.filter(obj => {
        return obj.name.includes(searchstring);
      });
    } else if(selectedmaterial.name===sort_commodity && searchstring.length>2) {
      activelist = await Rsviewevetypes.getcommodities(Store.user, searchstring + ":*:");
    } else if(selectedmaterial.name==sort_material) {
      activelist = materials.filter(obj => {
        return obj.name.includes(searchstring);
      });
    } else if(selectedmaterial.name===sort_planetarycommodities) {
      activelist = plancommodities.filter(obj => {
        return obj.name.includes(searchstring);
      });
    }
    setDisplaylist(activelist);
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
    if(amount>0 && material!==null) {
      props.onMaterialadd(material, amount);
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
        <ModalTitle className="text-light">Add material</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true" style={bodyheight}>
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="p-2 bg-info d-flex">
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex">
                    <div style={{width:'100%'}}>
                      <Sortmode modes={materialtypes} sortmode={activematerial} onModeselected={changeActivematerial} />
                    </div>
                  </div>
                  <div className="col col-sm-12 d-flex align-items-baseline mt-2">
                    <label for="searchtext" className="mx-2">name filter</label>
                    <input id="searchtext" type="text" className="form-input" style={{width:'200px'}} onChange={searchtextChange} defaultValue={searchstring} />
                    {activematerial.name===sort_commodity && <label for="searchtext" className="mx-2">min 3 char.</label>}
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
              <div className="p-2 bg-info d-flex align-items-baseline">
                <label for="amount" className="mx-2">amount</label>
                <Form.Control type="number" id="amount" name="amount" defaultValue={1} className="mx-2" style={{width:'150px'}} />  
                <button type="submit" className="btn btn-primary">add</button>
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

export default Bpmaterial_add;