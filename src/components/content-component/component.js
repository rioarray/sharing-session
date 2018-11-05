import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export class ContentComponent extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {this.props.children}
        </div>
      </Content>
    );
  }
};

ContentComponent.propTypes = {
  children: PropTypes.element,
};

ContentComponent.defaultProps = {
  children: null,
};

export default ContentComponent;
