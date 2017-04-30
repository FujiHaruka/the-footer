'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheFooterStyle from './TheFooterStyle'
import { htmlAttributesFor } from 'the-component-util'
import { TheLink } from 'the-link'

/**
 * Footer of the-components
 */
class TheFooter extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <footer { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
              className={ classnames('the-footer', className) }
      >
        { children }
      </footer>
    )
  }

  static Links () {}

  static Link ({ className, to, children, ...otherProps }) {
    return <TheLink className={classnames('the-footer-link', className)}
                    {...{ to, children }}
    />
  }
}

TheFooter.Style = TheFooterStyle

TheFooter.propTypes = {}

TheFooter.defaultProps = {}

TheFooter.displayName = 'TheFooter'

export default TheFooter
