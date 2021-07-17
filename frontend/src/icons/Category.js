import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Catagory extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='1'>
                         <path
                              opacity='1'
                              d='M18.356 26.214C17.2943 26.193 16.2833 25.7554 15.5414 24.9957C14.7994 24.2359 14.3859 23.2149 14.39 22.153V18.192C14.3804 17.1297 14.7926 16.1069 15.5361 15.348C16.2795 14.5891 17.2937 14.1561 18.356 14.144H22.236C23.2977 14.1613 24.3099 14.5956 25.054 15.353C25.7982 16.1105 26.2145 17.1302 26.213 18.192V22.153C26.2132 23.2156 25.7969 24.236 25.0534 24.9953C24.3099 25.7545 23.2984 26.192 22.236 26.214H18.356ZM16.518 18.192V22.153C16.5132 22.6497 16.7056 23.128 17.053 23.483C17.2203 23.6557 17.4207 23.7929 17.6421 23.8865C17.8636 23.9802 18.1016 24.0283 18.342 24.028H22.25C22.4904 24.0283 22.7285 23.9802 22.9499 23.8865C23.1714 23.7929 23.3717 23.6557 23.539 23.483C23.711 23.3072 23.8467 23.0993 23.9383 22.8711C24.03 22.6429 24.0757 22.3989 24.073 22.153V18.192C24.0747 17.6965 23.8815 17.2202 23.535 16.866C23.3662 16.692 23.1641 16.5537 22.9408 16.4594C22.7175 16.3651 22.4774 16.3167 22.235 16.317H18.355C17.8629 16.3225 17.3931 16.5231 17.0487 16.8746C16.7043 17.2261 16.5135 17.6999 16.518 18.192ZM3.97701 26.2C2.91845 26.1668 1.91367 25.7258 1.17256 24.9693C0.431456 24.2127 0.0113497 23.199 5.67513e-06 22.14V18.192C-0.00177785 17.1205 0.416884 16.0911 1.16601 15.325C1.53195 14.9504 1.96922 14.6529 2.45201 14.4501C2.9348 14.2472 3.45333 14.1432 3.97701 14.144H5.57101C5.77179 14.1226 5.97452 14.1589 6.15538 14.2487C6.33624 14.3385 6.48771 14.4781 6.59201 14.651C6.69848 14.8254 6.75481 15.0257 6.75481 15.23C6.75481 15.4343 6.69848 15.6346 6.59201 15.809C6.48775 15.982 6.33632 16.1217 6.15548 16.2117C5.97463 16.3016 5.77188 16.3382 5.57101 16.317H3.97701C3.48375 16.3223 3.01258 16.5223 2.66622 16.8736C2.31986 17.2248 2.12639 17.6987 2.12801 18.192V22.1C2.13552 22.5905 2.33194 23.0591 2.67637 23.4084C3.0208 23.7577 3.48668 23.9606 3.97701 23.975H7.88201C8.12512 23.9764 8.36604 23.9289 8.59041 23.8353C8.81478 23.7416 9.01801 23.6038 9.18801 23.43C9.53691 23.0754 9.73201 22.5975 9.73101 22.1V16.23C9.69143 16.0167 9.71579 15.7965 9.80102 15.5971C9.88624 15.3976 10.0285 15.2278 10.21 15.109C10.3898 14.9919 10.601 14.9325 10.8155 14.9387C11.0299 14.945 11.2374 15.0166 11.41 15.144C11.585 15.2731 11.7178 15.4511 11.7917 15.6556C11.8655 15.8601 11.8771 16.0819 11.825 16.293V22.14C11.8304 22.6679 11.7318 23.1916 11.5347 23.6814C11.3377 24.1711 11.0461 24.6173 10.6766 24.9943C10.3071 25.3713 9.86691 25.6718 9.38123 25.8787C8.89556 26.0856 8.37388 26.1948 7.84601 26.2H3.97701ZM20.677 12.107C20.4176 12.0668 20.1811 11.9351 20.0103 11.7357C19.8395 11.5364 19.7456 11.2825 19.7456 11.02C19.7456 10.7575 19.8395 10.5036 20.0103 10.3043C20.1811 10.1049 20.4176 9.97324 20.677 9.933H22.234C22.4786 9.93122 22.7204 9.88029 22.9449 9.78323C23.1694 9.68617 23.3721 9.54496 23.541 9.368C23.887 9.00565 24.077 8.52197 24.07 8.021V4.06C24.0683 3.56994 23.8756 3.09987 23.5327 2.74972C23.1898 2.39957 22.7239 2.19698 22.234 2.185H18.354C17.862 2.19054 17.3923 2.39111 17.0481 2.74266C16.7039 3.09421 16.5132 3.568 16.518 4.06V9.983C16.5117 10.2688 16.3936 10.5407 16.1891 10.7404C15.9845 10.9401 15.7099 11.0516 15.424 11.051C15.2834 11.0475 15.1448 11.0158 15.0167 10.9577C14.8885 10.8997 14.7734 10.8164 14.678 10.713C14.4837 10.5007 14.3803 10.2207 14.39 9.933V4.06C14.3852 2.98879 14.8006 1.9584 15.547 1.19C15.9122 0.814294 16.3488 0.515455 16.8312 0.311084C17.3136 0.106713 17.8321 0.000941933 18.356 0L22.236 0C23.2924 0.0362484 24.294 0.478564 25.0324 1.23485C25.7708 1.99113 26.189 3.00308 26.2 4.06V8.009C26.215 9.07829 25.8109 10.111 25.074 10.886C24.7136 11.265 24.2812 11.5684 23.8022 11.7782C23.3231 11.988 22.807 12.1002 22.284 12.108L20.677 12.107ZM7.86601 12.07H3.97701C2.91542 12.0519 1.9035 11.6172 1.1595 10.8598C0.415505 10.1023 -0.000935973 9.08274 5.67513e-06 8.021V4.06C-0.000216384 2.99745 0.41612 1.97715 1.15966 1.2181C1.9032 0.459041 2.91468 0.0217221 3.97701 0L7.85701 0C8.921 0.016838 9.93544 0.452581 10.6802 1.21267C11.4249 1.97276 11.8399 2.99588 11.835 4.06V8.021C11.8396 9.09303 11.4205 10.1235 10.669 10.888C10.3052 11.2624 9.86985 11.5599 9.38888 11.763C8.90792 11.966 8.39108 12.0704 7.86901 12.07H7.86601ZM2.65501 2.722C2.30113 3.07758 2.10171 3.55834 2.10001 4.06V8.021C2.09499 8.27249 2.13997 8.52248 2.23232 8.75645C2.32468 8.99043 2.46257 9.20373 2.63801 9.384C2.80723 9.55745 3.0094 9.69535 3.23263 9.78963C3.45587 9.8839 3.69568 9.93264 3.93801 9.933H7.85801C8.10301 9.93189 8.34526 9.88126 8.5702 9.78417C8.79515 9.68708 8.99815 9.54552 9.16701 9.368C9.51412 9.00636 9.70426 8.5222 9.69601 8.021V4.06C9.69533 3.56913 9.50248 3.09803 9.15876 2.74758C8.81504 2.39713 8.34777 2.19519 7.85701 2.185H3.94101C3.70179 2.18504 3.46496 2.23252 3.24422 2.32469C3.02348 2.41687 2.82321 2.55191 2.65501 2.722Z'
                              fill={color}
                         />
                    </g>
               </svg>
          )
     }
}

Catagory.propTypes = {
     color: string,
     size: number,
}

Catagory.defaultProps = {
     color: 'green',
     size: 27,
}
