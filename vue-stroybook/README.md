# Stroybook Test

## Vue-Stroy Book 설치하기

1. 스토리북 관련 npm install  
    `npm install --save-dev @storybook/vue`

   ```
   npm install --save-dev @storybook/addon-actions
   npm install --save-dev @storybook/addon-knobs
   npm install --save-dev @storybook/addon-links
   npm install --save-dev @storybook/addon-notes
   npm install --save-dev @storybook/addon-viewport
   npm install --save-dev storybook-vue-route
   ```

2. `package.json`에 npm 스크립트 명령어 추가

   ```
     "scripts": {
           "storybook": "start-storybook -p 9009 -s public"
       },
   ```

3.

---

## Addons

```
"@storybook/addon-a11y": "6.2.0-beta.10",
 🔖 Test components for user accessibility in Storybook

"@storybook/addon-actions": "6.2.0-beta.10",
 🔖 Log actions as users interact with components in the Storybook UI

"@storybook/addon-backgrounds": "6.2.0-beta.10",
 🔖 Let users choose backgrounds in the Storybook UI

"@storybook/addon-controls": "6.2.0-beta.10",
 🔖

"@storybook/addon-docs": "6.2.0-beta.10",
 🔖 Add high quality documentation to your components

"@storybook/addon-knobs": "6.2.0-beta.10",
 🔖 Interactively edit component prop data in the Storybook UI
 🔖 변경 가능한 데이터 영역을 UI를 통해 변경+테스트 가능하게 만듦

"@storybook/addon-links": "6.2.0-beta.10",
 🔖 Create links between stories

"@storybook/addon-storyshots": "6.2.0-beta.10",
 🔖 Snapshot testing for components in Storybook

"@storybook/addon-storysource": "6.2.0-beta.10",
 🔖 View the code of your stories within the Storybook UI

"@storybook/addon-viewport": "6.2.0-beta.10",
 🔖 Change display sizes and layouts for responsive components using Storybook
 🔖 뷰포트를 변경해 여러 모바일 기기처럼 테스트 도움

"@storybook/addons": "6.2.0-beta.10",
 🔖

"@storybook/source-loader": "6.2.0-beta.10",
 🔖

npm install --save-dev storybook-vue-route
 🔖 vue-router를 사용하는 컴포넌트에 대한 스토리 작성용

```

### What I installed

```
  "devDependencies": {
    "@storybook/vue": "^6.2.9",
    "@storybook/addon-docs": "6.2.0-beta.10",
    "@storybook/addon-controls": "6.2.0-beta.10",
    "@storybook/addon-actions": "6.2.0-beta.10",
    "@storybook/addon-knobs": "6.2.0-beta.10",
    "@storybook/addon-links": "6.2.0-beta.10",
    "@storybook/addon-viewport": "6.2.0-beta.10",
    "@storybook/addon-storysource": "6.2.0-beta.10",
  }
```
