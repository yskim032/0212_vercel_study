import Layout from "../component/layout";


export default function Project() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Android Google Play 비공개 테스트 </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">테스트 조건</h2>
          <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>테스트 기간: 14일</li>
            <li>필요 인원: 12명</li>
            <li>필수 요구사항: Android 7.0 이상 기기 보유 (API Level 24+)</li>
            <li>테스트 기회: 총 3회</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">보상 안내</h2>
          <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>착수금: $5</li>
            <li>테스트 완료 보상: $10</li>
            <li>총 보상: $15</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">테스트 절차</h2>
          <ol className="list-decimal pl-6 space-y-2 dark:text-gray-300">
            <li>신청서 제출</li>
            <li>테스터 선정 시 착수금 지급</li>
            <li>앱 설치 및 테스트 진행</li>
            <li>피드백 제출</li>
            <li>성공적인 테스트 완료 시 추가 보상 지급</li>
          </ol>
        </div>
      </div>
    </Layout>
  )
}
