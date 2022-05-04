import React from 'react'
import { Cards } from '../cards/Cards'

export const Section = ({dataArray}) => {
  //mappear esa data y generar <Cards/>
  return (
    <div className='flex flex-col'>
      {dataArray.map((item, index) =>(<Cards key={index} dataCard={item}/>))}
    </div>
  )
}
