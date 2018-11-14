### The form modal project

The project is initialized with create-react-app

```shell
npm install -g create-react-app
create-react-app my-app --scripts-version=react-scripts-ts
cd mp-app
npm start
```

or

```shell
git clone git@github.com:ylovely/form-modal.git
cd form-modal
npm install
npm start
```

#### 题目一在 ./exercise-map-reduce.ts 文件中

#### References:
Book: Pro TypeScript Application-Scale JavaScript Development(2nd)

https://github.com/Microsoft/TypeScript-React-Starter

https://reactjs.org/docs/getting-started.html

https://redux.js.org/introduction

#### 待优化的地方

1. 组件拆分：其中复制链接，日期时间选择，限制密码，限制回复一次，限制每天回复一次可以拆成单独的组件。

2. interface, type 的定义有待优化，感觉代码有冗余。

3. store状态树的设计，组合reducer的设计有待优化。

4. 样式方面，未保持与设计图完全一致。

5. 未编写单元测试。