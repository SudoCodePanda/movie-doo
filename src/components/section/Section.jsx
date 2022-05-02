import React from 'react'
import { Cards } from '../cards/Cards'

export const Section = ({dataArray, header}) => {
  //mappear esa data y generar <Cards/>
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl font-bold w-full text-center'>{header}</h1>
      {dataArray.map((item, index) =>(<Cards key={index} dataCard={item}/>))}
    </div>
  )
}
