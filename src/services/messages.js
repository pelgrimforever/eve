class Messages {

	message = '';
  messagetype = '';

  //subscribers
  notifyactions = {};

  //subscribe a component
  notifyme = (componentname, notifyaction) => {
    this.notifyactions[componentname] = notifyaction;
  }

  //notify all subscribers
  notifyall = () => {
    for(var componentname in this.notifyactions) {
      this.notifyactions[componentname]();
    };
  }

  setmessage = (mesg, type) => {
    this.message = mesg;
    this.messagetype = type;
    this.notifyall();
	};

}

export default Messages;
