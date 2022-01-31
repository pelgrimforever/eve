import Eveservice from '../../../eveservice.js';
import ViewuserbpJson from '../view/conversion/viewuserbpjson.js';
import Rssystem from '../table/rssystem.js';

class Rsbpproduction extends Eveservice { 

  //static restservice = 'rsloadroute';
  static restservice = 'rsbpproduction';
  

  //OPERATIONS

  static calculateprices = async (viewuserbp) => {
    const postdata = {
      "viewuserbp": ViewuserbpJson.toJSON(viewuserbp)
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

}

export default Rsbpproduction;