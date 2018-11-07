import React, { Component, Fragment, lazy, Suspense } from 'react';
import axios from 'axios';
import { Avatar, Button, Col, Icon, Row } from 'antd';

const MemoComponent = lazy(() => import('./data-list'));
const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin tip="Loading..." />;

function SetListProduct(props) {
  const content = props.data.map((item, index) => {
    const thumbnail = item['im:image'][2].label;
    const artist = item['im:artist'].label;
    const albums = item['im:name'].label;
    const price = item['im:price'].label;

    return (
      <Row
        key={index}
        gutter={16}
        style={{ padding: '5px 0' }}
      >
        <Col lg={2} md={2} sm={2}>
          <Avatar src={thumbnail} shape="square" style={{ height: '100%', width: '100%' }} />
        </Col>
        <Col lg={22} md={22} sm={22}>
          <h3 style={{ display: 'inline-block', marginBottom: 0 }}>{artist}</h3>
          <div>{albums}</div>
          <div style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 25 }}>{price}</div>
        </Col>
      </Row>
    );
  });
  return content;
}

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      product: [],
    };

    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    const url = 'https://itunes.apple.com/id/rss/topalbums/limit=3/json';
    axios.get(url)
      .then((response) => {
        this.setState({
          product: response.data.feed.entry,
        });
      });
  }
  onClick(e) {
    e.preventDefault();
    this.setState({ value: 'Hai' });
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Col lg={12} md={12}>
            <SetListProduct data={this.state.product} />
          </Col>
          <Col lg={12} md={12}>
            <Suspense fallback={loadingIcon}>
              <MemoComponent data={this.state.product} />
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col>{this.state.value}</Col>
          <Col>
            <Button
              type="primary"
              onClick={this.onClick}
            >
              Click Here
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
};

export default ProductList;
