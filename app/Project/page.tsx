import Layout from "../component/layout";


export default function Project() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">맞춤형 솔루션 서비스</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 소개</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            업무 자동화부터 게임 개발까지, 다양한 분야의 맞춤형 솔루션을 제공합니다.
            전문성과 경험을 바탕으로 고객님의 아이디어를 현실로 구현해드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">APP SOLUTION</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>✓ Excel/Python 업무 자동화</p>
              <p>✓ 데이터 처리 프로그램</p>
              <p>✓ 맞춤형 GUI 애플리케이션</p>
              <p>✓ 1:1 코칭 서비스 제공</p>
            </div>
            <button className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              자세히 보기 →
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">WEB SOLUTION</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>✓ 맞춤형 웹 애플리케이션</p>
              <p>✓ 업무용 웹 포털</p>
              <p>✓ 데이터 관리 시스템</p>
              <p>✓ 주문/예약 시스템</p>
            </div>
            <button className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              자세히 보기 →
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">GAME 제작</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>✓ 2D/3D 게임 개발</p>
              <p>✓ 교육용 게임 제작</p>
              <p>✓ 게임 기획 컨설팅</p>
              <p>✓ 크로스 플랫폼 지원</p>
            </div>
            <button className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              자세히 보기 →
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">일상 솔루션</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>✓ 가계부/장부 관리 도구</p>
              <p>✓ 일정 관리 시스템</p>
              <p>✓ 개인 맞춤 자동화 도구</p>
              <p>✓ 취미/동호회 관리 시스템</p>
            </div>
            <button className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              자세히 보기 →
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">서비스 특징</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2 dark:text-white">🎯</div>
              <h3 className="font-semibold mb-2 dark:text-white">맞춤 제작</h3>
              <p className="text-gray-700 dark:text-gray-300">고객의 요구사항에 맞는 최적의 솔루션 제공</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 dark:text-white">🛠️</div>
              <h3 className="font-semibold mb-2 dark:text-white">전문 기술</h3>
              <p className="text-gray-700 dark:text-gray-300">다양한 개발 경험과 전문 기술력 보유</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 dark:text-white">💬</div>
              <h3 className="font-semibold mb-2 dark:text-white">지속적 지원</h3>
              <p className="text-gray-700 dark:text-gray-300">목표 달성까지 지속적인 AS 제공</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">문의하기</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            필요한 솔루션이 있으신가요?
            무료 상담을 통해 최적의 해결책을 제안해드립니다.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            무료 상담 신청
          </button>
        </div>
      </div>
    </Layout>
  )
}
