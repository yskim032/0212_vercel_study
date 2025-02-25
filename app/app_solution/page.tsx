import Layout from "../component/layout";


export default function Project() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">업무 자동화 솔루션 & 코칭 서비스</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 소개</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Excel과 Python을 활용하여 반복적인 업무를 자동화하고, 데이터 처리를 효율화하는 솔루션을 제공합니다.
            직접 배우고 싶으신 분들을 위한 1:1 맞춤 코칭 서비스도 함께 운영하고 있습니다.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 유형</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="font-semibold text-lg mb-3 dark:text-white">1:1 맞춤 코칭</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">시간당 $50</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Excel/Python 기초부터 실무 활용까지</li>
                <li>업무에 필요한 핵심 기능 위주의 학습</li>
                <li>실제 업무 데이터를 활용한 실습</li>
                <li>온라인/오프라인 코칭 가능</li>
              </ul>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="font-semibold text-lg mb-3 dark:text-white">기본 자동화 솔루션</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">$100부터</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>엑셀 매크로 자동화</li>
                <li>단순 데이터 추출/변환 프로그램</li>
                <li>반복 작업 자동화 스크립트</li>
                <li>목표 달성까지 무상 AS 제공</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 dark:text-white">고급 자동화 솔루션</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">$500부터</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>복잡한 데이터 처리 시스템</li>
                <li>GUI 기반 자동화 프로그램</li>
                <li>다중 파일/폴더 처리 시스템</li>
                <li>목표 달성까지 무상 AS 제공</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">활용 사례</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
              <h3 className="font-semibold mb-2 dark:text-white">데이터 처리 자동화</h3>
              <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                <li>일일 보고서 자동 생성</li>
                <li>여러 엑셀 파일 데이터 통합</li>
                <li>PDF/이미지에서 데이터 추출</li>
                <li>정기적인 데이터 백업</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
              <h3 className="font-semibold mb-2 dark:text-white">업무 효율화</h3>
              <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                <li>반복적인 이메일 발송 자동화</li>
                <li>파일 이름 일괄 변경</li>
                <li>데이터 형식 변환 자동화</li>
                <li>웹 데이터 자동 수집</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">문의하기</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            업무 자동화나 데이터 처리에 대해 고민이 있으신가요?
            무료 상담을 통해 최적의 솔루션을 제안해드립니다.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            무료 상담 신청
          </button>
        </div>
      </div>
    </Layout>
  )
}
