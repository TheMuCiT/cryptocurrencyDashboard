import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ width, height, percentComplete, barColor, percentColor }) => {
     return (
          <div className='progress' style={{ width: width, height: height, backgroundColor: barColor }}>
               <div
                    className='progress-done'
                    style={{ width: `${percentComplete}%`, backgroundColor: percentColor }}
               />
          </div>
     )
}

ProgressBar.propTypes = {
     width: PropTypes.string,
     height: PropTypes.string,
     percentComplete: PropTypes.number,
     barColor: PropTypes.string,
     percentColor: PropTypes.string,
}

ProgressBar.defaultProps = {
     width: '5rem',
     height: '1rem',
     percentComplete: 50,
     barColor: '#d6d9fc',
     percentColor: '#485aff',
}

export default ProgressBar
