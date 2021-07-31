import React, { useState, useEffect } from 'react';

//app components

//services

//data models

export default function Sortmode(props) {
  const clickmode = (mode, index) => {
    props.onModeselected(mode);
  };

  const getClass = (name, mode) => {
    if(props.sortmode!=null && mode.name===props.sortmode.name)
      return name + ' active';
    return name;
  };

  let modebuttons = props.modes.map((item, index) =>
  <button key={item.name} className={getClass("btn btn-primary", item)} onClick={() => clickmode(item, index)}>
    {item.text}
  </button>
    );

  return (
<div className="d-flex btn-group btn-group-sm p-0" role="group" data-toggle="button">
  <span className="mr-2">{props.title}</span>{modebuttons}
</div>
  );

}
