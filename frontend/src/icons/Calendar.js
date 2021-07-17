import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Calendar extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 25 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         opacity='1'
                         d='M7.762 27.592C2.615 27.592 0 25.262 0 20.674V9.264C0 6.518 0.936 4.553 2.856 3.406C3.00347 3.30505 3.17655 3.248 3.35514 3.24145C3.53374 3.2349 3.71053 3.27913 3.865 3.369C4.0205 3.46086 4.14771 3.59376 4.23271 3.75311C4.31771 3.91247 4.35721 4.09215 4.34688 4.27246C4.33655 4.45277 4.2768 4.62677 4.17416 4.77538C4.07153 4.92399 3.92997 5.04149 3.765 5.115C2.5 5.871 1.9 7.189 1.9 9.264V9.629H19.4C19.6557 9.629 19.9009 9.73056 20.0817 9.91135C20.2624 10.0921 20.364 10.3373 20.364 10.593C20.364 10.8487 20.2624 11.0939 20.0817 11.2746C19.9009 11.4554 19.6557 11.557 19.4 11.557H1.9V20.673C1.9 24.173 3.6 25.627 7.766 25.652H17.076C21.176 25.652 22.93 24.163 22.93 20.661V9.252C22.93 6.201 21.598 4.724 18.563 4.37V5.3C18.5326 5.53738 18.4145 5.75478 18.2318 5.90942C18.0492 6.06407 17.8153 6.14475 17.5761 6.1356C17.337 6.12644 17.1099 6.02811 16.9396 5.85996C16.7693 5.6918 16.6682 5.46601 16.656 5.227V0.928998C16.6601 0.801801 16.6894 0.676678 16.7421 0.560832C16.7948 0.444987 16.8698 0.340708 16.963 0.253998C17.0543 0.167802 17.1619 0.100885 17.2796 0.0572438C17.3973 0.0136025 17.5226 -0.00586723 17.648 -2.20782e-06C17.9014 0.0182176 18.1379 0.133929 18.3077 0.322825C18.4776 0.51172 18.5677 0.7591 18.559 1.013V2.442C22.71 2.842 24.833 5.142 24.833 9.264V20.674C24.833 25.262 22.218 27.593 17.071 27.593L7.762 27.592ZM17 20.808C16.9985 20.649 17.0284 20.4913 17.088 20.3439C17.1475 20.1965 17.2355 20.0622 17.347 19.9488C17.4584 19.8354 17.5911 19.7451 17.7375 19.683C17.8838 19.6209 18.041 19.5883 18.2 19.587H18.188C18.3472 19.5856 18.505 19.6161 18.6522 19.6767C18.7994 19.7373 18.933 19.8269 19.045 19.94C19.273 20.1713 19.4006 20.4832 19.4 20.808C19.4 21.1263 19.2736 21.4315 19.0485 21.6565C18.8235 21.8816 18.5183 22.008 18.2 22.008C17.8817 22.008 17.5765 21.8816 17.3515 21.6565C17.1264 21.4315 17 21.1263 17 20.808ZM11.241 20.808C11.2451 20.5716 11.319 20.3417 11.4534 20.1471C11.5877 19.9526 11.7765 19.802 11.9961 19.7144C12.2157 19.6268 12.4563 19.606 12.6877 19.6547C12.9191 19.7033 13.1309 19.8192 13.2967 19.9879C13.4624 20.1565 13.5746 20.3703 13.6192 20.6025C13.6639 20.8347 13.6389 21.0749 13.5475 21.2929C13.4561 21.511 13.3023 21.6972 13.1054 21.8281C12.9086 21.9591 12.6774 22.029 12.441 22.029C12.282 22.0277 12.1248 21.9951 11.9785 21.933C11.8321 21.8709 11.6994 21.7806 11.588 21.6672C11.4765 21.5538 11.3885 21.4195 11.329 21.2721C11.2694 21.1247 11.2395 20.967 11.241 20.808ZM5.495 20.808C5.49355 20.649 5.52345 20.4913 5.58298 20.3439C5.64251 20.1965 5.73052 20.0622 5.84196 19.9488C5.95341 19.8354 6.08611 19.7451 6.23247 19.683C6.37884 19.6209 6.53601 19.5883 6.695 19.587H6.683C6.84205 19.5855 6.99977 19.616 7.14681 19.6767C7.29385 19.7373 7.42721 19.8269 7.539 19.94C7.7675 20.171 7.89515 20.4831 7.894 20.808C7.894 21.1263 7.76757 21.4315 7.54253 21.6565C7.31748 21.8816 7.01226 22.008 6.694 22.008C6.37574 22.008 6.07052 21.8816 5.84547 21.6565C5.62043 21.4315 5.494 21.1263 5.494 20.808H5.495ZM17 15.865C16.9987 15.7061 17.0287 15.5486 17.0883 15.4013C17.1479 15.2541 17.2359 15.12 17.3474 15.0068C17.4588 14.8936 17.5915 14.8035 17.7378 14.7416C17.8841 14.6796 18.0411 14.6472 18.2 14.646H18.188C18.3472 14.6443 18.5052 14.6747 18.6524 14.7353C18.7996 14.796 18.9332 14.8856 19.045 14.999C19.2729 15.23 19.4005 15.5415 19.4 15.866C19.4 16.1843 19.2736 16.4895 19.0485 16.7145C18.8235 16.9396 18.5183 17.066 18.2 17.066C17.8817 17.066 17.5765 16.9396 17.3515 16.7145C17.1264 16.4895 17 16.1843 17 15.866V15.865ZM11.241 15.865C11.2451 15.6286 11.319 15.3987 11.4534 15.2041C11.5877 15.0096 11.7765 14.859 11.9961 14.7714C12.2157 14.6838 12.4563 14.663 12.6877 14.7117C12.9191 14.7603 13.1309 14.8762 13.2967 15.0449C13.4624 15.2135 13.5746 15.4273 13.6192 15.6595C13.6639 15.8917 13.6389 16.1319 13.5475 16.3499C13.4561 16.568 13.3023 16.7542 13.1054 16.8851C12.9086 17.0161 12.6774 17.086 12.441 17.086C12.282 17.0847 12.1248 17.0521 11.9785 16.99C11.8321 16.9279 11.6994 16.8376 11.588 16.7242C11.4765 16.6108 11.3885 16.4765 11.329 16.3291C11.2694 16.1817 11.2395 16.024 11.241 15.865ZM5.495 15.865C5.4926 15.5443 5.61766 15.2357 5.84267 15.0071C6.06769 14.7785 6.37426 14.6486 6.695 14.646H6.683C6.84199 14.6445 6.99965 14.6751 7.14655 14.7359C7.29345 14.7968 7.42659 14.8866 7.538 15C7.76635 15.2307 7.894 15.5424 7.893 15.867C7.893 16.1853 7.76657 16.4905 7.54153 16.7155C7.31648 16.9406 7.01126 17.067 6.693 17.067C6.37474 17.067 6.06952 16.9406 5.84447 16.7155C5.61943 16.4905 5.493 16.1853 5.493 15.867L5.495 15.865ZM7.2 6.2C6.94854 6.19112 6.71067 6.08367 6.53778 5.90086C6.36488 5.71805 6.27085 5.47456 6.276 5.223V1.015C6.29904 0.778095 6.40945 0.558254 6.58572 0.398302C6.76198 0.23835 6.99148 0.149743 7.2295 0.149743C7.46752 0.149743 7.69702 0.23835 7.87328 0.398302C8.04955 0.558254 8.15996 0.778095 8.183 1.015V2.345H13.6C13.8557 2.345 14.1009 2.44656 14.2817 2.62735C14.4624 2.80813 14.564 3.05333 14.564 3.309C14.564 3.56467 14.4624 3.80986 14.2817 3.99065C14.1009 4.17143 13.8557 4.273 13.6 4.273H8.158V5.237C8.15831 5.49423 8.05694 5.74116 7.876 5.924C7.78835 6.0122 7.68411 6.08217 7.56929 6.12988C7.45447 6.1776 7.33134 6.20211 7.207 6.202L7.2 6.2Z'
                         fill={color}
                    />
               </svg>
          )
     }
}

Calendar.propTypes = {
     color: string,
     size: number,
}

Calendar.defaultProps = {
     color: 'green',
     size: 27,
}
