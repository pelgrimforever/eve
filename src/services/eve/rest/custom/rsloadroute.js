import Eveservice from '../../../eveservice.js';
import SystemJson from '../table/conversion/systemjson.js';
import Rssystem from '../table/rssystem.js';

class Rsloadroute extends Eveservice { 

  //static restservice = 'rsloadroute';
  static restservice = 'rscreateroutes';
  

  //OPERATIONS

  static getroute = async (origin, destination, viasystems, avoidsystems, secure) => {
    const viasystemlist = [];
    viasystems.map(s => {
      viasystemlist.push(s.value);
    });
    const avoidsystemlist = [];
    avoidsystems.map(s => {
      avoidsystemlist.push(s.value);
    });
    const postdata = {
      "origin": origin,
      "destination": destination,
      "viasystems": viasystemlist,
      "avoidsystems": avoidsystemlist,
      "secure": secure
    }
    const result = await super.post(this.restservice, postdata);
    return Rssystem.extractDataArray(result);
  }

}

export default Rsloadroute;