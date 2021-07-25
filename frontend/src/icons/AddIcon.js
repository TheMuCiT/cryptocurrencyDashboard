import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class AddIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         d='M0.729971 17.767L21 9.07597L0.729971 0.383972L0.719971 7.14397L15.206 9.07497L0.719971 11.007L0.729971 17.767Z'
                         fill={color}
                    />
               </svg>
          )
     }
}

AddIcon.propTypes = {
     color: string,
     size: number,
}

AddIcon.defaultProps = {
     color: '#485AFF',
     size: 27,
}
