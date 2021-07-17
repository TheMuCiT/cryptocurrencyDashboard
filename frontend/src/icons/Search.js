import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Search extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='1'>
                         <path
                              opacity='1'
                              d='M27.255 26.67L22.513 22.033L22.402 21.864C22.193 21.6581 21.9114 21.5426 21.618 21.5426C21.3246 21.5426 21.043 21.6581 20.834 21.864C18.8658 23.6546 16.324 24.6855 13.6646 24.7716C11.0051 24.8577 8.40193 23.9935 6.322 22.334C4.2642 20.7055 2.88409 18.3711 2.44901 15.7832C2.01393 13.1952 2.55486 10.5379 3.967 8.326C5.4149 6.09799 7.61144 4.46083 10.1603 3.70993C12.7091 2.95903 15.4424 3.14384 17.867 4.231C20.2798 5.27748 22.2216 7.17743 23.3205 9.56684C24.4193 11.9563 24.5979 14.6671 23.822 17.18C23.7649 17.3636 23.758 17.5592 23.8022 17.7463C23.8463 17.9334 23.9398 18.1053 24.073 18.244C24.2083 18.3849 24.3778 18.4884 24.5649 18.5445C24.752 18.6005 24.9505 18.6073 25.141 18.564C25.3307 18.5224 25.5061 18.4317 25.6496 18.3009C25.7932 18.1702 25.8999 18.004 25.959 17.819C26.8875 14.8357 26.6998 11.6165 25.4307 8.7613C24.1616 5.90614 21.8978 3.60974 19.061 2.3C16.207 0.943232 12.9665 0.634157 9.90738 1.42694C6.84831 2.21973 4.16582 4.06381 2.33 6.636C0.534556 9.18572 -0.265855 12.3043 0.079732 15.4035C0.425319 18.5028 1.89302 21.3684 4.206 23.46C6.54901 25.5851 9.56363 26.8203 12.7241 26.9502C15.8846 27.0801 18.9905 26.0966 21.5 24.171L25.7 28.276C25.9106 28.4789 26.1916 28.5922 26.484 28.5922C26.7764 28.5922 27.0574 28.4789 27.268 28.276C27.371 28.1753 27.4528 28.0551 27.5087 27.9223C27.5646 27.7896 27.5933 27.647 27.5933 27.503C27.5933 27.359 27.5646 27.2164 27.5087 27.0837C27.4528 26.9509 27.371 26.8307 27.268 26.73L27.255 26.67Z'
                              fill={color}
                         />
                    </g>
               </svg>
          )
     }
}

Search.propTypes = {
     color: string,
     size: number,
}

Search.defaultProps = {
     color: 'green',
     size: 27,
}
