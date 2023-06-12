<!--  RoundCardAction6 소 시장  -->
  <template>
  <div
    @click="handleClick(isMyTurn)"
    class="flex justify-center items-center row-span-2 p-0 bg-transparent relative cursor-pointer"
    :class="{ 'flip': isFlipped, 'w-full cursor-pointer transform transition duration-500 ease-in-out hover:scale-110': true, 'pointer-events-none': !isMyTurn }"
  >
    <img class="card-face back absolute w-full bg-cover bg-center" :src="backImage" alt="card-back"/>
    <img class="card-face front absolute w-full bg-cover bg-center" :src="frontImage" alt="card-front"/>
  </div>
</template>
<script>
export default {
  props: {
    frontImage: String,
    backImage: String,
    round: Number,
    isMyTurn: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const defaultAddFam = () => {
      console.log("Heloo");
    }
    const handleClick = (isMyTurn) => {
      if (isMyTurn) {
        defaultAddFam();
      }
    }
    return{
      handleClick,
      defaultAddFam
    }
  },
}
</script>
