import React from 'react';

function FuncGroupBandElement(props) {
  console.log("render childs function component");
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
}

export default React.memo(FuncGroupBandElement);
