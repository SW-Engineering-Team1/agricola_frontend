<h1 align="center">
  <br>
  <img src="https://lookout-spiele.de/upload/en_agricolare.html_CoverImage.jpg" alt="Markdownify" width="200">
  <br>
  Agricola online game - Frontend Repository
  <br>
</h1>

<h2>Environment</h2>
<p>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
</p>

<h2>Stack</h2>
<p>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/vuex-1F1F1F?style=for-the-badge&logo=vuedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
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

```bash
.
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src # Main source code directory
│   ├── App.vue
│   ├── assets # Materials used in this web page ex) image files, css files etc
│   │   ├── facility.jpeg
│   │   ├── images # Image files archieve
│   │   │   ├── Action
│   │   │   │   ├── 10_Fishing.jpg
│   │   │   │   ├── 1_FarmExpand.jpg
│   │   │   │   ├── 2_MeetingPlace.jpg
│   │   │   │   ├── 3_GrainSeed.jpg
│   │   │   │   ├── 4_Farmland.jpg
│   │   │   │   ├── 5_Instruction.jpg
│   │   │   │   ├── 6_DayLabor.jpg
│   │   │   │   ├── 7_Forest.jpg
│   │   │   │   ├── 8_SoilMining.jpg
│   │   │   │   └── 9_ReedField.jpg
│   │   │   ├── AssiFacCard
│   │   │   │   ├── Bottle.png
│   │   │   │   ├── CarpenterRoom.png
│   │   │   │   ├── ClayMine.png
│   │   │   │   ├── CornShovel.png
│   │   │   │   ├── CrushedSoil.png
│   │   │   │   ├── FieldOfBeans.png
│   │   │   │   ├── HardCeramic.png
│   │   │   │   ├── Junkyard.png
│   │   │   │   ├── KitchenRoom.png
│   │   │   │   ├── LogBoat.png
│   │   │   │   ├── Manger.png
│   │   │   │   ├── StreetVendor.png
│   │   │   │   ├── ThickForest.png
│   │   │   │   └── ThreshingPlate.png
│   │   │   ├── CardBack
│   │   │   │   ├── AssiFacCardBack.png
│   │   │   │   ├── JobCardBack.png
│   │   │   │   ├── MajorFacCardBack.png
│   │   │   │   ├── NotUsedAssiFacCardBack.png
│   │   │   │   └── NotUsedJobCardBack.png
│   │   │   ├── Etc
│   │   │   │   ├── BeggingToken.png
│   │   │   │   ├── Order.png
│   │   │   │   ├── Player1.png
│   │   │   │   └── Player2.png
│   │   │   ├── Farm
│   │   │   │   ├── Farm.jpg
│   │   │   │   ├── Field.png
│   │   │   │   ├── SoilRoom.png
│   │   │   │   ├── StoneRoom.png
│   │   │   │   └── WoodRoom.png
│   │   │   ├── JobCard
│   │   │   │   ├── AdoptiveParents.png
│   │   │   │   ├── Counselor.png
│   │   │   │   ├── HedgeKeeper.png
│   │   │   │   ├── Merchandiser.png
│   │   │   │   ├── OrganicFarmer.png
│   │   │   │   ├── Palanquinist.png
│   │   │   │   ├── Plowman.png
│   │   │   │   ├── PropertyManager.png
│   │   │   │   ├── RoofMower.png
│   │   │   │   ├── Servant.png
│   │   │   │   ├── SmallerFarmer.png
│   │   │   │   ├── SubsidiaryFarmer.png
│   │   │   │   ├── WalledWorkman.png
│   │   │   │   └── Woodcutter.png
│   │   │   ├── MajorFacCard
│   │   │   │   ├── 10_BasketFactory.png
│   │   │   │   ├── 1_Brazier1.png
│   │   │   │   ├── 2_Brazier2.png
│   │   │   │   ├── 3_Stove1.png
│   │   │   │   ├── 4_Stove2.png
│   │   │   │   ├── 5_Well.png
│   │   │   │   ├── 6_EarthenKiln.png
│   │   │   │   ├── 7_StoneKiln.png
│   │   │   │   ├── 8_FurnitureFactory.png
│   │   │   │   └── 9_BowlFactory.png
│   │   │   ├── Resources
│   │   │   │   ├── 10_Cow.png
│   │   │   │   ├── 1_Wood.png
│   │   │   │   ├── 2_Sand.png
│   │   │   │   ├── 3_Stone.png
│   │   │   │   ├── 4_Reed.png
│   │   │   │   ├── 5_Grain.png
│   │   │   │   ├── 6_Vegetable.png
│   │   │   │   ├── 7_Food.png
│   │   │   │   ├── 8_Sheep.png
│   │   │   │   └── 9_Pig.png
│   │   │   ├── RoundCard
│   │   │   │   ├── 10R.png
│   │   │   │   ├── 11R.png
│   │   │   │   ├── 12R.png
│   │   │   │   ├── 13R.png
│   │   │   │   ├── 14R.png
│   │   │   │   ├── 1R.png
│   │   │   │   ├── 2R.png
│   │   │   │   ├── 3R.png
│   │   │   │   ├── 4R.png
│   │   │   │   ├── 5R.png
│   │   │   │   ├── 6R.png
│   │   │   │   ├── 7R.png
│   │   │   │   ├── 8R.png
│   │   │   │   └── 9R.png
│   │   │   ├── RoundCardBack
│   │   │   │   ├── 1Cycle.png
│   │   │   │   ├── 2Cycle.png
│   │   │   │   ├── 3Cycle.png
│   │   │   │   ├── 4Cycle.png
│   │   │   │   ├── 5Cycle.png
│   │   │   │   └── 6Cycle.png
│   │   │   └── ScoreTable.png
│   │   ├── logo.png
│   │   └── styles.css
│   ├── components # Vue components folder used for high order components
│   │   ├── BasicActions
│   │   │   ├── DayLabor.vue
│   │   │   ├── FarmExpand.vue
│   │   │   ├── Farmland.vue
│   │   │   ├── Fishing.vue
│   │   │   ├── Forest.vue
│   │   │   ├── GrainSeed.vue
│   │   │   ├── Instruction.vue
│   │   │   ├── MeetingPlace.vue
│   │   │   ├── ReedField.vue
│   │   │   └── SoilMining.vue
│   │   ├── CardFlip.vue
│   │   ├── CardModal.vue
│   │   ├── CreateRoomButton.vue
│   │   ├── CreateRoomModal.vue
│   │   ├── FarmBoard
│   │   │   ├── InitialMyFarmBoard.vue
│   │   │   ├── InitialOppoFarmBoard.vue
│   │   │   ├── R14StartMyFarmBoard.vue
│   │   │   ├── R14StartOppoFarmBoard.vue
│   │   │   ├── R8StartMyFarmBoard.vue
│   │   │   └── R8StartOppoFarmBoard.vue
│   │   ├── InputField.vue
│   │   ├── RoomList.vue
│   │   ├── RoundCardActions
│   │   │   ├── CowMarket.vue
│   │   │   ├── EastQuarry.vue
│   │   │   ├── FieldFarming.vue
│   │   │   ├── GrainUtilization.vue
│   │   │   ├── PigMarket.vue
│   │   │   ├── SheepMarket.vue
│   │   │   ├── VegetableSeed.vue
│   │   │   └── WestQuarry.vue
│   │   ├── RoundModal.vue
│   │   ├── ScoreTableModal.vue
│   │   ├── ServeModal
│   │   │   ├── IsBaked.vue
│   │   │   └── IsGrainUtil.vue
│   │   └── TurnModal.vue
│   ├── constants # For creating the main game board
│   │   └── index.js
│   ├── index.css
│   ├── main.js
│   ├── router
│   │   └── routes.js
│   ├── service
│   │   └── authService.js
│   ├── store # Manage data status used in vue 
│   │   └── store.js
│   └── views # Major web page
│       ├── GamePage.vue
│       ├── LobbyPage.vue
│       ├── LoginPage.vue
│       ├── ReadyRoomPage.vue
│       └── RegisterPage.vue
├── tailwind.config.js
└── vue.config.js

```

## How To Start

> **Prerequiste:** _installation of node_ and should run _agricola backend web server_ before

```bash

# Project setup
$ npm install

# Compiles and hot-reloads for development
$ npm run serve

```


## Contributor

|     | name          | main               | github address                        | contact             |
| --- | ------------- | ------------------ | ------------------------------------- | ------------------- |
|     | Jeongbin Park | Frontend Developer| https://github.com/dev-jjjjjeong-bin  | 0226pjb@naver.com   |
|     | Seoungho Kim  | Frontend Developer | https://github.com/Minjae-vincent     | ohgnues@hanyang.ac.kr |
|     | Yohan An      | Frontend Developer | https://github.com/Anyohan       | dygks3240@hanyang.ac.kr |

## How to contribute

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
