import React from 'react'
import './suggestionProduct.scss'
import { DataProduct } from '../../assets/data-product/dataProduct'
import { Card } from './card/card'
export const SuggestionProduct = () => {
  return (
    <div className='suggestionProduct'>
        <div className="suggestionProduct_header">
            <h3>GỢI Ý CHO BẠN</h3>
        </div>
        <div className="suggestionProduct_content">
            {DataProduct.map((item, index) => (
              <Card key={index} item={item}/>
            ))}
        </div>
    </div>
  )
}
