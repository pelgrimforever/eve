import React from 'react';

class Appevents {

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

	evecounter = 0;
	eveinc = () => {
		this.evecounter += 1;
		this.notifyall();
	}

}

export default Appevents;
