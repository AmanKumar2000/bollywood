import React from 'react';

function bw(props) {

  const ret=props.remant.map(function(item,index){

    return (<button className="x" key={index} onClick={() => props.onClick(item)} > {item } &nbsp;</button>);

  });


  return (
<div className="butan">
<h3>KEYS LEFT:</h3>
<div >{ret} </div>
 </div>
  );
}

export default bw;
