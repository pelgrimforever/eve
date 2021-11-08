//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 18, 2018, 11:48:01 PM
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import Fieldsearcher from './fieldsearcher';

class Numbersearcher extends Fieldsearcher {
	constructor(fieldname) { 
    super(fieldname); 
    this.type = this.stringsearcher;
  }

	operators: number[] = [];

  setCompareoperator = (compare) => {
    this.type = this.numbersearcher;
    this.operators = [];
  }

  reset = () => {
    this.values = [];
    this.operators = [];
  }

  toJSON = () => {
    var json = {
    values: this.valuestoJSON(), 
      operators: this.operators,
      andor: this.andoroperator
    };
    return json;
  }

}

export default Numbersearcher;
