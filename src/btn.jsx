import React from 'react';

function bw(props) {

  const ret=props.remant.map(function(item,index){

    return (<button key={index} > {item } &nbsp;</button>);

  });


  return (
<div className="butan">
<h3>KEYS LEFT:</h3>
<div className="x">{ret} </div>
 </div>
  );
}

export default bw;
