/**
 * Test for TheFooter.
 * Runs with mocha.
 */
'use strict'

import TheFooter from '../lib/TheFooter'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-footer', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheFooter />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
