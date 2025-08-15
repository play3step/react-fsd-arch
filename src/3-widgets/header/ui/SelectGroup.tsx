import { Button } from '../../../6-shared'

export const SelectGroup = () => {
  return (
    <div className="flex items-center gap-8">
      <p>기능</p>
      <p>가격</p>
      <p>문의</p>
      <Button>시작하기</Button>
    </div>
  )
}
