<h1 align="center">
  <br>
  <img src="https://lookout-spiele.de/upload/en_agricolare.html_CoverImage.jpg" alt="Markdownify" width="200">
  <br>
  Agricola online game - Frontend Repository
  <br>
</h1>

> 여기 나와있는 뭔가 이상한 아이콘들은
> https://yermi.tistory.com/entry/%EA%BF%80%ED%8C%81-Github-Readme-%EC%98%88%EC%81%98%EA%B2%8C-%EA%BE%B8%EB%AF%B8%EA%B8%B0-Readme-Header-Badge-Widget-%EB%93%B1
> 여기 참고

<h2>Environment</h2>
<p>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
</p>

<h2>Stack</h2>
<p>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
</p>

<h2>Communication</h2>
<p>
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=blue">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <img src="https://img.shields.io/badge/kakaotalk-FFCD00?style=for-the-badge&logo=kakaotalk&logoColor=black">
</p>

![agricola](https://github.com/SW-Engineering-Team1/agricola_backend/assets/74089849/81d99d23-c7d9-4222-a642-1a8ad08c54ac)

<hr>

<div>
  <h2 align="center">Index</h2>
  <p align="center">
    <a href="#repository-structure">Repository Structure</a> /
    <a href="#how-to-start">How To Start</a> /
    <a href="#contributor">Contributor</a> /
    <a href="#how-to-contribute">How To Contribute</a> 
  </p>
<div>

<hr>

## Repository Structure

> 아래 트리 구조는 tree 명령어 사용하면 됨! tree -I "node_modules"하는 걸 추천

```bash
.
├── README.md
├── app.js
├── config # Some configs for project
│   ├── baseResponseStatus.js
│   ├── config.js
│   ├── response.js
│   └── secretKey.js
├── controllers # Controller which get requests from frontend
│   ├── actionSocketController.js
│   ├── gameSocketController.js
│   ├── roomController.js
│   ├── roomSocketController.js
│   └── userController.js
├── middlewares # For middlewares - In this case, for Sign up/in
│   └── auth.js
├── migrations # Migration files for backup using sequelize
│   ├── 20230514164610-Users.js
│   ├── 20230515074818-game_room.js
│   └── 20230517152458-UserGameRoom.js
├── models // Data models
│   ├── Card.js
│   ├── GameRoom.js
│   ├── GameStatus.js
│   ├── User.js
│   ├── UserGameRoom.js
│   └── index.js
├── modules # Files and modules which are used entire project
│   ├── jwt.js
│   └── utility.js
├── package-lock.json
├── package.json
├── pr_checklist.md
├── readme_src
│   └── agricola.gif
├── routes
│   ├── roomRoute.js
│   └── userRoute.js
├── services # Files where entire service logics in
│   ├── gameService.js
│   ├── roomService.js
│   └── userService.js
└── test # Files for unit test
    └── test.js

```

## How To Start

> 아래 프리리쿼짙은 이 프로젝트를 돌릴 떄 필요한 거 써놓으면 돼
> **Prerequiste:** _installation of node_ and have _mysql database access information_

```bash

# Project setup
$ npm install

# Compiles and hot-reloads for development
$ npm run serve

# Compiles and minifies for production
$ npm run build

# Lints and fixes files
$ npm run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Test
```

> 아래는 맞춰서 쓰세용

## Contributor

|     | name          | main               | github address                        | contact             |
| --- | ------------- | ------------------ | ------------------------------------- | ------------------- |
|     | Jeongbin Park | Frontend Developer| https://github.com/dev-jjjjjeong-bin  | 0226pjb@naver.com   |
|     | Seoungho Kim  | Frontend Developer | https://github.com/Minjae-vincent     | alswo9853@gmail.com |
|     | Yohan An      | Frontend Developer | asdf                                  | adsf                |

## How to contribute

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
