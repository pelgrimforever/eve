import Eveservice from '../../../eveservice.js';
import SystemJson from '../table/conversion/systemjson.js';
import Rssystemsuper from '../table/super/rssystemsuper.js';

class Rsloadroute extends Eveservice { 

  static restservice = 'rsloadroute';

  //OPERATIONS

  static getroute = async (origin, destination) => {
    const postdata = {
      "origin": origin,
      "destination": destination
    }
    const result = await super.post(this.restservice, postdata);
    return Rssystemsuper.extractDataArray(result);
  }

}

export default Rsloadroute;