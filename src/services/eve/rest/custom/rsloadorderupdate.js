import Eveservice from '../../../eveservice.js';
import OrdersJson from '../table/conversion/ordersjson.js';

class Rsloadorderupdate extends Eveservice { 

  static restservice = 'rsloadorderupdate';

  //OPERATIONS

  static getorderupdate = async (user, sellorderid, buyorderid) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      sellorderid: sellorderid,
      buyorderid: buyorderid
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

}

export default Rsloadorderupdate;