//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 17, 2018, 17:05:01 PM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Fieldsearcher from './fieldsearcher';

class Datesearcher extends Fieldsearcher {
	constructor(fieldname) { 
    super(fieldname); 
    this.type = this.datesearcher;
  }

	operators: number[] = [];

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

export default Datesearcher;
