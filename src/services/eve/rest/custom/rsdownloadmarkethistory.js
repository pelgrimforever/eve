import Eveservice from '../../../eveservice.js';

class Rsdownloadmarkethistory extends Eveservice { 

  static restservice = 'rsdownloadmarkethistory';

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

export default Rsdownloadmarkethistory;