import React from 'react';

function bw(props) {
  const bollywood=['B','O','L','L','Y','W','O','O','D'];
  const ret=bollywood.map(function(item,index){
    if(props.count<=index)
    return (<h1 key={index} >{item } &nbsp;</h1>);
    else
    return (<h1 key={index} style={{textDecoration: 'line-through'} }> {item } &nbsp;</h1>);

  });

var colorClass=props.over?"boll green":props.count<9?"boll":"boll red"

  return (
<div className="bw">

<div className={colorClass}>{ret} </div>
 </div>
  );
}

export default bw;
