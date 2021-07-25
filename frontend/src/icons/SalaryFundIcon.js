import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class SalaryFundIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         d='M4.51904 0.0119934H23.51C24.5709 0.0119934 25.5883 0.433421 26.3385 1.18357C27.0886 1.93371 27.51 2.95113 27.51 4.01199V23.003C27.51 24.0639 27.0886 25.0813 26.3385 25.8314C25.5883 26.5816 24.5709 27.003 23.51 27.003H4.51904C3.45818 27.003 2.44076 26.5816 1.69062 25.8314C0.94047 25.0813 0.519043 24.0639 0.519043 23.003V4.01199C0.519043 2.95113 0.94047 1.93371 1.69062 1.18357C2.44076 0.433421 3.45818 0.0119934 4.51904 0.0119934V0.0119934Z'
                         fill={color}
                    />
                    <path
                         d='M18.643 8.53599L14.507 12.636L13.143 11.268L9.04305 15.407L10.409 16.773L13.143 14L14.507 15.366L19.971 9.90199L18.643 8.53599ZM9.04305 18.099V19.465H19.972V18.099H9.04305Z'
                         fill='white'
                    />
               </svg>
          )
     }
}

SalaryFundIcon.propTypes = {
     color: string,
     size: number,
}

SalaryFundIcon.defaultProps = {
     color: '#485aff',
     size: 27,
}
