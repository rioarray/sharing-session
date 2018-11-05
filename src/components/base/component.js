import React, { Component } from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from '../../components/header-component';
import { ContentComponent } from '../../components/content-component';
import { FooterComponent } from '../../components/footer-component';
import { ProductList } from '../../components/product-list';

export class Base extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderComponent />
        <ContentComponent>
          <ProductList />
        </ContentComponent>
        <FooterComponent />
      </Layout>
    );
  }
}

export default Base;
