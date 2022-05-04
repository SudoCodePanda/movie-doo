import React from 'react'

export const Cards = ({dataCard}) => {
  return (
    <div className='flex my-4 mx-4'>
        <div className=''><img className='object-contain w-44 h-44 max-w-none' src={dataCard.Poster} alt="Movie image" /></div>
        <div>
            <h6>Titulo: {dataCard.Title}</h6>
            <h6>Año: {dataCard.Year}</h6>
            <h6>Categoria: {dataCard.Type}</h6>
        </div>
    </div>
  )
}
