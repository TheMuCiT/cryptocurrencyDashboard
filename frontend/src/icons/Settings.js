import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Settings extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 27 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='1'>
                         <path
                              opacity='1'
                              d='M8.519 23.957C8.52162 23.701 8.45232 23.4495 8.319 23.231C8.11315 22.891 7.78334 22.6441 7.39907 22.5424C7.0148 22.4408 6.60607 22.4922 6.259 22.686C5.41942 23.1326 4.44219 23.2458 3.52276 23.0029C2.60333 22.76 1.80949 22.179 1.3 21.376L0.453999 19.934C-0.00214806 19.1115 -0.117205 18.1428 0.133583 17.2363C0.384371 16.3299 0.980962 15.5581 1.795 15.087C2.01913 14.9587 2.20673 14.7752 2.34 14.554C2.46292 14.3878 2.54861 14.1972 2.59123 13.9949C2.63385 13.7927 2.63241 13.5836 2.587 13.382C2.53989 13.1794 2.45051 12.9891 2.3247 12.8235C2.1989 12.6579 2.03952 12.5207 1.857 12.421C1.04257 11.9503 0.445638 11.1785 0.194809 10.2719C-0.056021 9.36525 0.0593259 8.39638 0.515999 7.574C0.676144 7.33989 0.921738 7.17796 1.2 7.123C1.48136 7.06803 1.77307 7.12508 2.013 7.282C2.2386 7.42925 2.39737 7.65919 2.45516 7.92232C2.51295 8.18545 2.46513 8.46076 2.322 8.689C2.22475 8.85637 2.16203 9.04153 2.13753 9.23355C2.11303 9.42557 2.12725 9.62055 2.17936 9.80698C2.23147 9.99341 2.3204 10.1675 2.44091 10.319C2.56142 10.4705 2.71106 10.5963 2.881 10.689C3.41786 11.0074 3.86181 11.461 4.16853 12.0046C4.47525 12.5482 4.634 13.1627 4.62894 13.7869C4.62388 14.411 4.45518 15.0229 4.13969 15.5615C3.8242 16.1 3.37295 16.5464 2.831 16.856C2.66116 16.9488 2.51162 17.0747 2.39119 17.2262C2.27076 17.3777 2.18187 17.5517 2.12978 17.7381C2.07768 17.9245 2.06343 18.1195 2.08785 18.3114C2.11228 18.5034 2.17489 18.6886 2.272 18.856L3.134 20.3C3.2315 20.4721 3.36269 20.6228 3.51973 20.7431C3.67677 20.8633 3.85643 20.9507 4.048 21C4.24029 21.0501 4.44062 21.0615 4.63736 21.0335C4.83409 21.0055 5.0233 20.9387 5.194 20.837C5.75027 20.5229 6.37919 20.3601 7.018 20.365C7.99384 20.3535 8.93429 20.7301 9.63247 21.412C10.3307 22.0939 10.7294 23.0252 10.741 24.001C10.7499 24.3955 10.9139 24.7706 11.1975 25.045C11.4811 25.3194 11.8614 25.471 12.256 25.467L12.244 25.491C12.4322 25.4904 12.6174 25.5388 12.7813 25.6314C12.9452 25.7239 13.0823 25.8575 13.179 26.019C13.2734 26.1786 13.3232 26.3606 13.3232 26.546C13.3232 26.7314 13.2734 26.9134 13.179 27.073C13.0819 27.234 12.9447 27.3671 12.7808 27.4592C12.617 27.5514 12.432 27.5996 12.244 27.599C11.7602 27.6048 11.28 27.5152 10.8308 27.3352C10.3817 27.1553 9.97239 26.8885 9.62642 26.5503C9.28045 26.212 9.00457 25.8089 8.81454 25.3639C8.62452 24.9189 8.52409 24.4408 8.519 23.957ZM15.456 24.066C15.4723 23.4367 15.6522 22.8225 15.978 22.2838C16.3038 21.7452 16.7642 21.3006 17.314 20.994C17.8705 20.6811 18.4968 20.5133 19.1351 20.5059C19.7735 20.4986 20.4035 20.652 20.967 20.952C21.3114 21.1536 21.7217 21.2104 22.108 21.11C22.4914 21.0062 22.8203 20.7592 23.027 20.42L23.87 18.977C23.9697 18.8119 24.0348 18.6284 24.0614 18.4374C24.0881 18.2464 24.0757 18.052 24.025 17.866C23.9732 17.6789 23.8847 17.504 23.7645 17.3515C23.6443 17.199 23.4949 17.072 23.325 16.978C22.7468 16.6352 22.2779 16.1351 21.973 15.536C21.5165 14.7137 21.4012 13.745 21.6518 12.8385C21.9024 11.9319 22.4989 11.1601 23.313 10.689C23.5627 10.5592 23.8522 10.5283 24.1237 10.6024C24.3953 10.6766 24.6289 10.8503 24.778 11.089C24.8496 11.208 24.8967 11.34 24.9164 11.4775C24.9361 11.6149 24.9282 11.7549 24.8929 11.8892C24.8577 12.0235 24.7959 12.1494 24.7113 12.2595C24.6266 12.3695 24.5208 12.4615 24.4 12.53C24.1756 12.6587 23.9877 12.8425 23.854 13.064C23.7542 13.2299 23.6891 13.4144 23.6626 13.6062C23.6362 13.798 23.6489 13.9932 23.7 14.18C23.7509 14.3691 23.839 14.5461 23.9592 14.7006C24.0794 14.8552 24.2293 14.9842 24.4 15.08C24.8151 15.3174 25.1786 15.6354 25.4691 16.0153C25.7595 16.3953 25.9711 16.8294 26.0913 17.2923C26.2114 17.7552 26.2379 18.2374 26.169 18.7107C26.1 19.1839 25.9372 19.6386 25.69 20.048L24.847 21.49C24.3374 22.2943 23.5426 22.8761 22.6219 23.1189C21.7013 23.3617 20.7229 23.2474 19.883 22.799C19.6538 22.6647 19.3935 22.5927 19.1279 22.5902C18.8622 22.5878 18.6006 22.6549 18.369 22.785C18.1402 22.912 17.9501 23.0987 17.8189 23.3251C17.6877 23.5516 17.6204 23.8093 17.624 24.071C17.5824 24.3291 17.4503 24.5639 17.2513 24.7334C17.0523 24.903 16.7994 24.9961 16.538 24.9961C16.2766 24.9961 16.0237 24.903 15.8247 24.7334C15.6257 24.5639 15.4936 24.3291 15.452 24.071L15.456 24.066ZM9.8 17.028C9.14694 16.4008 8.69996 15.5899 8.51833 14.7028C8.3367 13.8157 8.42901 12.8944 8.783 12.061C9.14533 11.2187 9.7483 10.5021 10.5163 10.0011C11.2843 9.50018 12.1831 9.23713 13.1 9.245H13.115C14.3416 9.23975 15.5212 9.71626 16.4 10.572C16.8329 10.9887 17.1772 11.4885 17.4123 12.0414C17.6473 12.5944 17.7683 13.1891 17.768 13.79C17.7671 14.6999 17.4928 15.5886 16.9807 16.3407C16.4686 17.0928 15.7423 17.6737 14.896 18.008C14.0438 18.3554 13.1091 18.4477 12.2055 18.2737C11.3019 18.0997 10.4683 17.6669 9.806 17.028H9.8ZM10.613 13.802C10.6011 14.2953 10.7364 14.781 11.0017 15.197C11.267 15.6131 11.6503 15.9406 12.1026 16.1379C12.5549 16.3352 13.0557 16.3932 13.5411 16.3046C14.0265 16.216 14.4746 15.9848 14.828 15.6405C15.1814 15.2961 15.4242 14.8543 15.5255 14.3713C15.6267 13.8884 15.5817 13.3862 15.3963 12.9289C15.2109 12.4717 14.8934 12.08 14.4844 11.8039C14.0754 11.5279 13.5934 11.3799 13.1 11.379C12.45 11.3718 11.8236 11.6226 11.3582 12.0764C10.8928 12.5302 10.6262 13.15 10.617 13.8L10.613 13.802ZM23.023 7.282C22.8152 6.94399 22.4845 6.69965 22.1004 6.60026C21.7163 6.50088 21.3086 6.55419 20.963 6.749C20.4004 7.04888 19.7714 7.2024 19.1339 7.19541C18.4964 7.18842 17.8709 7.02115 17.315 6.709C16.7656 6.40403 16.3051 5.96136 15.9786 5.4245C15.6522 4.88764 15.471 4.27507 15.453 3.647C15.4593 3.44944 15.4252 3.25268 15.3526 3.06883C15.28 2.88499 15.1706 2.71794 15.031 2.578C14.8897 2.43585 14.7215 2.32321 14.5363 2.24665C14.351 2.17008 14.1524 2.13111 13.952 2.132H12.252C12.0509 2.13138 11.8516 2.17046 11.6656 2.24699C11.4796 2.32353 11.3105 2.43601 11.168 2.578C11.0272 2.7175 10.9164 2.88426 10.8423 3.06806C10.7682 3.25187 10.7324 3.44887 10.737 3.647C10.7291 4.27785 10.5537 4.89528 10.2288 5.4361C9.90397 5.97693 9.44123 6.42173 8.888 6.725C8.32734 7.03443 7.69659 7.19464 7.05623 7.19026C6.41587 7.18588 5.78737 7.01706 5.231 6.7L5.181 6.652C5.06148 6.58074 4.95745 6.48626 4.87504 6.37414C4.79263 6.26203 4.73351 6.13454 4.70116 5.9992C4.66882 5.86387 4.66391 5.72342 4.68673 5.58616C4.70954 5.4489 4.75962 5.31759 4.834 5.2C4.99003 4.96144 5.23258 4.79278 5.51053 4.72954C5.78847 4.6663 6.08012 4.71343 6.324 4.861C6.55181 4.98776 6.80734 5.05645 7.068 5.061C7.46791 5.07878 7.85886 4.93913 8.157 4.672C8.30248 4.54166 8.42049 4.3836 8.50412 4.20708C8.58774 4.03056 8.6353 3.83913 8.644 3.644C8.65245 2.68568 9.03472 1.76853 9.70938 1.08788C10.384 0.407241 11.2978 0.0168992 12.256 -4.78289e-06H13.956C14.9318 -0.0114771 15.8723 0.36514 16.5705 1.04701C17.2687 1.72888 17.6674 2.66015 17.679 3.636C17.6763 3.89196 17.7456 4.14354 17.879 4.362C18.0798 4.70496 18.4086 4.9542 18.793 5.055C19.1796 5.15701 19.5907 5.10427 19.939 4.908C20.7786 4.46048 21.7563 4.3467 22.6763 4.58943C23.5962 4.83217 24.3905 5.4135 24.9 6.217C25.0363 6.46166 25.0708 6.75019 24.9959 7.02009C24.9211 7.28999 24.7429 7.51953 24.5 7.659C24.3346 7.75108 24.1483 7.79927 23.959 7.799C23.7726 7.79886 23.5892 7.75134 23.4262 7.66091C23.2632 7.57047 23.1258 7.44009 23.027 7.282H23.023Z'
                              fill={color}
                         />
                    </g>
               </svg>
          )
     }
}

Settings.propTypes = {
     color: string,
     size: number,
}

Settings.defaultProps = {
     color: 'green',
     size: 27,
}
