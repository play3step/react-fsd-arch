import { SelectGroup } from './SelectGroup'

export const Header = () => {
  return (
    <header className="w-full h-20 px-10 border-b border-b-[#E5E7EB] flex justify-between items-center">
      <div>
        <p>ReviewLens</p>
      </div>
      <SelectGroup />
    </header>
  )
}
