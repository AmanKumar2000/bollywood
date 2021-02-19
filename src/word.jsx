import React from 'react';


function word(props) {
  var disp=props.movie.slice(0);
  var dispa=[];
var checkinForComplete=0;
  for(var i=0;i<disp.length;i++){
    if(disp[i]===' ')
        dispa.push('@');
    else if (props.keys.findIndex((element) => element === disp[i]) === -1&&props.countb<9)
    {dispa.push('_');
     disp=disp.substr(0, i) +"_" + disp.substr(i + 1);

  checkinForComplete++;
}
    else
    dispa.push(disp[i]);

  }

  var ret=dispa.map(function(item,index){
    if(item==='@')
    return (<h2 key={index}> &nbsp;  &nbsp;  &nbsp; </h2>);
    else
      return (<h2 key={index}> {item}</h2>);

  });;

  if(disp===props.movie&&props.countb<9)
  {props.finish();
  console.log("green");}
  return (
  <div className="word">
  <div className="woll"> {ret}  </div>
  </div>
  );
}

export default word;
