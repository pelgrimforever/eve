import Eveservice from '../../../eveservice.js';
import SystemJson from '../table/conversion/systemjson.js';
import Rssystem from '../table/rssystem.js';

class Rsloadroute extends Eveservice { 

  static restservice = 'rsloadroute';

  //OPERATIONS

  static getroute = async (origin, destination, viasystems) => {
    const viasystemlist = [];
    viasystems.map(s => {
      viasystemlist.push(s.value);
    });
    const postdata = {
      "origin": origin,
      "destination": destination,
      "viasystems": viasystemlist
    }
    const result = await super.post(this.restservice, postdata);
    return Rssystem.extractDataArray(result);
  }

}

export default Rsloadroute;