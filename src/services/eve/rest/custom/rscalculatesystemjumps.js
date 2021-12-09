import Eveservice from '../../../eveservice.js';

class Rscalculatesystemjumps extends Eveservice { 

  static restservice = 'rscalculatesystemjumps';

  //OPERATIONS

  static startDownload = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      start: true
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

  static getUpdate = async () => {
    const postdata = {
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }

  static stopDownload = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      stop: true
    }
    const result = await super.post(this.restservice, postdata);
    return result;
  }
}

export default Rscalculatesystemjumps;