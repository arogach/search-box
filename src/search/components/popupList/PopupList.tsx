import * as React from 'react'

import { PopupListItem } from '../../interfaces'
import './PopupList.scss'

interface PopupListProps {
  list: PopupListItem[]
}

export const PopupList:React.FC<PopupListProps> = props => (
  <ul>
    {props.list.map((item: PopupListItem) => (
      <li key={item.name}>{item.name}</li>
    ))}
  </ul>
)