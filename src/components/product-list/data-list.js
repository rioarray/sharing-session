import React from 'react';
import { Avatar } from 'antd';

const MemoComponent = props => {
  console.log(props);
  return props.data.map((item, index) => (
    <div key={index}>
      <Avatar src={item.image} size={100} />
      <div className="product-title">{item.title}</div><br />
      <div className="product-description">{item.description}</div>
    </div>
  ));
};

export default React.memo(MemoComponent);