export interface PopupListItem {
  name: string
}

export interface SearchState {
  input: string
  loading: boolean
  searchList: PopupListItem[]
}