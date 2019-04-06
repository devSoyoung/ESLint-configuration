# ESLint Configuration
## Linter, ESLint
* **Linter** : 코딩 컨벤션과 에러 체크를 도와주는 도구
* **ESLint** : 오픈소스 JavaScript Linting 도구
* **코딩 컨벤션** : 코딩 표준, 코드를 작성할 때의 규칙을 정해 둔 가이드라인

## ESLint 적용하기

### ESLint 사용환경
1. IDE/Editor에 지원되는 ESLint 플러그인 설치
2. webpack 번들링 시 `eslint-loader`를 추가
3. `1`과 `2`를 함께 사용

### ESLint 설치

    $ npm install eslint --save-dev
    
lint 체크는 개발 과정에서 필요한 것이기 때문에, `--save-dev` 옵션으로 설치

### ESLint 설정

    $ ./node_modules/.bin/eslint --init

위 커맨드를 실행하면, 다음과 같이 eslint 설정에 대한 몇 가지 질문이 나옴

    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? None of these
    ? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
    ? How would you like to define a style for your project? Use a popular style guide
    ? Which style guide do you want to follow? Google (https://github.com/google/eslint-config-google)
    ? What format do you want your config file to be in? JavaScript

이렇게 설정하면 .eslintrc.js 파일이 생성됨. 구글 스타일을 따르기로 함.

### script 설정
package.json에 `scripts`를 추가해서 eslint를 쉽게 사용할 수 있음

    {
        "scripts" : {
            "lint": "./node_modules/.bin/eslint"
        }
    }

***
## 참고링크
* [eslint document](https://eslint.org/docs/user-guide/getting-started)
* [google javascript style guide](https://google.github.io/styleguide/jsguide.html)