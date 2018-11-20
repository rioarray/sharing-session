import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Col, Row } from 'antd';

export class MemoComponent extends Component {
  render() {
    console.log("render childs class component");
    return (
      this.props.data.length > 0 &&
      this.props.data.map((item, index) => {
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
      })
    );
  }
}

MemoComponent.propTypes = {
  data: PropTypes.array,
};

MemoComponent.defaultProps = {
  data: [],
};

export default React.memo(MemoComponent);
