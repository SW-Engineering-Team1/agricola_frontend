<template>
  <div>
    <RoundModal v-if="showRoundModal && !showEndRoundModal" :round="currentRound" />
    <EndRoundModal v-if="showEndRoundModal && !showRoundModal" :round="currentRound" />
    <TurnModal v-if="isMyTurn && !showRoundModal && !showEndRoundModal" />
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
          <!--  상대 농장판  -->
          <div v-if="showR8StartFarmBoard">
            <R8StartOppoFarmBoard/>
          </div>
          <div v-else-if="showR14StartFarmBoard">
            <R14StartOppoFarmBoard/>
          </div>
          <div v-else>
            <InitialOppoFarmBoard/>
          </div>
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
            <FarmExpand class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <CardFlip :round="1" :frontImage="rounds[0].imgSrc" :backImage="rounds[0].backImgSrc" />
            <CardFlip :onclick="grainUseModal.toggleModal" :round="2" :frontImage="rounds[1].imgSrc" :backImage="rounds[1].backImgSrc" />
            <IsGrainUtil :onclick="isBakeModal.toggleModal" :show="grainUseModal.showModal.value" @close="grainUseModal.toggleModal" />
            <IsBaked :show="isBakeModal.showModal.value" @close="isBakeModal.toggleModal" />
            <WestQuarry :round="5" :frontImage="rounds[4].imgSrc" :backImage="rounds[4].backImgSrc" :isMyTurn="isMyTurn" />
            <VegetableSeed :round="8" :frontImage="rounds[7].imgSrc" :backImage="rounds[7].backImgSrc" :isMyTurn="isMyTurn" />
            <CowMarket :round="10" :frontImage="rounds[9].imgSrc" :backImage="rounds[9].backImgSrc" :isMyTurn="isMyTurn" />
            <FieldFarming :round="12" :frontImage="rounds[11].imgSrc" :backImage="rounds[11].backImgSrc" :isMyTurn="isMyTurn" />
            <CardFlip :round="14" :frontImage="rounds[13].imgSrc" :backImage="rounds[13].backImgSrc" />
            <MeetingPlace class="flex justify-center items-center" :isMyTurn="isMyTurn"/>
            <GrainSeed class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <Forest class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <CardFlip :round="3" :frontImage="rounds[2].imgSrc" :backImage="rounds[2].backImgSrc" />
            <CardFlip :round="6" :frontImage="rounds[5].imgSrc" :backImage="rounds[5].backImgSrc" :isMyTurn="isMyTurn" />
            <PigMarket :round="9" :frontImage="rounds[8].imgSrc" :backImage="rounds[8].backImgSrc" :isMyTurn="isMyTurn" />
            <EastQuarry :round="11" :frontImage="rounds[10].imgSrc" :backImage="rounds[10].backImgSrc" :isMyTurn="isMyTurn" />
            <CardFlip :round="13" :frontImage="rounds[12].imgSrc" :backImage="rounds[12].backImgSrc" />
            <div class="row-span-2" />
            <Farmland class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <SoilMining class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <Instruction class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <ReedField class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <SheepMarket :round="4" :frontImage="rounds[3].imgSrc" :backImage="rounds[3].backImgSrc" :isMyTurn="isMyTurn" />
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
            <DayLabor class="flex justify-center items-center" :isMyTurn="isMyTurn" />
            <Fishing class="flex justify-center items-center" :isMyTurn="isMyTurn" />
          </div>
        </div>

        <!--  본인  -->
        <div class="flex flex-row-reverse gap-x-10">
          <!--  본인 농장판  -->
          <div v-if="showR8StartFarmBoard">
            <R8StartMyFarmBoard/>
          </div>
          <div v-else-if="showR14StartFarmBoard">
            <R14StartMyFarmBoard/>
          </div>
          <div v-else>
            <InitialMyFarmBoard/>
          </div>
          <!--  본인 카드  -->
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

      <!--  본인 자원 표시  -->
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

    <audio id="background-music" loop>
      <source ref="audio" src="../assets/bg-music.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import { io } from "socket.io-client";
import {useStore} from 'vuex';
import { resourceMap, assiFacCardMap, majorFacCardMap, jobCardMap, roundsRef, actionsRef } from '@/constants';
import CardModal from "@/components/CardModal.vue";
import RoundModal from "@/components/RoundModal.vue";
import EndRoundModal from "@/components/EndRoundModal.vue";
import CardFlip from "@/components/CardFlip.vue";
import ScoreTableModal from '@/components/ScoreTableModal.vue';
import TurnModal from '@/components/TurnModal.vue'
//* FarmBoard */
import InitialOppoFarmBoard from '@/components/FarmBoard/InitialOppoFarmBoard.vue';
import InitialMyFarmBoard from '@/components/FarmBoard/InitialMyFarmBoard.vue';
import R8StartMyFarmBoard from "@/components/FarmBoard/R8StartMyFarmBoard.vue";
import R8StartOppoFarmBoard from "@/components/FarmBoard/R8StartOppoFarmBoard.vue";
import R14StartMyFarmBoard from "@/components/FarmBoard/R14StartMyFarmBoard.vue";
import R14StartOppoFarmBoard from "@/components/FarmBoard/R14StartOppoFarmBoard.vue";
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
import SheepMarket from "@/components/RoundCardActions/SheepMarket.vue";
import WestQuarry from "@/components/RoundCardActions/WestQuarry.vue";
import VegetableSeed from "@/components/RoundCardActions/VegetableSeed.vue";
import PigMarket from "@/components/RoundCardActions/PigMarket.vue";
import CowMarket from "@/components/RoundCardActions/CowMarket.vue";
import EastQuarry from "@/components/RoundCardActions/EastQuarry.vue";
import FieldFarming from "@/components/RoundCardActions/FieldFarming.vue";
// import DefaultAddFam from "@/components/RoundCardActions/DefaultAddFam.vue"
//* ServeModal */
import IsGrainUtil from "@/components/ServeModal/IsGrainUtil.vue"
import IsBaked from "@/components/ServeModal/IsBaked.vue"
import {useRouter} from 'vue-router'

export default {
  data() {
    return {
      isR8StartFarmBoard: false,
      isR14StartFarmBoard: false,
    };
  },
  components: {
    TurnModal,
    CardModal,
    RoundModal,
    EndRoundModal,
    CardFlip,
    //* FarmBoard */
    InitialMyFarmBoard,
    InitialOppoFarmBoard,
    R8StartMyFarmBoard,
    R8StartOppoFarmBoard,
    R14StartMyFarmBoard,
    R14StartOppoFarmBoard,
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
    SheepMarket,
    WestQuarry,
    VegetableSeed,
    PigMarket,
    CowMarket,
    EastQuarry,
    FieldFarming,
    // DefaultAddFam,
    //* ServeModal */
    IsGrainUtil,
    IsBaked
  },

  setup() {
    const router = useRouter();
    const showR8StartFarmBoard = ref(false);
    const showR14StartFarmBoard = ref(false);
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

    const myUsedJobCardModal = createModalState();
    const myUsedAssiFacCardModal = createModalState();
    const myUsedMajorFacCardModal = createModalState();
    const oppoUsedAssiFacCardModal = createModalState();
    const oppoUsedJobCardModal = createModalState();
    const oppoUsedMajorFacCardModal = createModalState();
    const notUsedMajorFacCardModal = createModalState();
    const scoreTableModal = createModalState();
    const grainUseModal = createModalState();
    const isBakeModal = createModalState();

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
    const myCardData = [
      {
        imgSrc: require("@/assets/images/CardBack/JobCardBack.png"),
        alt: "myUsedJobCard",
        modal: myUsedJobCardModal,
        cards: myUsedJobCard,
        cardType: "직업",
      },
      {
        imgSrc: require("@/assets/images/CardBack/AssiFacCardBack.png"),
        alt: "myUsedAssiFacCard",
        modal: myUsedAssiFacCardModal,
        cards: myUsedAssiFacCard,
        cardType: "보조 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
        alt: "myUsedMajorFacCard",
        modal: myUsedMajorFacCardModal,
        cards: myUsedMajorFacCard,
        cardType: "사용한 주요 설비",
      },
    ];
    let remainedMyTurn = myGameStatus.value.family;
    console.log(remainedMyTurn);

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
        cardType: "상대 직업",
      },
      {
        imgSrc: require("@/assets/images/CardBack/AssiFacCardBack.png"),
        alt: "oppoUsedAssiFacCard",
        modal: oppoUsedAssiFacCardModal,
        cards: oppoUsedAssiFacCard,
        cardType: "상대 보조 설비",
      },
      {
        imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
        alt: "oppoUsedMajorFacCard",
        modal: oppoUsedMajorFacCardModal,
        cards: oppoUsedMajorFacCard,
        cardType: "상대가 사용한 주요 설비",
      },
    ];
    let remainedOppoTurn = oppoGameStatus.value.family;
    console.log(remainedOppoTurn);

    const isMyTurn = ref(computed(() => {
      return myGameStatus.value.isMyTurn;
    }));

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
      cardType: "사용되지 않은 주요 설비",
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

      if (round === 8) {
        socket.emit("accumulateGoods", {
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
        showR8StartFarmBoard.value = true;
        showR14StartFarmBoard.value = false;
      }
      else if (round === 14) {
        socket.emit("accumulateGoods", {
          roomId: roomId,
          accList: [
            "woodAccumulated",
            "sandAccumulated",
            "reedAccumulated",
            "foodAccumulated",
            "sheepAccumulated",
            "stoneAccumulatedWest",
            "pigAccumulated",
            "cowAccumulated",
            "stoneAccumulatedEast"
          ]
        });
        showR8StartFarmBoard.value = false;
        showR14StartFarmBoard.value = true;
      }
    };

    // TODO: myFarm과 oppoFarm에 Room이 있다면, Room에 가족 구성원 올려놓기

    // 라운드 모달
    const showRoundModal = ref(false);
    const showRound = () => {
      showRoundModal.value = true;
      setTimeout(() => {
        showRoundModal.value = false;
      }, 2000);
    };
    const showEndRoundModal = ref(false);
    const showEndRound = () => {
      showEndRoundModal.value = true;
      setTimeout(() => {
        showEndRoundModal.value = false;
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
      // currentRound 값이 바뀌면 showRound 실행
      watch(currentRound, () => {
        showRound();
      });

      store.commit("setRemainedMajorFac", majorFacCardsList);

      socket.on("startRound", (data) => {
        const updatedStatus = data.updateResult.map(player => player.playerDetail);
        remainedMyTurn = myGameStatus.value.family;
        remainedOppoTurn = oppoGameStatus.value.family;
        store.commit("setCurrentRound", currentRound.value + 1);
        store.commit("setGameStatus", updatedStatus);
        showRound();
      });

      socket.on("skipGame", (data) => {
        store.commit("setCurrentRound", data.skipRound);
        const updatedStatus = data.updatedPlayer.map(player => player.playerDetail);
        store.commit("setGameStatus", updatedStatus);
        store.commit("setRemainedMajorFac", data.updatedPlayer[0].remainedMainFacilityCard);
        showRound();
      });

      socket.on("accumulateGoods", (data) => {
        store.commit("setAccumulatedResources", data.result);
      });

      socket.on("useActionSpace", (data) => {
        console.log("useActionSpace", data);
        const handleData = (data) => {
          const { remainedMainFacilityCard, ...rest } = data;
          // gameStatus 내에 data.UserId와 일치하는 player의 정보를 data로 업데이트
          const updatedStatus = gameStatus.value.map(status => {
            if (status.UserId === rest.UserId) return rest;
            else return status;
          });
          // gameStatus 업데이트
          store.commit("setGameStatus", updatedStatus);
          // remainedMajorFacilityCard 업데이트
          store.commit("setRemainedMajorFac", remainedMainFacilityCard);
        };

        if ('updateResult' in data) { // data에 'updateResult'가 있는 경우 (ex. 숲)
          handleData(data.updateResult);
          store.commit("setAccumulatedResources", data.accResult);
        } else { // data에 'updateResult'가 없고 바로 result만 있는 경우 (ex. 채소종자)
          handleData(data);
        }
      });

      socket.on("endTurn", (data) => {
        if (user.value === data.result[0].UserId) {
          remainedMyTurn--;
        } else {
          if (remainedMyTurn > 0) remainedOppoTurn--;
        }
        console.log("remainedMyTurn", remainedMyTurn);
        console.log("remainedOppoTurn", remainedOppoTurn);

        const updatedStatus = gameStatus.value.map(status => {
          if (status.UserId === data.result[0].UserId) {
            return data.result[0];
          } else {
            status.isMyTurn = true;
            return status;
          }
        });
        // gameStatus 업데이트
        store.commit("setGameStatus", updatedStatus);

        // remainedMyTurn과 remainedOppoTurn이 둘다 0이면 라운드 종료
        if (remainedMyTurn === 0 && remainedOppoTurn === 0) {
          // 현재 라운드가 4, 7, 9, 11, 13, 14라운드일 경우, endCycle 실행
          if (currentRound.value === 4 || currentRound.value === 7 ||
              currentRound.value === 9 || currentRound.value === 11 ||
              currentRound.value === 13 || currentRound.value === 14) {
            socket.emit("endCycleHarvestCrop", {roomId: roomId});
            socket.emit("endCyclePayFood", {roomId: roomId});
            socket.emit("endCycleBreedAnimal", {roomId: roomId});
            if (currentRound.value === 14) {
              socket.emit("endGame", {roomId: roomId});
            }
          } else { // 그 외의 경우, endRound 실행
            socket.emit("endRound");
          }
        }
      });

      socket.on("endRound", () => {
        showEndRound();
        // 2초 뒤 실행
        setTimeout(() => {
          remainedMyTurn = myGameStatus.value.family;
          remainedOppoTurn = oppoGameStatus.value.family;
          store.commit("setCurrentRound", currentRound.value + 1);
        }, 2000);
      });

      const updateGameStatus = (data, index) => {
        const {remainedMainFacilityCard, ...rest} = data.result.gameStatusList[index];
        // gameStatus 내에 data.UserId와 일치하는 player의 정보를 data로 업데이트
        const updatedStatus = gameStatus.value.map(status => {
          if (status.UserId === rest.UserId) return rest;
          else return status;
        });
        // gameStatus 업데이트
        store.commit("setGameStatus", updatedStatus);
        // remainedMajorFacilityCard 업데이트
        store.commit("setRemainedMajorFac", remainedMainFacilityCard);
      };

      socket.on("endCycleHarvestCrop", (data) => {
        console.log("endCycleHarvestCrop", data);
        updateGameStatus(data, 0);
        updateGameStatus(data, 1);
      });

      socket.on("endCyclePayFood", (data) => {
        console.log("endCyclePayFood", data);
        updateGameStatus(data, 0);
        updateGameStatus(data, 1);
      });

      socket.on("endCycleBreedAnimal", (data) => {
        console.log("endCycleBreedAnimal", data);
        updateGameStatus(data, 0);
      });

      socket.on("endGame", (data) => {
        console.log("endGame", data);
        store.commit("setGameResult", data);
        // 게임 결과 페이지로 이동
        router.push(`/room/${roomId}/gameResult`);
      });

      const audioElement = document.getElementById('background-music');
      if (audioElement) {
        audioElement.play();
      }
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
      resetCurrentRound,
      startRound,
      skipGame,
      currentRound,
      showRoundModal,
      showEndRoundModal,
      scoreTableModal,
      grainUseModal,
      endTurn,
      isMyTurn,
      showR8StartFarmBoard,
      showR14StartFarmBoard,
      isBakeModal
    };
  },
};
</script>
