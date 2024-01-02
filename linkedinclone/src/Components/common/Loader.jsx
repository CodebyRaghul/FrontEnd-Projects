import React from 'react'
import { Flex, Spin } from 'antd';

function Loader() {
  return (
    
    <div className="Loader">
        <p> Please Wait...</p>
        <Flex align="center" gap="middle">
            <Spin size="large" />
        </Flex>
    </div>
  )
}

export default Loader