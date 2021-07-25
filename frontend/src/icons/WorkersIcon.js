import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class WorkersIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         d='M23.739 0.0119934H4.74799C2.53885 0.0119934 0.747986 1.80285 0.747986 4.01199V23.003C0.747986 25.2121 2.53885 27.003 4.74799 27.003H23.739C25.9481 27.003 27.739 25.2121 27.739 23.003V4.01199C27.739 1.80285 25.9481 0.0119934 23.739 0.0119934Z'
                         fill={color}
                    />
                    <path
                         d='M9.86298 5.69399C9.32961 5.69479 8.81831 5.90702 8.44116 6.28417C8.06401 6.66132 7.85178 7.17262 7.85098 7.70599V18.318C7.85335 18.8509 8.06609 19.3613 8.4429 19.7381C8.81971 20.1149 9.3301 20.3276 9.86298 20.33H19.377C19.5229 20.33 19.6627 20.272 19.7659 20.1689C19.869 20.0658 19.927 19.9259 19.927 19.78C19.927 19.6341 19.869 19.4942 19.7659 19.3911C19.6627 19.2879 19.5229 19.23 19.377 19.23H9.86298C9.65073 19.2337 9.444 19.1623 9.27931 19.0283C9.11462 18.8944 9.00258 18.7066 8.96298 18.498H19.373C19.5186 18.498 19.6582 18.4402 19.7612 18.3372C19.8641 18.2342 19.922 18.0946 19.922 17.949V7.70599C19.9213 7.26821 19.778 6.84255 19.5139 6.49343C19.2497 6.14431 18.8791 5.89071 18.458 5.77099V6.97999C18.5712 7.0645 18.6632 7.17417 18.7267 7.30035C18.7902 7.42652 18.8235 7.56573 18.824 7.70699V17.407H8.95098V7.70699C8.95125 7.4644 9.04773 7.23182 9.21927 7.06028C9.39081 6.88874 9.62339 6.79226 9.86598 6.79199H11.878V5.69399H9.86298ZM12.607 5.69399V11.731C12.607 11.8263 12.6317 11.9199 12.6789 12.0027C12.726 12.0855 12.7938 12.1546 12.8758 12.2032C12.9577 12.2518 13.0508 12.2783 13.1461 12.28C13.2413 12.2817 13.3354 12.2586 13.419 12.213L15.168 11.259L16.918 12.213C17.0016 12.2586 17.0957 12.2817 17.1909 12.28C17.2861 12.2783 17.3793 12.2518 17.4612 12.2032C17.5431 12.1546 17.611 12.0855 17.6581 12.0027C17.7052 11.9199 17.73 11.8263 17.73 11.731V5.69399H12.608H12.607ZM13.707 6.79399H16.634V10.807L15.434 10.152C15.3533 10.108 15.2629 10.0849 15.171 10.0849C15.0791 10.0849 14.9887 10.108 14.908 10.152L13.708 10.807L13.707 6.79399Z'
                         fill='white'
                    />
               </svg>
          )
     }
}

WorkersIcon.propTypes = {
     color: string,
     size: number,
}

WorkersIcon.defaultProps = {
     color: '#485aff',
     size: 27,
}