import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product/Product'
import { productListAction } from '../action/productAction'

const Home = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, products } = productList

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <h2>در حال دریافت محصولات....</h2>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Product product={item} />
              </Col>
            )
          })}
        </Row>
      )}
    </div>
  )
}

export default Home
