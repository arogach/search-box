import * as React from 'react'

import { SearchInput, PopupList } from './components'
import './Search.scss'

export const Search: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    console.log('submit')
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Simple searchBox</h1>
      <div className="search">
        <div className="search__wrapper">
          <SearchInput />
          <PopupList list={[{ name: 'test' }]} />
        </div>
        <button type="submit" className="search__submitButton">Search</button>
      </div>
    </form>
  )
}