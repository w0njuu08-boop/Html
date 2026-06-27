self.addEventListener('install', (e) => {
  console.log('MOABOM 서비스 워커 설치 완료!');
});

self.addEventListener('fetch', (e) => {
  // 설치 기능을 활성화하기 위한 필수 이벤트 리스너입니다.
});
