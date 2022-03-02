import Eveservice from '../../../eveservice.js';
import ViewuserbpJson from '../view/conversion/viewuserbpjson.js';
import Rssystem from '../table/rssystem.js';

class Rsbpproduction extends Eveservice { 

  static restservice = 'rsbpproduction';

  //OPERATIONS

  static calculateprices = async (user, viewuserbp) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      viewuserbp: ViewuserbpJson.toJSON(viewuserbp)
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

}

export default Rsbpproduction;