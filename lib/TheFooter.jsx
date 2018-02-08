'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheFooterStyle from './TheFooterStyle'
import { htmlAttributesFor } from 'the-component-util'
import { TheContainer } from 'the-container'
import { TheLink } from 'the-link'

/**
 * Footer of the-components
 */
class TheFooter extends React.PureComponent {
  render () {
    const s = this
    const {props} = s
    let {
      className,
      children
    } = props
    return (
      <footer {...htmlAttributesFor(props, {except: ['className']})}
              className={classnames('the-footer', className)}
      >
        <TheContainer className='the-footer-inner'>
          {children}
        </TheContainer>
      </footer>
    )
  }

  static CopyRight ({year, holder, className, children}) {
    return (
      <div className={classnames('the-footer-copyright', className)}>
        {holder && `© ${year || ''} ${holder}`}
        {children}
      </div>
    )
  }

  static Links ({className, children}) {
    return (
      <div className={classnames('the-footer-links', className)}>
        {children}
      </div>
    )
  }

  static Link ({className, to, children}) {
    return (
      <TheLink className={classnames('the-footer-link', className)}
               {...{to}}
      >{children}</TheLink>
    )
  }

  static Row ({children, className}) {
    return (
      <div className={classnames('the-footer-row', className)}>
        {children}
      </div>
    )
  }
}

TheFooter.Style = TheFooterStyle

TheFooter.propTypes = {}

TheFooter.defaultProps = {}

TheFooter.displayName = 'TheFooter'

export default TheFooter
