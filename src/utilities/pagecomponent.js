import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

function Pagecomponent(props) {

  const [showellipsis1, setShowellipsis1] = useState(false);
  const [showellipsis2, setShowellipsis2] = useState(false);
  const [pagestart, setPagestart] = useState(1);
  const [pageend, setPageend] = useState(1);

  //update trade list when systemid is updated
  useEffect(() => {
    const pagescenter = props.config.showMax / 2;
    setShowellipsis1(props.config.currentPage>props.config.showMax);
    setShowellipsis2(props.config.currentPage<=props.config.totalPages-props.config.showMax);
    if(props.config.totalPages<=props.config.showMax) {
    //show all controls except ellipsises if total pages does not exceed wanted max pages
      setPagestart(1);
      setPageend(props.config.totalPages);
    } else {
    //show max wanted controls, calculate start and end point, and determine which ellipsises are needed
      if(props.config.currentPage <= pagescenter) {
        setPagestart(1);
        setPageend(props.config.showMax);
      } else if(props.config.currentPage >= props.config.totalPages - pagescenter) {
        setPagestart(props.config.totalPages - props.config.showMax + 1);
        setPageend(props.config.totalPages);
      } else {
        setPagestart(Math.floor(props.config.currentPage - pagescenter)+1);
        setPageend(Math.floor(props.config.currentPage + pagescenter));
      }
    }
  }, [props.config]);

  const pagebutton_width = {width: '3rem'};

  const getpages = () => {
    let rows = [];
    for (let i = pagestart; i <= pageend; i++) {
      if(i===props.config.currentPage) {
        rows.push(<Pagination.Item active key={i} style={pagebutton_width}>{i}</Pagination.Item>);
      } else {
        rows.push(<Pagination.Item key={i} style={pagebutton_width} onClick={() => props.showpage(i)} >{i}</Pagination.Item>);        
      }
    }
    return <>{rows}</>;
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => props.showpage(1)} />
      <Pagination.Prev onClick={() => props.showpage(props.config.currentPage-1)} />
      <Pagination.Ellipsis style={{visibility: showellipsis1 ? 'visible' : 'hidden' }} onClick={() => props.showpage(props.config.currentPage-props.config.showMax)} />

      {getpages()}

      <Pagination.Ellipsis style={{visibility: showellipsis2 ? 'visible' : 'hidden' }} onClick={() => props.showpage(props.config.currentPage+props.config.showMax)} />
      <Pagination.Next onClick={() => props.showpage(props.config.currentPage+1)} />
      <Pagination.Last onClick={() => props.showpage(props.config.totalPages)} />
      <Form.Label className="input-group-text ml-2">lines</Form.Label>
      <Form.Control type="number" id="pagelength" name="pagelength" style={{ width:'5rem' }} value={props.config.pageLength} onChange={(event) => props.changePagelength(event.target.value)} />
    </Pagination>    
  )
}

export default Pagecomponent;