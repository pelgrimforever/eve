import Eveservice from '../../../eveservice.js';
import ViewevetypesJson from '../view/conversion/viewevetypesjson.js';
import Rssystem from '../table/rssystem.js';

class Rsbpsimulatemarket extends Eveservice { 

  static restservice = 'rsbpsimulatemarket';
  

  //OPERATIONS

  static simulateprice = async (user, viewbp, username, bpprice, bpbreakeven, bpmaterialefficiency, researchcost, stationfee) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      username: username,
      viewblueprint: ViewevetypesJson.toJSON(viewbp),
      bpprice: bpprice,
      bpbreakeven: bpbreakeven,
      bpmaterialefficiency: bpmaterialefficiency,
      researchcost: researchcost,
      stationfee: stationfee
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

}

export default Rsbpsimulatemarket;