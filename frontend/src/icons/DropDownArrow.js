import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class DropDownArrow extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M5.24505 4.464L0.837052 0.456005L9.65405 0.456005L5.24505 4.464Z' fill={color} />
               </svg>
          )
     }
}

DropDownArrow.propTypes = {
     color: string,
     size: number,
}

DropDownArrow.defaultProps = {
     color: '#485aff',
     size: 27,
}
