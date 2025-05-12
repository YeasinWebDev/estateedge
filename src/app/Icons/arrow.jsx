
import React from 'react'

const Arrow = ({fill='#F5F2ED'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill={fill}>
            <path fill={fill} d="M17 18a1 1 0 0 1-1-1V8H7a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1"></path>
            <path fill={fill} d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A1 1 0 0 1 7 18"></path>
        </svg>
    )
}

export default Arrow