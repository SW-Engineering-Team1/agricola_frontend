<template>
  <div>
    <div
      class="flex justify-between w-full h-screen overflow-scroll bg-[#B3B85E]"
    >
      <!-- 8라운드 스킵버튼 -->
      <div class="flex justify-end">
        <button
          @click="goRoundEight"
          class="bg-blue-500 text-white rounded-full py-2 px-1 text-sm"
        >
          Skip8
        </button>
      </div>
      <!--  상대 자원 표시  -->
      <div>
        <div class="grid grid-rows-12 fixed left-0 top-1/4 bg-[#A2CF5F]">
          <div class="flex">
            <div class="p-3 border border-black w-full font-bold">
              {{ opponent }}
            </div>
          </div>
          <div
            class="flex"
            v-for="(item, index) in oppoGameResources"
            :key="index"
          >
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
      <div class="w-2/3 mx-auto grid content-between">
        <!--  상대  -->
        <div class="flex gap-x-10">
          <!--  상대 농장판  -->
          <div class="flex justify-center">
            <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
              <button
                v-for="p2Farm in p2Farms.slice(0, 5)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p2WoodRoom in p2WoodRooms.slice(0, 1)"
                :key="p2WoodRoom.id"
                @click="p2WoodRoom.clickHandler"
              >
                <img
                  src="../assets/images/Room/WoodRoom.png"
                  alt="woodRoom"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p2Farm in p2Farms.slice(5, 9)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p2WoodRoom in p2WoodRooms.slice(1, 2)"
                :key="p2WoodRoom.id"
                @click="p2WoodRoom.clickHandler"
              >
                <img
                  src="../assets/images/Room/WoodRoom.png"
                  alt="woodRoom"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p2Farm in p2Farms.slice(9, 13)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <!--  상대 직업 카드  -->
          <div>
            <P2JobCardModal
              v-if="isP2JobCardModalOpen"
              @close-modal="closeP2JobCardModal"
            />
            <button @click="openP2JobCardModal">
              <img
                src="../assets/images/CardBack/JobCardBack.png"
                class="w-auto h-56 rotate-180"
                alt="jobCard"
              />
            </button>
          </div>
          <!--  상대 보조 설비 카드  -->
          <div>
            <P2AssiFacModal
              v-if="isP2AssiFacModalOpen"
              @close-modal="closeP2AssiFacModal"
            />
            <button @click="openP2AssiFacModal">
              <img
                src="../assets/images/CardBack/AssiFacCardBack.png"
                class="w-auto h-56 rotate-180"
                alt="assiFacCard"
              />
            </button>
          </div>
          <!--  상대 주요 설비 카드  -->
          <div class="bg-gray-500">상대 주요 설비 카드</div>
=======
          <!--  상대가 사용한 카드  -->
          <div v-for="(card, index) in oppoCardData" :key="index">
            <img
              class="w-auto h-56 cursor-pointer rotate-180"
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
>>>>>>> seungho
        </div>

        <!--  게임 진행판  -->
        <div class="bg-[#C4B15A] p-2">
          <div class="grid grid-cols-8 gap-0.5 grid-flow-row-dense">
<<<<<<< HEAD
            <FarmExpand class="flex justify-center items-center" />
            <button
              @click="openRound1"
              class="flex justify-center items-center row-span-2 p-0"
            >
              <img
                src="../assets/images/RoundCardBack/1Cycle1.png"
                class="w-full"
                alt="1Cycle1"
              />
            </button>
            <button
              @click="openRound2"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/1Cycle2.png"
                class="w-full"
                alt="1Cycle2"
              />
            </button>
            <button
              @click="openRound5"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/2Cycle1.png"
                class="w-full"
                alt="2Cycle1"
              />
            </button>
            <button
              @click="openRound8"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/3Cycle1.png"
                class="w-full"
                alt="3Cycle1"
              />
            </button>
            <button
              @click="openRound10"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/4Cycle1.png"
                class="w-full"
                alt="4Cycle1"
              />
            </button>
            <button
              @click="openRound12"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/5Cycle1.png"
                class="w-full"
                alt="5Cycle1"
              />
            </button>
            <button
              @click="openRound14"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/6Cycle.png"
                class="w-full"
                alt="6Cycle"
              />
            </button>
            <MeetingPlace class="flex justify-center items-center" />
            <GrainSeed class="flex justify-center items-center" />
            <Forest class="flex justify-center items-center" />
            <button
              @click="openRound3"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/1Cycle3.png"
                class="w-full"
                alt="1Cycle3"
              />
            </button>
            <button
              @click="openRound6"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/2Cycle2.png"
                class="w-full"
                alt="2Cycle2"
              />
            </button>
            <button
              @click="openRound9"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/3Cycle2.png"
                class="w-full"
                alt="3Cycle2"
              />
            </button>
            <button
              @click="openRound11"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/4Cycle2.png"
                class="w-full"
                alt="4Cycle2"
              />
            </button>
            <button
              @click="openRound13"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/5Cycle2.png"
                class="w-full"
                alt="5Cycle2"
              />
            </button>
            <div class="row-span-2" />
            <Farmland class="flex justify-center items-center" />
            <SoilMining class="flex justify-center items-center" />
            <Instruction class="flex justify-center items-center" />
            <ReedField class="flex justify-center items-center" />
            <button
              @click="openRound4"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/1Cycle4.png"
                class="w-full"
                alt="1Cycle4"
              />
            </button>
            <button
              @click="openRound7"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/RoundCardBack/2Cycle3.png"
                class="w-full"
                alt="2Cycle3"
              />
            </button>
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <MajorFacModal
              v-if="isMajorFacModalOpen"
              @close-modal="closeMajorFacModal"
            />
            <button
              @click="openMajorFacModal"
              class="flex justify-center items-center row-span-2"
            >
              <img
                src="../assets/images/CardBack/MajorFacCardBack.png"
                class="w-full h-auto"
                alt="majorCard"
              />
            </button>
            <DayLabor class="flex justify-center items-center" />
            <Fishing class="flex justify-center items-center" />
=======
            <FarmExpand class="flex justify-center items-center"/>
            <CardFlip @click="openRound1" :frontImage="rounds[0].imgSrc" :backImage="rounds[0].backImgSrc" />
            <CardFlip @click="openRound2" :frontImage="rounds[1].imgSrc" :backImage="rounds[1].backImgSrc" />
            <CardFlip @click="openRound5" :frontImage="rounds[4].imgSrc" :backImage="rounds[4].backImgSrc" />
            <CardFlip @click="openRound8" :frontImage="rounds[7].imgSrc" :backImage="rounds[7].backImgSrc" />
            <CardFlip @click="openRound10" :frontImage="rounds[9].imgSrc" :backImage="rounds[9].backImgSrc" />
            <CardFlip @click="openRound12" :frontImage="rounds[11].imgSrc" :backImage="rounds[11].backImgSrc" />
            <CardFlip @click="openRound14" :frontImage="rounds[13].imgSrc" :backImage="rounds[13].backImgSrc" />
            <MeetingPlace class="flex justify-center items-center"/>
            <GrainSeed class="flex justify-center items-center"/>
            <Forest class="flex justify-center items-center"/>
            <CardFlip @click="openRound3" :frontImage="rounds[2].imgSrc" :backImage="rounds[2].backImgSrc" />
            <CardFlip @click="openRound6" :frontImage="rounds[6].imgSrc" :backImage="rounds[6].backImgSrc" />
            <CardFlip @click="openRound9" :frontImage="rounds[9].imgSrc" :backImage="rounds[9].backImgSrc" />
            <CardFlip @click="openRound11" :frontImage="rounds[11].imgSrc" :backImage="rounds[11].backImgSrc" />
            <CardFlip @click="openRound13" :frontImage="rounds[12].imgSrc" :backImage="rounds[12].backImgSrc" />
            <div class="row-span-2" />
            <Farmland class="flex justify-center items-center"/>
            <SoilMining class="flex justify-center items-center"/>
            <Instruction class="flex justify-center items-center"/>
            <ReedField class="flex justify-center items-center"/>
            <CardFlip @click="openRound4" :frontImage="rounds[3].imgSrc" :backImage="rounds[3].backImgSrc" />
            <CardFlip @click="openRound7" :frontImage="rounds[6].imgSrc" :backImage="rounds[6].backImgSrc" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="flex justify-center items-center row-span-2">
              <img
                class="w-auto h-56 cursor-pointer"
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
            <DayLabor class="flex justify-center items-center"/>
            <Fishing class="flex justify-center items-center"/>
>>>>>>> seungho
          </div>
        </div>

        <!--  나  -->
        <div class="flex flex-row-reverse gap-x-10">
          <!--  내 농장판  -->
          <div class="flex justify-center">
            <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
              <button
                v-for="p1Farm in p1Farms.slice(0, 4)"
                :key="p1Farm.id"
                @click="p1Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p1WoodRoom in p1WoodRooms.slice(0, 1)"
                :key="p1WoodRoom.id"
                @click="p1WoodRoom.clickHandler"
              >
                <img
                  src="../assets/images/Room/WoodRoom.png"
                  alt="woodRoom"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p1Farm in p1Farms.slice(4, 8)"
                :key="p1Farm.id"
                @click="p1Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p1WoodRoom in p1WoodRooms.slice(1, 2)"
                :key="p1WoodRoom.id"
                @click="p1WoodRoom.clickHandler"
              >
                <img
                  src="../assets/images/Room/WoodRoom.png"
                  alt="woodRoom"
                  class="w-16 h-16"
                />
              </button>
              <button
                v-for="p1Farm in p1Farms.slice(8, 13)"
                :key="p1Farm.id"
                @click="p1Farm.clickHandler"
              >
                <img
                  src="../assets/images/Farm.jpg"
                  alt="farm"
                  class="w-16 h-16"
                />
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <!--  내 직업 카드  -->
          <div>
            <P1JobCardModal
              v-if="isP1JobCardModalOpen"
              @close-modal="closeP1JobCardModal"
            />
            <button @click="openP1JobCardModal">
              <img
                src="../assets/images/CardBack/JobCardBack.png"
                class="w-auto h-56"
                alt="jobCard"
              />
            </button>
          </div>
          <!--  내 보조 설비 카드  -->
          <div>
            <P1AssiFacModal
              v-if="isP1AssiFacModalOpen"
              @close-modal="closeP1AssiFacModal"
            />
            <button @click="openP1AssiFacModal">
              <img
                src="../assets/images/CardBack/AssiFacCardBack.png"
                class="w-auto h-56"
                alt="assiFacCard"
              />
            </button>
          </div>
          <!--  내 주요 설비 카드  -->
          <div class="bg-gray-500">내 주요 설비 카드</div>
          <!--  사용하지 않은 보조 설비 카드  -->
          <div>
=======
          <!--  내 카드  -->
          <div v-for="(card, index) in myCardData" :key="index">
>>>>>>> seungho
            <img
              class="w-auto h-56 cursor-pointer"
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
            <div class="p-3 border border-black w-full font-bold">
              {{ user }} (나)
            </div>
          </div>
          <div
            class="flex"
            v-for="(item, index) in myGameResources"
            :key="index"
          >
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
import FarmExpand from "@/components/FarmExpand.vue";
import MeetingPlace from "@/components/MeetingPlace.vue";
import GrainSeed from "@/components/GrainSeed.vue";
import Farmland from "@/components/Farmland.vue";
import Instruction from "@/components/Instruction.vue";
import DayLabor from "@/components/DayLabor.vue";
import Forest from "@/components/Forest.vue";
import SoilMining from "@/components/SoilMining.vue";
import ReedField from "@/components/ReedField.vue";
import Fishing from "@/components/Fishing.vue";

import { computed, onMounted, ref } from "vue";
import { io } from "socket.io-client";
<<<<<<< HEAD
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import {
  resourceMap,
  notUsedAssiCardMap,
  notUsedJobCardMap,
} from "@/constants";
import NotUsedCardModal from "@/components/NotUsedCardModal.vue";
=======
import {useStore} from 'vuex';
import { resourceMap, assiFacCardMap, majorFacCardMap, jobCardMap, roundsRef, actionsRef } from '@/constants';
import CardModal from "@/components/CardModal.vue";
import CardFlip from "@/components/CardFlip.vue";
>>>>>>> seungho

export default {
  components: {
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
    CardModal,
    CardFlip,
  },

  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const playersInRoom = ref(computed(() => store.state.playersInRoom));
    const gameStatus = ref(computed(() => store.state.gameStatus));
    const route = useRoute();

    const roomId = ref("");
    const isWoodFunction = ref(
      computed(() => store.state.isWoodFunctionExecuted)
    );

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

    // helper functions
    const getUserStatus = (gameStatus, userId) => {
      return gameStatus.value.find(status => status.UserId === userId);
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
          .map(([key, { name, name_kr, image }]) => ({name, name_kr, image, value: status.value[key]}));
      });
    };

    // user 정보
    const user = computed(() => store.state.user);
<<<<<<< HEAD
    const myGameStatus = computed(() => {
      return gameStatus.value.find((status) => status.UserId === user.value);
    });
    const myGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: myGameStatus.value[key],
      }));
    });
    const notUsedAssiFacCard = computed(() => {
      return Object.entries(notUsedAssiCardMap)
        .filter(([key]) =>
          myGameStatus.value.remainedSubFacilityCard.includes(key)
        )
        .map(([key, { name, name_kr, image }]) => ({
          name,
          name_kr,
          image,
          value: myGameStatus.value[key],
        }));
    });
    const notUsedJobCard = computed(() => {
      return Object.entries(notUsedJobCardMap)
        .filter(([key]) => myGameStatus.value.remainedJobCard.includes(key))
        .map(([key, { name, name_kr, image }]) => ({
          name,
          name_kr,
          image,
          value: myGameStatus.value[key],
        }));
    });

    // opponent(상대방) 정보
    const opponent = computed(() => {
      return playersInRoom.value.find((player) => player !== user.value);
    });
    const oppoGameStatus = computed(() => {
      return gameStatus.value.find((status) => status.UserId !== user.value);
    });
    const oppoGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: oppoGameStatus.value[key],
      }));
=======
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

    // 주요 설비 정보
    const majorFacCards = Object.keys(majorFacCardMap);
    // 사용되지 않은 주요 설비 카드
    const notUsedMajorFacCard = computed(() => {
      const usedMajorFacCards = new Set([...myUsedMajorFacCard.value, ...oppoUsedMajorFacCard.value]);
      return majorFacCards
        .filter(key => !usedMajorFacCards.has(key))
        .map(key => {
          const { name, name_kr, image } = majorFacCardMap[key];
          return { name, name_kr, image, value: majorFacCards[key] };
        })
>>>>>>> seungho
    });
    const notUsedMajorFacCardData = {
      imgSrc: require("@/assets/images/CardBack/MajorFacCardBack.png"),
      alt: "notUsedMajorFacCard",
      modal: notUsedMajorFacCardModal,
      cards: notUsedMajorFacCard,
      cardType: "사용되지 않는 주요 설비",
    };

<<<<<<< HEAD
    const isMajorFacModalOpen = ref(false);
    const isP1AssiFacModalOpen = ref(false);
    const isP1JobCardModalOpen = ref(false);
    const isP2AssiFacModalOpen = ref(false);
    const isP2JobCardModalOpen = ref(false);

    const openMajorFacModal = () => (isMajorFacModalOpen.value = true);
    const closeMajorFacModal = () => (isMajorFacModalOpen.value = false);
    const openP1AssiFacModal = () => (isP1AssiFacModalOpen.value = true);
    const closeP1AssiFacModal = () => (isP1AssiFacModalOpen.value = false);
    const openP1JobCardModal = () => (isP1JobCardModalOpen.value = true);
    const closeP1JobCardModal = () => (isP1JobCardModalOpen.value = false);
    const openP2AssiFacModal = () => (isP2AssiFacModalOpen.value = true);
    const closeP2AssiFacModal = () => (isP2AssiFacModalOpen.value = false);
    const openP2JobCardModal = () => (isP2JobCardModalOpen.value = true);
    const closeP2JobCardModal = () => (isP2JobCardModalOpen.value = false);

    const actions = ref([
      {
        id: 1,
        class: "Action1",
        imgSrc: require("../assets/images/Action/1_FarmExpand.jpg"),
      },
      {
        id: 2,
        class: "Action2",
        imgSrc: require("../assets/images/Action/2_MeetingPlace.jpg"),
      },
      {
        id: 3,
        class: "Action3",
        imgSrc: require("../assets/images/Action/3_GrainSeed.jpg"),
      },
      {
        id: 4,
        class: "Action4",
        imgSrc: require("../assets/images/Action/4_Farmland.jpg"),
      },
      {
        id: 5,
        class: "Action5",
        imgSrc: require("../assets/images/Action/5_Instruction.jpg"),
      },
      {
        id: 6,
        class: "Action6",
        imgSrc: require("../assets/images/Action/6_DayLabor.jpg"),
      },
      {
        id: 7,
        class: "Action7",
        imgSrc: require("../assets/images/Action/7_Forest.jpg"),
      },
      {
        id: 8,
        class: "Action8",
        imgSrc: require("../assets/images/Action/8_SoilMining.jpg"),
      },
      {
        id: 9,
        class: "Action9",
        imgSrc: require("../assets/images/Action/9_ReedField.jpg"),
      },
      {
        id: 10,
        class: "Action10",
        imgSrc: require("../assets/images/Action/10_Fishing.jpg"),
      },
    ]);
=======
    // 행동 칸 정보
    const actions = ref(actionsRef);
>>>>>>> seungho
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

<<<<<<< HEAD
    const rounds = ref([
      {
        id: 1,
        class: "Round1",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle1.png"),
      },
      {
        id: 2,
        class: "Round2",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle2.png"),
      },
      {
        id: 3,
        class: "Round3",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle3.png"),
      },
      {
        id: 4,
        class: "Round4",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle4.png"),
      },
      {
        id: 5,
        class: "Round5",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle1.png"),
      },
      {
        id: 6,
        class: "Round6",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle2.png"),
      },
      {
        id: 7,
        class: "Round7",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle3.png"),
      },
      {
        id: 8,
        class: "Round8",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle1.png"),
      },
      {
        id: 9,
        class: "Round9",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle2.png"),
      },
      {
        id: 10,
        class: "Round10",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle1.png"),
      },
      {
        id: 11,
        class: "Round11",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle2.png"),
      },
      {
        id: 12,
        class: "Round12",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle1.png"),
      },
      {
        id: 13,
        class: "Round13",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle2.png"),
      },
      {
        id: 14,
        class: "Round14",
        imgSrc: require("../assets/images/RoundCardBack/6Cycle.png"),
      },
    ]);
=======
    const rounds = ref(roundsRef);
>>>>>>> seungho
    // round를 위한 함수들을 동적으로 생성
    const roundFunctions = {};
    for (let i = 1; i <= 14; i++) {
      const roundName = `openRound${i}`;
      roundFunctions[roundName] = () => {
        console.log(roundName);
      };

      // 해당 round의 clickHandler를 등록
      for (const round of rounds.value) {
        round.clickHandler = roundFunctions[`openRound${round.id}`];
      }
    }

    const p1Farms = ref([
      {
        id: 1,
        class: "P1Farm1",
      },
      {
        id: 2,
        class: "P1Farm2",
      },
      {
        id: 3,
        class: "P1Farm3",
      },
      {
        id: 4,
        class: "P1Farm4",
      },
      {
        id: 5,
        class: "P1Farm5",
      },
      {
        id: 6,
        class: "P1Farm6",
      },
      {
        id: 7,
        class: "P1Farm7",
      },
      {
        id: 8,
        class: "P1Farm8",
      },
      {
        id: 9,
        class: "P1Farm9",
      },
      {
        id: 10,
        class: "P1Farm10",
      },
      {
        id: 11,
        class: "P1Farm11",
      },
      {
        id: 12,
        class: "P1Farm12",
      },
      {
        id: 13,
        class: "P1Farm13",
      },
    ]);
    // p1Farms을 위한 함수들을 동적으로 생성
    const p1FarmFunctions = {};
    for (let i = 1; i <= 13; i++) {
      const p1FarmName = `openP1Farm${i}`;
      p1FarmFunctions[p1FarmName] = () => {
        console.log(p1FarmName);
      };
      // 해당 p1Farm의 clickHandler를 등록
      for (const p1Farm of p1Farms.value) {
        p1Farm.clickHandler = p1FarmFunctions[`openP1Farm${p1Farm.id}`];
      }
    }
    const p1WoodRooms = ref([
      {
        id: 1,
        class: "P1WoodRoom1",
      },
      {
        id: 2,
        class: "P1WoodRoom2",
      },
    ]);
    // p1WoodRooms을 위한 함수들을 동적으로 생성
    const p1WoodRoomFunctions = {};
    for (let i = 1; i <= 2; i++) {
      const p1WoodRoomName = `openP1WoodRoom${i}`;
      p1WoodRoomFunctions[p1WoodRoomName] = () => {
        console.log(p1WoodRoomName);
      };
      // 해당 p1WoodRoom의 clickHandler를 등록
      for (const p1WoodRoom of p1WoodRooms.value) {
        p1WoodRoom.clickHandler =
          p1WoodRoomFunctions[`openP1WoodRoom${p1WoodRoom.id}`];
      }
    }

    const p2Farms = ref([
      {
        id: 1,
        class: "P2Farm1",
      },
      {
        id: 2,
        class: "P2Farm2",
      },
      {
        id: 3,
        class: "P2Farm3",
      },
      {
        id: 4,
        class: "P2Farm4",
      },
      {
        id: 5,
        class: "P2Farm5",
      },
      {
        id: 6,
        class: "P2Farm6",
      },
      {
        id: 7,
        class: "P2Farm7",
      },
      {
        id: 8,
        class: "P2Farm8",
      },
      {
        id: 9,
        class: "P2Farm9",
      },
      {
        id: 10,
        class: "P2Farm10",
      },
      {
        id: 11,
        class: "P2Farm11",
      },
      {
        id: 12,
        class: "P2Farm12",
      },
      {
        id: 13,
        class: "P2Farm13",
      },
    ]);
    // p2Farms을 위한 함수들을 동적으로 생성
    const p2FarmFunctions = {};
    for (let i = 1; i <= 13; i++) {
      const p2FarmName = `openP2Farm${i}`;
      p2FarmFunctions[p2FarmName] = () => {
        console.log(p2FarmName);
      };
      // 해당 p2Farm의 clickHandler를 등록
      for (const p2Farm of p2Farms.value) {
        p2Farm.clickHandler = p2FarmFunctions[`openP2Farm${p2Farm.id}`];
      }
    }
    const p2WoodRooms = ref([
      {
        id: 1,
        class: "P2WoodRoom1",
      },
      {
        id: 2,
        class: "P2WoodRoom2",
      },
    ]);
    // p2WoodRooms을 위한 함수들을 동적으로 생성
    const p2WoodRoomFunctions = {};
    for (let i = 1; i <= 2; i++) {
      const p2WoodRoomName = `openP2WoodRoom${i}`;
      p2WoodRoomFunctions[p2WoodRoomName] = () => {
        console.log(p2WoodRoomName);
      };
      // 해당 p2WoodRoom의 clickHandler를 등록
      for (const p2WoodRoom of p2WoodRooms.value) {
        p2WoodRoom.clickHandler =
          p2WoodRoomFunctions[`openP2WoodRoom${p2WoodRoom.id}`];
      }
    }

    //8라운드 시나리오를 위한 스킵 버튼
    const goRoundEight = () => {
      console.log(roomId.value);
      socket.emit("skipGame", {
        roomId: roomId.value,
        skipRound: 8,
        userId: [
          {
            userId: user.value,
          },
          {
            userId: opponent.value,
          },
        ],
      });
      socket.on("");
      socket.emit("accumulateGoods", {
        roomId: roomId.value,
        accList: [
          "woodAccumulated",
          "sandAccumulated",
          "reedAccumulated",
          "foodAccumulated",
          "sheepAccumulated",
          "stoneAccumulatedWest",
        ],
      });
      socket.emit("startRound", {
        roomId: roomId.value,
      });
    };

    //turnEnd 이벤트 emit
    const TurnEnd = () => {
      if (isWoodFunction.value === false) {
        socket.emit("accumulateGoods", {
          roomId: roomId.value,
          accList: ["woodAccumulated"],
        });
      }
      store.commit("setIsWoodFunctionExecuted", false);
      socket.emit("endTurn", {
        userId: user.value,
        roomId: roomId.value,
      });
      console.log(isWoodFunction.value);
      // socket.emit("accumulateGoods", {
      //   roomId: roomId.value,
      //   accList: ["woodAccumulated"],
      // });
    };

    onMounted(() => {
      roomId.value = route.params.room;

      socket.on("startGame", (gameStatus) => {
        console.log(gameStatus);
      });
    });

    return {
<<<<<<< HEAD
      isMajorFacModalOpen,
      isP1AssiFacModalOpen,
      isP1JobCardModalOpen,
      isP2AssiFacModalOpen,
      isP2JobCardModalOpen,
      openMajorFacModal,
      closeMajorFacModal,
      openP1AssiFacModal,
      closeP1AssiFacModal,
      openP1JobCardModal,
      closeP1JobCardModal,
      openP2AssiFacModal,
      closeP2AssiFacModal,
      openP2JobCardModal,
      closeP2JobCardModal,

=======
      actions,
      ...actionFunctions,
>>>>>>> seungho
      rounds,
      ...roundFunctions,
      p1Farms,
      ...p1FarmFunctions,
      p1WoodRooms,
      ...p1WoodRoomFunctions,
      p2Farms,
      ...p2FarmFunctions,
      p2WoodRooms,
      ...p2WoodRoomFunctions,
      gameStatus,
      user,
      myGameStatus,
      myGameResources,
      myCardData,
      opponent,
      oppoGameStatus,
      oppoGameResources,
<<<<<<< HEAD
      showNotUsedAssiCardModal,
      toggleNotUsedAssiCardModal,
      showNotUsedJobCardModal,
      toggleNotUsedJobCardModal,
      notUsedAssiFacCard,
      notUsedJobCard,
      goRoundEight,
      TurnEnd,
=======
      oppoCardData,
      notUsedMajorFacCardData,
>>>>>>> seungho
    };
  },
};
</script>
