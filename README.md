# React Typing Animation

## 프로젝트에 ESLint, prettier 적용하기
ESLint를 사용하는 이유: 문법 검사, 더 나은 코딩스타일을 위해서. 코딩 규칙(변수명 선언, 함수명 선언 등의 방식)을 지키기 위해서 사용한다. 규칙에 어긋난 경우에 경고를 띄워주기 때문이다. create-react-app을 이용하여 만든 프로젝트의 경우 자체적으로 내장되어 있다. 

규칙에 어긋난 경우의 예시를 들자면, 값을 바꿀 수 없는 변수에 값을 설정하려고 할 때라던지, 선언해놓고 사용을 하지 않는다던지 등. 컴파일을 하면 터미널 창에 경고들이 뜨고, 경고가 하나도 없는 경우에만 **Compiled successfully!** 라는 메세지가 떴는데, 지금까지 그게 뭔지 모르고 그걸 보면서 고쳐왔는데 그게 바로 ESLint였던 것이다! 방금 알았다ㅎㅎ. 어쨌든, 덕분에 사용하지 않는 변수도 쉽게 찾아내고 오류가 발생했을 때, 해당 코드 위치를 쉽게 찾아서 해결할 수 있었다. 하지만, 컴파일을 해야 확인할 수 있다. 

ESLint를 사용하면 정해진 코딩 스타일을 준수하기 위해서 만약에 사전에 정의한 코딩스타일과 맞지 않을 경우 경고나 에러를 띄움으로써 제대로 된 코드를 작성할 수 있게 도와준다(Velopert님 포스팅 참고).

Prettier를 사용하면 이런 세부 설정을 유지하면서 코드를 자동으로 정리해준다. ㅡ정말 착하다.ㅡ 에디터마다 코드를 정리해주는 도구가 있지만(에를 들면 들여쓰기 맞춰주는 VSCode의 Ctrl+K+F..?), Prettier의 장점은 커스터마이징이 자유롭다고 한다. ESLint와 아예 연동까지 할 수 있다고 한다. 나도 내 손에 꼭 맞는 도구를 쥐고 작업하고 싶다는 욕구가 많이 들어서, 이번 연습 프로젝트에 적용을 해보기로 했다! 

### 프로젝트 설정, ESLint 기본 설정

create-react-app으로 React 프로젝트를 생성하면, 웹팩이나 바벨 등 React 실행에 필요한 각종 설정을 직접 하지 않아도 된다.

   npm install -global create-react-app
   create-react-app my-project

전역으로 create-react-app을 설치해 준 다음, 프로젝트를 생성하고자 하는 디렉토리에서 위와 같이 react 프로젝트를 생성할 수 있다. my-project라는 이름의 폴더와 함께 그 안에 node.js 바로 실행 가능한 react 프로젝트가 생긴다. 화면에 변화를 적용시키기 위해서 우리가 건드리게 될 제일 기본적인 파일은 src/App.js 파일이다.

create-react-app으로 제작한 프로젝트는 위에도 말했다시피 ESLint가 기본적으로 적용되어 있지만, 이 상태에서는 나처럼 컴파일을 해서 터미널 창으로만 확인이 가능하다. 에디터 상에서도 오류를 확인하기 위해서는 VSCode 확장 프로그램 중 ESLint를 다운받고, 설정파일을 만들어주어야 한다. (yarn eject를 해서 직접 프로젝트를 관리하면 자동으로 생기지만, 그걸 원하지 않는다면) 프로젝트 디렉토리에 .eslintrc라는 파일을 만들어준다. 그리고 아래 내용을 입력해준다.

   {
      "extends" : "react-app"
   }

이제 npm start해서 프로젝트를 실행시킨 상태에서 수정한 내용을 저장하지 않아도, 사용하지 않은 변수가 있으면 표시해주고 닫히지 않은 태그가 있으면 빨간 줄을 띄우저는 것을 직접 눈으로 확인했다! 너무 편하잖아?

다음으로는 prettier를 설치해본다,

   npm install --save-dev prettier-eslint
   yarn add --dev prettier-eslint

패키지 매니저로 yarn을 사용하고 있다면 아래로, npm을 사용하고 있다면 위로. 설치할 때 dev 옵션을 주는 이유는 개발할 때만 필요한, 잘 개발하기 위해 사용하는 것이기 때문에 build 할 때 포함되지 말라고 그런 것! 아무튼 prettier-eslint를 다운받고 나서 설정 창을 들어간다. 그리고 WORKSPACE SETTING 탭을 들어가서 아래 내용을 입력해준다. 한글판이라면 작업영역설정이라고 되어있겠지.

   {
      "editor.formatOnSave": true,
      "javascript.format.enable": false,
      "prettier.eslintIntegration": true,
   }

코드가 저장될 때 자동으로 포맷되고, prettier에서 ESLint와 연동되도록 하는 설정이라고 한다.
근데 이 설정을 하고 나서 오류가 생겼는데, 사실 정확히는 얘를 설정하고가 아니라 prettier-eslint를 설치하고 난 뒤인 것 같다. 확실하지가 않아서ㅠㅠ. 

   ./node_modules/sockjs-client/lib/info-ajax.js

라는 파일이 없다는 에러인데. 지금부터 해결방법을 찾아봐야겠다. 오늘 이 설정만 하다가 컴퓨터 끌 것 같음. 