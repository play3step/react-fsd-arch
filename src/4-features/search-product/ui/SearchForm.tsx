import { Button } from '../../../6-shared'

export const SearchForm = () => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="제품 페이지 URL을 입력하세요"
        className="flex-1 bg-[#F9FAFB] rounded-lg p-4 text-sm"
      />
      <Button>분석 시작</Button>
    </div>
  )
}
