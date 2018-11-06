import React, { Component, lazy, Suspense } from 'react';
import { Avatar, Button } from 'antd';

const MemoComponent = lazy(() => import('./data-list'));

const data = [
  {
    title: 'OPPO F5 Black',
    image: 'https://static.bmdstatic.com/pk/product/thumbnail/5a0b9df258490.jpg',
    description: 'Prosesor: Mediatek MT6763T Octa-core 2.5GHz, Kapasitas: 32GB, RAM: 4GB, Ukuran Layar: 6.0 inch,',
  },
  {
    title: 'VIVO V5s Gold',
    image: 'https://static.bmdstatic.com/pk/product/thumbnail/59af74710705d.jpg',
    description: 'Prosesor: Mediatek MT6763T Octa-core 2.5GHz, Kapasitas: 32GB, RAM: 4GB, Ukuran Layar: 6.0 inch,',
  },
  {
    title: 'VIVO V5 Plus Gold',
    image: 'https://static.bmdstatic.com/pk/product/thumbnail/59af7805a9615.jpg',
    description: 'Prosesor: Mediatek MT6763T Octa-core 2.5GHz, Kapasitas: 32GB, RAM: 4GB, Ukuran Layar: 6.0 inch,',
  },
  {
    title: 'VIVO Y53 - Black',
    image: 'https://static.bmdstatic.com/pk/product/thumbnail/VIVO-Y53-Black-Merchant--1952638713-201772895629.jpg',
    description: 'Prosesor: Mediatek MT6763T Octa-core 2.5GHz, Kapasitas: 32GB, RAM: 4GB, Ukuran Layar: 6.0 inch,',
  },
];
function SetListProduct(props) {
  return props.data.map((item, index) => (
    <div key={index}>
      <Avatar src={item.image} size={100} />
      <div className="product-title">{item.title}</div><br />
      <div className="product-description">{item.description}</div>
    </div>
  ));
}

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.setState({ value: 'Hai' });
  }
  render() {
    return (
      <div>
        <SetListProduct data={data} />
        <Suspense fallback={<h2>Product list is loading...</h2>}>
          <MemoComponent data={data} />
        </Suspense>
        {this.state.value}
        <Button
          type="primary"
          onClick={this.onClick}
        >
          Click Here
        </Button>
      </div>
    );
  }
};

export default ProductList;
