<template>
  <div>
    <RoundModal v-if="showRoundModal" :round="currentRound" />
    <TurnModal v-if="isMyTurn && !showRoundModal" />
    <ScoreTableModal :show="scoreTableModal.showModal.value" @close="scoreTableModal.toggleModal"/>
    <button class="flex justify-center fixed w-36 left-5 top-5 bg-cyan-400 text-white font-bold p-3 rounded hover:bg-cyan-600" @click="scoreTableModal.toggleModal">
      점수표
    </button>
    <button class="flex justify-center fixed w-36 right-5 top-5 bg-red-400 text-white font-bold p-3 rounded hover:bg-red-600" @click="skipGame(8)">
      8라운드 스킵
    </button>
    <button class="flex justify-center fixed w-36 right-5 top-20 bg-red-400 text-white font-bold p-3 rounded hover:bg-red-600" @click="skipGame(14)">
      14라운드 스킵
    </button>
    <button class="flex justify-center fixed w-36 right-5 top-36 bg-blue-400 text-white font-bold p-3 rounded hover:bg-blue-600" @click="resetCurrentRound">
      라운드 초기화
    </button>
    <button class="flex justify-center fixed w-36 right-5 top-52 bg-yellow-400 text-white font-bold p-3 rounded hover:bg-yellow-600" @click="startRound">
      라운드 시작
    </button>
    <button
      v-if="isMyTurn"
      class="flex justify-center fixed w-36 right-5 bottom-5 bg-yellow-400 text-white font-bold p-3 rounded hover:bg-yellow-600" @click="endTurn">
      턴 종료
    </button>

    <div class="flex justify-between w-full h-screen overflow-scroll bg-[#B3B85E]">
      <!--  상대 자원 표시  -->
      <div>
        <div class="grid grid-rows-12 fixed left-0 top-1/4 bg-[#A2CF5F]">
          <div class="flex">
            <div class="p-3 border border-black w-full font-bold">{{ opponent }}</div>
          </div>
          <div class="flex" v-for="(item, index) in oppoGameResources" :key="index">
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <img :src="item.image" :alt="item.name" class="w-10 h-10" />
            </div>
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <p class="flex items-center text-2xl">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!--  메인 게임 보드  -->
      <div class="max-w-5xl mx-auto grid content-between">
        <!--  상대  -->
        <div class="flex gap-x-10">
          <!--  게임 시작 시 상대 농장판  -->
          <InitialOppoFarmBoard :oppoFarm="oppoFarm" />
          <!--  상대가 사용한 카드  -->
          <div v-for="(card, index) in oppoCardData" :key="index">
            <img
              class="w-auto h-56 cursor-pointer rotate-180 transform transition duration-500 ease-in-out hover:scale-110"
              :src="card.imgSrc"
              @click="card.modal.toggleModal"
              :alt="card.alt"
            />
            <CardModal
              :show="card.modal.showModal.value"
              :cards="card.cards.value"
              @close="card.modal.toggleModal"
              :cardType="card.cardType"
            />
          </div>
        </div>

        <!--  게임 진행판  -->
        <div class="bg-gradient-to-r from-[#B2C95E] via-[#95AD4B] to-[#7C9432] p-2">
          <div class="grid grid-cols-8 gap-2 p-2">
            <FarmExpand class="flex justify-center items-center"/>
            <CardFlip :round="1" :frontImage="rounds[0].imgSrc" :backImage="rounds[0].backImgSrc" />
            <CardFlip :round="2" :frontImage="rounds[1].imgSrc" :backImage="rounds[1].backImgSrc" />
            <CardFlip :round="5" :frontImage="rounds[4].imgSrc" :backImage="rounds[4].backImgSrc" />
            <VegetableSeed :round="8" :frontImage="rounds[7].imgSrc" :backImage="rounds[7].backImgSrc" />
            <CowMarket :round="10" :frontImage="rounds[9].imgSrc" :backImage="rounds[9].backImgSrc" />
            <CardFlip :round="12" :frontImage="rounds[11].imgSrc" :backImage="rounds[11].backImgSrc" />
            <CardFlip :round="14" :frontImage="rounds[13].imgSrc" :backImage="rounds[13].backImgSrc" />
            <MeetingPlace class="flex justify-center items-center"/>
            <GrainSeed class="flex justify-center items-center"/>
            <Forest class="flex justify-center items-center"/>
            <CardFlip :round="3" :frontImage="rounds[2].imgSrc" :backImage="rounds[2].backImgSrc" />
            <CardFlip :round="6" :frontImage="rounds[5].imgSrc" :backImage="rounds[5].backImgSrc" />
            <PigMarket :round="9" :frontImage="rounds[8].imgSrc" :backImage="rounds[8].backImgSrc" />
            <CardFlip :round="11" :frontImage="rounds[10].imgSrc" :backImage="rounds[10].backImgSrc" />
            <CardFlip :round="13" :frontImage="rounds[12].imgSrc" :backImage="rounds[12].backImgSrc" />
            <div class="row-span-2" />
            <Farmland class="flex justify-center items-center"/>
            <SoilMining class="flex justify-center items-center"/>
            <Instruction class="flex justify-center items-center"/>
            <ReedField class="flex justify-center items-center"/>
            <CardFlip :round="4" :frontImage="rounds[3].imgSrc" :backImage="rounds[3].backImgSrc" />
            <CardFlip :round="7" :frontImage="rounds[6].imgSrc" :backImage="rounds[6].backImgSrc" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="flex justify-center items-center row-span-2">
              <img
                class="w-auto h-56 cursor-pointer transform transition duration-500 ease-in-out hover:scale-110"
                :src="notUsedMajorFacCardData.imgSrc"
                @click="notUsedMajorFacCardData.modal.toggleModal"
                :alt="notUsedMajorFacCardData.alt"
              />
              <CardModal
                :show="notUsedMajorFacCardData.modal.showModal.value"
                :cards="notUsedMajorFacCardData.cards.value"
                @close="notUsedMajorFacCardData.modal.toggleModal"
                :cardType="notUsedMajorFacCardData.cardType"
              />
            </div>
            <DayLabor class="flex justify-center items-center" />
            <Fishing class="flex justify-center items-center" />
          </div>
        </div>

        <!--  나  -->
        <div class="flex flex-row-reverse gap-x-10">
          <!--  내 농장판  -->
          <InitialMyFarmBoard :myFarm="myFarm" />
          <!--  내 카드  -->
          <div v-for="(card, index) in myCardData" :key="index" class="relative group">
            <img
              class="w-auto h-56 cursor-pointer transform transition duration-500 ease-in-out hover:scale-110"
              :src="card.imgSrc"
              @click="card.modal.toggleModal"
              :alt="card.alt"
            />
            <CardModal
              :show="card.modal.showModal.value"
              :cards="card.cards.value"
              @close="card.modal.toggleModal"
              :cardType="card.cardType"
            />
          </div>
        </div>
      </div>

      <!--  내 자원 표시  -->
      <div>
        <div class="grid grid-rows-12 fixed right-0 top-1/4 bg-[#A2CF5F]">
          <div class="flex">
            <div class="p-3 border border-black w-full font-bold">{{ user }} (나)</div>
          </div>
          <div class="flex" v-for="(item, index) in myGameResources" :key="index">
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <p class="flex items-center text-2xl">{{ item.value }}</p>
            </div>
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <img :src="item.image" :alt="item.name" class="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import { io } from "socket.io-client";
import {useStore} from 'vuex';
import { resourceMap, assiFacCardMap, majorFacCardMap, jobCardMap, roundsRef, actionsRef, farmRef } from '@/constants';
import CardModal from "@/components/CardModal.vue";
import RoundModal from "@/components/RoundModal.vue";
import CardFlip from "@/components/CardFlip.vue";
import ScoreTableModal from '@/components/ScoreTableModal.vue';
//* FarmBoard */
import InitialOppoFarmBoard from '@/components/FarmBoard/InitialOppoFarmBoard.vue';
import InitialMyFarmBoard from '@/components/FarmBoard/InitialMyFarmBoard.vue';
//* Basic Actions */
import FarmExpand from "@/components/BasicActions/FarmExpand.vue";
import MeetingPlace from "@/components/BasicActions/MeetingPlace.vue";
import GrainSeed from "@/components/BasicActions/GrainSeed.vue";
import Farmland from "@/components/BasicActions/Farmland.vue";
import Instruction from "@/components/BasicActions/Instruction.vue";
import DayLabor from "@/components/BasicActions/DayLabor.vue";
import Forest from "@/components/BasicActions/Forest.vue";
import SoilMining from "@/components/BasicActions/SoilMining.vue";
import ReedField from "@/components/BasicActions/ReedField.vue";
import Fishing from "@/components/BasicActions/Fishing.vue";
//* RoundCard Actions */
import VegetableSeed from "@/components/RoundCardActions/VegetableSeed.vue";
import PigMarket from "@/components/RoundCardActions/PigMarket.vue";
import CowMarket from "@/components/RoundCardActions/CowMarket.vue";
import TurnModal from '@/components/TurnModal.vue'

export default {
  components: {
    TurnModal,
    CardModal,
    RoundModal,
    CardFlip,
    //* FarmBoard */
    InitialOppoFarmBoard,
    InitialMyFarmBoard,
    //* Basic Actions */
    ScoreTableModal,
    FarmExpand,
    MeetingPlace,
    GrainSeed,
    Farmland,
    Instruction,
    DayLabor,
    Forest,
    SoilMining,
    ReedField,
    Fishing,
    //* RoundCard Actions */
    VegetableSeed,
    PigMarket,
    CowMarket,
  },

  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const playersInRoom = ref(computed(() => store.state.playersInRoom));
    const gameStatus = ref(computed(() => store.state.gameStatus));
    const roomId = gameStatus.value[0].roomId;
    console.log(gameStatus);

    // 모달 창 관련 함수
    const createModalState = () => {
      const showModal = ref(false);
      const toggleModal = () => {
        showModal.value = !showModal.value;
      };

      return { showModal, toggleModal };
    };

    const notUsedAssiFacCardModal = createModalState();
    const notUsedJobCardModal = createModalState();
    const myUsedJobCardModal = createModalState();
    const myUsedAssiFacCardModal = createModalState();
    const myUsedMajorFacCardModal = createModalState();
    const oppoUsedAssiFacCardModal = createModalState();
    const oppoUsedJobCardModal = createModalState();
    const oppoUsedMajorFacCardModal = createModalState();
    const notUsedMajorFacCardModal = createModalState();
    const scoreTableModal = createModalState();

    // helper functions
    const getUserStatus = (gameStatus, userId) => {
      return gameStatus.value.find((status) => status.UserId === userId);
    };

    const getGameResources = (resourceMap, gameStatus) => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: gameStatus.value[key],
      }));
    };

    const getCards = (cardMap, status, Cards) => {
      return computed(() => {
        return Object.entries(cardMap)
          .filter(([key]) => status.value[Cards].includes(key))
          .map(([key, { name, name_kr, image }]) => ({
            name,
            name_kr,
            image,
            value: status.value[key],
          }));
      });
    };

    // user 정보
    const user = computed(() => store.state.user);
    const myGameStatus = computed(() => getUserStatus(gameStatus, user.value));
    const myGameResources = computed(() => getGameResources(resourceMap, myGameStatus));
    const myUsedAssiFacCard = getCards(assiFacCardMap, myGameStatus, 'usedSubFacilityCard');
    const myUsedJobCard = getCards(jobCardMap, myGameStatus, 'usedJobCard');
    const myUsedMajorFacCard = getCards(majorFacCardMap, myGameStatus, 'usedMainFacilityCard');
    const notUsedAssiFacCard = getCards(assiFacCardMap, myGameStatus, 'remainedSubFacilityCard');
    const notUsedJobCard = getCards(jobCardMap, myGameStatus,'remainedJobCard');
    const myCardData = [
      {
        imgSrc: require("@/assets/images/CardBack/JobCardBack.png"),
        alt: "myUsedJobCard",
        modal: myUsedJobCardModal,
        cards: myUsedJobCard,
        cardType: "사용한 직업",
      },
      {
        imgSrc: require("@/assets/images/CardBack/AssiFacCardBack.png"),
        alt: "myUsedAssiFacCard",
        modal: myUsedAssiFacCardModal,
        cards: myUsedAssiFacCard,
        cardType: "사용한 보조 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
        alt: "myUsedMajorFacCard",
        modal: myUsedMajorFacCardModal,
        cards: myUsedMajorFacCard,
        cardType: "사용한 주요 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/NotUsedAssiFacCardBack.png"),
        alt: "notUsedAssiFacCard",
        modal: notUsedAssiFacCardModal,
        cards: notUsedAssiFacCard,
        cardType: "사용하지 않은 보조 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/NotUsedJobCardBack.png"),
        alt: "notUsedJobCard",
        modal: notUsedJobCardModal,
        cards: notUsedJobCard,
        cardType: "사용하지 않은 직업",
      },
    ];
    const isMyTurn = ref(computed(() => {
      return myGameStatus.value.isMyTurn;
    }))

    console.log("나", user);

    // opponent(상대방) 정보
    const opponent = computed(() => playersInRoom.value.find(player => player !== user.value));
    const oppoGameStatus = computed(() => getUserStatus(gameStatus, opponent.value));
    const oppoGameResources = computed(() => getGameResources(resourceMap, oppoGameStatus));
    const oppoUsedAssiFacCard = getCards(assiFacCardMap, oppoGameStatus, 'usedSubFacilityCard');
    const oppoUsedJobCard = getCards(jobCardMap, oppoGameStatus, 'usedJobCard');
    const oppoUsedMajorFacCard = getCards(majorFacCardMap, oppoGameStatus, 'usedMainFacilityCard');
    const oppoCardData = [
      {
        imgSrc: require("@/assets/images/CardBack/JobCardBack.png"),
        alt: "oppoUsedJobCard",
        modal: oppoUsedJobCardModal,
        cards: oppoUsedJobCard,
        cardType: "상대가 사용한 직업",
      },
      {
        imgSrc: require("@/assets/images/CardBack/AssiFacCardBack.png"),
        alt: "oppoUsedAssiFacCard",
        modal: oppoUsedAssiFacCardModal,
        cards: oppoUsedAssiFacCard,
        cardType: "상대가 사용한 보조 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
        alt: "oppoUsedMajorFacCard",
        modal: oppoUsedMajorFacCardModal,
        cards: oppoUsedMajorFacCard,
        cardType: "상대가 사용한 주요 설비",
      },
    ];

    console.log("상대방", opponent);

    const host = ref(computed(() => store.state.host));
    // host가 user인 경우 guest는 opponent
    const guest = computed(() => {
      if (host.value === user.value) {
        return opponent.value;
      }
      return user.value;
    });
    
    // 주요 설비 정보
    const majorFacCardsList = Object.keys(majorFacCardMap);
    const majorFacCards = ref(computed(() => store.state.remainedMajorFac));
    // 사용되지 않은 주요 설비 카드
    const notUsedMajorFacCard = computed(() => {
      const usedMajorFacCards = new Set([...myUsedMajorFacCard.value, ...oppoUsedMajorFacCard.value]);
      return majorFacCards.value
        .filter(key => !usedMajorFacCards.has(key))
        .map(key => {
          const { name, name_kr, image } = majorFacCardMap[key];
          return { name, name_kr, image, value: majorFacCards[key] };
        });
    });
    const notUsedMajorFacCardData = {
      imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
      alt: "notUsedMajorFacCard",
      modal: notUsedMajorFacCardModal,
      cards: notUsedMajorFacCard,
      cardType: "사용되지 않는 주요 설비",
    };

    // 행동 칸 정보
    const actions = ref(actionsRef);
    // action을 위한 함수들을 동적으로 생성
    const actionFunctions = {};
    for (let i = 1; i <= 10; i++) {
      const actionName = `openAction${i}`;
      actionFunctions[actionName] = () => {
        console.log(actionName);
      };

      // 해당 action의 clickHandler를 등록
      for (const action of actions.value) {
        action.clickHandler = actionFunctions[`openAction${action.id}`];
      }
    }

    const rounds = ref(roundsRef);
    const currentRound = ref(computed(() => store.state.currentRound));

    const resetCurrentRound = () => {
      store.commit("setCurrentRound", 1);
    };
    const startRound = () => {
      socket.emit("startRound", gameStatus.value[0]);
    };
    const skipGame = (round) => {
      const skipGameData = {
        roomId: roomId,
        skipRound: round,
        userId: [{ userId: host.value }, { userId: guest.value }],
      };
      socket.emit("skipGame", skipGameData);
      socket.once("skipGame",() => {
        socket.emit("accumulateGoods",{
          roomId: roomId,
          accList: [
            "woodAccumulated", 
            "sandAccumulated", 
            "reedAccumulated", 
            "foodAccumulated",
            "sheepAccumulated", 
            "stoneAccumulatedWest"
            ]
        });
      });
    };

    const myFarm = ref(farmRef);
    const oppoFarm = ref(farmRef);
    // myFarm을 위한 함수들을 동적으로 생성
    const myFarmFunctions = {};
    for (let i = 1; i <= 15; i++) {
      const myFarmName = `openMyFarm${i}`;
      myFarmFunctions[myFarmName] = () => {
        console.log(myFarmName);
      };
      // 해당 myFarm의 clickHandler를 등록
      for (const farm of myFarm.value) {
        farm.clickHandler = myFarmFunctions[`openMyFarm${farm.id}`];
      }
    }

    // TODO: myFarm과 oppoFarm에 Room이 있다면, Room에 가족 구성원 올려놓기

    // 현재 라운드 모달
    const showRoundModal = ref(false);
    const showRound = () => {
      showRoundModal.value = true;
      setTimeout(() => {
        showRoundModal.value = false;
      }, 2000);
    };

    // 턴 종료
    const endTurn = () => {
      socket.emit("endTurn", {
        roomId: roomId,
        userId: user.value,
      });
    };

    onMounted(() => {
      showRound();

      store.commit("setRemainedMajorFac", majorFacCardsList);

      socket.on("startRound", () => {
        store.commit("setCurrentRound", currentRound.value + 1);
        showRound();
      });

      socket.on("skipGame", (data) => {
        store.commit("setCurrentRound", data.skipRound);
        const updatedStatus = data.updatedPlayer.map(player => player.playerDetail);
        store.commit("setGameStatus", updatedStatus);
        store.commit("setRemainedMajorFac", data.updatedPlayer[0].remainedMainFacilityCard);
        showRound();
      });

      socket.on("useActionSpace",(data) => {
        for(let player of gameStatus.value){
          if(player.UserId === data.UserId || player.UserId === data.updateResult?.UserId){
            if(data.UserId === host.value || data.updateResult?.UserId === host.value){
              if(data.UserId === host.value){
                gameStatus.value[0] = data;
                console.log(gameStatus.value[0]);
              }else{
                gameStatus.value[0] = data.updateResult;
              }
            }else{
              if(data.UserId === guest.value){
                gameStatus.value[1] = data;
              }else{
                gameStatus.value[1] = data.updateResult;
              }
            }
      socket.on("useActionSpace", (data) => {
        const { remainedMainFacilityCard, ...rest } = data;
        for (let player of gameStatus.value) {
          if (player.UserId === data.UserId) {
            if (data.UserId === host.value) gameStatus.value[0] = rest;
            else gameStatus.value[1] = rest;
          }
        }
        store.commit("setGameStatus", gameStatus);
        store.commit("setRemainedMajorFac", remainedMainFacilityCard);
      });

      socket.on("endTurn", (data) => {
        store.commit("setGameStatus", data.result);
      });
    });

    return {
      actions,
      ...actionFunctions,
      rounds,
      gameStatus,
      user,
      myGameStatus,
      myGameResources,
      myCardData,
      opponent,
      oppoGameStatus,
      oppoGameResources,
      oppoCardData,
      notUsedMajorFacCardData,
      myFarm,
      oppoFarm,
      resetCurrentRound,
      startRound,
      skipGame,
      currentRound,
      showRoundModal,
      scoreTableModal,
      endTurn,
      isMyTurn
    };
  },
};
</script>
