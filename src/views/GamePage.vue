<template>
  <div>
    <div class="flex justify-between w-full h-screen overflow-scroll bg-[#B3B85E]">
      <!--  상대 자원 표시  -->
      <div>
        <div class="grid grid-rows-12 fixed left-0 top-1/4 bg-[#A2CF5F]">
          <div class="flex">
            <div class="p-3 border border-black w-full font-bold">{{ opponent }}</div>
          </div>
          <div class="flex" v-for="(item, index) in oppoGameResources" :key="index">
            <div class="p-3 border border-black w-1/2 flex justify-center">
              <img :src="item.image" :alt="item.name" class="w-10 h-10"/>
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
                v-for="p2Farm in p2Farms.slice(0,5)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
              <button
                v-for="p2WoodRoom in p2WoodRooms.slice(0,1)"
                :key="p2WoodRoom.id"
                @click="p2WoodRoom.clickHandler"
              >
                <img src="../assets/images/Room/WoodRoom.png" alt="woodRoom" class="w-16 h-16" />
              </button>
              <button
                v-for="p2Farm in p2Farms.slice(5,9)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
              <button
                v-for="p2WoodRoom in p2WoodRooms.slice(1,2)"
                :key="p2WoodRoom.id"
                @click="p2WoodRoom.clickHandler"
              >
                <img src="../assets/images/Room/WoodRoom.png" alt="woodRoom" class="w-16 h-16" />
              </button>
              <button
                v-for="p2Farm in p2Farms.slice(9,13)"
                :key="p2Farm.id"
                @click="p2Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
            </div>
          </div>
          <!--  상대 직업 카드  -->
          <div >
            <P2JobCardModal v-if="isP2JobCardModalOpen" @close-modal="closeP2JobCardModal" />
            <button @click="openP2JobCardModal">
              <img src="../assets/images/JobCardBack/P2JobCardBack.png" class="w-auto h-56" alt="jobCard"/>
            </button>
          </div>
          <!--  상대 보조 설비 카드  -->
          <div>
            <P2AssiFacModal v-if="isP2AssiFacModalOpen" @close-modal="closeP2AssiFacModal" />
            <button @click="openP2AssiFacModal">
              <img src="../assets/images/AssiFacCardBack/P2AssiFacCardBack.png" class="w-auto h-56" alt="assiFacCard"/>
            </button>
          </div>
          <!--  상대 주요 설비 카드  -->
          <div class="bg-gray-500">상대 주요 설비 카드</div>
        </div>

        <!--  게임 진행판  -->
        <div class="bg-[#C4B15A] p-2">
          <div class="grid grid-cols-8 gap-0.5 grid-flow-row-dense">
            <FarmExpand class="flex justify-center items-center"/>
            <button @click="openRound1" class="flex justify-center items-center row-span-2 p-0">
              <img src="../assets/images/RoundCardBack/1Cycle1.png" class="w-full" alt="1Cycle1" />
            </button>
            <button @click="openRound2" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/1Cycle2.png" class="w-full" alt="1Cycle2" />
            </button>
            <button @click="openRound5" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/2Cycle1.png" class="w-full" alt="2Cycle1" />
            </button>
            <button @click="openRound8" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/3Cycle1.png" class="w-full" alt="3Cycle1" />
            </button>
            <button @click="openRound10" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/4Cycle1.png" class="w-full" alt="4Cycle1" />
            </button>
            <button @click="openRound12" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/5Cycle1.png" class="w-full" alt="5Cycle1" />
            </button>
            <button @click="openRound14" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/6Cycle.png" class="w-full" alt="6Cycle" />
            </button>
            <MeetingPlace class="flex justify-center items-center"/>
            <GrainSeed class="flex justify-center items-center"/>
            <Forest class="flex justify-center items-center"/>
            <button @click="openRound3" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/1Cycle3.png" class="w-full" alt="1Cycle3" />
            </button>
            <button @click="openRound6" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/2Cycle2.png" class="w-full" alt="2Cycle2" />
            </button>
            <button @click="openRound9" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/3Cycle2.png" class="w-full" alt="3Cycle2" />
            </button>
            <button @click="openRound11" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/4Cycle2.png" class="w-full" alt="4Cycle2" />
            </button>
            <button @click="openRound13" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/5Cycle2.png" class="w-full" alt="5Cycle2" />
            </button>
            <div class="row-span-2" />
            <Farmland class="flex justify-center items-center"/>
            <SoilMining class="flex justify-center items-center"/>
            <Instruction class="flex justify-center items-center"/>
            <ReedField class="flex justify-center items-center"/>
            <button @click="openRound4" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/1Cycle4.png" class="w-full" alt="1Cycle4" />
            </button>
            <button @click="openRound7" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/RoundCardBack/2Cycle3.png" class="w-full" alt="2Cycle3" />
            </button>
            <div class="row-span-2" />
            <div class="row-span-2" />
            <div class="row-span-2" />
            <MajorFacModal v-if="isMajorFacModalOpen" @close-modal="closeMajorFacModal"/>
            <button @click="openMajorFacModal" class="flex justify-center items-center row-span-2">
              <img src="../assets/images/MajorFacCardBack/MajorFacCardBack.png" class="w-full h-auto" alt="majorCard"/>
            </button>
            <DayLabor class="flex justify-center items-center"/>
            <Fishing class="flex justify-center items-center"/>
          </div>
        </div>

        <!--  나  -->
        <div class="flex flex-row-reverse gap-x-10">
          <!--  내 농장판  -->
          <div class="flex justify-center">
            <div class="bg-green-700 grid grid-cols-5 gap-2 p-2">
              <button
                  v-for="p1Farm in p1Farms.slice(0,4)"
                  :key="p1Farm.id"
                  @click="p1Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
              <button
                  v-for="p1WoodRoom in p1WoodRooms.slice(0,1)"
                  :key="p1WoodRoom.id"
                  @click="p1WoodRoom.clickHandler"
              >
                <img src="../assets/images/Room/WoodRoom.png" alt="woodRoom" class="w-16 h-16" />
              </button>
              <button
                  v-for="p1Farm in p1Farms.slice(4,8)"
                  :key="p1Farm.id"
                  @click="p1Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
              <button
                  v-for="p1WoodRoom in p1WoodRooms.slice(1,2)"
                  :key="p1WoodRoom.id"
                  @click="p1WoodRoom.clickHandler"
              >
                <img src="../assets/images/Room/WoodRoom.png" alt="woodRoom" class="w-16 h-16" />
              </button>
              <button
                  v-for="p1Farm in p1Farms.slice(8,13)"
                  :key="p1Farm.id"
                  @click="p1Farm.clickHandler"
              >
                <img src="../assets/images/Farm.jpg" alt="farm" class="w-16 h-16" />
              </button>
            </div>
          </div>
          <!--  내 직업 카드  -->
          <div >
            <P1JobCardModal v-if="isP1JobCardModalOpen" @close-modal="closeP1JobCardModal" />
            <button @click="openP1JobCardModal">
              <img src="../assets/images/JobCardBack/P1JobCardBack.png" class="w-auto h-56" alt="jobCard"/>
            </button>
          </div>
          <!--  내 보조 설비 카드  -->
          <div>
            <P1AssiFacModal v-if="isP1AssiFacModalOpen" @close-modal="closeP1AssiFacModal" />
            <button @click="openP1AssiFacModal">
              <img src="../assets/images/AssiFacCardBack/P1AssiFacCardBack.png" class="w-auto h-56" alt="assiFacCard"/>
            </button>
          </div>
          <!--  내 주요 설비 카드  -->
          <div class="bg-gray-500">내 주요 설비 카드</div>
          <!--  내 손의 보조 설비 카드  -->
          <div class="bg-gray-500">내 손의 보조 설비 카드</div>
          <!--  내 손의 직업 카드  -->
          <div class="bg-gray-500">내 손의 직업 카드</div>
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
              <img :src="item.image" :alt="item.name" class="w-10 h-10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MajorFacModal from "@/components/MajorFacModal.vue";
import P1AssiFacModal from "@/components/P1AssiFacModal.vue";
import P1JobCardModal from "@/components/P1JobCardModal.vue";
import P2AssiFacModal from "@/components/P2AssiFacModal.vue";
import P2JobCardModal from "@/components/P2JobCardModal.vue";
import FarmExpand from "@/components/FarmExpand.vue";
import MeetingPlace from "@/components/MeetingPlace.vue";
import GrainSeed from "@/components/GrainSeed.vue";
import {computed, onMounted, ref} from "vue";
import Farmland from "@/components/Farmland.vue";
import Instruction from "@/components/Instruction.vue";
import DayLabor from "@/components/DayLabor.vue";
import Forest from "@/components/Forest.vue";
import SoilMining from "@/components/SoilMining.vue";
import ReedField from "@/components/ReedField.vue";
import Fishing from "@/components/Fishing.vue";
import { io } from "socket.io-client";
import {useStore} from 'vuex';
import { resourceMap } from '@/constants';

export default {
  components: {
    MajorFacModal,
    P1AssiFacModal,
    P1JobCardModal,
    P2AssiFacModal,
    P2JobCardModal,
    FarmExpand,
    MeetingPlace,
    GrainSeed,
    Farmland,
    Instruction,
    DayLabor,
    Forest,
    SoilMining,
    ReedField,
    Fishing
  },
  setup() {
    const socket = io("localhost:3000");
    const store = useStore();
    const playersInRoom = ref(computed(() => store.state.playersInRoom));
    const gameStatus = ref(computed(() => store.state.gameStatus));

    // user 정보
    const user = computed(() => store.state.user);
    const myGameStatus = computed(() => {
      return gameStatus.value.find(status => status.UserId === user.value)
    });
    const myGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: myGameStatus.value[key],
      }));
    });

    // opponent(상대방) 정보
    const opponent = computed(() => {
      return playersInRoom.value.find(player => player !== user.value)
    });
    const oppoGameStatus = computed(() => {
      return gameStatus.value.find(status => status.UserId !== user.value)
    });
    const oppoGameResources = computed(() => {
      return Object.entries(resourceMap).map(([key, { name, image }]) => ({
        name,
        image,
        value: oppoGameStatus.value[key],
      }));
    });


    const isMajorFacModalOpen = ref(false);
    const isP1AssiFacModalOpen = ref(false);
    const isP1JobCardModalOpen = ref(false);
    const isP2AssiFacModalOpen = ref(false);
    const isP2JobCardModalOpen = ref(false);
    const openMajorFacModal = () => isMajorFacModalOpen.value = true;
    const closeMajorFacModal = () => isMajorFacModalOpen.value = false;
    const openP1AssiFacModal = () => isP1AssiFacModalOpen.value = true;
    const closeP1AssiFacModal = () => isP1AssiFacModalOpen.value = false;
    const openP1JobCardModal = () => isP1JobCardModalOpen.value = true;
    const closeP1JobCardModal = () => isP1JobCardModalOpen.value = false;
    const openP2AssiFacModal = () => isP2AssiFacModalOpen.value = true;
    const closeP2AssiFacModal = () => isP2AssiFacModalOpen.value = false;
    const openP2JobCardModal = () => isP2JobCardModalOpen.value = true;
    const closeP2JobCardModal = () => isP2JobCardModalOpen.value = false;

    const actions = ref([
      {
        id: 1,
        class: "Action1",
        imgSrc: require("../assets/images/Action/1_FarmExpand.jpg")
      },
      {
        id: 2,
        class: "Action2",
        imgSrc: require("../assets/images/Action/2_MeetingPlace.jpg")
      },
      {
        id: 3,
        class: "Action3",
        imgSrc: require("../assets/images/Action/3_GrainSeed.jpg")
      },
      {
        id: 4,
        class: "Action4",
        imgSrc: require("../assets/images/Action/4_Farmland.jpg")
      },
      {
        id: 5,
        class: "Action5",
        imgSrc: require("../assets/images/Action/5_Instruction.jpg")
      },
      {
        id: 6,
        class: "Action6",
        imgSrc: require("../assets/images/Action/6_DayLabor.jpg")
      },
      {
        id: 7,
        class: "Action7",
        imgSrc: require("../assets/images/Action/7_Forest.jpg")
      },
      {
        id: 8,
        class: "Action8",
        imgSrc: require("../assets/images/Action/8_SoilMining.jpg")
      },
      {
        id: 9,
        class: "Action9",
        imgSrc: require("../assets/images/Action/9_ReedField.jpg")
      },
      {
        id: 10,
        class: "Action10",
        imgSrc: require("../assets/images/Action/10_Fishing.jpg")
      },
    ]);
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

    const rounds = ref([
      {
        id: 1,
        class: "Round1",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle1.png")
      },
      {
        id: 2,
        class: "Round2",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle2.png")
      },
      {
        id: 3,
        class: "Round3",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle3.png")
      },
      {
        id: 4,
        class: "Round4",
        imgSrc: require("../assets/images/RoundCardBack/1Cycle4.png")
      },
      {
        id: 5,
        class: "Round5",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle1.png")
      },
      {
        id: 6,
        class: "Round6",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle2.png")
      },
      {
        id: 7,
        class: "Round7",
        imgSrc: require("../assets/images/RoundCardBack/2Cycle3.png")
      },
      {
        id: 8,
        class: "Round8",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle1.png")
      },
      {
        id: 9,
        class: "Round9",
        imgSrc: require("../assets/images/RoundCardBack/3Cycle2.png")
      },
      {
        id: 10,
        class: "Round10",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle1.png")
      },
      {
        id: 11,
        class: "Round11",
        imgSrc: require("../assets/images/RoundCardBack/4Cycle2.png")
      },
      {
        id: 12,
        class: "Round12",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle1.png")
      },
      {
        id: 13,
        class: "Round13",
        imgSrc: require("../assets/images/RoundCardBack/5Cycle2.png")
      },
      {
        id: 14,
        class: "Round14",
        imgSrc: require("../assets/images/RoundCardBack/6Cycle.png")
      },
    ]);
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
      }
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
      }
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
        p1WoodRoom.clickHandler = p1WoodRoomFunctions[`openP1WoodRoom${p1WoodRoom.id}`];
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
      }
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
      }
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
        p2WoodRoom.clickHandler = p2WoodRoomFunctions[`openP2WoodRoom${p2WoodRoom.id}`];
      }
    }

    onMounted(() => {
      socket.on("startGame", (gameStatus) => {
        console.log(gameStatus);
      });
    });

    return {
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
      actions,
      ...actionFunctions,
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
      opponent,
      oppoGameStatus,
      oppoGameResources,
    };
  },
};
</script>