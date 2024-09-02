Vue 수업시간에 작성한 파일을 기록합니다.

일반적으로 Vue 프로젝트에서는 다음과 같은 폴더 구조를 사용하여 파일들을 정리합니다:
1.	src/: 소스 코드를 포함하는 폴더입니다.
    •	assets/: 이미지, 폰트, 스타일 시트 등 정적 파일을 저장합니다.
    •	components/: Vue 컴포넌트 파일을 저장합니다. 각 컴포넌트를 기능이나 화면 구성에 따라 서브 폴더로 구분할 수 있습니다.
	•	views/: 페이지 단위의 Vue 컴포넌트를 저장합니다. 보통 Vue Router를 사용할 때 각 라우트에 해당하는 컴포넌트가 위치합니다.
	•	store/: Vuex 상태 관리 파일을 저장합니다 (Vuex를 사용할 경우).
	•	router/: Vue Router 설정 파일을 저장합니다.
	•	styles/: 전역 스타일 시트(CSS/SCSS)를 저장합니다.
	•	plugins/: Vue 플러그인을 설정하는 파일을 저장합니다.
	•	mixins/: 여러 컴포넌트에서 재사용할 수 있는 mixin을 저장합니다.
	•	utils/: 유틸리티 함수나 헬퍼 함수를 저장합니다.
	•	services/: API 호출 등 외부 서비스와의 통신을 위한 코드를 저장합니다.
2.	public/: 정적 파일을 저장하는 폴더입니다. 이 폴더에 있는 파일들은 별도의 번들링 없이 그대로 서버에 제공됩니다.
	•	index.html: Vue 애플리케이션이 로드될 기본 HTML 파일입니다.
3.	기타 루트 파일들
	•	package.json: 프로젝트 메타 정보와 종속성 관리 파일입니다.
	•	vue.config.js: Vue CLI 프로젝트의 설정 파일입니다 (선택 사항).
	•	.env: 환경 변수를 정의하는 파일입니다.
4.  예시
	•	src/components/ 폴더 아래에 Header, Footer, Dashboard 등의 서브 폴더를 만들어 각각의 관련 컴포넌트를 그룹화할 수 있습니다. 