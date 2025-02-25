import Layout from "../component/layout";


export default function Project() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">맞춤형 웹 솔루션 개발</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 소개</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            업무에 꼭 필요한 핵심 기능만을 갖춘 맞춤형 웹 솔루션을 제공합니다.
            복잡한 업무 프로세스를 웹 기반으로 단순화하여 업무 효율을 높이고,
            기존 도구로는 구현하기 어려운 기능들을 구현해 드립니다.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 유형</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="font-semibold text-lg mb-3 dark:text-white">기본 웹 솔루션</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">$100부터</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>단일 기능 웹 애플리케이션</li>
                <li>간단한 데이터 입력/조회 시스템</li>
                <li>파일 공유/관리 시스템</li>
                <li>목표 달성까지 무상 AS 제공</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 dark:text-white">고급 웹 솔루션</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">$500부터</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>다중 기능 통합 웹 시스템</li>
                <li>사용자 권한 관리 시스템</li>
                <li>복잡한 데이터 처리/분석 기능</li>
                <li>목표 달성까지 무상 AS 제공</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">활용 사례</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
              <h3 className="font-semibold mb-2 dark:text-white">기업 맞춤 솔루션</h3>
              <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                <li>문서 관리/공유 시스템</li>
                <li>업무 데이터 입력/관리 포털</li>
                <li>부서간 협업 플랫폼</li>
                <li>Office365 연동 확장 기능</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
              <h3 className="font-semibold mb-2 dark:text-white">자영업자 솔루션</h3>
              <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                <li>맞춤형 주문 관리 시스템</li>
                <li>간편 예약 페이지</li>
                <li>매출/재고 관리 시스템</li>
                <li>고객 관리 포털</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">주요 적용 분야</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>✓ 대량의 이메일 정보를 체계적으로 관리하고 공유해야 하는 경우</p>
            <p>✓ 부서별 데이터 입력/조회가 필요한 경우</p>
            <p>✓ Office365로 구현하기 어려운 맞춤형 기능이 필요한 경우</p>
            <p>✓ 자영업자의 주문/예약 관리 시스템이 필요한 경우</p>
            <p>✓ 기존 업무 프로세스의 디지털 전환이 필요한 경우</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">문의하기</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            웹 기반 솔루션 구축에 관심이 있으신가요?
            무료 상담을 통해 귀사에 최적화된 솔루션을 제안해드립니다.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            무료 상담 신청
          </button>
        </div>
      </div>
    </Layout>
  )
}
