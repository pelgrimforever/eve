import Eveservice from '../../../eveservice.js';
import SystemJson from '../table/conversion/systemjson.js';
import Rsviewsystem from '../view/rsviewsystem.js';

class Rscreateshipfitroute extends Eveservice { 

  static restservice = 'rscreateshipfitroute';
  

  //OPERATIONS

  static getroute = async (origin, destination, username) => {
    const postdata = {
      "origin": origin,
      "destination": destination,
      "username": username
    }
    const result = await super.post(this.restservice, postdata);
    return Rsviewsystem.extractDataArray(result);
  }

}

export default Rscreateshipfitroute;