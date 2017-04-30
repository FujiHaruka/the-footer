'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/** Style for TheFooter */
const TheFooterStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-footer-style', className) }
            styles={ TheFooterStyle.data(options) }
  />
)

TheFooterStyle.displayName = 'TheFooterStyle'
TheFooterStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheFooterStyle.defaultProps = {
  options: {}
}

TheFooterStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    dominantColor = ThemeValues.dominantColor
  } = options
  return {
    '.the-footer': {}
  }
}

export default TheFooterStyle
