# ESLint + Prettier setting in project
프로젝트 초기 설정을 할 때 빼놓을 수 없는 과정이 바로 **ESLint 설정**과 **prettier 설정**입니다. <br>
어떤 용도로 두 개의 도구를 사용하는지와 함께 설정 과정을 간단히 정리해보았습니다.

## [ESLint](https://eslint.org/)
Lint는 소스 코드를 분석해서 프로그램 오류, 버그 또는 스타일 오류를 탐지하는 도구입니다. <br>
ESLint는 ECMAScript, 자바스크립트의 코드 오류를 분석하는 도구입니다. <br>
자바스크립트 린터에 ESLint 외에도 JSHint, JSLint 등이 있었는데 ESLint가 대세가 되었습니다. _(대세를 충실히 따르자)_ <br><br>

정적 레벨(실행하지 않은 코드 그 자체의 상태)에서 발견할 수 있는 오류를 찾아주고 <br>
세미콜론, 들여쓰기, 따옴표 등 정해진 코드 스타일을 위반한 경우 경고 메세지를 띄워줍니다.

### ESLint 설치 및 설정
```
npm install eslint --save-dev

# using yarn
yarn add eslint --dev
```

개발 시에만 필요한 패키지이므로, `--save-dev` 옵션을 붙여 설치해줍니다. <br>
`devDependency`에 `eslint`가 추가됩니다.

```
npx eslint --init

# using yarn
yarn run eslint --init
```
> 위 커맨드를 실행하기 전, 프로젝트에 `package.json`이 있다고 가정합니다. 만약 없다면 `npm init`을 먼저 실행해주세요.

- To check syntax only
- To check syntax and find problems
- **To check syntax, find problems, and enforce code style**

세 가지의 옵션 중 하나를 선택할 수 있습니다. <br>
저는 코드 스타일도 강제하는 것을 좋아하기 때문에 마지막 옵션을 선택했습니다. <br>
이후에도 여러 항목을 추가로 물어보는데요,

- **What type of modules does your project use?** <br>
  어떤 자바스크립트 모듈 시스템을 사용할 것인지 물어봅니다. <br>
  import/export, require/exports 중 프로젝트에서 사용할 방식을 선택하면 됩니다.

- **Which framework does your project use?** <br>
  사용하는 프레임워크를 선택하면 됩니다. <br>
  React, Vue, 그 외 세 가지 선택지가 있습니다.

- **Does your project use TypeScript?** <br>
  타입스크립트 사용 여부를 확인합니다.

- **Where does your code run?** <br>
  코드 실행환경을 묻습니다. Browser/Node 중 적합한 환경을 선택합니다.

- **How would you like to define a style for your project?** <br>
  아까 코드 스타일을 강제하는 옵션을 선택했기 때문에, 어떤 스타일을 따를지 물어봅니다.  <br>
  코드 스타일의 논쟁에는 끝이 없으므로 저는 잉끼 스타일을 따르는데요 (물론 살짝 고침) <br>
  이미 개발이 진행중인 프로젝트에 린트를 적용한다면 <br>
  **Inspect your Javascript file(s)** 옵션을 권장합니다. <br>
  **Answer questions about your style**로 개인 취향을 한껏 반영할 수도 있습니다.

- **Which style guide do you want to follow?** <br>
  잉끼 스타일을 따라간다면 어떤 스타일 가이드를 사용할지 물어봅니다. <br>
  [Airbnb](https://github.com/airbnb/javascript), [ESLint 표준](https://github.com/standard/standard), [Google 가이드](https://github.com/google/eslint-config-google) 중 선택할 수 있습니다.

- **What format do you want your config file to be in?** <br>
  ESLint 설정 파일을 어떤 포맷으로 만들지 물어봅니다. <br>
  선택은 개인의 자유지만 저는 Javascript를 추천합니다. <br>
  자바스크립트 포맷으로 파일을 생성하면 주석을 달 수 있어 조금 도움이 됩니다. <br>

여러 질문에 대답하고 나면 필요한 패키지를 설치해주고, 린트 설정파일이 생성됩니다. <br>
저는 마지막에 Javascript 포맷으로 생성해서 `.eslintrc.js` 파일이 만들어졌습니다. <br><br>

스타일 가이드에서 맘에 안드는 몇 부분을 고치려면 `rules`를 추가하면 됩니다.

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
```

어떤 규칙이 있는지 궁금하다면 [ESLint - rules](https://eslint.org/docs/rules/)를 살펴보면 됩니다. <br>
기본 설정에서 맘에 안드는 몇 가지를 추가해보겠습니다.

```js
module.exports = {
    // ..  
    rules: {
        semi: ["warn", "always"],
        quotes: ["warn", "double"],
        indent: ["warn", 4]
    }
};
```

저는 세미콜론이 문장 끝에 없으면 불안한 전형적인 컴공인이므로 `semi` 규칙을 수정했습니다. <br>
배열 첫 번째 값은 해당 규칙을 어떻게 처리할지 지정하는데요 <br>
off(0), warn(1), error(2)를 정할 수 있습니다. <br>
숫자로 넘겨도 되지만 헷갈릴 수 있으니 문자열을 넘기는 것을 추천합니다.

### 특정 파일에 ESLint 실행하기
```
npx eslint {검사할_파일명.js}

# using yarn
yarn run eslint {검사할_파일명.js}
```

위 커맨드로 특정 파일을 ESLint로 검사할 수 있습니다. <br>
자동으로 고칠 수 있는 경우 검사와 함께 수정하고 싶다면 `--fix` 옵션을 추가하면 됩니다. <br><br>

보통 자바스크립트 코드는 `src/` 폴더 아래에 위치하는데요, 모든 파일을 검사하려면

```
npx eslint src/

# using yarn
yarn run eslint src/
```

파일명을 `src/`로 바꿔 `src/` 폴더 아래의 모든 파일을 검사하게 만들 수 있습니다. <br>
이 커맨드를 `package.json`에 추가하면 편리하게 사용할 수 있습니다.

```
{
  "name": "eslint-configuration",
  "version": "1.0.0",
  "description": "eslint configuration project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "npx eslint src/"  👈🏻 이렇게 추가합니다.
  },
  ...
}
```
