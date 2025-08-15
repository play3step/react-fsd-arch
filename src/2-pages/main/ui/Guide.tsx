import { GuideCard } from './GuideCard'

const guideList = [
  {
    step: 1,
    title: 'URL 입력',
    description: '분석하고 싶은 제품의 <br /> 페이지 링크를 입력하세요'
  },
  {
    step: 2,
    title: 'AI 분석',
    description: 'AI가 모든 리뷰를 수집하고 <br /> 핵심 내용을 분석합니다'
  },
  {
    step: 3,
    title: '결과 확인',
    description: '차트와 그래프로 정리된 <br /> 분석 결과를 확인하세요'
  }
]

export const Guide = () => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-bold">어떻게 작동하나요?</h1>
      <p className="text-sm text-gray-500">
        간단한 3단계로 제품 리뷰를 완벽하게 분석해보세요
      </p>
      <div className="flex gap-2 justify-center">
        {guideList.map(guide => (
          <GuideCard
            key={guide.title}
            {...guide}
          />
        ))}
      </div>
    </div>
  )
}
