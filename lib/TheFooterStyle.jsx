'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

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
    lightBorderColor = ThemeValues.lightBorderColor,
    lightLinkColor = ThemeValues.lightLinkColor
  } = options
  return asStyleData('.the-footer', {
    '': {

    },
    '.the-footer-inner': {
      borderTop: `1px solid ${lightBorderColor}`,
      padding: '32px 0',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: 'smaller'
    },
    '.the-footer-copyright': {
      display: 'inline-block',
      padding: '0 8px'
    },
    '.the-footer-links': {
      display: 'flex'
    },
    '.the-footer-link': {
      textDecoration: 'none',
      padding: '0 8px',
      color: lightLinkColor
    }
  })
}

export default TheFooterStyle
