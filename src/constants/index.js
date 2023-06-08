export const resourceMap = {
  wood: { name: 'wood', image: require('@/assets/images/Resources/1_Wood.png') },
  sand: { name: 'sand', image: require('@/assets/images/Resources/2_Sand.png') },
  stone: { name: 'stone', image: require('@/assets/images/Resources/3_Stone.png') },
  reed: { name: 'reed', image: require('@/assets/images/Resources/4_Reed.png') },
  grainOnStorage: { name: 'grain', image: require('@/assets/images/Resources/5_Grain.png') },
  vegeOnStorage: { name: 'vegetable', image: require('@/assets/images/Resources/6_Vegetable.png') },
  food: { name: 'food', image: require('@/assets/images/Resources/7_Food.png') },
  sheep: { name: 'sheep', image: require('@/assets/images/Resources/8_Sheep.png') },
  pig: { name: 'pig', image: require('@/assets/images/Resources/9_Pig.png') },
  cow: { name: 'cow', image: require('@/assets/images/Resources/10_Cow.png') },
  numOfBeggingToken: { name: 'debt', image: require('@/assets/images/Etc/BeggingToken.png') },
};

export const notUsedAssiCardMap = {
  'Hard ceramic': { name: 'Hard ceramic', name_kr: '경질 자기', image: require('@/assets/images/P1AssiFacCard/1_HardCeramic.png') },
  'Manger': { name: 'Manger', name_kr: '여물통', image: require('@/assets/images/P1AssiFacCard/2_Manger.png') },
  'Corn shovel': { name: 'Corn shovel', name_kr: '곡식용 삽', image: require('@/assets/images/P1AssiFacCard/3_CornShovel.png') },
  'Threshing plate': { name: 'Threshing plate', name_kr: '타작판', image: require('@/assets/images/P1AssiFacCard/4_ThreshingPlate.png') },
  'Clay mine': { name: 'Clay mine', name_kr: '양토 채굴장', image: require('@/assets/images/P1AssiFacCard/5_ClayMine.png') },
  'Street vendor': { name: 'Street vendor', name_kr: '포장마차', image: require('@/assets/images/P1AssiFacCard/6_StreetVendor.png') },
  'Carpenter room': { name: 'Carpenter room', name_kr: '목수의 객실', image: require('@/assets/images/P1AssiFacCard/7_CarpenterRoom.png') },
}

export const notUsedJobCardMap = {
  'Small farmer': { name: 'SmallerFarmer', name_kr: '소규모 농부', image: require('@/assets/images/P1JobCard/1_SmallerFarmer.png') },
  'Walled workman': { name: 'WalledWorkman', name_kr: '초벽질공', image: require('@/assets/images/P1JobCard/2_WalledWorkman.png') },
  'Roof mower': { name: 'RoofMower', name_kr: '지붕 다지는 사람', image: require('@/assets/images/P1JobCard/3_RoofMower.png') },
  'Adoptive parents': { name: 'AdoptiveParents', name_kr: '양부모', image: require('@/assets/images/P1JobCard/4_AdoptiveParents.png') },
  'Woodcutter': { name: 'WoodCutter', name_kr: '나무꾼', image: require('@/assets/images/P1JobCard/5_Woodcutter.png') },
  'Merchandiser': { name: 'Merchandiser', name_kr: '잡화상인', image: require('@/assets/images/P1JobCard/6_Merchandiser.png') },
  'Organic farmer': { name: 'OrganicFarmer', name_kr: '유기 농부', image: require('@/assets/images/P1JobCard/7_OrganicFarmer.png') },
}

export const actionsRef = [
  { id: 1, class: "FarmExpand", imgSrc: require("../assets/images/Action/1_FarmExpand.jpg") },
  { id: 2, class: "MeetingPlace", imgSrc: require("../assets/images/Action/2_MeetingPlace.jpg") },
  { id: 3, class: "GrainSeed", imgSrc: require("../assets/images/Action/3_GrainSeed.jpg") },
  { id: 4, class: "Farmland", imgSrc: require("../assets/images/Action/4_Farmland.jpg") },
  { id: 5, class: "Instruction", imgSrc: require("../assets/images/Action/5_Instruction.jpg") },
  { id: 6, class: "DayLabor", imgSrc: require("../assets/images/Action/6_DayLabor.jpg") },
  { id: 7, class: "Forest", imgSrc: require("../assets/images/Action/7_Forest.jpg") },
  { id: 8, class: "SoilMining", imgSrc: require("../assets/images/Action/8_SoilMining.jpg") },
  { id: 9, class: "ReedField", imgSrc: require("../assets/images/Action/9_ReedField.jpg") },
  { id: 10, class: "Fishing", imgSrc: require("../assets/images/Action/10_Fishing.jpg") },
]

export const roundsRef = [
  { id: 1, class: "Round1", imgSrc: require("@/assets/images/RoundCard/1R.png"), backImgSrc: require("@/assets/images/RoundCardBack/1Cycle.png") },
  { id: 2, class: "Round2", imgSrc: require("@/assets/images/RoundCard/2R.png"), backImgSrc: require("@/assets/images/RoundCardBack/1Cycle.png") },
  { id: 3, class: "Round3", imgSrc: require("@/assets/images/RoundCard/3R.png"), backImgSrc: require("@/assets/images/RoundCardBack/1Cycle.png") },
  { id: 4, class: "Round4", imgSrc: require("@/assets/images/RoundCard/4R.png"), backImgSrc: require("@/assets/images/RoundCardBack/1Cycle.png") },
  { id: 5, class: "Round5", imgSrc: require("@/assets/images/RoundCard/5R.png"), backImgSrc: require("@/assets/images/RoundCardBack/2Cycle.png") },
  { id: 6, class: "Round6", imgSrc: require("@/assets/images/RoundCard/6R.png"), backImgSrc: require("@/assets/images/RoundCardBack/2Cycle.png") },
  { id: 7, class: "Round7", imgSrc: require("@/assets/images/RoundCard/7R.png"), backImgSrc: require("@/assets/images/RoundCardBack/2Cycle.png") },
  { id: 8, class: "Round8", imgSrc: require("@/assets/images/RoundCard/8R.png"), backImgSrc: require("@/assets/images/RoundCardBack/3Cycle.png") },
  { id: 9, class: "Round9", imgSrc: require("@/assets/images/RoundCard/9R.png"), backImgSrc: require("@/assets/images/RoundCardBack/3Cycle.png") },
  { id: 10, class: "Round10", imgSrc: require("@/assets/images/RoundCard/10R.png"), backImgSrc: require("@/assets/images/RoundCardBack/4Cycle.png") },
  { id: 11, class: "Round11", imgSrc: require("@/assets/images/RoundCard/11R.png"), backImgSrc: require("@/assets/images/RoundCardBack/4Cycle.png") },
  { id: 12, class: "Round12", imgSrc: require("@/assets/images/RoundCard/12R.png"), backImgSrc: require("@/assets/images/RoundCardBack/5Cycle.png") },
  { id: 13, class: "Round13", imgSrc: require("@/assets/images/RoundCard/13R.png"), backImgSrc: require("@/assets/images/RoundCardBack/5Cycle.png") },
  { id: 14, class: "Round14", imgSrc: require("@/assets/images/RoundCard/14R.png"), backImgSrc: require("@/assets/images/RoundCardBack/6Cycle.png") }
]