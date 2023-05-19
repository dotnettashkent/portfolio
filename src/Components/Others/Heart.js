import React from 'react'
import { BiHeart } from 'react-icons/bi'

export const Heart = ({ rating }) => {
    return (
        <div className='ms-auto'>
            <div className='d-flex'>
                <BiHeart className='color-lightn hover-color-primary me-2 mt-1 p-medium' />
                <div className='color-lightn p-medium'>{rating}</div>
            </div>
        </div>
    )
}
