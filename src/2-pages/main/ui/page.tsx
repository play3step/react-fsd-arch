import { SearchForm } from '../../../4-features/search-product'
import { Introduction } from './Introduction'
import { Guide } from './Guide'

export const MainPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-[800px]">
        <Introduction />
        <SearchForm />
        <Guide />
      </div>
    </div>
  )
}
