/**
 * @file button
 */

import React from 'react'
import './index.scss'

export default props => (
  <button className="m-button" onClick={props.onClick}>{props.children}</button>
)
