const gameCatalog = [
  {
    id: "panel-balloon",
    label: "气球碰碰乐",
    emoji: "🎈",
    category: "反应小游戏",
    guideHint: "轻轻点气球，最适合开心热身。",
  },
  {
    id: "panel-memory",
    label: "动物翻翻乐",
    emoji: "🐾",
    category: "记忆小游戏",
    guideHint: "翻开卡片记位置，找到一样的小动物。",
  },
  {
    id: "panel-color",
    label: "颜色找找看",
    emoji: "🎨",
    category: "认知小游戏",
    guideHint: "看看目标颜色，再找出一模一样的颜色。",
  },
  {
    id: "panel-shadow",
    label: "影子找朋友",
    emoji: "🌙",
    category: "观察小游戏",
    guideHint: "看看黑色小影子，再找出它原来的样子。",
  },
  {
    id: "panel-different",
    label: "谁不一样",
    emoji: "🔎",
    category: "观察小游戏",
    guideHint: "看看一排小图案，找出和大家不一样的那个。",
  },
  {
    id: "panel-counting",
    label: "数数小花园",
    emoji: "🌼",
    category: "启蒙小游戏",
    guideHint: "慢慢数一数，很适合先开始玩。",
  },
  {
    id: "panel-size",
    label: "大小排排队",
    emoji: "📏",
    category: "启蒙小游戏",
    guideHint: "看看谁更小、谁更大，再按顺序帮它们排好队。",
  },
  {
    id: "panel-more",
    label: "比一比谁更多",
    emoji: "⚖️",
    category: "启蒙小游戏",
    guideHint: "看看左边和右边，找出哪一边的小队伍更多。",
  },
  {
    id: "panel-shape",
    label: "形状找找看",
    emoji: "🔷",
    category: "启蒙小游戏",
    guideHint: "看看圆形、三角形和方形，再找出一模一样的那个。",
  },
  {
    id: "panel-sort",
    label: "分类小高手",
    emoji: "🧺",
    category: "启蒙小游戏",
    guideHint: "看看这个小东西属于哪一类，再轻轻点一下把它送过去。",
  },
  {
    id: "panel-position",
    label: "位置找找看",
    emoji: "📍",
    category: "启蒙小游戏",
    guideHint: "看看方格里的小东西站在哪里，再轻轻点出它的位置。",
  },
  {
    id: "panel-food",
    label: "喂喂小动物",
    emoji: "🥕",
    category: "认知小游戏",
    guideHint: "看看小动物想吃什么，再轻轻点一下把食物送给它。",
  },
  {
    id: "panel-family",
    label: "宝宝找妈妈",
    emoji: "🐣",
    category: "认知小游戏",
    guideHint: "看看这个小宝宝，再轻轻点一下帮它找到妈妈。",
  },
  {
    id: "panel-weather",
    label: "天气穿什么",
    emoji: "🌦️",
    category: "认知小游戏",
    guideHint: "看看外面的天气，再轻轻点一下选出更合适的衣服或小物件。",
  },
  {
    id: "panel-daynight",
    label: "白天和夜晚",
    emoji: "🌓",
    category: "认知小游戏",
    guideHint: "看看这件事更像什么时候发生，再轻轻点一下选白天还是夜晚。",
  },
  {
    id: "panel-hotcold",
    label: "热热还是凉凉",
    emoji: "🌡️",
    category: "认知小游戏",
    guideHint: "看看这个东西更像热热的还是凉凉的，再轻轻点一下选出来。",
  },
  {
    id: "panel-home",
    label: "帮它回家",
    emoji: "🏡",
    category: "认知小游戏",
    guideHint: "看看小东西属于哪里，轻轻点一下送它回家。",
  },
  {
    id: "panel-whack",
    label: "水果打地鼠",
    emoji: "🍓",
    category: "反应小游戏",
    guideHint: "看见小水果冒出来，就快快点中它。",
  },
  {
    id: "panel-rhythm",
    label: "灯光跟我拍",
    emoji: "🥁",
    category: "节奏小游戏",
    guideHint: "先看灯光顺序，再跟着一起拍拍拍。",
  },
  {
    id: "panel-puzzle",
    label: "花园拼拼乐",
    emoji: "🧩",
    category: "思维小游戏",
    guideHint: "看看参考图，把图案一点点拼回去。",
  },
  {
    id: "panel-words",
    label: "识字小卡片",
    emoji: "📖",
    category: "识字小游戏",
    guideHint: "看图认字，慢慢认识熟悉的小汉字。",
  },
  {
    id: "panel-english",
    label: "英语单词卡",
    emoji: "🔤",
    category: "英语小游戏",
    guideHint: "跟着图片和单词，一起认识简单英文。",
  },
  {
    id: "panel-trace",
    label: "描线写字页",
    emoji: "✏️",
    category: "描线小游戏",
    guideHint: "动动小手描一描字母、数字和图案。",
  },
];

const gameCatalogById = new Map(gameCatalog.map((game) => [game.id, game]));
const knownPanelIds = new Set(gameCatalog.map((game) => game.id));
const finderCategoryAliasCatalog = new Map([
  ["反应小游戏", ["反应", "手速", "点击", "reaction"]],
  ["记忆小游戏", ["记忆", "翻牌", "配对", "memory"]],
  ["认知小游戏", ["认知", "常识", "生活", "cognition"]],
  ["观察小游戏", ["观察", "找不同", "观察力", "observe"]],
  ["启蒙小游戏", ["启蒙", "数学", "基础", "learn"]],
  ["节奏小游戏", ["节奏", "音乐", "拍拍拍", "rhythm"]],
  ["思维小游戏", ["思维", "动脑", "拼图", "puzzle"]],
  ["识字小游戏", ["识字", "汉字", "认字", "words"]],
  ["英语小游戏", ["英语", "英文", "单词", "english"]],
  ["描线小游戏", ["描线", "写字", "画线", "trace"]],
]);
const finderKeywordCatalog = new Map([
  ["panel-balloon", ["balloon", "qiqiu", "气球", "点气球", "戳气球"]],
  ["panel-memory", ["memory", "jiyi", "fanpai", "翻牌", "卡片", "配对"]],
  ["panel-color", ["color", "yanse", "颜色", "色彩", "认颜色"]],
  ["panel-shadow", ["shadow", "yingzi", "影子", "找影子"]],
  ["panel-different", ["different", "butong", "找不同", "不一样"]],
  ["panel-counting", ["count", "shushu", "数数", "数字", "花朵"]],
  ["panel-size", ["size", "daxiao", "大小", "排序", "排队"]],
  ["panel-more", ["more", "duoshao", "多少", "比较", "谁更多"]],
  ["panel-shape", ["shape", "xingzhuang", "形状", "圆形", "三角形", "方形"]],
  ["panel-sort", ["sort", "fenlei", "分类", "归类"]],
  ["panel-position", ["position", "weizhi", "位置", "上下左右", "前后"]],
  ["panel-food", ["food", "wei", "喂动物", "食物", "吃什么"]],
  ["panel-family", ["family", "baobao", "mama", "妈妈", "宝宝", "找妈妈"]],
  ["panel-weather", ["weather", "tianqi", "天气", "衣服", "穿什么"]],
  ["panel-daynight", ["daynight", "baitian", "yewan", "白天", "夜晚"]],
  ["panel-hotcold", ["hotcold", "releng", "冷热", "热热", "凉凉"]],
  ["panel-home", ["home", "huijia", "回家", "送回家", "住哪里"]],
  ["panel-whack", ["whack", "dishu", "shuiguo", "打地鼠", "水果"]],
  ["panel-rhythm", ["rhythm", "jiezou", "灯光", "节奏", "拍拍拍"]],
  ["panel-puzzle", ["puzzle", "pintu", "拼图", "图案"]],
  ["panel-words", ["words", "shizi", "识字", "汉字", "认字"]],
  ["panel-english", ["english", "yingyu", "英文", "单词", "abc"]],
  ["panel-trace", ["trace", "miaoxian", "描线", "写字", "画线"]],
]);

const profileAvatarCatalog = [
  { id: "sunny-chick", emoji: "🐥", label: "太阳小鸡" },
  { id: "bunny", emoji: "🐰", label: "软软小兔" },
  { id: "bear", emoji: "🐻", label: "圆脸小熊" },
  { id: "fox", emoji: "🦊", label: "机灵小狐狸" },
  { id: "cat", emoji: "🐱", label: "开心小猫" },
  { id: "frog", emoji: "🐸", label: "跳跳青蛙" },
  { id: "panda", emoji: "🐼", label: "竹林熊猫" },
  { id: "tiger", emoji: "🐯", label: "勇敢小老虎" },
];

const profileThemeCatalog = [
  {
    id: "sunrise",
    name: "暖阳橙",
    primary: "#ff9a62",
    secondary: "#ffd447",
    skyTop: "#ffe7d1",
    skyBottom: "#fff8df",
    shadow: "rgba(255, 154, 98, 0.18)",
  },
  {
    id: "ocean",
    name: "晴空蓝",
    primary: "#56a9ff",
    secondary: "#4ecdc4",
    skyTop: "#daf1ff",
    skyBottom: "#f6fffd",
    shadow: "rgba(86, 169, 255, 0.18)",
  },
  {
    id: "meadow",
    name: "草地绿",
    primary: "#67c86f",
    secondary: "#ffd447",
    skyTop: "#e1f8df",
    skyBottom: "#fff9e3",
    shadow: "rgba(103, 200, 111, 0.18)",
  },
  {
    id: "berry",
    name: "莓果粉",
    primary: "#ff6f91",
    secondary: "#ffb15e",
    skyTop: "#ffe0ec",
    skyBottom: "#fff5e4",
    shadow: "rgba(255, 111, 145, 0.18)",
  },
  {
    id: "grape",
    name: "葡萄紫",
    primary: "#8b7cff",
    secondary: "#ff8fa3",
    skyTop: "#ebe4ff",
    skyBottom: "#fff0f6",
    shadow: "rgba(139, 124, 255, 0.18)",
  },
  {
    id: "mint",
    name: "薄荷青",
    primary: "#4ecdc4",
    secondary: "#7bd65b",
    skyTop: "#dffaf2",
    skyBottom: "#f6ffe8",
    shadow: "rgba(78, 205, 196, 0.18)",
  },
];

const storageKey = "rainbow-playground-data";

const initialStorage = {
  stars: 0,
  balloonBest: 0,
  memoryBest: null,
  colorBest: 0,
  shadowBest: 0,
  differentBest: 0,
  countingBest: 0,
  sizeBest: 0,
  moreBest: 0,
  shapeBest: 0,
  sortBest: 0,
  positionBest: 0,
  foodBest: 0,
  familyBest: 0,
  weatherBest: 0,
  dayNightBest: 0,
  hotColdBest: 0,
  homeBest: 0,
  whackBest: 0,
  rhythmBest: 0,
  puzzleBest: null,
  wordsBest: 0,
  englishBest: 0,
  traceBest: 0,
  playDays: [],
  seenBadges: [],
  seenBuddies: ["sunny-chick"],
  seenStickers: ["star-spark"],
  claimedChallengeRewardIds: [],
  lastChallengeCelebrateKey: "",
  selectedBuddyId: "sunny-chick",
  selectedStickerId: "star-spark",
  settings: {
    difficulty: "normal",
    soundOn: true,
    breakReminderMinutes: 0,
    lastPanelId: "",
    recentPanels: [],
    visiblePanels: createDefaultVisiblePanels(),
  },
};

const balloonColors = ["#ff7b5f", "#ffb703", "#7bd65b", "#56a9ff", "#ff6f91", "#8f7cff"];

const animalDeck = ["🐶", "🐱", "🐰", "🐸", "🦊", "🐻", "🐵", "🐼", "🦁", "🐨"];

const colorPool = [
  { name: "草莓红", value: "#ff6b6b", tip: "像甜甜的草莓" },
  { name: "橙子橘", value: "#ff9f1c", tip: "像圆圆的橙子" },
  { name: "太阳黄", value: "#ffd93d", tip: "像暖暖的太阳" },
  { name: "青草绿", value: "#6bcB77", tip: "像花园里的小草" },
  { name: "天空蓝", value: "#4d96ff", tip: "像晴天的天空" },
  { name: "葡萄紫", value: "#9b5de5", tip: "像一串葡萄" },
  { name: "蜜桃粉", value: "#ff70a6", tip: "像甜甜的蜜桃" },
  { name: "薄荷青", value: "#4ecdc4", tip: "像凉凉的小薄荷" },
];

const shadowCards = [
  { id: "rabbit", emoji: "🐰", label: "小兔子", accent: "#ff8fa3" },
  { id: "penguin", emoji: "🐧", label: "小企鹅", accent: "#56a9ff" },
  { id: "lion", emoji: "🦁", label: "小狮子", accent: "#ffb15e" },
  { id: "fish", emoji: "🐟", label: "小鱼", accent: "#4ecdc4" },
  { id: "star", emoji: "⭐", label: "小星星", accent: "#ffd447" },
  { id: "flower", emoji: "🌸", label: "小花朵", accent: "#ff70a6" },
  { id: "house", emoji: "🏠", label: "小房子", accent: "#7bd65b" },
  { id: "moon", emoji: "🌙", label: "小月亮", accent: "#8b7cff" },
  { id: "apple", emoji: "🍎", label: "小苹果", accent: "#ff6b6b" },
  { id: "butterfly", emoji: "🦋", label: "小蝴蝶", accent: "#7b6dff" },
];

const differentItems = [
  { id: "apple", emoji: "🍎", label: "小苹果", accent: "#ff6b6b" },
  { id: "pear", emoji: "🍐", label: "小梨子", accent: "#7bd65b" },
  { id: "star", emoji: "⭐", label: "小星星", accent: "#ffd447" },
  { id: "moon", emoji: "🌙", label: "小月亮", accent: "#8b7cff" },
  { id: "fish", emoji: "🐟", label: "小鱼", accent: "#4ecdc4" },
  { id: "flower", emoji: "🌸", label: "小花朵", accent: "#ff70a6" },
  { id: "rabbit", emoji: "🐰", label: "小兔子", accent: "#ff8fa3" },
  { id: "penguin", emoji: "🐧", label: "小企鹅", accent: "#56a9ff" },
  { id: "lion", emoji: "🦁", label: "小狮子", accent: "#ffb15e" },
  { id: "house", emoji: "🏠", label: "小房子", accent: "#7bd65b" },
  { id: "car", emoji: "🚗", label: "小汽车", accent: "#ff8c61" },
  { id: "butterfly", emoji: "🦋", label: "小蝴蝶", accent: "#7b6dff" },
];

const sizeItems = [
  { id: "star", emoji: "⭐", label: "小星星", accent: "#ffd447" },
  { id: "apple", emoji: "🍎", label: "小苹果", accent: "#ff6b6b" },
  { id: "fish", emoji: "🐟", label: "小鱼", accent: "#4ecdc4" },
  { id: "flower", emoji: "🌸", label: "小花朵", accent: "#ff70a6" },
  { id: "house", emoji: "🏠", label: "小房子", accent: "#7bd65b" },
  { id: "car", emoji: "🚗", label: "小汽车", accent: "#ff8c61" },
  { id: "rabbit", emoji: "🐰", label: "小兔子", accent: "#ff8fa3" },
  { id: "moon", emoji: "🌙", label: "小月亮", accent: "#8b7cff" },
];

const homePlaces = [
  { id: "garden", emoji: "🌼", label: "花园", tip: "花花草草喜欢这里", accent: "#7bd65b" },
  { id: "sky", emoji: "☁️", label: "天空", tip: "会飞的朋友会去这里", accent: "#56a9ff" },
  { id: "water", emoji: "💧", label: "水里", tip: "小鱼和贝壳住这里", accent: "#4ecdc4" },
  { id: "fruit", emoji: "🍎", label: "果园", tip: "甜甜水果来自这里", accent: "#ff8c61" },
  { id: "kitchen", emoji: "🍽️", label: "厨房", tip: "吃饭用的小东西在这里", accent: "#ffb15e" },
  { id: "road", emoji: "🛣️", label: "马路", tip: "车车们会在这里跑", accent: "#8b7cff" },
  { id: "bookshelf", emoji: "📚", label: "书架", tip: "书本和学习用品在这里", accent: "#ff70a6" },
  { id: "night", emoji: "🌙", label: "夜空", tip: "晚上会出现的朋友在这里", accent: "#7b6dff" },
];

const homeItems = [
  { id: "fish", emoji: "🐟", label: "小鱼", placeId: "water" },
  { id: "shell", emoji: "🐚", label: "小贝壳", placeId: "water" },
  { id: "bird", emoji: "🐦", label: "小鸟", placeId: "sky" },
  { id: "cloud", emoji: "☁️", label: "小云朵", placeId: "sky" },
  { id: "flower", emoji: "🌸", label: "小花朵", placeId: "garden" },
  { id: "leaf", emoji: "🍃", label: "小树叶", placeId: "garden" },
  { id: "apple", emoji: "🍎", label: "小苹果", placeId: "fruit" },
  { id: "pear", emoji: "🍐", label: "小梨子", placeId: "fruit" },
  { id: "spoon", emoji: "🥄", label: "小勺子", placeId: "kitchen" },
  { id: "juice", emoji: "🧃", label: "小果汁", placeId: "kitchen" },
  { id: "bus", emoji: "🚌", label: "小巴士", placeId: "road" },
  { id: "car", emoji: "🚗", label: "小汽车", placeId: "road" },
  { id: "book", emoji: "📘", label: "小图书", placeId: "bookshelf" },
  { id: "pencil", emoji: "✏️", label: "小铅笔", placeId: "bookshelf" },
  { id: "moon", emoji: "🌙", label: "小月亮", placeId: "night" },
  { id: "star", emoji: "⭐", label: "小星星", placeId: "night" },
];

const moreItems = [
  { id: "apple", emoji: "🍎", label: "小苹果", accent: "#ff8c61" },
  { id: "star", emoji: "⭐", label: "小星星", accent: "#ffd447" },
  { id: "fish", emoji: "🐟", label: "小鱼", accent: "#4ecdc4" },
  { id: "flower", emoji: "🌸", label: "小花朵", accent: "#ff70a6" },
  { id: "butterfly", emoji: "🦋", label: "小蝴蝶", accent: "#7b6dff" },
  { id: "strawberry", emoji: "🍓", label: "小草莓", accent: "#ff6f91" },
  { id: "cloud", emoji: "☁️", label: "小云朵", accent: "#56a9ff" },
  { id: "rabbit", emoji: "🐰", label: "小兔子", accent: "#ff8fa3" },
];

const shapeCards = [
  { id: "circle", symbol: "●", label: "圆形", tip: "圆圆的，像小饼干", accent: "#56a9ff" },
  { id: "triangle", symbol: "▲", label: "三角形", tip: "有三个尖尖角", accent: "#ff8c61" },
  { id: "square", symbol: "■", label: "正方形", tip: "四条边差不多长", accent: "#7bd65b" },
  { id: "diamond", symbol: "◆", label: "菱形", tip: "像斜斜的小宝石", accent: "#7b6dff" },
  { id: "star", symbol: "★", label: "星星形", tip: "像会发光的小星星", accent: "#ffd447" },
  { id: "heart", symbol: "♥", label: "爱心形", tip: "像甜甜的小爱心", accent: "#ff70a6" },
];

const sortCategories = [
  { id: "fruit", emoji: "🍎", label: "水果", tip: "甜甜的水果在这里", accent: "#ff8c61" },
  { id: "animal", emoji: "🐻", label: "动物", tip: "会动的小动物在这里", accent: "#7bd65b" },
  { id: "vehicle", emoji: "🚗", label: "交通工具", tip: "会跑会开的朋友在这里", accent: "#56a9ff" },
  { id: "toy", emoji: "🧸", label: "玩具", tip: "平时爱玩的朋友在这里", accent: "#ff70a6" },
  { id: "study", emoji: "✏️", label: "学习用品", tip: "看书写字会用到它们", accent: "#7b6dff" },
  { id: "clothes", emoji: "👕", label: "衣服", tip: "穿在身上的朋友在这里", accent: "#ffb15e" },
];

const sortItems = [
  { id: "apple", emoji: "🍎", label: "小苹果", categoryId: "fruit" },
  { id: "banana", emoji: "🍌", label: "小香蕉", categoryId: "fruit" },
  { id: "pear", emoji: "🍐", label: "小梨子", categoryId: "fruit" },
  { id: "rabbit", emoji: "🐰", label: "小兔子", categoryId: "animal" },
  { id: "cat", emoji: "🐱", label: "小猫咪", categoryId: "animal" },
  { id: "fish", emoji: "🐟", label: "小鱼", categoryId: "animal" },
  { id: "car", emoji: "🚗", label: "小汽车", categoryId: "vehicle" },
  { id: "bus", emoji: "🚌", label: "小巴士", categoryId: "vehicle" },
  { id: "train", emoji: "🚂", label: "小火车", categoryId: "vehicle" },
  { id: "teddy", emoji: "🧸", label: "小熊玩具", categoryId: "toy" },
  { id: "ball", emoji: "⚽", label: "小皮球", categoryId: "toy" },
  { id: "kite", emoji: "🪁", label: "小风筝", categoryId: "toy" },
  { id: "book", emoji: "📘", label: "小图书", categoryId: "study" },
  { id: "pencil", emoji: "✏️", label: "小铅笔", categoryId: "study" },
  { id: "ruler", emoji: "📏", label: "小尺子", categoryId: "study" },
  { id: "shirt", emoji: "👕", label: "小衣服", categoryId: "clothes" },
  { id: "cap", emoji: "🧢", label: "小帽子", categoryId: "clothes" },
  { id: "sock", emoji: "🧦", label: "小袜子", categoryId: "clothes" },
];

const positionSlots = [
  { id: "top", row: 0, col: 1, label: "上面", symbol: "↑", tip: "在最上面一格", accent: "#56a9ff", isCorner: false },
  { id: "bottom", row: 2, col: 1, label: "下面", symbol: "↓", tip: "在最下面一格", accent: "#7bd65b", isCorner: false },
  { id: "left", row: 1, col: 0, label: "左边", symbol: "←", tip: "在左边一格", accent: "#ff8c61", isCorner: false },
  { id: "right", row: 1, col: 2, label: "右边", symbol: "→", tip: "在右边一格", accent: "#ff70a6", isCorner: false },
  { id: "center", row: 1, col: 1, label: "中间", symbol: "●", tip: "在中间一格", accent: "#ffd447", isCorner: false },
  { id: "top-left", row: 0, col: 0, label: "左上角", symbol: "↖", tip: "在左上角", accent: "#ffb15e", isCorner: true },
  { id: "top-right", row: 0, col: 2, label: "右上角", symbol: "↗", tip: "在右上角", accent: "#7b6dff", isCorner: true },
  { id: "bottom-left", row: 2, col: 0, label: "左下角", symbol: "↙", tip: "在左下角", accent: "#4ecdc4", isCorner: true },
  { id: "bottom-right", row: 2, col: 2, label: "右下角", symbol: "↘", tip: "在右下角", accent: "#8ec5ff", isCorner: true },
];

const positionItems = [
  { id: "chick", emoji: "🐥", label: "小鸡" },
  { id: "rabbit", emoji: "🐰", label: "小兔子" },
  { id: "ball", emoji: "⚽", label: "小皮球" },
  { id: "star", emoji: "⭐", label: "小星星" },
  { id: "car", emoji: "🚗", label: "小汽车" },
  { id: "flower", emoji: "🌸", label: "小花朵" },
  { id: "fish", emoji: "🐟", label: "小鱼" },
  { id: "apple", emoji: "🍎", label: "小苹果" },
  { id: "teddy", emoji: "🧸", label: "小熊玩具" },
  { id: "kite", emoji: "🪁", label: "小风筝" },
];

const foodChoices = [
  { id: "carrot", emoji: "🥕", label: "小胡萝卜", tip: "脆脆甜甜，最适合兔子", accent: "#ff8c61" },
  { id: "banana", emoji: "🍌", label: "小香蕉", tip: "软软甜甜，猴子会喜欢", accent: "#ffd447" },
  { id: "fish", emoji: "🐟", label: "小鱼", tip: "香喷喷的小鱼来啦", accent: "#56a9ff" },
  { id: "honey", emoji: "🍯", label: "小蜂蜜", tip: "甜甜香香的一小罐", accent: "#ffb15e" },
  { id: "bamboo", emoji: "🎋", label: "小竹子", tip: "脆脆的竹子真新鲜", accent: "#7bd65b" },
  { id: "corn", emoji: "🌽", label: "小玉米", tip: "金黄金黄，咬起来香香的", accent: "#ffcf5c" },
  { id: "cheese", emoji: "🧀", label: "小奶酪", tip: "闻起来香香软软的", accent: "#ffe18a" },
  { id: "chestnut", emoji: "🌰", label: "小坚果", tip: "圆圆脆脆的小坚果", accent: "#c98f5d" },
  { id: "apple", emoji: "🍎", label: "小苹果", tip: "红红甜甜的一口苹果", accent: "#ff6f91" },
];

const foodAnimals = [
  { id: "rabbit", emoji: "🐰", label: "小兔子", foodId: "carrot", note: "它想吃脆脆甜甜的小点心。", accent: "#ff8fa3" },
  { id: "monkey", emoji: "🐵", label: "小猴子", foodId: "banana", note: "它在等一根香香软软的小香蕉。", accent: "#ffb15e" },
  { id: "cat", emoji: "🐱", label: "小猫咪", foodId: "fish", note: "它闻到小鱼香，就开心摇尾巴。", accent: "#56a9ff" },
  { id: "bear", emoji: "🐻", label: "小熊", foodId: "honey", note: "它最喜欢甜甜的蜂蜜啦。", accent: "#c98f5d" },
  { id: "panda", emoji: "🐼", label: "熊猫宝宝", foodId: "bamboo", note: "它想慢慢嚼一嚼新鲜竹子。", accent: "#7bd65b" },
  { id: "chick", emoji: "🐥", label: "小鸡", foodId: "corn", note: "它叽叽叫着想啄小玉米。", accent: "#ffd447" },
  { id: "mouse", emoji: "🐭", label: "小老鼠", foodId: "cheese", note: "它正等着闻到奶酪香味。", accent: "#ffe18a" },
  { id: "squirrel", emoji: "🐿️", label: "小松鼠", foodId: "chestnut", note: "它抱着尾巴想找圆圆小坚果。", accent: "#c98f5d" },
  { id: "horse", emoji: "🐴", label: "小马", foodId: "apple", note: "跑一跑以后，它想咬一口小苹果。", accent: "#ff6f91" },
];

const familyParents = [
  { id: "hen", emoji: "🐔", label: "鸡妈妈", tip: "会张开翅膀来接宝宝", accent: "#ffd447" },
  { id: "duck", emoji: "🦆", label: "鸭妈妈", tip: "会带宝宝去水边散步", accent: "#56a9ff" },
  { id: "rabbit", emoji: "🐰", label: "兔妈妈", tip: "会蹦蹦跳跳地抱抱宝宝", accent: "#ff8fa3" },
  { id: "cat", emoji: "🐱", label: "猫妈妈", tip: "会轻轻喵喵叫着找宝宝", accent: "#ffb15e" },
  { id: "dog", emoji: "🐶", label: "狗妈妈", tip: "会摇着尾巴来迎接宝宝", accent: "#7dc8ff" },
  { id: "horse", emoji: "🐴", label: "马妈妈", tip: "会陪宝宝慢慢跑一小圈", accent: "#c98f5d" },
  { id: "sheep", emoji: "🐑", label: "羊妈妈", tip: "软软的毛像小云朵", accent: "#f0e6d2" },
  { id: "pig", emoji: "🐷", label: "猪妈妈", tip: "会哼哼叫着带宝宝回家", accent: "#ff9ab1" },
  { id: "panda", emoji: "🐼", label: "熊猫妈妈", tip: "会抱着宝宝慢慢滚一滚", accent: "#7bd65b" },
];

const familyBabies = [
  { id: "chick", emoji: "🐣", label: "鸡宝宝", parentId: "hen", note: "它伸出小脑袋，正在找鸡妈妈。" },
  { id: "duckling", emoji: "🐤", label: "鸭宝宝", parentId: "duck", note: "它想跟着鸭妈妈去河边散步。" },
  { id: "bunny", emoji: "🐰", label: "兔宝宝", parentId: "rabbit", note: "它想快快跳到妈妈身边。" },
  { id: "kitten", emoji: "🐱", label: "猫宝宝", parentId: "cat", note: "它喵喵叫着想找猫妈妈。" },
  { id: "puppy", emoji: "🐶", label: "狗宝宝", parentId: "dog", note: "它正摇着小尾巴找狗妈妈。" },
  { id: "foal", emoji: "🐴", label: "马宝宝", parentId: "horse", note: "它想跟着马妈妈一起慢慢跑。" },
  { id: "lamb", emoji: "🐑", label: "羊宝宝", parentId: "sheep", note: "它想钻到羊妈妈软软的毛旁边。" },
  { id: "piglet", emoji: "🐷", label: "猪宝宝", parentId: "pig", note: "它哼哼叫着想找猪妈妈。" },
  { id: "panda-cub", emoji: "🐼", label: "熊猫宝宝", parentId: "panda", note: "它想滚到熊猫妈妈怀里。" },
];

const weatherWearChoices = [
  { id: "sunhat", emoji: "👒", label: "小太阳帽", tip: "挡挡太阳，头顶不会热热的", accent: "#ffd447" },
  { id: "umbrella", emoji: "☔️", label: "小雨伞", tip: "撑开以后可以挡住小雨点", accent: "#56a9ff" },
  { id: "jacket", emoji: "🧥", label: "小外套", tip: "风吹来的时候可以暖暖小肚子", accent: "#ffb15e" },
  { id: "scarf", emoji: "🧣", label: "小围巾", tip: "凉凉天气里把脖子围暖和", accent: "#ff8fa3" },
  { id: "mittens", emoji: "🧤", label: "小手套", tip: "雪天戴上，小手会更暖暖的", accent: "#7bd65b" },
  { id: "rainboots", emoji: "👢", label: "小雨靴", tip: "踩过小水坑，脚丫也能干干的", accent: "#9a7cff" },
];

const weatherScenes = [
  { id: "sunny", emoji: "☀️", label: "大太阳天", wearId: "sunhat", note: "太阳公公笑得亮亮的，头上戴什么更舒服？" },
  { id: "rainy", emoji: "🌧️", label: "下小雨啦", wearId: "umbrella", note: "雨点滴答滴答落下来，出门最适合带什么？" },
  { id: "windy", emoji: "💨", label: "风呼呼吹", wearId: "jacket", note: "风儿吹在身上凉凉的，穿什么更合适？" },
  { id: "cool", emoji: "🥶", label: "天气凉凉", wearId: "scarf", note: "外面有点冷，脖子围上什么会暖和？" },
  { id: "snowy", emoji: "❄️", label: "雪花飘飘", wearId: "mittens", note: "雪花轻轻落下来，小手戴什么会更暖？" },
  { id: "puddle", emoji: "🌦️", label: "路上有水坑", wearId: "rainboots", note: "外面湿湿的还有小水坑，脚上穿什么更方便？" },
];

const dayNightPeriods = [
  { id: "day", emoji: "☀️", label: "白天", tip: "太阳亮亮的时候", accent: "#ffd447" },
  { id: "night", emoji: "🌙", label: "夜晚", tip: "月亮和星星出来的时候", accent: "#8b7cff" },
];

const dayNightPrompts = [
  { id: "breakfast", emoji: "🍳", label: "吃早餐", periodId: "day", note: "什么时候更适合吃早餐呢？" },
  { id: "school", emoji: "🎒", label: "去幼儿园", periodId: "day", note: "背上小书包，什么时候更常见呢？" },
  { id: "park", emoji: "🛝", label: "去公园玩", periodId: "day", note: "去外面玩滑梯，什么时候更像现在呢？" },
  { id: "kite", emoji: "🪁", label: "放风筝", periodId: "day", note: "风筝飞起来啦，什么时候更适合呢？" },
  { id: "sleep", emoji: "😴", label: "睡觉", periodId: "night", note: "要钻进被窝啦，什么时候更适合呢？" },
  { id: "brush", emoji: "🪥", label: "刷牙准备睡觉", periodId: "night", note: "洗洗刷刷准备休息，什么时候更像现在呢？" },
  { id: "stars", emoji: "✨", label: "看星星", periodId: "night", note: "天上亮起小星星，什么时候更容易看见呢？" },
  { id: "goodnight", emoji: "💤", label: "说晚安", periodId: "night", note: "轻轻说晚安，什么时候更像现在呢？" },
];

const hotColdChoices = [
  { id: "hot", emoji: "♨️", label: "热热的", tip: "摸起来暖暖的，像刚刚做好", accent: "#ffb15e" },
  { id: "cold", emoji: "🧊", label: "凉凉的", tip: "摸起来冰冰的，像刚从凉凉地方拿出来", accent: "#56a9ff" },
];

const hotColdPrompts = [
  { id: "soup", emoji: "🍲", label: "小热汤", choiceId: "hot", note: "这碗汤更像热热的还是凉凉的？" },
  { id: "milk", emoji: "🥛", label: "温牛奶", choiceId: "hot", note: "刚热好的牛奶，摸起来更像什么呢？" },
  { id: "potato", emoji: "🍠", label: "烤红薯", choiceId: "hot", note: "香香的烤红薯，拿起来更像热热的还是凉凉的？" },
  { id: "tea", emoji: "🍵", label: "热茶", choiceId: "hot", note: "刚倒好的茶杯，更像热热的还是凉凉的？" },
  { id: "icecream", emoji: "🍦", label: "冰淇淋", choiceId: "cold", note: "冰淇淋摸起来更像热热的还是凉凉的？" },
  { id: "watermelon", emoji: "🍉", label: "冰西瓜", choiceId: "cold", note: "刚切好的冰西瓜，更像凉凉的还是热热的？" },
  { id: "snowball", emoji: "❄️", label: "小雪团", choiceId: "cold", note: "雪花堆起来的小雪团，摸起来更像什么呢？" },
  { id: "icecube", emoji: "🧊", label: "小冰块", choiceId: "cold", note: "透明的小冰块，当然更像热热的还是凉凉的？" },
];

const countingItems = [
  { emoji: "🐝", label: "小蜜蜂" },
  { emoji: "⭐", label: "小星星" },
  { emoji: "🍎", label: "小苹果" },
  { emoji: "🦋", label: "小蝴蝶" },
  { emoji: "🌼", label: "小花朵" },
];

const whackFruits = ["🍓", "🍊", "🍉", "🍍", "🍇", "🥝"];

const rhythmPads = [
  { id: "berry", label: "莓莓红", emoji: "🍓", tone: "berry" },
  { id: "sun", label: "太阳黄", emoji: "🍋", tone: "sun" },
  { id: "sky", label: "天空蓝", emoji: "💧", tone: "sky" },
  { id: "leaf", label: "草地绿", emoji: "🍀", tone: "leaf" },
];

const puzzleGoal = [
  { id: "sun", emoji: "🌞", label: "太阳" },
  { id: "cloud", emoji: "☁️", label: "云朵" },
  { id: "rainbow", emoji: "🌈", label: "彩虹" },
  { id: "house", emoji: "🏠", label: "房子" },
  { id: "tree", emoji: "🌳", label: "大树" },
  { id: "flower", emoji: "🌼", label: "小花" },
  { id: "butterfly", emoji: "🦋", label: "蝴蝶" },
  { id: "apple", emoji: "🍎", label: "苹果" },
  { id: "star", emoji: "⭐", label: "星星" },
];

const wordCards = [
  { id: "sun", char: "日", pinyin: "ri", label: "太阳", emoji: "🌞" },
  { id: "moon", char: "月", pinyin: "yue", label: "月亮", emoji: "🌙" },
  { id: "mountain", char: "山", pinyin: "shan", label: "大山", emoji: "⛰️" },
  { id: "water", char: "水", pinyin: "shui", label: "水滴", emoji: "💧" },
  { id: "flower", char: "花", pinyin: "hua", label: "小花", emoji: "🌸" },
  { id: "fish", char: "鱼", pinyin: "yu", label: "小鱼", emoji: "🐟" },
  { id: "bird", char: "鸟", pinyin: "niao", label: "小鸟", emoji: "🐦" },
  { id: "fruit", char: "果", pinyin: "guo", label: "水果", emoji: "🍎" },
];

const englishCards = [
  { id: "apple", word: "apple", chinese: "苹果", emoji: "🍎" },
  { id: "banana", word: "banana", chinese: "香蕉", emoji: "🍌" },
  { id: "cat", word: "cat", chinese: "小猫", emoji: "🐱" },
  { id: "dog", word: "dog", chinese: "小狗", emoji: "🐶" },
  { id: "sun", word: "sun", chinese: "太阳", emoji: "☀️" },
  { id: "moon", word: "moon", chinese: "月亮", emoji: "🌙" },
  { id: "fish", word: "fish", chinese: "小鱼", emoji: "🐟" },
  { id: "flower", word: "flower", chinese: "花朵", emoji: "🌸" },
];

const traceTemplates = [
  { id: "letter-a", guide: "A", label: "字母 A", accent: "#56a9ff" },
  { id: "letter-b", guide: "B", label: "字母 B", accent: "#ff8c61" },
  { id: "number-1", guide: "1", label: "数字 1", accent: "#7bd65b" },
  { id: "number-2", guide: "2", label: "数字 2", accent: "#ffb703" },
  { id: "star", guide: "★", label: "星星", accent: "#ff70a6" },
  { id: "circle", guide: "○", label: "圆圈", accent: "#4ecdc4" },
];

const difficultyProfiles = {
  easy: {
    label: "简单",
    note: "简单模式：时间更宽松，题目数量更少。",
    balloonTime: 40,
    balloonSpawn: 900,
    whackTime: 30,
    whackSpawn: 1050,
    countingMax: 6,
    colorOptionCount: 3,
    shadowOptionCount: 3,
    differentCardCount: 4,
    moreMaxCount: 5,
    moreMinGap: 2,
    shapeOptionCount: 3,
    sortOptionCount: 3,
    positionOptionCount: 3,
    foodOptionCount: 3,
    familyOptionCount: 3,
    weatherOptionCount: 3,
    dayNightOptionCount: 2,
    hotColdOptionCount: 2,
    positionAllowCorners: false,
    sizeOptionCount: 3,
    homeOptionCount: 3,
    memoryPairs: 6,
    rhythmFlash: 380,
    rhythmGap: 620,
  },
  normal: {
    label: "普通",
    note: "普通模式：节奏适中，适合大多数小朋友。",
    balloonTime: 30,
    balloonSpawn: 650,
    whackTime: 25,
    whackSpawn: 820,
    countingMax: 9,
    colorOptionCount: 4,
    shadowOptionCount: 4,
    differentCardCount: 5,
    moreMaxCount: 8,
    moreMinGap: 2,
    shapeOptionCount: 4,
    sortOptionCount: 4,
    positionOptionCount: 4,
    foodOptionCount: 4,
    familyOptionCount: 4,
    weatherOptionCount: 4,
    dayNightOptionCount: 2,
    hotColdOptionCount: 2,
    positionAllowCorners: false,
    sizeOptionCount: 4,
    homeOptionCount: 4,
    memoryPairs: 8,
    rhythmFlash: 320,
    rhythmGap: 520,
  },
  hard: {
    label: "挑战",
    note: "挑战模式：节奏更快，适合想要更刺激一点的孩子。",
    balloonTime: 20,
    balloonSpawn: 480,
    whackTime: 18,
    whackSpawn: 650,
    countingMax: 12,
    colorOptionCount: 6,
    shadowOptionCount: 5,
    differentCardCount: 6,
    moreMaxCount: 12,
    moreMinGap: 1,
    shapeOptionCount: 5,
    sortOptionCount: 5,
    positionOptionCount: 5,
    foodOptionCount: 5,
    familyOptionCount: 5,
    weatherOptionCount: 5,
    dayNightOptionCount: 2,
    hotColdOptionCount: 2,
    positionAllowCorners: true,
    sizeOptionCount: 5,
    homeOptionCount: 5,
    memoryPairs: 10,
    rhythmFlash: 260,
    rhythmGap: 440,
  },
};

const breakReminderOptions = [
  {
    minutes: 0,
    label: "关闭",
    note: "关闭后不会弹出休息提醒；想更护眼一点的话，20 分钟会比较合适。",
  },
  {
    minutes: 10,
    label: "10 分钟",
    note: "10 分钟提醒更勤一些，适合年龄更小、容易玩得很投入的小朋友。",
  },
  {
    minutes: 20,
    label: "20 分钟",
    note: "20 分钟是比较温和的护眼提醒，玩一阵子就会轻轻提醒休息一下。",
  },
  {
    minutes: 30,
    label: "30 分钟",
    note: "30 分钟更宽松，适合想让孩子一次多玩一会儿的情况。",
  },
];

const checkinStreakMilestones = [3, 7, 14, 30];

const zoneCatalog = [
  {
    id: "sky-zone",
    emoji: "☁️",
    title: "彩云高空站",
    description: "气球、颜色、影子、天气和白天夜晚的小冒险",
    panels: ["panel-balloon", "panel-color", "panel-shadow", "panel-weather", "panel-daynight"],
    theme: "sky",
  },
  {
    id: "forest-zone",
    emoji: "🌳",
    title: "森林记忆站",
    description: "翻卡片、拼图案、找不同、喂喂小动物和宝宝找妈妈",
    panels: ["panel-memory", "panel-puzzle", "panel-different", "panel-food", "panel-family"],
    theme: "forest",
  },
  {
    id: "grove-zone",
    emoji: "🍓",
    title: "节奏果园站",
    description: "打水果和跟灯光",
    panels: ["panel-whack", "panel-rhythm"],
    theme: "grove",
  },
  {
    id: "class-zone",
    emoji: "✏️",
    title: "启蒙课堂站",
    description: "数数、比多少、认形状、认位置、分分类、排大小、认冷热和描线练习",
    panels: ["panel-counting", "panel-size", "panel-more", "panel-shape", "panel-sort", "panel-position", "panel-hotcold", "panel-home", "panel-trace"],
    theme: "class",
  },
  {
    id: "language-zone",
    emoji: "📚",
    title: "语言小剧场",
    description: "识字和英语时间",
    panels: ["panel-words", "panel-english"],
    theme: "language",
  },
];

const badgeCatalog = [
  {
    id: "star-collector",
    icon: "⭐",
    title: "星星收藏家",
    description: "拿到 5 颗勇气星星",
    unlocked: (storage) => storage.stars >= 5,
  },
  {
    id: "balloon-ace",
    icon: "🎈",
    title: "气球神射手",
    description: "气球最好成绩达到 15",
    unlocked: (storage) => storage.balloonBest >= 15,
  },
  {
    id: "memory-detective",
    icon: "🧠",
    title: "记忆小侦探",
    description: "完成 1 次翻翻乐",
    unlocked: (storage) => storage.memoryBest !== null,
  },
  {
    id: "color-radar",
    icon: "🎨",
    title: "颜色小雷达",
    description: "颜色连对达到 5",
    unlocked: (storage) => storage.colorBest >= 5,
  },
  {
    id: "shadow-finder",
    icon: "🌙",
    title: "影子小侦探",
    description: "影子找朋友连对达到 4",
    unlocked: (storage) => storage.shadowBest >= 4,
  },
  {
    id: "different-eye",
    icon: "🔎",
    title: "火眼金睛",
    description: "谁不一样连对达到 4",
    unlocked: (storage) => storage.differentBest >= 4,
  },
  {
    id: "size-captain",
    icon: "📏",
    title: "大小小队长",
    description: "大小排排队连对达到 4",
    unlocked: (storage) => storage.sizeBest >= 4,
  },
  {
    id: "more-scout",
    icon: "⚖️",
    title: "比比小观察家",
    description: "比一比谁更多连对达到 4",
    unlocked: (storage) => storage.moreBest >= 4,
  },
  {
    id: "shape-scout",
    icon: "🔷",
    title: "形状小达人",
    description: "形状找找看连对达到 4",
    unlocked: (storage) => storage.shapeBest >= 4,
  },
  {
    id: "sort-helper",
    icon: "🧺",
    title: "分类小帮手",
    description: "分类小高手连对达到 4",
    unlocked: (storage) => storage.sortBest >= 4,
  },
  {
    id: "position-finder",
    icon: "📍",
    title: "位置小雷达",
    description: "位置找找看连对达到 4",
    unlocked: (storage) => storage.positionBest >= 4,
  },
  {
    id: "food-feeder",
    icon: "🥕",
    title: "喂养小能手",
    description: "喂喂小动物连对达到 4",
    unlocked: (storage) => storage.foodBest >= 4,
  },
  {
    id: "family-finder",
    icon: "🐣",
    title: "找妈小帮手",
    description: "宝宝找妈妈连对达到 4",
    unlocked: (storage) => storage.familyBest >= 4,
  },
  {
    id: "weather-stylist",
    icon: "🌦️",
    title: "穿搭小帮手",
    description: "天气穿什么连对达到 4",
    unlocked: (storage) => storage.weatherBest >= 4,
  },
  {
    id: "daynight-scout",
    icon: "🌓",
    title: "日夜小观察",
    description: "白天和夜晚连对达到 4",
    unlocked: (storage) => storage.dayNightBest >= 4,
  },
  {
    id: "hotcold-scout",
    icon: "🌡️",
    title: "冷热小观察",
    description: "热热还是凉凉连对达到 4",
    unlocked: (storage) => storage.hotColdBest >= 4,
  },
  {
    id: "home-guide",
    icon: "🏡",
    title: "回家小向导",
    description: "帮它回家连对达到 4",
    unlocked: (storage) => storage.homeBest >= 4,
  },
  {
    id: "language-sprout",
    icon: "🌱",
    title: "双语小苗苗",
    description: "识字或英语连对达到 4",
    unlocked: (storage) => Math.max(storage.wordsBest, storage.englishBest) >= 4,
  },
  {
    id: "rhythm-conductor",
    icon: "🎵",
    title: "节奏小指挥",
    description: "彩灯记忆达到第 4 回合",
    unlocked: (storage) => storage.rhythmBest >= 4,
  },
  {
    id: "trace-maker",
    icon: "✏️",
    title: "描线小工匠",
    description: "描好 3 张写字页",
    unlocked: (storage) => storage.traceBest >= 3,
  },
  {
    id: "all-rounder",
    icon: "🏅",
    title: "全能探索家",
    description: "体验过 8 个不同游戏",
    unlocked: (storage) => getExploredGameCount(storage) >= 8,
  },
];

const happyCheers = [
  "太棒啦，继续加油。",
  "真不错，小手真灵活。",
  "你越来越厉害啦。",
  "答对了，真聪明。",
  "继续玩，看看还能拿多少星星。",
];

const challengeMilestones = {
  stars: [3, 5, 10, 20, 30, 50],
  explored: [3, 5, 8, 10],
  badges: [1, 3, 5, 8],
};

const buddyCatalog = [
  {
    id: "sunny-chick",
    emoji: "🐥",
    name: "太阳小鸡",
    heroTip: "陪你收集第一颗闪闪发光的勇气星星。",
    spotlightCopy: "喜欢看你一点点收集星星，也会在一旁为你加油。",
    unlockHint: "一开始就会来到游乐园",
    accent: "#ffd447",
    unlocked: () => true,
  },
  {
    id: "berry-bunny",
    emoji: "🐰",
    name: "莓莓兔",
    heroTip: "最爱看你在颜色和水果游戏里蹦蹦跳跳。",
    spotlightCopy: "只要看见你收集到 3 颗星星，就会抱着胡萝卜赶来陪你玩。",
    unlockHint: "拿到 3 颗勇气星星",
    accent: "#ff8fa3",
    unlocked: (storage) => storage.stars >= 3,
  },
  {
    id: "cloud-pup",
    emoji: "🐶",
    name: "云朵小狗",
    heroTip: "会摇着尾巴陪你去每一站探险。",
    spotlightCopy: "喜欢追着云朵奔跑，也最爱在气球和节奏游戏旁边转圈圈。",
    unlockHint: "拿到 8 颗勇气星星",
    accent: "#7dc8ff",
    unlocked: (storage) => storage.stars >= 8,
  },
  {
    id: "mint-dino",
    emoji: "🦖",
    name: "薄荷小恐龙",
    heroTip: "看到奖章亮起来，就会开心得跺跺脚。",
    spotlightCopy: "最佩服认真闯关的小朋友，奖章墙点亮 2 枚时就会来给你鼓掌。",
    unlockHint: "点亮 2 枚徽章",
    accent: "#6fd48f",
    unlocked: (storage) => getUnlockedBadgeCount(storage) >= 2,
  },
  {
    id: "book-owl",
    emoji: "🦉",
    name: "故事猫头鹰",
    heroTip: "会陪你在识字、英语和数数小课堂里慢慢学。",
    spotlightCopy: "喜欢安安静静观察每个小站，体验过 5 个游戏以后就会飞到你肩膀上。",
    unlockHint: "体验过 5 个不同游戏",
    accent: "#8b7cff",
    unlocked: (storage) => getExploredGameCount(storage) >= 5,
  },
  {
    id: "rainbow-panda",
    emoji: "🐼",
    name: "彩虹熊猫",
    heroTip: "是游乐园里最会庆祝的大朋友。",
    spotlightCopy: "只有很会坚持的小玩家才会见到它，20 颗星星或 5 枚徽章都会把它请来。",
    unlockHint: "拿到 20 颗星星或点亮 5 枚徽章",
    accent: "#ffb15e",
    unlocked: (storage) => storage.stars >= 20 || getUnlockedBadgeCount(storage) >= 5,
  },
];

const stickerCatalog = [
  {
    id: "star-spark",
    emoji: "✨",
    name: "闪亮星星贴",
    spotlightCopy: "一开始就会在贴纸册里等你，像第一颗勇气星星一样亮亮的。",
    tip: "轻轻闪一闪，提醒你今天也可以继续收集勇气星星。",
    unlockHint: "一开始就能拥有",
    accent: "#ffd447",
    unlocked: () => true,
  },
  {
    id: "balloon-cloud",
    emoji: "🎈",
    name: "云朵气球贴",
    spotlightCopy: "当你把气球碰得越来越快，它就会飘进你的贴纸册里。",
    tip: "最适合贴在天空一角，看起来会像真的在飘。",
    unlockHint: "气球碰碰乐最好成绩达到 8",
    accent: "#ff8c61",
    unlocked: (storage) => storage.balloonBest >= 8,
  },
  {
    id: "paint-rainbow",
    emoji: "🌈",
    name: "彩虹颜料贴",
    spotlightCopy: "认颜色越来越稳时，彩虹颜料会在角落里慢慢铺开。",
    tip: "像一小块会发光的彩虹，最爱待在画纸边边。",
    unlockHint: "颜色找找看连对达到 3",
    accent: "#7b6dff",
    unlocked: (storage) => storage.colorBest >= 3,
  },
  {
    id: "moon-shadow",
    emoji: "🌙",
    name: "月光影子贴",
    spotlightCopy: "每次把影子猜出来时，它都会像月光一样，悄悄落进你的贴纸册里。",
    tip: "像一小片安静的夜空，最适合贴在亮晶晶的星星旁边。",
    unlockHint: "影子找朋友连对达到 3",
    accent: "#7b6dff",
    unlocked: (storage) => storage.shadowBest >= 3,
  },
  {
    id: "magnifier-badge",
    emoji: "🔎",
    name: "放大镜贴",
    spotlightCopy: "每次一眼看出谁不一样时，它都会在旁边轻轻闪一下。",
    tip: "最适合贴在观察小任务旁边，像在提醒你再仔细看看。",
    unlockHint: "谁不一样连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.differentBest >= 3,
  },
  {
    id: "size-ruler",
    emoji: "📐",
    name: "小尺子贴",
    spotlightCopy: "每次把大小顺序排好时，它都会像一把小尺子一样在旁边轻轻发亮。",
    tip: "最适合贴在数数和观察小任务旁边，像在提醒你慢慢看清楚。",
    unlockHint: "大小排排队连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.sizeBest >= 3,
  },
  {
    id: "more-scale",
    emoji: "⚖️",
    name: "小天平贴",
    spotlightCopy: "每次一眼看出哪边更多时，它都会轻轻摇一摇向你点头。",
    tip: "像一架亮晶晶的小天平，最适合贴在数数和比较小游戏旁边。",
    unlockHint: "比一比谁更多连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.moreBest >= 3,
  },
  {
    id: "shape-block",
    emoji: "🔷",
    name: "形状盒彩贴",
    spotlightCopy: "每次认出一个形状时，它都会像彩色积木一样在贴纸册里排整齐。",
    tip: "适合贴在启蒙小课堂旁边，像在提醒你继续认圆形、三角形和方形。",
    unlockHint: "形状找找看连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.shapeBest >= 3,
  },
  {
    id: "sort-basket",
    emoji: "🧺",
    name: "分类小篮贴",
    spotlightCopy: "每次把小东西送进正确分类时，它都会像小篮子一样轻轻晃一晃。",
    tip: "适合贴在启蒙小课堂旁边，像在提醒你慢慢看出它属于哪一类。",
    unlockHint: "分类小高手连对达到 3",
    accent: "#ffb15e",
    unlocked: (storage) => storage.sortBest >= 3,
  },
  {
    id: "position-compass",
    emoji: "🧭",
    name: "方向小罗盘贴",
    spotlightCopy: "每次认出小东西的位置时，它都会像小罗盘一样轻轻转一下。",
    tip: "适合贴在地图和小课堂旁边，像在提醒你看看上面、下面和中间。",
    unlockHint: "位置找找看连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.positionBest >= 3,
  },
  {
    id: "food-plate",
    emoji: "🍽️",
    name: "小餐盘贴",
    spotlightCopy: "每次把食物送给想吃它的小动物时，这张小餐盘都会开心地亮一下。",
    tip: "适合贴在森林站和认知小游戏旁边，像在提醒你继续喂喂小动物。",
    unlockHint: "喂喂小动物连对达到 3",
    accent: "#ffb15e",
    unlocked: (storage) => storage.foodBest >= 3,
  },
  {
    id: "family-nest",
    emoji: "🪺",
    name: "温暖小窝贴",
    spotlightCopy: "每次帮宝宝找到妈妈时，这个暖暖的小窝都会像在轻轻点头一样亮起来。",
    tip: "适合贴在森林站和地图旁边，像在提醒你继续帮宝宝找妈妈。",
    unlockHint: "宝宝找妈妈连对达到 3",
    accent: "#ffd447",
    unlocked: (storage) => storage.familyBest >= 3,
  },
  {
    id: "weather-cloud",
    emoji: "🌦️",
    name: "天气小云贴",
    spotlightCopy: "每次帮天气配对成功时，这朵小云都会露出亮亮的笑脸。",
    tip: "适合贴在高空站和地图旁边，像在提醒你看看晴天、雨天和雪天。",
    unlockHint: "天气穿什么连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => storage.weatherBest >= 3,
  },
  {
    id: "daynight-window",
    emoji: "🌓",
    name: "日夜小窗贴",
    spotlightCopy: "每次分清白天和夜晚时，这扇小窗都会亮起一半太阳、一半月亮的光。",
    tip: "适合贴在高空站和地图旁边，像在提醒你看看太阳、月亮和星星。",
    unlockHint: "白天和夜晚连对达到 3",
    accent: "#8b7cff",
    unlocked: (storage) => storage.dayNightBest >= 3,
  },
  {
    id: "hotcold-cup",
    emoji: "🌡️",
    name: "冷热温度贴",
    spotlightCopy: "每次分清热热和凉凉时，这枚小温度贴都会亮起暖暖和冰冰的两种颜色。",
    tip: "适合贴在课堂站和地图旁边，像在提醒你多摸摸、多观察生活里的温度感觉。",
    unlockHint: "热热还是凉凉连对达到 3",
    accent: "#ffb15e",
    unlocked: (storage) => storage.hotColdBest >= 3,
  },
  {
    id: "home-door",
    emoji: "🚪",
    name: "小门牌贴",
    spotlightCopy: "每次把小东西送回正确的地方时，它都会像一块会发光的小门牌一样亮起来。",
    tip: "适合贴在地图和小课堂旁边，像在说每个朋友都有自己的家。",
    unlockHint: "帮它回家连对达到 3",
    accent: "#ffb15e",
    unlocked: (storage) => storage.homeBest >= 3,
  },
  {
    id: "fruit-party",
    emoji: "🍓",
    name: "水果派对贴",
    spotlightCopy: "拍到越来越多小水果时，这张热闹的派对贴就会来找你。",
    tip: "闻起来像果园，看到它就想再去打一轮水果地鼠。",
    unlockHint: "水果打地鼠最好成绩达到 6",
    accent: "#ff6f91",
    unlocked: (storage) => storage.whackBest >= 6,
  },
  {
    id: "letter-lamp",
    emoji: "📚",
    name: "小书灯贴",
    spotlightCopy: "认字和学英文时越认真，它就会把贴纸册照得更亮一点。",
    tip: "像一盏小夜灯，陪着你慢慢学汉字和英文。",
    unlockHint: "识字或英语连对达到 3",
    accent: "#56a9ff",
    unlocked: (storage) => Math.max(storage.wordsBest, storage.englishBest) >= 3,
  },
  {
    id: "trace-swirl",
    emoji: "🖍️",
    name: "蜡笔旋旋贴",
    spotlightCopy: "一笔一画慢慢描的时候，它会跟着你的线条一起转圈圈。",
    tip: "最喜欢线条整齐的小朋友，画完以后会更好看。",
    unlockHint: "描线写字页完成 2 张",
    accent: "#4ecdc4",
    unlocked: (storage) => storage.traceBest >= 2,
  },
  {
    id: "explore-flag",
    emoji: "🚩",
    name: "探险小旗贴",
    spotlightCopy: "逛过更多小站以后，这面小旗子就会在贴纸册里立起来。",
    tip: "适合贴在地图旁边，像是给每一站都插上了自己的记号。",
    unlockHint: "体验过 5 个不同游戏",
    accent: "#7bd65b",
    unlocked: (storage) => getExploredGameCount(storage) >= 5,
  },
  {
    id: "medal-crown",
    emoji: "👑",
    name: "奖章皇冠贴",
    spotlightCopy: "只有一直坚持的小朋友，才能让这顶亮亮的小皇冠出现在贴纸册里。",
    tip: "看起来像一枚会微微发光的冠军贴纸。",
    unlockHint: "点亮 4 枚徽章或拿到 15 颗星星",
    accent: "#ffb15e",
    unlocked: (storage) => getUnlockedBadgeCount(storage) >= 4 || storage.stars >= 15,
  },
];

const gameChallengeCatalog = [
  {
    panelId: "panel-balloon",
    metricKey: "balloonBest",
    icon: "🎈",
    title: "气球小高手",
    milestones: [8, 15, 22],
    fallbackStep: 5,
    unitLabel: "最好成绩",
    ctaLabel: "去点气球",
    description: (target) => `去气球碰碰乐，把最好成绩提升到 ${target} 个气球。`,
  },
  {
    panelId: "panel-color",
    metricKey: "colorBest",
    icon: "🎨",
    title: "颜色连连看",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去找颜色",
    description: (target) => `去颜色找找看，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-shadow",
    metricKey: "shadowBest",
    icon: "🌙",
    title: "影子观察秀",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去找影子",
    description: (target) => `去影子找朋友，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-different",
    metricKey: "differentBest",
    icon: "🔎",
    title: "找不同小队长",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去找不同",
    description: (target) => `去谁不一样，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-counting",
    metricKey: "countingBest",
    icon: "🌼",
    title: "数数小园丁",
    milestones: [2, 4, 6],
    fallbackStep: 2,
    unitLabel: "答对题数",
    ctaLabel: "去数一数",
    description: (target) => `去数数小花园，把答对题数提升到 ${target} 题。`,
  },
  {
    panelId: "panel-size",
    metricKey: "sizeBest",
    icon: "📏",
    title: "大小排队秀",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去排大小",
    description: (target) => `去大小排排队，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-more",
    metricKey: "moreBest",
    icon: "⚖️",
    title: "比较小眼睛",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去比多少",
    description: (target) => `去比一比谁更多，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-shape",
    metricKey: "shapeBest",
    icon: "🔷",
    title: "形状小眼睛",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去认形状",
    description: (target) => `去形状找找看，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-sort",
    metricKey: "sortBest",
    icon: "🧺",
    title: "分类小脑瓜",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去分分类",
    description: (target) => `去分类小高手，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-position",
    metricKey: "positionBest",
    icon: "📍",
    title: "位置小眼睛",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去认位置",
    description: (target) => `去位置找找看，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-food",
    metricKey: "foodBest",
    icon: "🥕",
    title: "喂养小帮手",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去喂动物",
    description: (target) => `去喂喂小动物，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-family",
    metricKey: "familyBest",
    icon: "🐣",
    title: "找妈小眼睛",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去找妈妈",
    description: (target) => `去宝宝找妈妈，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-weather",
    metricKey: "weatherBest",
    icon: "🌦️",
    title: "天气穿搭秀",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去看天气",
    description: (target) => `去天气穿什么，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-daynight",
    metricKey: "dayNightBest",
    icon: "🌓",
    title: "日夜观察秀",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去分日夜",
    description: (target) => `去白天和夜晚，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-hotcold",
    metricKey: "hotColdBest",
    icon: "🌡️",
    title: "冷热分分看",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去认冷热",
    description: (target) => `去热热还是凉凉，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-home",
    metricKey: "homeBest",
    icon: "🏡",
    title: "回家小导游",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去送回家",
    description: (target) => `去帮它回家，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-whack",
    metricKey: "whackBest",
    icon: "🍓",
    title: "水果反应赛",
    milestones: [6, 10, 14],
    fallbackStep: 3,
    unitLabel: "最好成绩",
    ctaLabel: "去拍水果",
    description: (target) => `去水果打地鼠，把最好成绩提升到 ${target} 分。`,
  },
  {
    panelId: "panel-rhythm",
    metricKey: "rhythmBest",
    icon: "🎵",
    title: "节奏跟拍秀",
    milestones: [2, 4, 6],
    fallbackStep: 2,
    unitLabel: "通过回合",
    ctaLabel: "去跟节奏",
    description: (target) => `去灯光跟我拍，把通过回合提升到 ${target} 轮。`,
  },
  {
    panelId: "panel-words",
    metricKey: "wordsBest",
    icon: "📚",
    title: "识字发芽啦",
    milestones: [3, 5, 8],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去认汉字",
    description: (target) => `去识字小卡片，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-english",
    metricKey: "englishBest",
    icon: "🔤",
    title: "英语小耳朵",
    milestones: [2, 4, 6],
    fallbackStep: 2,
    unitLabel: "连对次数",
    ctaLabel: "去学英文",
    description: (target) => `去英语单词卡，把连对成绩提升到 ${target} 次。`,
  },
  {
    panelId: "panel-trace",
    metricKey: "traceBest",
    icon: "✏️",
    title: "描线耐心王",
    milestones: [1, 3, 5],
    fallbackStep: 2,
    unitLabel: "完成张数",
    ctaLabel: "去描一描",
    description: (target) => `去描线写字页，把完成张数提升到 ${target} 张。`,
  },
];

const ui = {
  starCount: document.querySelector("#star-count"),
  globalMessage: document.querySelector("#global-message"),
  heroBuddy: document.querySelector("#hero-buddy"),
  heroBuddyEmoji: document.querySelector("#hero-buddy-emoji"),
  heroBuddyName: document.querySelector("#hero-buddy-name"),
  heroBuddyTip: document.querySelector("#hero-buddy-tip"),
  surpriseBtn: document.querySelector("#surprise-btn"),
  homeScrollBtn: document.querySelector("#home-scroll-btn"),
  gameTabsDock: document.querySelector("#game-tabs-dock"),
  gameTabsToggle: document.querySelector("#game-tabs-toggle"),
  gameTabsCurrentLabel: document.querySelector("#game-tabs-current-label"),
  gameTabs: document.querySelector("#game-tabs"),
  gameTabsIndicator: document.querySelector(".game-tabs-indicator"),
  featuredStripTitle: document.querySelector("#featured-strip-title"),
  featuredStripCopy: document.querySelector("#featured-strip-copy"),
  featuredStripCount: document.querySelector("#featured-strip-count"),
  featuredGrid: document.querySelector("#featured-grid"),
  gameFinder: document.querySelector("#game-finder"),
  finderClear: document.querySelector("#finder-clear"),
  gameSearchInput: document.querySelector("#game-search-input"),
  finderVisibleCount: document.querySelector("#finder-visible-count"),
  finderSummaryText: document.querySelector("#finder-summary-text"),
  finderChipRow: document.querySelector("#finder-chip-row"),
  finderRecentTitle: document.querySelector("#finder-recent-title"),
  finderRecentCopy: document.querySelector("#finder-recent-copy"),
  quickRecentStrip: document.querySelector("#quick-recent-strip"),
  parentToggle: document.querySelector("#parent-mode-toggle"),
  sessionCareCard: document.querySelector("#session-care-card"),
  sessionCareChip: document.querySelector("#session-care-chip"),
  sessionCareTitle: document.querySelector("#session-care-title"),
  sessionCareCopy: document.querySelector("#session-care-copy"),
  sessionCareProgressFill: document.querySelector("#session-care-progress-fill"),
  installAppBtn: document.querySelector("#install-app-btn"),
  appInstallTitle: document.querySelector("#app-install-title"),
  appInstallNote: document.querySelector("#app-install-note"),
  appConnectionPill: document.querySelector("#app-connection-pill"),
  gameTotals: [...document.querySelectorAll("[data-game-total]")],
  exploredCount: document.querySelector("#explored-count"),
  hubStarCount: document.querySelector("#hub-star-count"),
  mapGrid: document.querySelector("#map-grid"),
  badgeCount: document.querySelector("#badge-count"),
  badgeTotal: document.querySelector("#badge-total"),
  badgeGrid: document.querySelector("#badge-grid"),
  checkinStreakCount: document.querySelector("#checkin-streak-count"),
  checkinTotalCount: document.querySelector("#checkin-total-count"),
  checkinStatus: document.querySelector("#checkin-status"),
  checkinTitle: document.querySelector("#checkin-title"),
  checkinCopy: document.querySelector("#checkin-copy"),
  checkinStartBtn: document.querySelector("#checkin-start-btn"),
  checkinResumeBtn: document.querySelector("#checkin-resume-btn"),
  checkinGrid: document.querySelector("#checkin-grid"),
  guideTitle: document.querySelector("#guide-title"),
  guideCopy: document.querySelector("#guide-copy"),
  guideExploredCount: document.querySelector("#guide-explored-count"),
  guideStepCount: document.querySelector("#guide-step-count"),
  resumeRecentCount: document.querySelector("#resume-recent-count"),
  resumeChoiceCount: document.querySelector("#resume-choice-count"),
  resumeStatus: document.querySelector("#resume-status"),
  resumeTitle: document.querySelector("#resume-title"),
  resumeCopy: document.querySelector("#resume-copy"),
  resumeContinueBtn: document.querySelector("#resume-continue-btn"),
  resumeRouteBtn: document.querySelector("#resume-route-btn"),
  resumeGrid: document.querySelector("#resume-grid"),
  guideStage: document.querySelector("#guide-stage"),
  guideSummaryTitle: document.querySelector("#guide-summary-title"),
  guideSummaryCopy: document.querySelector("#guide-summary-copy"),
  guideChipRow: document.querySelector("#guide-chip-row"),
  guideGrid: document.querySelector("#guide-grid"),
  guideStartRoute: document.querySelector("#guide-start-route"),
  guideRefreshRoute: document.querySelector("#guide-refresh-route"),
  challengeDoneCount: document.querySelector("#challenge-done-count"),
  challengeTotalCount: document.querySelector("#challenge-total-count"),
  challengeGrid: document.querySelector("#challenge-grid"),
  buddyCount: document.querySelector("#buddy-count"),
  buddyTotal: document.querySelector("#buddy-total"),
  buddyCurrent: document.querySelector("#buddy-current"),
  buddyCurrentEmoji: document.querySelector("#buddy-current-emoji"),
  buddyCurrentName: document.querySelector("#buddy-current-name"),
  buddyCurrentCopy: document.querySelector("#buddy-current-copy"),
  buddyGrid: document.querySelector("#buddy-grid"),
  stickerCount: document.querySelector("#sticker-count"),
  stickerTotal: document.querySelector("#sticker-total"),
  stickerCurrent: document.querySelector("#sticker-current"),
  stickerCurrentEmoji: document.querySelector("#sticker-current-emoji"),
  stickerCurrentName: document.querySelector("#sticker-current-name"),
  stickerCurrentCopy: document.querySelector("#sticker-current-copy"),
  stickerGrid: document.querySelector("#sticker-grid"),
  tabs: [...document.querySelectorAll(".tab-btn")],
  panels: [...document.querySelectorAll(".game-panel")],
  balloon: {
    score: document.querySelector("#balloon-score"),
    time: document.querySelector("#balloon-time"),
    best: document.querySelector("#balloon-best"),
    status: document.querySelector("#balloon-status"),
    area: document.querySelector("#balloon-area"),
    start: document.querySelector("#balloon-start"),
    reset: document.querySelector("#balloon-reset"),
  },
  memory: {
    moves: document.querySelector("#memory-moves"),
    pairs: document.querySelector("#memory-pairs"),
    total: document.querySelector("#memory-total"),
    best: document.querySelector("#memory-best"),
    status: document.querySelector("#memory-status"),
    board: document.querySelector("#memory-board"),
    newGame: document.querySelector("#memory-new"),
  },
  color: {
    score: document.querySelector("#color-score"),
    streak: document.querySelector("#color-streak"),
    best: document.querySelector("#color-best"),
    status: document.querySelector("#color-status"),
    targetSwatch: document.querySelector("#color-target-swatch"),
    targetName: document.querySelector("#color-target-name"),
    options: document.querySelector("#color-options"),
    refresh: document.querySelector("#color-refresh"),
    reset: document.querySelector("#color-reset"),
  },
  shadow: {
    score: document.querySelector("#shadow-score"),
    streak: document.querySelector("#shadow-streak"),
    best: document.querySelector("#shadow-best"),
    status: document.querySelector("#shadow-status"),
    emoji: document.querySelector("#shadow-emoji"),
    title: document.querySelector("#shadow-title"),
    note: document.querySelector("#shadow-note"),
    options: document.querySelector("#shadow-options"),
    refresh: document.querySelector("#shadow-refresh"),
    reset: document.querySelector("#shadow-reset"),
  },
  different: {
    score: document.querySelector("#different-score"),
    streak: document.querySelector("#different-streak"),
    best: document.querySelector("#different-best"),
    status: document.querySelector("#different-status"),
    title: document.querySelector("#different-title"),
    note: document.querySelector("#different-note"),
    options: document.querySelector("#different-options"),
    refresh: document.querySelector("#different-refresh"),
    reset: document.querySelector("#different-reset"),
  },
  counting: {
    score: document.querySelector("#counting-score"),
    streak: document.querySelector("#counting-streak"),
    best: document.querySelector("#counting-best"),
    status: document.querySelector("#counting-status"),
    question: document.querySelector("#count-question"),
    display: document.querySelector("#count-display"),
    options: document.querySelector("#count-options"),
    refresh: document.querySelector("#counting-refresh"),
    reset: document.querySelector("#counting-reset"),
  },
  more: {
    score: document.querySelector("#more-score"),
    streak: document.querySelector("#more-streak"),
    best: document.querySelector("#more-best"),
    status: document.querySelector("#more-status"),
    question: document.querySelector("#more-question"),
    left: document.querySelector("#more-left"),
    right: document.querySelector("#more-right"),
    refresh: document.querySelector("#more-refresh"),
    reset: document.querySelector("#more-reset"),
  },
  shape: {
    score: document.querySelector("#shape-score"),
    streak: document.querySelector("#shape-streak"),
    best: document.querySelector("#shape-best"),
    status: document.querySelector("#shape-status"),
    icon: document.querySelector("#shape-icon"),
    title: document.querySelector("#shape-title"),
    note: document.querySelector("#shape-note"),
    options: document.querySelector("#shape-options"),
    refresh: document.querySelector("#shape-refresh"),
    reset: document.querySelector("#shape-reset"),
  },
  sort: {
    score: document.querySelector("#sort-score"),
    streak: document.querySelector("#sort-streak"),
    best: document.querySelector("#sort-best"),
    status: document.querySelector("#sort-status"),
    emoji: document.querySelector("#sort-emoji"),
    title: document.querySelector("#sort-title"),
    note: document.querySelector("#sort-note"),
    options: document.querySelector("#sort-options"),
    refresh: document.querySelector("#sort-refresh"),
    reset: document.querySelector("#sort-reset"),
  },
  position: {
    score: document.querySelector("#position-score"),
    streak: document.querySelector("#position-streak"),
    best: document.querySelector("#position-best"),
    status: document.querySelector("#position-status"),
    emoji: document.querySelector("#position-emoji"),
    title: document.querySelector("#position-title"),
    note: document.querySelector("#position-note"),
    board: document.querySelector("#position-board"),
    options: document.querySelector("#position-options"),
    refresh: document.querySelector("#position-refresh"),
    reset: document.querySelector("#position-reset"),
  },
  food: {
    score: document.querySelector("#food-score"),
    streak: document.querySelector("#food-streak"),
    best: document.querySelector("#food-best"),
    status: document.querySelector("#food-status"),
    emoji: document.querySelector("#food-emoji"),
    title: document.querySelector("#food-title"),
    note: document.querySelector("#food-note"),
    options: document.querySelector("#food-options"),
    refresh: document.querySelector("#food-refresh"),
    reset: document.querySelector("#food-reset"),
  },
  family: {
    score: document.querySelector("#family-score"),
    streak: document.querySelector("#family-streak"),
    best: document.querySelector("#family-best"),
    status: document.querySelector("#family-status"),
    emoji: document.querySelector("#family-emoji"),
    title: document.querySelector("#family-title"),
    note: document.querySelector("#family-note"),
    options: document.querySelector("#family-options"),
    refresh: document.querySelector("#family-refresh"),
    reset: document.querySelector("#family-reset"),
  },
  weather: {
    score: document.querySelector("#weather-score"),
    streak: document.querySelector("#weather-streak"),
    best: document.querySelector("#weather-best"),
    status: document.querySelector("#weather-status"),
    emoji: document.querySelector("#weather-emoji"),
    title: document.querySelector("#weather-title"),
    note: document.querySelector("#weather-note"),
    options: document.querySelector("#weather-options"),
    refresh: document.querySelector("#weather-refresh"),
    reset: document.querySelector("#weather-reset"),
  },
  dayNight: {
    score: document.querySelector("#daynight-score"),
    streak: document.querySelector("#daynight-streak"),
    best: document.querySelector("#daynight-best"),
    status: document.querySelector("#daynight-status"),
    emoji: document.querySelector("#daynight-emoji"),
    title: document.querySelector("#daynight-title"),
    note: document.querySelector("#daynight-note"),
    options: document.querySelector("#daynight-options"),
    refresh: document.querySelector("#daynight-refresh"),
    reset: document.querySelector("#daynight-reset"),
  },
  hotCold: {
    score: document.querySelector("#hotcold-score"),
    streak: document.querySelector("#hotcold-streak"),
    best: document.querySelector("#hotcold-best"),
    status: document.querySelector("#hotcold-status"),
    emoji: document.querySelector("#hotcold-emoji"),
    title: document.querySelector("#hotcold-title"),
    note: document.querySelector("#hotcold-note"),
    options: document.querySelector("#hotcold-options"),
    refresh: document.querySelector("#hotcold-refresh"),
    reset: document.querySelector("#hotcold-reset"),
  },
  size: {
    score: document.querySelector("#size-score"),
    streak: document.querySelector("#size-streak"),
    best: document.querySelector("#size-best"),
    status: document.querySelector("#size-status"),
    icon: document.querySelector("#size-icon"),
    title: document.querySelector("#size-title"),
    note: document.querySelector("#size-note"),
    options: document.querySelector("#size-options"),
    refresh: document.querySelector("#size-refresh"),
    reset: document.querySelector("#size-reset"),
  },
  home: {
    score: document.querySelector("#home-score"),
    streak: document.querySelector("#home-streak"),
    best: document.querySelector("#home-best"),
    status: document.querySelector("#home-status"),
    emoji: document.querySelector("#home-emoji"),
    title: document.querySelector("#home-title"),
    note: document.querySelector("#home-note"),
    options: document.querySelector("#home-options"),
    refresh: document.querySelector("#home-refresh"),
    reset: document.querySelector("#home-reset"),
  },
  whack: {
    score: document.querySelector("#whack-score"),
    time: document.querySelector("#whack-time"),
    best: document.querySelector("#whack-best"),
    status: document.querySelector("#whack-status"),
    board: document.querySelector("#whack-board"),
    start: document.querySelector("#whack-start"),
    reset: document.querySelector("#whack-reset"),
  },
  rhythm: {
    round: document.querySelector("#rhythm-round"),
    best: document.querySelector("#rhythm-best"),
    mode: document.querySelector("#rhythm-mode"),
    status: document.querySelector("#rhythm-status"),
    board: document.querySelector("#rhythm-board"),
    start: document.querySelector("#rhythm-start"),
    reset: document.querySelector("#rhythm-reset"),
  },
  puzzle: {
    steps: document.querySelector("#puzzle-steps"),
    matched: document.querySelector("#puzzle-matched"),
    best: document.querySelector("#puzzle-best"),
    status: document.querySelector("#puzzle-status"),
    reference: document.querySelector("#puzzle-reference"),
    board: document.querySelector("#puzzle-board"),
    newGame: document.querySelector("#puzzle-new"),
  },
  words: {
    score: document.querySelector("#words-score"),
    streak: document.querySelector("#words-streak"),
    best: document.querySelector("#words-best"),
    status: document.querySelector("#words-status"),
    modeLabel: document.querySelector("#word-mode-label"),
    cardTip: document.querySelector("#word-card-tip"),
    cardNote: document.querySelector("#word-card-note"),
    emoji: document.querySelector("#word-emoji"),
    char: document.querySelector("#word-char"),
    pinyin: document.querySelector("#word-pinyin"),
    options: document.querySelector("#word-options"),
    refresh: document.querySelector("#words-refresh"),
    reset: document.querySelector("#words-reset"),
    pictureMode: document.querySelector("#words-picture-mode"),
    pinyinMode: document.querySelector("#words-pinyin-mode"),
    speak: document.querySelector("#words-speak"),
  },
  english: {
    score: document.querySelector("#english-score"),
    streak: document.querySelector("#english-streak"),
    best: document.querySelector("#english-best"),
    status: document.querySelector("#english-status"),
    emoji: document.querySelector("#english-emoji"),
    meaning: document.querySelector("#english-meaning"),
    note: document.querySelector("#english-note"),
    options: document.querySelector("#english-options"),
    refresh: document.querySelector("#english-refresh"),
    reset: document.querySelector("#english-reset"),
    speak: document.querySelector("#english-speak"),
  },
  trace: {
    complete: document.querySelector("#trace-complete"),
    target: document.querySelector("#trace-target"),
    best: document.querySelector("#trace-best"),
    status: document.querySelector("#trace-status"),
    picker: document.querySelector("#trace-picker"),
    guide: document.querySelector("#trace-guide"),
    canvas: document.querySelector("#trace-canvas"),
    done: document.querySelector("#trace-done"),
    clear: document.querySelector("#trace-clear"),
    next: document.querySelector("#trace-next"),
  },
  parent: {
    panel: document.querySelector("#parent-panel"),
    close: document.querySelector("#parent-close"),
    activeProfileName: document.querySelector("#parent-active-profile-name"),
    profileCount: document.querySelector("#parent-profile-count"),
    profileList: document.querySelector("#parent-profile-list"),
    profilePreview: document.querySelector("#parent-profile-preview"),
    profilePreviewAvatar: document.querySelector("#parent-profile-preview-avatar"),
    profilePreviewName: document.querySelector("#parent-profile-preview-name"),
    profilePreviewTheme: document.querySelector("#parent-profile-preview-theme"),
    avatarList: document.querySelector("#parent-avatar-list"),
    themeList: document.querySelector("#parent-theme-list"),
    addProfile: document.querySelector("#parent-add-profile"),
    renameProfile: document.querySelector("#parent-rename-profile"),
    deleteProfile: document.querySelector("#parent-delete-profile"),
    moveProfileUp: document.querySelector("#parent-move-profile-up"),
    moveProfileDown: document.querySelector("#parent-move-profile-down"),
    profileStatus: document.querySelector("#parent-profile-status"),
    difficultyEasy: document.querySelector("#difficulty-easy"),
    difficultyNormal: document.querySelector("#difficulty-normal"),
    difficultyHard: document.querySelector("#difficulty-hard"),
    difficultyNote: document.querySelector("#difficulty-note"),
    soundToggle: document.querySelector("#sound-toggle"),
    breakReminderOff: document.querySelector("#break-reminder-off"),
    breakReminder10: document.querySelector("#break-reminder-10"),
    breakReminder20: document.querySelector("#break-reminder-20"),
    breakReminder30: document.querySelector("#break-reminder-30"),
    breakReminderNote: document.querySelector("#break-reminder-note"),
    gameList: document.querySelector("#parent-game-list"),
    exportData: document.querySelector("#parent-export-data"),
    exportCurrentProfile: document.querySelector("#parent-export-current-profile"),
    importData: document.querySelector("#parent-import-data"),
    importCurrentProfile: document.querySelector("#parent-import-current-profile"),
    resetData: document.querySelector("#parent-reset-data"),
    importFile: document.querySelector("#parent-import-file"),
    storageStatus: document.querySelector("#parent-storage-status"),
  },
  celebrationModal: document.querySelector("#celebration-modal"),
  celebrationCard: document.querySelector("#celebration-card"),
  celebrationBurst: document.querySelector("#celebration-burst"),
  celebrationTag: document.querySelector("#celebration-tag"),
  celebrationIcon: document.querySelector("#celebration-icon"),
  celebrationTitle: document.querySelector("#celebration-title"),
  celebrationBody: document.querySelector("#celebration-body"),
  celebrationAction: document.querySelector("#celebration-action"),
  celebrationClose: document.querySelector("#celebration-close"),
  celebrationMeta: document.querySelector("#celebration-meta"),
  breakToast: document.querySelector("#break-toast"),
  breakToastTitle: document.querySelector("#break-toast-title"),
  breakToastCopy: document.querySelector("#break-toast-copy"),
  breakToastRest: document.querySelector("#break-toast-rest"),
  breakToastExtend: document.querySelector("#break-toast-extend"),
  heroProfilePill: document.querySelector("#hero-profile-pill"),
  heroProfileAvatar: document.querySelector("#hero-profile-avatar"),
  heroProfileName: document.querySelector("#hero-profile-name"),
  themeColorMeta: document.querySelector("#theme-color-meta"),
};

let activeStorageRef = null;
let isRefreshingProgressDerivedCache = false;
const savedProfileBook = loadProfileBook();

const state = {
  activePanel: "panel-balloon",
  profileBook: savedProfileBook,
  storage: cloneStorageData(getActiveProfileRecord(savedProfileBook)?.data),
  balloon: {
    score: 0,
    timeLeft: 30,
    running: false,
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
    spawnLoop: null,
    timerLoop: null,
  },
  memory: {
    deck: [],
    firstIndex: null,
    secondIndex: null,
    lock: false,
    moves: 0,
    matches: 0,
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
    resolveTimer: null,
  },
  color: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedName: "",
    roundTimer: null,
  },
  shadow: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  },
  different: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedIndex: null,
    roundTimer: null,
  },
  counting: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedValue: null,
    roundTimer: null,
  },
  more: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedSide: "",
    roundTimer: null,
  },
  shape: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  },
  sort: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedCategoryId: null,
    roundTimer: null,
  },
  position: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedSlotId: null,
    roundTimer: null,
  },
  food: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedFoodId: null,
    roundTimer: null,
  },
  family: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedParentId: null,
    roundTimer: null,
  },
  weather: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedWearId: null,
    roundTimer: null,
  },
  dayNight: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedPeriodId: null,
    roundTimer: null,
  },
  hotCold: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedChoiceId: null,
    roundTimer: null,
  },
  size: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    pickedKeys: [],
    nextIndex: 0,
    wrongKey: null,
    roundTimer: null,
  },
  home: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedPlaceId: null,
    roundTimer: null,
  },
  whack: {
    score: 0,
    timeLeft: 25,
    running: false,
    activeIndex: null,
    activeFruit: "",
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
    spawnLoop: null,
    timerLoop: null,
  },
  rhythm: {
    sequence: [],
    inputIndex: 0,
    round: 0,
    mode: "准备中",
    running: false,
    locked: true,
    showing: false,
    activePad: null,
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
    timeouts: [],
    pulseTimer: null,
  },
  puzzle: {
    tiles: [],
    selectedIndex: null,
    steps: 0,
    solved: false,
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
  },
  words: {
    score: 0,
    streak: 0,
    current: null,
    mode: "picture",
    answered: false,
    selectedId: null,
    roundTimer: null,
  },
  english: {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  },
  trace: {
    completed: 0,
    currentIndex: 0,
    hasDrawn: false,
    drawing: false,
    lastPoint: null,
    sessionStartStars: 0,
    sessionStartDoneCount: 0,
  },
  guide: {
    routeVariant: 0,
    current: [],
  },
  resume: {
    primaryPanelId: "",
    secondaryPanelId: "",
  },
  menu: {
    tabsCollapsed: true,
  },
  finder: {
    query: "",
    category: "all",
  },
  session: {
    nextBreakAt: null,
    currentIntervalMs: 0,
    due: false,
    ticker: null,
  },
  challenges: {
    dayKey: "",
    current: [],
  },
  celebration: {
    queue: [],
    open: false,
    current: null,
    followUpTimer: null,
  },
  parent: {
    open: false,
    importMode: "auto",
  },
  app: {
    supported: false,
    installAvailable: false,
    installed: isStandaloneDisplayMode(),
    offlineReady: false,
    isOnline: navigator.onLine,
    deferredPrompt: null,
  },
};

activeStorageRef = state.storage;

const panelInitializers = {
  "panel-memory": setupMemoryGame,
  "panel-color": setupColorRound,
  "panel-shadow": setupShadowRound,
  "panel-different": setupDifferentRound,
  "panel-counting": setupCountingRound,
  "panel-size": setupSizeRound,
  "panel-more": setupMoreRound,
  "panel-shape": setupShapeRound,
  "panel-sort": setupSortRound,
  "panel-position": setupPositionRound,
  "panel-food": setupFoodRound,
  "panel-family": setupFamilyRound,
  "panel-weather": setupWeatherRound,
  "panel-daynight": setupDayNightRound,
  "panel-hotcold": setupHotColdRound,
  "panel-home": setupHomeRound,
  "panel-whack": setupWhackGame,
  "panel-rhythm": setupRhythmGame,
  "panel-puzzle": setupPuzzleGame,
  "panel-words": setupWordsRound,
  "panel-english": setupEnglishRound,
  "panel-trace": setupTraceGame,
};

const panelLaunchers = {
  "panel-balloon": startBalloonGame,
  ...panelInitializers,
  "panel-whack": startWhackGame,
  "panel-rhythm": startRhythmGame,
};

const difficultySensitivePanelIds = [
  "panel-memory",
  "panel-color",
  "panel-shadow",
  "panel-different",
  "panel-counting",
  "panel-more",
  "panel-shape",
  "panel-sort",
  "panel-position",
  "panel-food",
  "panel-family",
  "panel-weather",
  "panel-daynight",
  "panel-hotcold",
  "panel-size",
  "panel-home",
  "panel-rhythm",
];

const initializedPanels = new Set(["panel-balloon"]);

let deferredPanelInitHandle = null;
let deferredPanelInitMode = "";
let deferredPanelInitVersion = 0;
let suppressGlobalMessage = false;
let progressHubRefreshHandle = null;
let progressHubRefreshMode = "";
let visiblePanelCacheVersion = 0;
let panelSpotlightTimer = null;
let visiblePanelCache = {
  version: -1,
  ids: [],
  set: new Set(),
};
let progressDerivedCacheVersion = 0;
let progressDerivedCache = {
  version: -1,
  progressByPanelId: new Map(),
  exploredCount: 0,
  unlockedBadges: [],
  unlockedBadgeCount: 0,
  unlockedBuddies: [],
  unlockedBuddyCount: 0,
  unlockedStickers: [],
  unlockedStickerCount: 0,
};

function resolveStorageReference(storage) {
  return storage ?? activeStorageRef ?? initialStorage;
}

function isActiveStorageReference(storage) {
  return !isRefreshingProgressDerivedCache && activeStorageRef !== null && storage === activeStorageRef;
}

init();

function init() {
  renderParentProfileList();
  renderParentGameList();
  renderGameTotals();
  bindEvents();
  renderFeaturedStrip();
  renderStars();
  applyStoredSettings();
  restorePanelFromLocationHash(false);
  initializePanel(state.activePanel);
  updateBalloonScoreboard();
  scheduleAppExperienceRegistration();
  startBreakReminderTicker();
  queueDeferredPanelInitialization();
  setGlobalMessage("开始玩游戏，就能收集闪闪发光的小星星。");
}

function initializePanel(panelId, { force = false, passive = false } = {}) {
  const initializer = panelInitializers[panelId];

  if (!initializer) {
    initializedPanels.add(panelId);
    return;
  }

  if (!force && initializedPanels.has(panelId)) {
    return;
  }

  const previousSuppressState = suppressGlobalMessage;
  suppressGlobalMessage = passive || previousSuppressState;

  try {
    initializer();
  } finally {
    suppressGlobalMessage = previousSuppressState;
  }

  initializedPanels.add(panelId);
}

function getDeferredPanelIds() {
  const visiblePanels = getVisiblePanelSet();

  return gameCatalog
    .map((game) => game.id)
    .filter((panelId) => visiblePanels.has(panelId) && panelInitializers[panelId] && !initializedPanels.has(panelId));
}

function clearDeferredPanelInitialization() {
  if (deferredPanelInitHandle === null) {
    return;
  }

  if (deferredPanelInitMode === "idle" && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(deferredPanelInitHandle);
  } else {
    window.clearTimeout(deferredPanelInitHandle);
  }

  deferredPanelInitHandle = null;
  deferredPanelInitMode = "";
}

function scheduleDeferredPanelInitialization() {
  clearDeferredPanelInitialization();

  if (!getDeferredPanelIds().length) {
    return;
  }

  const version = deferredPanelInitVersion;
  const callback = (deadline = { didTimeout: true, timeRemaining: () => 0 }) => {
    if (version !== deferredPanelInitVersion) {
      return;
    }

    deferredPanelInitHandle = null;
    deferredPanelInitMode = "";

    const pendingPanelIds = getDeferredPanelIds();

    while (pendingPanelIds.length) {
      initializePanel(pendingPanelIds.shift(), { passive: true });

      if (!deadline.didTimeout && typeof deadline.timeRemaining === "function" && deadline.timeRemaining() < 8) {
        break;
      }
    }

    if (getDeferredPanelIds().length) {
      scheduleDeferredPanelInitialization();
    }
  };

  if (typeof window.requestIdleCallback === "function") {
    deferredPanelInitMode = "idle";
    deferredPanelInitHandle = window.requestIdleCallback(callback, { timeout: 700 });
    return;
  }

  deferredPanelInitMode = "timeout";
  deferredPanelInitHandle = window.setTimeout(() => callback(), 120);
}

function queueDeferredPanelInitialization() {
  deferredPanelInitVersion += 1;
  scheduleDeferredPanelInitialization();
}

function invalidateVisiblePanelCache() {
  visiblePanelCacheVersion += 1;
}

function invalidatePanels(panelIds = []) {
  panelIds.forEach((panelId) => {
    initializedPanels.delete(panelId);
  });
}

function resetPanelInitializationState() {
  initializedPanels.clear();
  initializedPanels.add("panel-balloon");
}

function clearDifficultySensitiveActivity() {
  clearMemoryTimer();
  clearColorTimer();
  clearShadowTimer();
  clearDifferentTimer();
  clearCountingTimer();
  clearMoreTimer();
  clearShapeTimer();
  clearSortTimer();
  clearPositionTimer();
  clearFoodTimer();
  clearFamilyTimer();
  clearWeatherTimer();
  clearDayNightTimer();
  clearHotColdTimer();
  clearSizeTimer();
  clearHomeTimer();
  clearRhythmTimers();
}

function clearProgressHubRefresh() {
  if (progressHubRefreshHandle === null) {
    return;
  }

  if (progressHubRefreshMode === "frame" && typeof window.cancelAnimationFrame === "function") {
    window.cancelAnimationFrame(progressHubRefreshHandle);
  } else {
    window.clearTimeout(progressHubRefreshHandle);
  }

  progressHubRefreshHandle = null;
  progressHubRefreshMode = "";
}

function invalidateProgressDerivedCache() {
  progressDerivedCacheVersion += 1;
}

function refreshVisiblePanelCache() {
  if (visiblePanelCache.version === visiblePanelCacheVersion) {
    return;
  }

  const ids = gameCatalog
    .filter((game) => state.storage.settings.visiblePanels[game.id] !== false)
    .map((game) => game.id);

  visiblePanelCache = {
    version: visiblePanelCacheVersion,
    ids,
    set: new Set(ids),
  };
}

function refreshProgressDerivedCache() {
  if (progressDerivedCache.version === progressDerivedCacheVersion) {
    return;
  }

  isRefreshingProgressDerivedCache = true;
  try {
    const progressByPanelId = new Map();

    gameCatalog.forEach((game) => {
      const panelId = game.id;
      let hasProgress = false;

      if (panelId === "panel-balloon") {
        hasProgress = state.storage.balloonBest > 0;
      } else if (panelId === "panel-memory") {
        hasProgress = state.storage.memoryBest !== null;
      } else if (panelId === "panel-color") {
        hasProgress = state.storage.colorBest > 0;
      } else if (panelId === "panel-shadow") {
        hasProgress = state.storage.shadowBest > 0;
      } else if (panelId === "panel-different") {
        hasProgress = state.storage.differentBest > 0;
      } else if (panelId === "panel-counting") {
        hasProgress = state.storage.countingBest > 0;
      } else if (panelId === "panel-more") {
        hasProgress = state.storage.moreBest > 0;
      } else if (panelId === "panel-shape") {
        hasProgress = state.storage.shapeBest > 0;
      } else if (panelId === "panel-sort") {
        hasProgress = state.storage.sortBest > 0;
      } else if (panelId === "panel-position") {
        hasProgress = state.storage.positionBest > 0;
      } else if (panelId === "panel-food") {
        hasProgress = state.storage.foodBest > 0;
      } else if (panelId === "panel-family") {
        hasProgress = state.storage.familyBest > 0;
      } else if (panelId === "panel-weather") {
        hasProgress = state.storage.weatherBest > 0;
      } else if (panelId === "panel-daynight") {
        hasProgress = state.storage.dayNightBest > 0;
      } else if (panelId === "panel-hotcold") {
        hasProgress = state.storage.hotColdBest > 0;
      } else if (panelId === "panel-size") {
        hasProgress = state.storage.sizeBest > 0;
      } else if (panelId === "panel-home") {
        hasProgress = state.storage.homeBest > 0;
      } else if (panelId === "panel-whack") {
        hasProgress = state.storage.whackBest > 0;
      } else if (panelId === "panel-rhythm") {
        hasProgress = state.storage.rhythmBest > 0;
      } else if (panelId === "panel-puzzle") {
        hasProgress = state.storage.puzzleBest !== null;
      } else if (panelId === "panel-words") {
        hasProgress = state.storage.wordsBest > 0;
      } else if (panelId === "panel-english") {
        hasProgress = state.storage.englishBest > 0;
      } else if (panelId === "panel-trace") {
        hasProgress = state.storage.traceBest > 0;
      }

      progressByPanelId.set(panelId, hasProgress);
    });

    const unlockedBadges = badgeCatalog.filter((badge) => badge.unlocked(state.storage));
    const unlockedBuddies = buddyCatalog.filter((buddy) => buddy.unlocked(state.storage));
    const unlockedStickers = stickerCatalog.filter((sticker) => sticker.unlocked(state.storage));

    progressDerivedCache = {
      version: progressDerivedCacheVersion,
      progressByPanelId,
      exploredCount: [...progressByPanelId.values()].filter(Boolean).length,
      unlockedBadges,
      unlockedBadgeCount: unlockedBadges.length,
      unlockedBuddies,
      unlockedBuddyCount: unlockedBuddies.length,
      unlockedStickers,
      unlockedStickerCount: unlockedStickers.length,
    };
  } finally {
    isRefreshingProgressDerivedCache = false;
  }
}

function scheduleAppExperienceRegistration() {
  if (document.readyState === "complete") {
    registerAppExperience();
    return;
  }

  window.addEventListener("load", registerAppExperience, { once: true });
}

function updateStarCountDisplay() {
  ui.starCount.textContent = state.storage.stars;
}

function refreshProfilePresentation({ includeProfileList = false, includeProfileAppearance = false } = {}) {
  renderActiveProfileSummary();

  if (!state.parent.open) {
    return;
  }

  if (includeProfileList) {
    renderParentProfileList();
  }

  if (includeProfileAppearance) {
    renderParentProfileAppearance();
  }
}

function refreshGuideRelatedUi({ includeCheckin = false, includeMap = false, includeChallenge = false } = {}) {
  renderGuideStrip();
  renderResumeStrip();
  renderGameFinder();

  if (includeCheckin) {
    renderCheckinSection();
  }

  if (includeMap) {
    renderMapGrid();
  }

  if (includeChallenge) {
    renderChallengeGrid();
  }
}

function refreshActivePanelUi() {
  renderFeaturedStrip();
  refreshGuideRelatedUi({ includeMap: true, includeChallenge: true });
}

function refreshAfterProfileSessionChange() {
  invalidateVisiblePanelCache();
  invalidateProgressDerivedCache();
  resetSessionState();
  applyStoredSettings();
  renderFeaturedStrip();
  updateStarCountDisplay();
}

function renderGameTotals() {
  ui.gameTotals.forEach((node) => {
    node.textContent = gameCatalog.length;
  });
}

function bindEvents() {
  ensureGameTabsIndicator();
  syncGameTabsResponsiveMode();

  ui.tabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePanel(tab.dataset.panel, true));
  });

  ui.gameTabsToggle?.addEventListener("click", () => {
    toggleGameTabs();

    if (!state.menu.tabsCollapsed) {
      scrollActiveTabIntoView(state.activePanel, "smooth");
    }
  });

  ui.gameTabs?.addEventListener(
    "scroll",
    () => {
      updateGameTabsScrollState();
      updateGameTabsIndicator();
    },
    { passive: true },
  );

  ui.surpriseBtn.addEventListener("click", () => {
    const visiblePanels = getVisiblePanelIds();
    const candidatePanels = visiblePanels.filter((panelId) => panelId !== state.activePanel);
    const nextPanel = sample(candidatePanels.length ? candidatePanels : visiblePanels);
    activatePanel(nextPanel, true);
    launchPanel(nextPanel);
  });

  ui.homeScrollBtn.addEventListener("click", () => {
    (ui.gameFinder ?? document.querySelector("#game-tabs"))?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  ui.finderClear?.addEventListener("click", clearGameFinder);
  ui.gameSearchInput?.addEventListener("input", (event) => {
    setFinderQuery(event.target.value);
  });
  ui.gameSearchInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.isComposing) {
      return;
    }

    const firstGame = getFinderFilteredGames()[0];

    if (!firstGame) {
      return;
    }

    event.preventDefault();
    activatePanel(firstGame.id, true);
    launchPanel(firstGame.id);
  });

  ui.installAppBtn?.addEventListener("click", promptInstallApp);
  ui.checkinStartBtn?.addEventListener("click", startGuideRoute);
  ui.checkinResumeBtn?.addEventListener("click", continueFromResumeStrip);
  ui.resumeContinueBtn?.addEventListener("click", continueFromResumeStrip);
  ui.resumeRouteBtn?.addEventListener("click", continueFromResumeRoute);

  ui.guideStartRoute.addEventListener("click", startGuideRoute);
  ui.guideRefreshRoute.addEventListener("click", () => {
    state.guide.routeVariant += 1;
    renderGuideStrip();
  });

  ui.balloon.start.addEventListener("click", startBalloonGame);
  ui.balloon.reset.addEventListener("click", startBalloonGame);

  ui.memory.newGame.addEventListener("click", setupMemoryGame);

  ui.color.refresh.addEventListener("click", setupColorRound);
  ui.color.reset.addEventListener("click", () => {
    state.color.score = 0;
    state.color.streak = 0;
    setupColorRound();
    setColorStatus("重新开始啦，来找找看新的颜色。");
  });

  ui.shadow.refresh.addEventListener("click", setupShadowRound);
  ui.shadow.reset.addEventListener("click", () => {
    state.shadow.score = 0;
    state.shadow.streak = 0;
    setupShadowRound();
    setShadowStatus("重新开始啦，再来帮小影子找朋友。");
  });

  ui.different.refresh.addEventListener("click", setupDifferentRound);
  ui.different.reset.addEventListener("click", () => {
    state.different.score = 0;
    state.different.streak = 0;
    setupDifferentRound();
    setDifferentStatus("重新开始啦，再来找找谁不一样。");
  });

  ui.counting.refresh.addEventListener("click", setupCountingRound);
  ui.counting.reset.addEventListener("click", () => {
    state.counting.score = 0;
    state.counting.streak = 0;
    setupCountingRound();
    setCountingStatus("重新开始啦，慢慢数就能答对。");
  });

  ui.more.refresh.addEventListener("click", setupMoreRound);
  ui.more.reset.addEventListener("click", () => {
    state.more.score = 0;
    state.more.streak = 0;
    setupMoreRound();
    setMoreStatus("重新开始啦，再来比一比哪边更多。");
  });
  ui.more.left.addEventListener("click", () => answerMore("left"));
  ui.more.right.addEventListener("click", () => answerMore("right"));

  ui.shape.refresh.addEventListener("click", setupShapeRound);
  ui.shape.reset.addEventListener("click", () => {
    state.shape.score = 0;
    state.shape.streak = 0;
    setupShapeRound();
    setShapeStatus("重新开始啦，再找找新的形状。");
  });

  ui.sort.refresh.addEventListener("click", setupSortRound);
  ui.sort.reset.addEventListener("click", () => {
    state.sort.score = 0;
    state.sort.streak = 0;
    setupSortRound();
    setSortStatus("重新开始啦，再帮小东西分分类。");
  });

  ui.position.refresh.addEventListener("click", setupPositionRound);
  ui.position.reset.addEventListener("click", () => {
    state.position.score = 0;
    state.position.streak = 0;
    setupPositionRound();
    setPositionStatus("重新开始啦，再看看它在什么位置。");
  });

  ui.food.refresh.addEventListener("click", setupFoodRound);
  ui.food.reset.addEventListener("click", () => {
    state.food.score = 0;
    state.food.streak = 0;
    setupFoodRound();
    setFoodStatus("重新开始啦，再来给小动物找吃的。");
  });

  ui.family.refresh.addEventListener("click", setupFamilyRound);
  ui.family.reset.addEventListener("click", () => {
    state.family.score = 0;
    state.family.streak = 0;
    setupFamilyRound();
    setFamilyStatus("重新开始啦，再来帮宝宝找妈妈。");
  });

  ui.weather.refresh.addEventListener("click", setupWeatherRound);
  ui.weather.reset.addEventListener("click", () => {
    state.weather.score = 0;
    state.weather.streak = 0;
    setupWeatherRound();
    setWeatherStatus("重新开始啦，再来看看天气穿什么。");
  });

  ui.dayNight.refresh.addEventListener("click", setupDayNightRound);
  ui.dayNight.reset.addEventListener("click", () => {
    state.dayNight.score = 0;
    state.dayNight.streak = 0;
    setupDayNightRound();
    setDayNightStatus("重新开始啦，再来分分白天和夜晚。");
  });

  ui.hotCold.refresh.addEventListener("click", setupHotColdRound);
  ui.hotCold.reset.addEventListener("click", () => {
    state.hotCold.score = 0;
    state.hotCold.streak = 0;
    setupHotColdRound();
    setHotColdStatus("重新开始啦，再来认认热热和凉凉。");
  });

  ui.size.refresh.addEventListener("click", setupSizeRound);
  ui.size.reset.addEventListener("click", () => {
    state.size.score = 0;
    state.size.streak = 0;
    setupSizeRound();
    setSizeStatus("重新开始啦，再从小到大排一次。");
  });

  ui.home.refresh.addEventListener("click", setupHomeRound);
  ui.home.reset.addEventListener("click", () => {
    state.home.score = 0;
    state.home.streak = 0;
    setupHomeRound();
    setHomeStatus("重新开始啦，再送一个小东西回家。");
  });

  ui.whack.start.addEventListener("click", startWhackGame);
  ui.whack.reset.addEventListener("click", startWhackGame);

  ui.rhythm.start.addEventListener("click", startRhythmGame);
  ui.rhythm.reset.addEventListener("click", startRhythmGame);

  ui.puzzle.newGame.addEventListener("click", setupPuzzleGame);

  ui.words.refresh.addEventListener("click", setupWordsRound);
  ui.words.reset.addEventListener("click", () => {
    state.words.score = 0;
    state.words.streak = 0;
    setupWordsRound();
    setWordsStatus("重新开始啦，再认一认新的汉字。");
  });
  ui.words.pictureMode.addEventListener("click", () => setWordsMode("picture"));
  ui.words.pinyinMode.addEventListener("click", () => setWordsMode("pinyin"));
  ui.words.speak.addEventListener("click", speakWordsCard);

  ui.english.refresh.addEventListener("click", setupEnglishRound);
  ui.english.reset.addEventListener("click", () => {
    state.english.score = 0;
    state.english.streak = 0;
    setupEnglishRound();
    setEnglishStatus("重新开始啦，再来认一认新的英文单词。");
  });
  ui.english.speak.addEventListener("click", speakEnglishCard);

  ui.trace.done.addEventListener("click", completeTraceTemplate);
  ui.trace.clear.addEventListener("click", clearTraceCanvas);
  ui.trace.next.addEventListener("click", nextTraceTemplate);
  ui.trace.canvas.addEventListener("pointerdown", startTraceDrawing);
  ui.trace.canvas.addEventListener("pointermove", moveTraceDrawing);
  ui.trace.canvas.addEventListener("pointerup", endTraceDrawing);
  ui.trace.canvas.addEventListener("pointerleave", endTraceDrawing);
  ui.trace.canvas.addEventListener("pointercancel", endTraceDrawing);
  window.addEventListener("resize", resizeTraceCanvas);
  window.addEventListener("resize", syncGameTabsResponsiveMode);
  window.addEventListener("resize", updateGameTabsScrollState);
  window.addEventListener("resize", updateGameTabsIndicator);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.celebration.open) {
      closeCelebration();
    }
  });

  ui.parentToggle.addEventListener("click", toggleParentPanel);
  ui.parent.close.addEventListener("click", () => toggleParentPanel(false));
  ui.parent.addProfile.addEventListener("click", createProfile);
  ui.parent.renameProfile.addEventListener("click", renameCurrentProfile);
  ui.parent.deleteProfile.addEventListener("click", deleteCurrentProfile);
  ui.parent.moveProfileUp.addEventListener("click", () => moveCurrentProfile(-1));
  ui.parent.moveProfileDown.addEventListener("click", () => moveCurrentProfile(1));
  ui.parent.difficultyEasy.addEventListener("click", () => setDifficulty("easy"));
  ui.parent.difficultyNormal.addEventListener("click", () => setDifficulty("normal"));
  ui.parent.difficultyHard.addEventListener("click", () => setDifficulty("hard"));
  ui.parent.soundToggle.addEventListener("click", toggleSoundSetting);
  ui.parent.breakReminderOff.addEventListener("click", () => setBreakReminderMinutes(0));
  ui.parent.breakReminder10.addEventListener("click", () => setBreakReminderMinutes(10));
  ui.parent.breakReminder20.addEventListener("click", () => setBreakReminderMinutes(20));
  ui.parent.breakReminder30.addEventListener("click", () => setBreakReminderMinutes(30));
  ui.parent.exportData.addEventListener("click", exportStorageSnapshot);
  ui.parent.exportCurrentProfile.addEventListener("click", exportCurrentProfileSnapshot);
  ui.parent.importData.addEventListener("click", () => openImportPicker("auto"));
  ui.parent.importCurrentProfile.addEventListener("click", () => openImportPicker("replace-current"));
  ui.parent.importFile.addEventListener("change", importStorageSnapshot);
  ui.parent.resetData.addEventListener("click", resetProgressStorage);
  ui.celebrationAction.addEventListener("click", handleCelebrationAction);
  ui.celebrationClose.addEventListener("click", closeCelebration);
  ui.breakToastRest.addEventListener("click", () => resolveBreakReminder("rest"));
  ui.breakToastExtend.addEventListener("click", () => resolveBreakReminder("extend"));
  ui.celebrationModal.addEventListener("click", (event) => {
    if (event.target === ui.celebrationModal) {
      closeCelebration();
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visiblePanel = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visiblePanel) {
        return;
      }

      activatePanel(visiblePanel.target.id, false);
    },
    {
      threshold: 0.45,
    },
  );

  ui.panels.forEach((panel) => observer.observe(panel));
}

function isStandaloneDisplayMode() {
  return Boolean(window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone);
}

function getPanelIdFromHash(hash = window.location.hash) {
  const value = `${hash ?? ""}`.replace(/^#/, "");
  return knownPanelIds.has(value) ? value : "";
}

function restorePanelFromLocationHash(shouldScroll = false) {
  const visiblePanels = getVisiblePanelIds();
  const hashPanelId = getPanelIdFromHash();
  const lastPanelId = getStoredLastPanelId();
  const recentPanelId = getVisibleRecentPanelIds(state.storage, visiblePanels)[0];
  const panelId =
    (hashPanelId && visiblePanels.includes(hashPanelId) && hashPanelId) ||
    (lastPanelId && visiblePanels.includes(lastPanelId) && lastPanelId) ||
    recentPanelId ||
    "";

  if (!panelId || !visiblePanels.includes(panelId)) {
    return;
  }

  activatePanel(panelId, shouldScroll);
}

function updateAppExperienceUi() {
  if (!ui.appInstallTitle || !ui.appInstallNote || !ui.appConnectionPill || !ui.installAppBtn) {
    return;
  }

  const isInstalled = state.app.installed || isStandaloneDisplayMode();
  let title = "浏览器里也能直接玩";
  let note = "如果想装到主屏和离线玩，请用浏览器打开本地地址或 HTTPS 页面。";

  if (isInstalled) {
    title = "已经装到主屏啦";
    note = state.app.offlineReady
      ? "现在打开会更像独立小应用，已经打开过的内容断网也能继续玩。"
      : "现在已经像小应用一样打开了，浏览器准备好缓存后，离线也会更方便。";
  } else if (state.app.installAvailable) {
    title = "装到主屏更方便";
    note = state.app.offlineReady
      ? "点“装到主屏”后，下次像平板小应用一样打开，已经打开过的内容断网也能继续玩。"
      : "浏览器正在准备离线内容；准备好后，就能更方便地装到主屏。";
  } else if (state.app.supported) {
    title = state.app.offlineReady ? "已经准备好离线模式" : "正在准备离线模式";
    note = state.app.offlineReady
      ? "常用页面已经装进小背包里了；如果浏览器出现添加提示，也可以把它放到主屏。"
      : "浏览器正在准备缓存内容，准备好以后，已经打开过的内容断网也能继续玩。";
  }

  ui.appInstallTitle.textContent = title;
  ui.appInstallNote.textContent = note;
  ui.installAppBtn.hidden = !(state.app.installAvailable && !isInstalled);
  ui.installAppBtn.disabled = !(state.app.installAvailable && !isInstalled);
  ui.appConnectionPill.textContent = !state.app.isOnline
    ? state.app.offlineReady
      ? "离线模式"
      : "网络断开"
    : state.app.offlineReady
      ? "已缓存"
      : "联网中";
  ui.appConnectionPill.classList.toggle("is-ready", state.app.offlineReady);
  ui.appConnectionPill.classList.toggle("is-offline", !state.app.isOnline);
}

function registerAppExperience() {
  state.app.supported = window.isSecureContext && "serviceWorker" in navigator;
  state.app.installed = isStandaloneDisplayMode();
  state.app.isOnline = navigator.onLine;
  updateAppExperienceUi();

  window.addEventListener("hashchange", () => restorePanelFromLocationHash(true));
  window.addEventListener("online", () => {
    state.app.isOnline = true;
    updateAppExperienceUi();
  });
  window.addEventListener("offline", () => {
    state.app.isOnline = false;
    updateAppExperienceUi();
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.app.deferredPrompt = event;
    state.app.installAvailable = true;
    updateAppExperienceUi();
  });
  window.addEventListener("appinstalled", () => {
    state.app.installed = true;
    state.app.installAvailable = false;
    state.app.offlineReady = true;
    state.app.deferredPrompt = null;
    updateAppExperienceUi();
    setGlobalMessage("已经放到主屏啦，下次打开会更像小应用。");
  });

  const displayModeQuery = window.matchMedia?.("(display-mode: standalone)");
  const syncInstalledState = () => {
    state.app.installed = isStandaloneDisplayMode();
    updateAppExperienceUi();
  };

  if (displayModeQuery) {
    if (typeof displayModeQuery.addEventListener === "function") {
      displayModeQuery.addEventListener("change", syncInstalledState);
    } else if (typeof displayModeQuery.addListener === "function") {
      displayModeQuery.addListener(syncInstalledState);
    }
  }

  if (!state.app.supported) {
    return;
  }

  navigator.serviceWorker
    .register("./sw.js")
    .then(() => navigator.serviceWorker.ready)
    .then(() => {
      state.app.offlineReady = true;
      updateAppExperienceUi();
    })
    .catch(() => {
      state.app.offlineReady = false;
      updateAppExperienceUi();
    });
}

async function promptInstallApp() {
  if (!state.app.deferredPrompt) {
    updateAppExperienceUi();
    return;
  }

  const promptEvent = state.app.deferredPrompt;

  state.app.deferredPrompt = null;
  state.app.installAvailable = false;
  promptEvent.prompt();

  try {
    await promptEvent.userChoice;
  } catch (error) {
    // Some browsers may reject userChoice if the prompt is interrupted.
  }

  updateAppExperienceUi();
}

function getBreakReminderConfig(minutes = getBreakReminderMinutes()) {
  return breakReminderOptions.find((option) => option.minutes === minutes) ?? breakReminderOptions[0];
}

function getBreakReminderMinutes(storage = state.storage) {
  const minutes = Number(storage?.settings?.breakReminderMinutes);
  return breakReminderOptions.some((option) => option.minutes === minutes) ? minutes : 0;
}

function formatDurationLabel(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function hideBreakToast() {
  ui.breakToast.hidden = true;
}

function showBreakToast() {
  const minutes = getBreakReminderMinutes();

  if (!minutes) {
    hideBreakToast();
    return;
  }

  ui.breakToastTitle.textContent = `已经玩了 ${minutes} 分钟啦`;
  ui.breakToastCopy.textContent = "该揉揉眼睛、站起来伸伸小手小脚啦。想继续玩的话，也可以先再玩 5 分钟。";
  ui.breakToast.hidden = false;
}

function updateSessionCareUi() {
  const minutes = getBreakReminderMinutes();
  const config = getBreakReminderConfig(minutes);
  const remaining = state.session.nextBreakAt ? Math.max(0, state.session.nextBreakAt - Date.now()) : 0;
  const total = Math.max(1, state.session.currentIntervalMs || minutes * 60 * 1000);
  const progress = state.session.due ? 100 : minutes ? Math.min(100, ((total - remaining) / total) * 100) : 0;

  ui.sessionCareCard.classList.toggle("is-due", state.session.due);

  if (!minutes) {
    ui.sessionCareChip.textContent = "已关闭";
    ui.sessionCareTitle.textContent = "休息提醒已关闭";
    ui.sessionCareCopy.textContent = "去家长模式里打开提醒后，小朋友玩一阵子就会收到温柔提示。";
  } else if (state.session.due) {
    ui.sessionCareChip.textContent = "该休息啦";
    ui.sessionCareTitle.textContent = `已经玩了 ${minutes} 分钟`;
    ui.sessionCareCopy.textContent = "现在最适合揉揉眼睛、喝口水、活动一下小肩膀。";
  } else {
    ui.sessionCareChip.textContent = `还剩 ${formatDurationLabel(remaining)}`;
    ui.sessionCareTitle.textContent = `${config.label} 休息提醒进行中`;
    ui.sessionCareCopy.textContent = `时间到了会轻轻提醒休息一下，护眼也更舒服。`;
  }

  ui.sessionCareProgressFill.style.width = `${progress}%`;
}

function restartBreakReminderSession(intervalMinutes = getBreakReminderMinutes()) {
  const minutes = Number(intervalMinutes) || 0;

  state.session.due = false;
  hideBreakToast();

  if (!minutes) {
    state.session.nextBreakAt = null;
    state.session.currentIntervalMs = 0;
    updateSessionCareUi();
    return;
  }

  state.session.currentIntervalMs = minutes * 60 * 1000;
  state.session.nextBreakAt = Date.now() + state.session.currentIntervalMs;
  updateSessionCareUi();
}

function startBreakReminderTicker() {
  window.clearInterval(state.session.ticker);
  state.session.ticker = window.setInterval(() => {
    tickBreakReminder();
  }, 1000);
  tickBreakReminder();
}

function tickBreakReminder() {
  const minutes = getBreakReminderMinutes();

  if (!minutes || !state.session.nextBreakAt) {
    updateSessionCareUi();
    hideBreakToast();
    return;
  }

  if (!state.session.due && Date.now() >= state.session.nextBreakAt) {
    state.session.due = true;
    showBreakToast();
    setGlobalMessage(`已经玩了 ${minutes} 分钟啦，先休息一下眼睛和小手吧。`);
    playFeedbackTone("start");
  }

  updateSessionCareUi();
}

function resolveBreakReminder(action = "rest") {
  const minutes = getBreakReminderMinutes();

  if (!minutes) {
    hideBreakToast();
    state.session.due = false;
    updateSessionCareUi();
    return;
  }

  if (action === "extend") {
    state.session.due = false;
    state.session.currentIntervalMs = 5 * 60 * 1000;
    state.session.nextBreakAt = Date.now() + state.session.currentIntervalMs;
    hideBreakToast();
    updateSessionCareUi();
    setGlobalMessage("好呀，再玩 5 分钟，等会儿记得伸伸懒腰。");
    return;
  }

  restartBreakReminderSession(minutes);
  setGlobalMessage("先休息一下也很棒，等会儿回来还可以继续玩。");
}

function setBreakReminderMinutes(minutes) {
  if (!breakReminderOptions.some((option) => option.minutes === minutes)) {
    return;
  }

  if (getBreakReminderMinutes() === minutes) {
    setGlobalMessage(minutes ? `${minutes} 分钟休息提醒已经在运行啦。` : "休息提醒已经关闭啦。");
    return;
  }

  state.storage.settings.breakReminderMinutes = minutes;
  persistStorage();
  updateParentSettingsUi();
  restartBreakReminderSession(minutes);
  setGlobalMessage(minutes ? `已经打开 ${minutes} 分钟休息提醒啦。` : "休息提醒已经关闭啦。");
}

function openImportPicker(mode = "auto") {
  state.parent.importMode = mode;
  ui.parent.importFile.value = "";
  ui.parent.importFile.click();
}

function createDefaultVisiblePanels() {
  return Object.fromEntries(gameCatalog.map((game) => [game.id, true]));
}

function sanitizeProfileName(name) {
  const value = `${name ?? ""}`.trim().replace(/\s+/g, " ");
  return value.slice(0, 16);
}

function sanitizeFileNamePart(name, fallback = "成长档案") {
  const value = `${name ?? ""}`
    .trim()
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ");

  return value.slice(0, 20) || fallback;
}

function createProfileId() {
  return `profile-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function getNextProfileName(profileBook = state.profileBook ?? { profiles: [] }) {
  let index = 1;

  while (profileBook.profiles.some((profile) => profile.name === `小朋友 ${index}`)) {
    index += 1;
  }

  return `小朋友 ${index}`;
}

function getUniqueProfileName(baseName, profileBook = state.profileBook, ignoredProfileIds = []) {
  const safeBaseName = sanitizeProfileName(baseName) || getNextProfileName(profileBook);
  const ignoredIds = new Set(
    Array.isArray(ignoredProfileIds)
      ? ignoredProfileIds.filter((profileId) => typeof profileId === "string" && profileId)
      : [],
  );
  const hasConflict = (candidate) =>
    profileBook.profiles.some((profile) => !ignoredIds.has(profile.id) && profile.name === candidate);

  if (!hasConflict(safeBaseName)) {
    return safeBaseName;
  }

  let index = 2;

  while (index < 1000) {
    const suffix = ` ${index}`;
    const candidate = `${safeBaseName.slice(0, Math.max(1, 16 - suffix.length))}${suffix}`;

    if (!hasConflict(candidate)) {
      return candidate;
    }

    index += 1;
  }

  return getNextProfileName(profileBook);
}

function getDefaultProfileAvatarId(index = 0) {
  return profileAvatarCatalog[index % profileAvatarCatalog.length]?.id ?? profileAvatarCatalog[0].id;
}

function getDefaultProfileThemeId(index = 0) {
  return profileThemeCatalog[index % profileThemeCatalog.length]?.id ?? profileThemeCatalog[0].id;
}

function getDefaultProfileLook(index = 0) {
  return {
    avatarId: getDefaultProfileAvatarId(index),
    themeId: getDefaultProfileThemeId(index),
  };
}

function getNextProfileLook(profileBook = state.profileBook ?? { profiles: [] }) {
  return getDefaultProfileLook(profileBook.profiles.length);
}

function normalizeProfileAvatarId(avatarId, index = 0) {
  return profileAvatarCatalog.some((avatar) => avatar.id === avatarId)
    ? avatarId
    : getDefaultProfileAvatarId(index);
}

function normalizeProfileThemeId(themeId, index = 0) {
  return profileThemeCatalog.some((theme) => theme.id === themeId)
    ? themeId
    : getDefaultProfileThemeId(index);
}

function getProfileAvatar(profile = getActiveProfileRecord()) {
  return (
    profileAvatarCatalog.find((avatar) => avatar.id === profile?.avatarId) ??
    profileAvatarCatalog.find((avatar) => avatar.id === getDefaultProfileAvatarId()) ??
    profileAvatarCatalog[0]
  );
}

function getProfileTheme(profile = getActiveProfileRecord()) {
  return (
    profileThemeCatalog.find((theme) => theme.id === profile?.themeId) ??
    profileThemeCatalog.find((theme) => theme.id === getDefaultProfileThemeId()) ??
    profileThemeCatalog[0]
  );
}

function applyThemeVariables(styleTarget, theme) {
  if (!styleTarget || !theme) {
    return;
  }

  styleTarget.setProperty("--profile-primary", theme.primary);
  styleTarget.setProperty("--profile-secondary", theme.secondary);
  styleTarget.setProperty("--profile-sky-top", theme.skyTop);
  styleTarget.setProperty("--profile-sky-bottom", theme.skyBottom);
  styleTarget.setProperty("--profile-shadow", theme.shadow);
}

function applyActiveProfileTheme() {
  const theme = getProfileTheme();

  applyThemeVariables(document.documentElement.style, theme);

  if (ui.themeColorMeta && theme?.primary) {
    ui.themeColorMeta.setAttribute("content", theme.primary);
  }
}

function cloneStorageData(storage = createInitialStorageSnapshot()) {
  return normalizeStorage(storage);
}

function createProfileRecord(
  name,
  sourceData = createInitialStorageSnapshot(),
  profileId = createProfileId(),
  visual = getDefaultProfileLook(),
) {
  return {
    id: profileId,
    name: sanitizeProfileName(name) || getNextProfileName({ profiles: [] }),
    avatarId: normalizeProfileAvatarId(visual.avatarId),
    themeId: normalizeProfileThemeId(visual.themeId),
    updatedAt: new Date().toISOString(),
    data: cloneStorageData(sourceData),
  };
}

function getActiveProfileRecord(profileBook = state.profileBook) {
  return profileBook?.profiles.find((profile) => profile.id === profileBook.activeProfileId) ?? profileBook?.profiles[0];
}

function normalizeProfileBook(sourceValue) {
  const parsedSource = sourceValue && typeof sourceValue === "object" ? sourceValue : {};
  const source =
    parsedSource.data && typeof parsedSource.data === "object" ? parsedSource.data : parsedSource;

  if (Array.isArray(source.profiles) && source.profiles.length) {
    const profiles = source.profiles.map((profile, index) => {
      const fallbackProfile = createProfileRecord(
        `小朋友 ${index + 1}`,
        createInitialStorageSnapshot(),
        createProfileId(),
        getDefaultProfileLook(index),
      );
      return {
        id: typeof profile.id === "string" && profile.id ? profile.id : fallbackProfile.id,
        name: sanitizeProfileName(profile.name) || `小朋友 ${index + 1}`,
        avatarId: normalizeProfileAvatarId(profile.avatarId, index),
        themeId: normalizeProfileThemeId(profile.themeId, index),
        updatedAt:
          typeof profile.updatedAt === "string" && profile.updatedAt ? profile.updatedAt : fallbackProfile.updatedAt,
        data: cloneStorageData(profile.data),
      };
    });
    const activeProfileId = profiles.some((profile) => profile.id === source.activeProfileId)
      ? source.activeProfileId
      : profiles[0].id;

    return {
      activeProfileId,
      profiles,
    };
  }

  const fallbackProfile = createProfileRecord(
    getNextProfileName({ profiles: [] }),
    source,
    createProfileId(),
    getDefaultProfileLook(0),
  );

  return {
    activeProfileId: fallbackProfile.id,
    profiles: [fallbackProfile],
  };
}

function loadProfileBook() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? normalizeProfileBook(JSON.parse(raw)) : normalizeProfileBook({});
  } catch (error) {
    return normalizeProfileBook({});
  }
}

function showParentProfileStatus(message, kind = "neutral") {
  ui.parent.profileStatus.textContent = message;
  ui.parent.profileStatus.classList.toggle("is-success", kind === "success");
  ui.parent.profileStatus.classList.toggle("is-error", kind === "error");
}

function applyStoredSettings() {
  if (!getVisiblePanelIds().length) {
    state.storage.settings.visiblePanels[gameCatalog[0].id] = true;
    invalidateVisiblePanelCache();
    persistStorage();
  }

  updateParentSettingsUi();
  restartBreakReminderSession();
  applyPanelVisibility(false);
  resetDifficultySensitiveDisplays();
}

function hasGameProgress(panelId, storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.progressByPanelId.get(panelId) ?? false;
  }

  if (panelId === "panel-balloon") {
    return targetStorage.balloonBest > 0;
  }

  if (panelId === "panel-memory") {
    return targetStorage.memoryBest !== null;
  }

  if (panelId === "panel-color") {
    return targetStorage.colorBest > 0;
  }

  if (panelId === "panel-shadow") {
    return targetStorage.shadowBest > 0;
  }

  if (panelId === "panel-different") {
    return targetStorage.differentBest > 0;
  }

  if (panelId === "panel-counting") {
    return targetStorage.countingBest > 0;
  }

  if (panelId === "panel-more") {
    return targetStorage.moreBest > 0;
  }

  if (panelId === "panel-shape") {
    return targetStorage.shapeBest > 0;
  }

  if (panelId === "panel-sort") {
    return targetStorage.sortBest > 0;
  }

  if (panelId === "panel-position") {
    return targetStorage.positionBest > 0;
  }

  if (panelId === "panel-food") {
    return targetStorage.foodBest > 0;
  }

  if (panelId === "panel-family") {
    return targetStorage.familyBest > 0;
  }

  if (panelId === "panel-weather") {
    return targetStorage.weatherBest > 0;
  }

  if (panelId === "panel-daynight") {
    return targetStorage.dayNightBest > 0;
  }

  if (panelId === "panel-hotcold") {
    return targetStorage.hotColdBest > 0;
  }

  if (panelId === "panel-size") {
    return targetStorage.sizeBest > 0;
  }

  if (panelId === "panel-home") {
    return targetStorage.homeBest > 0;
  }

  if (panelId === "panel-whack") {
    return targetStorage.whackBest > 0;
  }

  if (panelId === "panel-rhythm") {
    return targetStorage.rhythmBest > 0;
  }

  if (panelId === "panel-puzzle") {
    return targetStorage.puzzleBest !== null;
  }

  if (panelId === "panel-words") {
    return targetStorage.wordsBest > 0;
  }

  if (panelId === "panel-english") {
    return targetStorage.englishBest > 0;
  }

  if (panelId === "panel-trace") {
    return targetStorage.traceBest > 0;
  }

  return false;
}

function getExploredGameCount(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.exploredCount;
  }

  return gameCatalog.filter((game) => hasGameProgress(game.id, targetStorage)).length;
}

function getUnlockedBadges(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedBadges;
  }

  return badgeCatalog.filter((badge) => badge.unlocked(targetStorage));
}

function getUnlockedBadgeCount(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedBadgeCount;
  }

  return getUnlockedBadges(targetStorage).length;
}

function getUnlockedBuddies(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedBuddies;
  }

  return buddyCatalog.filter((buddy) => buddy.unlocked(targetStorage));
}

function getUnlockedBuddyCount(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedBuddyCount;
  }

  return getUnlockedBuddies(targetStorage).length;
}

function getBuddyById(buddyId) {
  return buddyCatalog.find((buddy) => buddy.id === buddyId) ?? buddyCatalog[0];
}

function getCurrentBuddy(storage) {
  const targetStorage = resolveStorageReference(storage);
  const selectedBuddy = buddyCatalog.find((buddy) => buddy.id === targetStorage.selectedBuddyId);

  if (selectedBuddy && selectedBuddy.unlocked(targetStorage)) {
    return selectedBuddy;
  }

  return getUnlockedBuddies(targetStorage)[0] ?? buddyCatalog[0];
}

function ensureCurrentBuddy() {
  const currentBuddy = getCurrentBuddy();

  if (state.storage.selectedBuddyId !== currentBuddy.id) {
    state.storage.selectedBuddyId = currentBuddy.id;
    persistStorage();
  }

  return currentBuddy;
}

function getUnlockedStickers(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedStickers;
  }

  return stickerCatalog.filter((sticker) => sticker.unlocked(targetStorage));
}

function getUnlockedStickerCount(storage) {
  const targetStorage = resolveStorageReference(storage);

  if (isActiveStorageReference(targetStorage)) {
    refreshProgressDerivedCache();
    return progressDerivedCache.unlockedStickerCount;
  }

  return getUnlockedStickers(targetStorage).length;
}

function getCurrentSticker(storage) {
  const targetStorage = resolveStorageReference(storage);
  const selectedSticker = stickerCatalog.find((sticker) => sticker.id === targetStorage.selectedStickerId);

  if (selectedSticker && selectedSticker.unlocked(targetStorage)) {
    return selectedSticker;
  }

  return getUnlockedStickers(targetStorage)[0] ?? stickerCatalog[0];
}

function ensureCurrentSticker() {
  const currentSticker = getCurrentSticker();

  if (state.storage.selectedStickerId !== currentSticker.id) {
    state.storage.selectedStickerId = currentSticker.id;
    persistStorage();
  }

  return currentSticker;
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateKeyFromDate(date = new Date()) {
  const safeDate = new Date(date);
  const year = safeDate.getFullYear();
  const month = String(safeDate.getMonth() + 1).padStart(2, "0");
  const day = String(safeDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getRelativeDateKey(offset = 0, referenceDate = new Date()) {
  const date = new Date(referenceDate);

  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return getDateKeyFromDate(date);
}

function normalizePlayDays(days) {
  return compactUnique(
    Array.isArray(days)
      ? days.filter((day) => typeof day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(day))
      : [],
  )
    .sort()
    .slice(-120);
}

function getPlayDays(storage) {
  return normalizePlayDays(resolveStorageReference(storage)?.playDays);
}

function hasPlayedOnDate(dateKey, storage) {
  return getPlayDays(storage).includes(dateKey);
}

function getPlayStreak(storage) {
  const playDaySet = new Set(getPlayDays(storage));
  let streak = 0;

  while (playDaySet.has(getRelativeDateKey(-streak))) {
    streak += 1;
  }

  return streak;
}

function getRecentCheckinDays(totalDays = 7, storage) {
  return Array.from({ length: totalDays }, (_, index) => {
    const offset = index - (totalDays - 1);
    const dateKey = getRelativeDateKey(offset);
    const date = new Date(`${dateKey}T12:00:00`);
    const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][date.getDay()];
    const monthDay = `${date.getMonth() + 1}.${date.getDate()}`;

    return {
      dateKey,
      weekday,
      monthDay,
      isToday: offset === 0,
      played: hasPlayedOnDate(dateKey, storage),
    };
  });
}

function registerTodayVisit() {
  const todayKey = getTodayKey();
  const currentDays = getPlayDays();

  if (currentDays.includes(todayKey)) {
    return false;
  }

  state.storage.playDays = normalizePlayDays([...currentDays, todayKey]);
  persistStorage();
  return true;
}

function celebrateCheckinStreak(didCheckInToday) {
  if (!didCheckInToday) {
    return;
  }

  const streak = getPlayStreak();

  if (!checkinStreakMilestones.includes(streak)) {
    return;
  }

  enqueueCelebration({
    id: `checkin-streak-${getTodayKey()}-${streak}`,
    icon: streak >= 7 ? "🔥" : "📅",
    title: `连续来玩 ${streak} 天啦`,
    body:
      streak >= 7
        ? "已经连续好多天都来彩虹游乐园打卡啦，真的很会坚持。"
        : "已经开始养成自己的彩虹游乐园节奏啦，继续来玩会更热闹。",
    tag: "连续打卡",
    accent: streak >= 7 ? "#ff8c61" : "#56a9ff",
    action: {
      type: "element",
      selector: "#checkin-grid",
      label: "看看日历",
    },
  });
}

function getTodaySeed() {
  return [...getTodayKey()].reduce((total, char) => total + char.charCodeAt(0), 0);
}

function nextMilestone(current, milestones, fallbackStep = 1) {
  const safeCurrent = Math.max(0, Number(current) || 0);
  const next = milestones.find((milestone) => milestone > safeCurrent);

  if (next) {
    return next;
  }

  const safeStep = Math.max(1, fallbackStep);
  return Math.ceil((safeCurrent + 1) / safeStep) * safeStep;
}

function getGameLabel(panelId) {
  return gameCatalogById.get(panelId)?.label ?? "这个小游戏";
}

function getGameMeta(panelId) {
  return gameCatalogById.get(panelId) ?? gameCatalog[0];
}

function isKnownPanelId(panelId) {
  return knownPanelIds.has(panelId);
}

function compactUnique(list) {
  return [...new Set(list.filter(Boolean))];
}

function getStoredLastPanelId(storage) {
  const targetStorage = resolveStorageReference(storage);
  return isKnownPanelId(targetStorage?.settings?.lastPanelId) ? targetStorage.settings.lastPanelId : "";
}

function getStoredRecentPanelIds(storage) {
  const targetStorage = resolveStorageReference(storage);
  return compactUnique(
    Array.isArray(targetStorage?.settings?.recentPanels)
      ? targetStorage.settings.recentPanels.filter((panelId) => isKnownPanelId(panelId))
      : [],
  ).slice(0, 4);
}

function getVisibleRecentPanelIds(storage, visiblePanels = getVisiblePanelIds()) {
  return getStoredRecentPanelIds(storage).filter((panelId) => visiblePanels.includes(panelId));
}

function rotateList(list, offset = 0) {
  if (!list.length) {
    return [];
  }

  const safeOffset = ((offset % list.length) + list.length) % list.length;
  return [...list.slice(safeOffset), ...list.slice(0, safeOffset)];
}

function pickGuidePanel(preferences, visiblePanels, usedPanels, options = {}) {
  const { preferFresh = false } = options;
  const availablePanels = visiblePanels.filter((panelId) => !usedPanels.has(panelId));
  const freshPanels = availablePanels.filter((panelId) => !hasGameProgress(panelId));
  const orderedPreferences = rotateList(compactUnique(preferences), state.guide.routeVariant);
  const findMatchingPanel = (panels) => orderedPreferences.find((panelId) => panels.includes(panelId));

  if (preferFresh) {
    return findMatchingPanel(freshPanels) ?? freshPanels[0] ?? findMatchingPanel(availablePanels) ?? availablePanels[0] ?? null;
  }

  return findMatchingPanel(availablePanels) ?? availablePanels[0] ?? null;
}

function getGuideStageMeta(exploredCount, badgeCount, profileName, challengePanelId) {
  if (exploredCount === 0) {
    return {
      title: "第一次来，先玩这 3 站",
      copy: "会根据当前档案的成长进度，推荐一条更适合现在的三站小游戏路线。",
      stageLabel: "第一次来玩",
      summaryTitle: `${profileName} 的彩虹热身路线`,
      summaryCopy: "先从轻松、反馈快的小游戏开始，再去认识新的小站点，最后用一站开心收尾。",
      chips: ["慢慢热身", "认识新玩法", "轻松收尾"],
      steps: [
        {
          tag: "热身站",
          reason: "先活动一下手和眼睛，开始会更轻松。",
          preferences: ["panel-counting", "panel-size", "panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-color", "panel-shadow", "panel-different", "panel-trace", "panel-words", "panel-memory", "panel-balloon"],
          preferFresh: true,
        },
        {
          tag: "认识新站",
          reason: "第二站去看看一个新的玩法，游乐园会更有趣。",
          preferences: compactUnique([
            challengePanelId,
            "panel-memory",
            "panel-words",
            "panel-more",
            "panel-shape",
            "panel-sort",
            "panel-position",
            "panel-food",
            "panel-family",
            "panel-weather",
            "panel-daynight",
            "panel-hotcold",
            "panel-size",
            "panel-home",
            "panel-balloon",
            "panel-shadow",
            "panel-different",
            "panel-puzzle",
            "panel-english",
            "panel-whack",
            "panel-rhythm",
          ]),
          preferFresh: true,
        },
        {
          tag: "开心收尾",
          reason: "最后来一站反馈快的小玩法，玩完会更有成就感。",
          preferences: ["panel-balloon", "panel-whack", "panel-color", "panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-shadow", "panel-different", "panel-size", "panel-trace", "panel-counting"],
        },
      ],
    };
  }

  if (exploredCount < 4) {
    return {
      title: "今天跟着路线继续逛",
      copy: "这条路线会根据已经玩过的内容，帮孩子补新足迹、赚星星、再轻松收尾。",
      stageLabel: "继续认识游乐园",
      summaryTitle: `${profileName} 今天的三步路线`,
      summaryCopy: `${profileName} 已经体验过 ${exploredCount} 个游戏啦，今天可以一边补新足迹，一边继续收集勇气星星。`,
      chips: [`已探索 ${exploredCount} 站`, "补新足迹", "继续赚星星"],
      steps: [
        {
          tag: "优先推荐",
          reason: "先从今天最值得继续的一站开始。",
          preferences: compactUnique([
            challengePanelId,
            "panel-color",
            "panel-more",
            "panel-shape",
            "panel-sort",
            "panel-position",
            "panel-food",
            "panel-family",
            "panel-weather",
            "panel-daynight",
            "panel-hotcold",
            "panel-size",
            "panel-home",
            "panel-shadow",
            "panel-different",
            "panel-memory",
            "panel-balloon",
            "panel-counting",
            "panel-words",
            "panel-trace",
          ]),
        },
        {
          tag: "新足迹",
          reason: "这一站优先挑还没体验过的内容，地图会更热闹。",
          preferences: ["panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-size", "panel-shadow", "panel-different", "panel-puzzle", "panel-english", "panel-rhythm", "panel-whack", "panel-trace", "panel-words"],
          preferFresh: true,
        },
        {
          tag: "放松站",
          reason: "最后一站安排得更轻松一点，玩完刚刚好。",
          preferences: ["panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-size", "panel-shadow", "panel-different", "panel-trace", "panel-words", "panel-puzzle", "panel-english", "panel-color", "panel-counting"],
        },
      ],
    };
  }

  return {
    title: "今天来一条进阶路线",
    copy: "会把挑战、探索和轻松收尾都安排进去，让熟悉游乐园的孩子也能有明确的游玩顺序。",
    stageLabel: "进阶冒险日",
    summaryTitle: `${profileName} 的进阶冒险路线`,
    summaryCopy: `${profileName} 已经点亮了 ${badgeCount} 枚徽章，这条路线会先冲挑战，再去补一站新内容，最后轻松收尾。`,
    chips: [`已点亮 ${badgeCount} 枚徽章`, "冲今天挑战", "挑战后放松"],
    steps: [
      {
        tag: "挑战站",
        reason: "第一站先把今天最有劲头的一关安排上。",
        preferences: compactUnique([
          challengePanelId,
          "panel-rhythm",
          "panel-whack",
          "panel-puzzle",
          "panel-english",
          "panel-more",
          "panel-shape",
          "panel-sort",
          "panel-position",
          "panel-food",
          "panel-family",
          "panel-weather",
          "panel-daynight",
          "panel-hotcold",
          "panel-size",
          "panel-home",
          "panel-memory",
          "panel-balloon",
          "panel-shadow",
          "panel-different",
        ]),
      },
      {
        tag: "探索站",
        reason: "再补一站新的玩法，让地图足迹继续增加。",
        preferences: ["panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-size", "panel-shadow", "panel-different", "panel-english", "panel-puzzle", "panel-rhythm", "panel-whack", "panel-trace", "panel-words"],
        preferFresh: true,
      },
      {
        tag: "轻松站",
        reason: "最后一站留给更舒缓的玩法，结束时会更从容。",
        preferences: ["panel-more", "panel-shape", "panel-sort", "panel-position", "panel-food", "panel-family", "panel-weather", "panel-daynight", "panel-hotcold", "panel-home", "panel-size", "panel-shadow", "panel-different", "panel-trace", "panel-words", "panel-puzzle", "panel-color", "panel-counting", "panel-english"],
      },
    ],
  };
}

function buildGuideRoute() {
  const activeProfile = getActiveProfileRecord();
  const visiblePanels = getVisiblePanelIds();
  const exploredCount = getExploredGameCount();
  const badgeCount = getUnlockedBadgeCount();
  const incompleteChallenge = state.challenges.current.find((challenge) => !challenge.done);
  const challengePanelId = incompleteChallenge ? getChallengeActionPanelId(incompleteChallenge) : null;
  const stage = getGuideStageMeta(
    exploredCount,
    badgeCount,
    activeProfile?.name ?? "小朋友 1",
    challengePanelId,
  );
  const usedPanels = new Set();
  const steps = stage.steps
    .map((plan, index) => {
      const panelId = pickGuidePanel(plan.preferences, visiblePanels, usedPanels, {
        preferFresh: plan.preferFresh,
      });

      if (!panelId) {
        return null;
      }

      usedPanels.add(panelId);

      const game = getGameMeta(panelId);
      const isFresh = !hasGameProgress(panelId);
      const isChallenge = panelId === challengePanelId;

      return {
        panelId,
        number: index + 1,
        numberLabel: `第 ${index + 1} 站`,
        stateLabel: isChallenge ? "今日挑战" : isFresh ? "新站点" : plan.tag,
        reason: isChallenge
          ? "这一站正好能继续推进今天还没完成的挑战。"
          : isFresh
            ? "这站还没有留下足迹，正适合去看看。"
            : plan.reason,
        ctaLabel: index === 0 ? "从这站开始" : "去这一站",
        emoji: game.emoji,
        label: game.label,
        category: game.category,
        guideHint: game.guideHint,
        isFresh,
        isChallenge,
        isActive: panelId === state.activePanel,
      };
    })
    .filter(Boolean);

  if (!steps.length && visiblePanels.length) {
    const fallbackGame = getGameMeta(visiblePanels[0]);

    steps.push({
      panelId: fallbackGame.id,
      number: 1,
      numberLabel: "现在去玩",
      stateLabel: "推荐",
      reason: "先从这个小游戏开始，也能很快进入状态。",
      ctaLabel: "去玩这一站",
      emoji: fallbackGame.emoji,
      label: fallbackGame.label,
      category: fallbackGame.category,
      guideHint: fallbackGame.guideHint,
      isFresh: !hasGameProgress(fallbackGame.id),
      isChallenge: false,
      isActive: fallbackGame.id === state.activePanel,
    });
  }

  return {
    ...stage,
    exploredCount,
    steps,
  };
}

function renderGuideStrip() {
  const route = buildGuideRoute();
  const routeCount = route.steps.length;
  const chipFragment = document.createDocumentFragment();
  const stepFragment = document.createDocumentFragment();
  const guideTitle =
    routeCount >= 3 ? route.title : routeCount === 2 ? "先玩这 2 站" : routeCount === 1 ? "先从这一站开始" : "现在去挑一站玩";

  state.guide.current = route.steps;
  ui.guideTitle.textContent = guideTitle;
  ui.guideCopy.textContent = route.copy;
  ui.guideExploredCount.textContent = route.exploredCount;
  ui.guideStepCount.textContent = routeCount;
  ui.guideStage.textContent = route.stageLabel;
  ui.guideSummaryTitle.textContent = route.summaryTitle;
  ui.guideSummaryCopy.textContent = route.summaryCopy;
  ui.guideChipRow.innerHTML = "";
  ui.guideGrid.innerHTML = "";

  route.chips.forEach((chipText) => {
    const chip = document.createElement("span");
    chip.className = "guide-chip";
    chip.textContent = chipText;
    chipFragment.appendChild(chip);
  });

  route.steps.forEach((step) => {
    const card = document.createElement("article");
    const top = document.createElement("div");
    const number = document.createElement("span");
    const stateTag = document.createElement("span");
    const body = document.createElement("div");
    const icon = document.createElement("span");
    const copy = document.createElement("div");
    const title = document.createElement("h3");
    const category = document.createElement("p");
    const hint = document.createElement("p");
    const reason = document.createElement("p");
    const action = document.createElement("button");

    card.className = "guide-step";
    card.classList.toggle("is-active", step.isActive);
    card.classList.toggle("is-fresh", step.isFresh);
    card.classList.toggle("is-challenge", step.isChallenge);

    top.className = "guide-step-top";
    number.className = "guide-step-number";
    number.textContent = step.numberLabel;
    stateTag.className = "guide-step-state";
    stateTag.textContent = step.isActive ? "正在这一站" : step.stateLabel;
    top.append(number, stateTag);

    body.className = "guide-step-body";
    icon.className = "guide-step-icon";
    icon.textContent = step.emoji;

    copy.className = "guide-step-copy";
    title.textContent = step.label;
    category.textContent = step.category;
    copy.append(title, category);
    body.append(icon, copy);

    hint.className = "guide-step-hint";
    hint.textContent = step.guideHint;

    reason.className = "guide-step-reason";
    reason.textContent = step.reason;

    action.type = "button";
    action.className = "guide-step-action";
    action.textContent = step.isActive ? "继续这一站" : step.ctaLabel;
    action.addEventListener("click", () => {
      activatePanel(step.panelId, true);
      launchPanel(step.panelId);
    });

    card.append(top, body, hint, reason, action);
    stepFragment.appendChild(card);
  });

  ui.guideChipRow.appendChild(chipFragment);
  ui.guideGrid.appendChild(stepFragment);

  ui.guideStartRoute.disabled = !routeCount;
  ui.guideRefreshRoute.disabled = getVisiblePanelIds().length < 2;
  ui.guideStartRoute.textContent = routeCount > 1 ? "从第一站开始" : "去玩这一站";
}

function getCurrentFeaturedTheme(referenceDate = new Date()) {
  const hour = referenceDate.getHours();
  const isWeekend = [0, 6].includes(referenceDate.getDay());

  if (hour >= 5 && hour < 11) {
    if (isWeekend) {
      return {
        label: "周末上午推荐",
        title: "周末早上先轻松热身",
        copy: "周末早上适合先从轻松好上手的小站开始，一边玩一边慢慢进入状态。",
        starterIds: ["panel-balloon", "panel-counting", "panel-memory", "panel-color", "panel-shape", "panel-whack"],
        categories: ["反应小游戏", "启蒙小游戏", "记忆小游戏", "认知小游戏"],
      };
    }

    return {
      label: "平日上午推荐",
      title: "上午更适合这些",
      copy: "早上先玩启蒙、认知和识字类，会更容易进入状态。",
      starterIds: ["panel-counting", "panel-color", "panel-words", "panel-english", "panel-shape", "panel-memory"],
      categories: ["启蒙小游戏", "认知小游戏", "识字小游戏", "英语小游戏"],
    };
  }

  if (hour >= 11 && hour < 17) {
    if (isWeekend) {
      return {
        label: "周末下午推荐",
        title: "周末下午适合放开玩",
        copy: "周末下午可以更热闹一点，来几站反应、观察和节奏类小游戏会更带劲。",
        starterIds: ["panel-whack", "panel-balloon", "panel-different", "panel-rhythm", "panel-puzzle", "panel-sort"],
        categories: ["反应小游戏", "观察小游戏", "节奏小游戏", "思维小游戏"],
      };
    }

    return {
      label: "平日下午推荐",
      title: "下午适合动动脑和动动手",
      copy: "下午精神更足，来几站观察、反应和拼搭类小游戏会更带劲。",
      starterIds: ["panel-balloon", "panel-different", "panel-whack", "panel-puzzle", "panel-memory", "panel-sort"],
      categories: ["反应小游戏", "观察小游戏", "思维小游戏"],
    };
  }

  if (hour >= 17 && hour < 21) {
    if (isWeekend) {
      return {
        label: "周末傍晚推荐",
        title: "周末傍晚适合慢慢玩",
        copy: "周末傍晚可以玩得柔和一点，配一配、认一认、拼一拼，会更放松。",
        starterIds: ["panel-memory", "panel-family", "panel-home", "panel-puzzle", "panel-words", "panel-daynight"],
        categories: ["记忆小游戏", "认知小游戏", "思维小游戏", "识字小游戏"],
      };
    }

    return {
      label: "平日傍晚推荐",
      title: "傍晚先玩轻松一点的",
      copy: "傍晚适合一边放松一边继续玩，认一认、配一配、慢慢来就很好。",
      starterIds: ["panel-memory", "panel-family", "panel-home", "panel-words", "panel-daynight", "panel-puzzle"],
      categories: ["记忆小游戏", "认知小游戏", "识字小游戏", "思维小游戏"],
    };
  }

  if (isWeekend) {
    return {
      label: "周末晚上推荐",
      title: "周末晚上适合安静收尾",
      copy: "周末晚上可以选安静一点的小站，描一描、拼一拼、看看卡片，轻轻松松结束一天。",
      starterIds: ["panel-trace", "panel-puzzle", "panel-words", "panel-memory", "panel-daynight", "panel-english"],
      categories: ["描线小游戏", "思维小游戏", "识字小游戏", "记忆小游戏", "英语小游戏"],
    };
  }

  return {
    label: "平日晚上推荐",
    title: "晚上适合安静一点的小站",
    copy: "晚上就玩节奏慢一点的，描一描、拼一拼、看看小卡片，会更轻松。",
    starterIds: ["panel-trace", "panel-puzzle", "panel-words", "panel-memory", "panel-daynight", "panel-english"],
    categories: ["描线小游戏", "思维小游戏", "识字小游戏", "记忆小游戏", "英语小游戏"],
  };
}

function getFeaturedGames(theme = getCurrentFeaturedTheme()) {
  const visiblePanelIds = getVisiblePanelIds();
  const visiblePanelSet = new Set(visiblePanelIds);
  const pinnedGames = [state.activePanel]
    .filter((panelId) => visiblePanelSet.has(panelId))
    .map((panelId) => getGameMeta(panelId));
  const recentGames = getVisibleRecentPanelIds(state.storage, visiblePanelIds)
    .map((panelId) => getGameMeta(panelId))
    .filter((game) => visiblePanelSet.has(game.id));
  const recentCategoryCountMap = recentGames.reduce((map, game) => {
    map.set(game.category, (map.get(game.category) ?? 0) + 1);
    return map;
  }, new Map());
  const themedStarterGames = theme.starterIds
    .filter((panelId) => visiblePanelSet.has(panelId))
    .map((panelId) => getGameMeta(panelId));
  const themedCategoryGames = gameCatalog.filter(
    (game) => visiblePanelSet.has(game.id) && theme.categories.includes(game.category),
  );
  const fallbackIds = ["panel-balloon", "panel-memory", "panel-color", "panel-counting", "panel-whack", "panel-puzzle"];
  const fallbackGames = fallbackIds
    .filter((panelId) => visiblePanelSet.has(panelId))
    .map((panelId) => getGameMeta(panelId));
  const visibleGames = visiblePanelIds.map((panelId) => getGameMeta(panelId));
  const candidateIds = compactUnique([...themedStarterGames, ...themedCategoryGames, ...fallbackGames, ...visibleGames].map((game) => game.id));
  const candidateOrderMap = new Map(candidateIds.map((panelId, index) => [panelId, index]));
  const balancedCandidateIds = [...candidateIds].sort((leftId, rightId) => {
    const leftGame = getGameMeta(leftId);
    const rightGame = getGameMeta(rightId);
    const leftCategoryCount = recentCategoryCountMap.get(leftGame.category) ?? 0;
    const rightCategoryCount = recentCategoryCountMap.get(rightGame.category) ?? 0;

    if (leftCategoryCount !== rightCategoryCount) {
      return leftCategoryCount - rightCategoryCount;
    }

    const leftIsThemeCategory = theme.categories.includes(leftGame.category) ? 0 : 1;
    const rightIsThemeCategory = theme.categories.includes(rightGame.category) ? 0 : 1;

    if (leftIsThemeCategory !== rightIsThemeCategory) {
      return leftIsThemeCategory - rightIsThemeCategory;
    }

    return (candidateOrderMap.get(leftId) ?? 0) - (candidateOrderMap.get(rightId) ?? 0);
  });

  return compactUnique([...pinnedGames, ...recentGames, ...balancedCandidateIds.map((panelId) => getGameMeta(panelId))].map((game) => game.id))
    .slice(0, 4)
    .map((panelId) => getGameMeta(panelId));
}

function getFeaturedReason(game, theme, recentCategoryCountMap, recentPanelSet) {
  if (game.id === state.activePanel) {
    return "现在就在这一站";
  }

  if (recentPanelSet.has(game.id)) {
    return "刚刚玩过，可以接着来";
  }

  if (theme.starterIds.includes(game.id)) {
    return `${theme.label.replace("推荐", "")}更适合`;
  }

  const recentCategoryCount = recentCategoryCountMap.get(game.category) ?? 0;

  if (recentCategoryCount === 0) {
    return "今天换换这个类型";
  }

  if (recentCategoryCount === 1) {
    return "最近玩得不多";
  }

  if (theme.categories.includes(game.category)) {
    return `${theme.label.replace("推荐", "")}更适合`;
  }

  return "也适合试试";
}

function createFeaturedCard(game, reasonText = "") {
  const button = document.createElement("button");
  const top = document.createElement("div");
  const icon = document.createElement("span");
  const chip = document.createElement("span");
  const copy = document.createElement("div");
  const title = document.createElement("strong");
  const category = document.createElement("p");
  const reason = document.createElement("p");
  const note = document.createElement("p");
  const isActive = game.id === state.activePanel;
  const hasProgress = hasGameProgress(game.id);
  const accentMap = {
    "panel-balloon": "#ff8c61",
    "panel-memory": "#4ecdc4",
    "panel-color": "#56a9ff",
    "panel-counting": "#7bc950",
    "panel-whack": "#ff9f1c",
    "panel-puzzle": "#f78fb3",
  };

  button.type = "button";
  button.className = "featured-card";
  button.classList.toggle("is-active", isActive);
  button.style.setProperty("--featured-accent", accentMap[game.id] ?? "#56a9ff");
  button.addEventListener("click", () => {
    activatePanel(game.id, true);
    launchPanel(game.id);
  });

  top.className = "featured-card-top";
  icon.className = "featured-card-icon";
  icon.textContent = game.emoji;
  chip.className = "featured-card-chip";
  chip.textContent = isActive ? "正在这一站" : hasProgress ? "继续玩" : "从这里开始";
  top.append(icon, chip);

  copy.className = "featured-card-copy";
  title.textContent = game.label;
  category.textContent = game.category;
  copy.append(title, category);

  reason.className = "featured-card-reason";
  reason.hidden = !reasonText;
  reason.textContent = reasonText;

  note.className = "featured-card-note";
  note.textContent = hasProgress ? `已经玩过，${game.guideHint}` : game.guideHint;

  button.append(top, copy, reason, note);
  return button;
}

function renderFeaturedStrip() {
  if (!ui.featuredGrid || !ui.featuredStripTitle || !ui.featuredStripCopy || !ui.featuredStripCount) {
    return;
  }

  const theme = getCurrentFeaturedTheme();
  const games = getFeaturedGames(theme);
  const visiblePanelIds = getVisiblePanelIds();
  const recentPanelIds = getVisibleRecentPanelIds(state.storage, visiblePanelIds);
  const recentGames = recentPanelIds
    .map((panelId) => getGameMeta(panelId))
    .filter((game) => visiblePanelIds.includes(game.id));
  const recentCategoryCountMap = recentGames.reduce((map, game) => {
    map.set(game.category, (map.get(game.category) ?? 0) + 1);
    return map;
  }, new Map());
  const recentPanelSet = new Set(recentGames.map((game) => game.id));
  const recentCount = recentPanelIds.length;

  ui.featuredGrid.innerHTML = "";
  ui.featuredStripTitle.textContent = theme.title;
  ui.featuredStripCount.textContent = `${theme.label} · ${games.length} 个精选`;
  ui.featuredStripCopy.textContent = recentCount
    ? `先保留最近玩过的一站，再优先补最近玩得少的类别，让这一排更均衡。`
    : theme.copy;

  const fragment = document.createDocumentFragment();
  games.forEach((game) => {
    fragment.appendChild(
      createFeaturedCard(game, getFeaturedReason(game, theme, recentCategoryCountMap, recentPanelSet)),
    );
  });
  ui.featuredGrid.appendChild(fragment);
}

function renderResumeStrip() {
  const activeProfile = getActiveProfileRecord();
  const profileName = activeProfile?.name ?? "小朋友 1";
  const visiblePanels = getVisiblePanelIds();
  const visiblePanelSet = getVisiblePanelSet();
  const lastPanelId = getStoredLastPanelId();
  const visibleLastPanelId = visiblePanelSet.has(lastPanelId) ? lastPanelId : "";
  const recentPanels = getVisibleRecentPanelIds(state.storage, visiblePanels);
  const recentPanelSet = new Set(recentPanels);
  const routePanels = state.guide.current
    .map((step) => step.panelId)
    .filter((panelId) => visiblePanelSet.has(panelId));
  const routePanelSet = new Set(routePanels);
  const primaryPanelId = visibleLastPanelId || recentPanels[0] || routePanels[0] || visiblePanels[0] || "";
  const secondaryPanelId =
    routePanels.find((panelId) => panelId !== primaryPanelId) ||
    visiblePanels.find((panelId) => panelId !== primaryPanelId) ||
    "";
  const choicePanelIds = compactUnique([
    primaryPanelId,
    ...recentPanels,
    ...routePanels,
    ...visiblePanels,
  ]).slice(0, 4);
  const primaryGame = primaryPanelId ? getGameMeta(primaryPanelId) : null;
  const tileFragment = document.createDocumentFragment();

  state.resume.primaryPanelId = primaryPanelId;
  state.resume.secondaryPanelId = secondaryPanelId;
  ui.resumeRecentCount.textContent = recentPanels.length;
  ui.resumeChoiceCount.textContent = choicePanelIds.length;
  ui.resumeGrid.innerHTML = "";

  if (primaryGame && visibleLastPanelId) {
    ui.resumeStatus.textContent = `${profileName} 上次玩到`;
    ui.resumeTitle.textContent = `${primaryGame.emoji} ${primaryGame.label}`;
    ui.resumeCopy.textContent =
      recentPanels.length > 1
        ? `这里还放着最近玩过的 ${recentPanels.length} 个入口，点一下就能继续玩。`
        : `${profileName} 上次停在这里，点一下就能继续玩下去。`;
  } else if (primaryGame && recentPanels.length) {
    ui.resumeStatus.textContent = "最近常玩入口";
    ui.resumeTitle.textContent = `${primaryGame.emoji} ${primaryGame.label}`;
    ui.resumeCopy.textContent = `最近玩过的小游戏都会放在这里，${profileName} 下次打开就能更快找到喜欢的那一站。`;
  } else if (primaryGame) {
    ui.resumeStatus.textContent = "第一次打开也不怕";
    ui.resumeTitle.textContent = `先试试 ${primaryGame.label}`;
    ui.resumeCopy.textContent = `玩过以后，这里就会记住最近玩过的小游戏，${profileName} 下次可以直接接着玩。`;
  } else {
    ui.resumeStatus.textContent = "还没有可用入口";
    ui.resumeTitle.textContent = "先把一个小游戏打开吧";
    ui.resumeCopy.textContent = "只要开始玩，这里就会慢慢变成孩子自己的快捷入口区。";
  }

  ui.resumeContinueBtn.disabled = !primaryPanelId;
  ui.resumeContinueBtn.textContent = primaryGame
    ? visibleLastPanelId
      ? "继续这一站"
      : `去玩 ${primaryGame.label}`
    : "去玩这一站";
  ui.resumeRouteBtn.disabled = !secondaryPanelId;
  ui.resumeRouteBtn.textContent = routePanels.length > 1 ? "去推荐路线" : "换一站玩";

  choicePanelIds.forEach((panelId) => {
    const game = getGameMeta(panelId);
    const button = document.createElement("button");
    const top = document.createElement("div");
    const icon = document.createElement("span");
    const chip = document.createElement("span");
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    const category = document.createElement("p");
    const note = document.createElement("p");
    const isLast = panelId === visibleLastPanelId;
    const isRecent = recentPanelSet.has(panelId);
    const isRecommended = routePanelSet.has(panelId) && !isLast && !isRecent;

    button.type = "button";
    button.className = "resume-tile";
    button.classList.toggle("is-active", panelId === state.activePanel);
    button.classList.toggle("is-last", isLast);
    button.classList.toggle("is-recommend", isRecommended);
    button.addEventListener("click", () => {
      activatePanel(panelId, true);
      launchPanel(panelId);
    });

    top.className = "resume-tile-top";
    icon.className = "resume-tile-icon";
    icon.textContent = game.emoji;
    chip.className = "resume-tile-chip";
    chip.textContent = panelId === state.activePanel ? "正在这一站" : isLast ? "上次玩到" : isRecent ? "最近玩过" : isRecommended ? "推荐下一站" : "去看看";
    top.append(icon, chip);

    copy.className = "resume-tile-copy";
    title.textContent = game.label;
    category.textContent = game.category;
    note.className = "resume-tile-note";
    note.textContent = hasGameProgress(panelId) ? `已经留下足迹，${game.guideHint}` : `还没有留下足迹，${game.guideHint}`;
    copy.append(title, category);

    button.append(top, copy, note);
    tileFragment.appendChild(button);
  });

  ui.resumeGrid.appendChild(tileFragment);
}

function normalizeFinderQuery(value) {
  return `${value ?? ""}`.trim().toLowerCase().replace(/\s+/g, "");
}

function getFinderAvailableGames() {
  const visiblePanelSet = getVisiblePanelSet();
  return gameCatalog.filter((game) => visiblePanelSet.has(game.id));
}

function getFinderSearchTerms(game) {
  return compactUnique([
    game.label,
    game.category,
    game.guideHint,
    ...(finderKeywordCatalog.get(game.id) ?? []),
    ...(finderCategoryAliasCatalog.get(game.category) ?? []),
  ]).filter(Boolean);
}

function doesGameMatchFinder(game, query = state.finder.query, category = state.finder.category) {
  if (!game) {
    return false;
  }

  if (category !== "all" && game.category !== category) {
    return false;
  }

  const normalizedQuery = normalizeFinderQuery(query);

  if (!normalizedQuery) {
    return true;
  }

  return getFinderSearchTerms(game).some((value) => normalizeFinderQuery(value).includes(normalizedQuery));
}

function getFinderFilteredGames(availableGames = getFinderAvailableGames()) {
  return availableGames.filter((game) => doesGameMatchFinder(game));
}

function buildFinderSummaryText(availableGames, filteredGames) {
  const trimmedQuery = `${state.finder.query ?? ""}`.trim();
  const activeFilters = [
    state.finder.category !== "all" ? `分类“${state.finder.category}”` : "",
    trimmedQuery ? `关键词“${trimmedQuery}”` : "",
  ].filter(Boolean);

  if (!availableGames.length) {
    return "现在没有可显示的小游戏，可以去家长模式里重新打开一些。";
  }

  if (!activeFilters.length) {
    return availableGames.length === gameCatalog.length
      ? "正在显示全部小游戏。"
      : `正在显示当前允许打开的 ${availableGames.length} 个小游戏。`;
  }

  if (!filteredGames.length) {
    return `没有找到符合${activeFilters.join("和")}的小游戏，试试搜“气球”“拼图”“动物”，也支持常见别名和拼音。`;
  }

  return `找到 ${filteredGames.length} 个符合${activeFilters.join("和")}的小游戏。`;
}

function renderFinderChipRow(availableGames = getFinderAvailableGames()) {
  if (!ui.finderChipRow) {
    return;
  }

  const categoryCountMap = availableGames.reduce((map, game) => {
    map.set(game.category, (map.get(game.category) ?? 0) + 1);
    return map;
  }, new Map());
  const categories = compactUnique(availableGames.map((game) => game.category));
  const options = [
    { id: "all", label: "全部", count: availableGames.length },
    ...categories.map((category) => ({
      id: category,
      label: category,
      count: categoryCountMap.get(category) ?? 0,
    })),
  ];
  const fragment = document.createDocumentFragment();

  ui.finderChipRow.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const count = document.createElement("small");

    button.type = "button";
    button.className = "secondary-btn finder-chip";
    button.classList.toggle("active", state.finder.category === option.id);
    button.setAttribute("aria-pressed", String(state.finder.category === option.id));
    button.disabled = option.count === 0;
    button.addEventListener("click", () => setFinderCategory(option.id));

    label.textContent = option.label;
    count.textContent = `${option.count} 个`;
    button.append(label, count);
    fragment.appendChild(button);
  });

  ui.finderChipRow.appendChild(fragment);
}

function createFinderRecentTile(game, chipLabel = "去看看") {
  const button = document.createElement("button");
  const top = document.createElement("div");
  const icon = document.createElement("span");
  const chip = document.createElement("span");
  const copy = document.createElement("div");
  const title = document.createElement("strong");
  const category = document.createElement("p");
  const note = document.createElement("p");

  button.type = "button";
  button.className = "finder-recent-tile";
  button.classList.toggle("is-active", game.id === state.activePanel);
  button.addEventListener("click", () => {
    activatePanel(game.id, true);
    launchPanel(game.id);
  });

  top.className = "finder-recent-top";
  icon.className = "finder-recent-icon";
  icon.textContent = game.emoji;
  chip.className = "finder-recent-chip";
  chip.textContent = game.id === state.activePanel ? "正在这一站" : chipLabel;
  top.append(icon, chip);

  copy.className = "finder-recent-copy";
  title.textContent = game.label;
  category.textContent = game.category;
  copy.append(title, category);

  note.className = "finder-recent-note";
  note.textContent = hasGameProgress(game.id) ? `已经玩过，${game.guideHint}` : `还没留下足迹，${game.guideHint}`;

  button.append(top, copy, note);
  return button;
}

function createFinderEmptyAction(label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-btn finder-empty-action";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function buildFinderEmptyState(availableGames = getFinderAvailableGames()) {
  const wrapper = document.createElement("div");
  const title = document.createElement("strong");
  const copy = document.createElement("p");
  const actions = document.createElement("div");
  const suggestionPanelIds = compactUnique([
    ...getVisibleRecentPanelIds(state.storage, availableGames.map((game) => game.id)),
    ...availableGames.map((game) => game.id),
  ]).slice(0, 2);

  wrapper.className = "finder-recent-empty";
  title.textContent = "这次没找到，换个搜法试试看";
  copy.textContent = state.finder.query
    ? "可以试试搜“气球”“拼图”“动物”，也能用一些常见拼音，比如 qiqiu、pintu。"
    : "可以换个分类，或者先回到全部小游戏里看看。";
  actions.className = "finder-empty-actions";

  if (state.finder.query || state.finder.category !== "all") {
    actions.appendChild(createFinderEmptyAction("清空筛选", clearGameFinder));
  }

  if (state.finder.query) {
    actions.appendChild(
      createFinderEmptyAction(state.finder.category === "all" ? "只清空关键词" : "只按分类看", () => {
        setFinderQuery("");
      }),
    );
  }

  if (state.finder.category !== "all") {
    actions.appendChild(
      createFinderEmptyAction(state.finder.query ? "取消分类限制" : "看看全部分类", () => {
        setFinderCategory("all");
      }),
    );
  }

  suggestionPanelIds.forEach((panelId) => {
    const game = getGameMeta(panelId);
    actions.appendChild(
      createFinderEmptyAction(`去玩 ${game.label}`, () => {
        clearGameFinder();
        activatePanel(panelId, true);
        launchPanel(panelId);
      }),
    );
  });

  wrapper.append(title, copy, actions);
  return wrapper;
}

function renderFinderRecentStrip(filteredGames = getFinderFilteredGames(), availableGames = getFinderAvailableGames()) {
  if (!ui.quickRecentStrip || !ui.finderRecentTitle || !ui.finderRecentCopy) {
    return;
  }

  const filteredGameSet = new Set(filteredGames.map((game) => game.id));
  const availablePanelIds = availableGames.map((game) => game.id);
  const recentPanelIds = getVisibleRecentPanelIds(state.storage, availablePanelIds);
  const recentGames = recentPanelIds.map((panelId) => getGameMeta(panelId));
  const matchingRecentGames = recentGames.filter((game) => filteredGameSet.has(game.id));
  const hasFilters = state.finder.category !== "all" || Boolean(normalizeFinderQuery(state.finder.query));
  const quickItems = [];

  ui.quickRecentStrip.innerHTML = "";

  if (!filteredGames.length) {
    ui.finderRecentTitle.textContent = "暂时还没找到";
    ui.finderRecentCopy.textContent = "上面的分类和搜索词都可以随时改一改，下面也给你准备了几个一键恢复的小按钮。";
    ui.quickRecentStrip.appendChild(buildFinderEmptyState(availableGames));
    return;
  }

  if (matchingRecentGames.length) {
    matchingRecentGames.slice(0, 4).forEach((game) => {
      quickItems.push({ game, chipLabel: "最近玩过" });
    });

    filteredGames
      .filter((game) => !matchingRecentGames.some((recentGame) => recentGame.id === game.id))
      .slice(0, Math.max(0, 4 - quickItems.length))
      .forEach((game) => {
        quickItems.push({ game, chipLabel: hasFilters ? "符合筛选" : "也可试试" });
      });

    ui.finderRecentTitle.textContent = hasFilters ? "符合筛选的最近玩过" : "最近玩过";
    ui.finderRecentCopy.textContent = hasFilters
      ? "这些是最近玩过、也刚好符合当前筛选的小站，点一下就能很快继续。"
      : "开始玩以后，这里会记住最近玩过的小游戏，方便下次更快继续。";
  } else {
    filteredGames.slice(0, 4).forEach((game) => {
      quickItems.push({
        game,
        chipLabel: recentGames.length ? (hasFilters ? "符合筛选" : "换一站玩") : hasFilters ? "先试试这站" : "从这站开始",
      });
    });

    ui.finderRecentTitle.textContent = recentGames.length ? "换个合适的新游戏" : "先试试这些";
    ui.finderRecentCopy.textContent = recentGames.length
      ? hasFilters
        ? "最近玩过的入口里没有符合当前筛选的，这里换成更贴合条件的新入口。"
        : "这里也放几个适合继续探索的新入口，点一下就能换一站。"
      : hasFilters
        ? "最近还没有记录，先从这些符合条件的小游戏里挑一站开始吧。"
        : "开始玩以后，这里就会慢慢记住最近玩过的小游戏。";
  }

  const fragment = document.createDocumentFragment();
  quickItems.forEach(({ game, chipLabel }) => {
    fragment.appendChild(createFinderRecentTile(game, chipLabel));
  });

  ui.quickRecentStrip.appendChild(fragment);
}

function renderGameFinder() {
  if (
    !ui.gameFinder ||
    !ui.finderClear ||
    !ui.gameSearchInput ||
    !ui.finderVisibleCount ||
    !ui.finderSummaryText
  ) {
    return;
  }

  const availableGames = getFinderAvailableGames();
  const availableCategories = new Set(availableGames.map((game) => game.category));

  if (state.finder.category !== "all" && !availableCategories.has(state.finder.category)) {
    state.finder.category = "all";
  }

  const filteredGames = getFinderFilteredGames(availableGames);
  const filteredGameSet = new Set(filteredGames.map((game) => game.id));
  const hasFilters = state.finder.category !== "all" || Boolean(normalizeFinderQuery(state.finder.query));

  ui.tabs.forEach((tab) => {
    tab.hidden = !filteredGameSet.has(tab.dataset.panel);
  });

  if (ui.gameSearchInput.value !== state.finder.query) {
    ui.gameSearchInput.value = state.finder.query;
  }

  ui.finderVisibleCount.textContent = filteredGames.length;
  ui.finderSummaryText.textContent = buildFinderSummaryText(availableGames, filteredGames);
  ui.finderClear.disabled = !hasFilters;
  renderFinderChipRow(availableGames);
  renderFinderRecentStrip(filteredGames, availableGames);
}

function setFinderQuery(value) {
  const nextQuery = `${value ?? ""}`.trim();

  if (state.finder.query === nextQuery) {
    return;
  }

  state.finder.query = nextQuery;
  renderGameFinder();
}

function setFinderCategory(category) {
  const nextCategory = category === "all" ? "all" : `${category ?? ""}`;

  if (state.finder.category === nextCategory) {
    return;
  }

  state.finder.category = nextCategory;
  renderGameFinder();
}

function clearGameFinder() {
  if (!state.finder.query && state.finder.category === "all") {
    return;
  }

  state.finder.query = "";
  state.finder.category = "all";
  renderGameFinder();
}

function startGuideRoute() {
  const firstStep = state.guide.current[0];

  if (!firstStep) {
    return;
  }

  activatePanel(firstStep.panelId, true);
  launchPanel(firstStep.panelId);
}

function continueFromResumeStrip() {
  if (!state.resume.primaryPanelId) {
    return;
  }

  activatePanel(state.resume.primaryPanelId, true);
  launchPanel(state.resume.primaryPanelId);
}

function continueFromResumeRoute() {
  if (!state.resume.secondaryPanelId) {
    return;
  }

  activatePanel(state.resume.secondaryPanelId, true);
  launchPanel(state.resume.secondaryPanelId);
}

function getGameMetricValue(metricKey) {
  const value = Number(state.storage[metricKey]);
  return Number.isFinite(value) ? value : 0;
}

function getDefaultChallengePanelId(preferFresh = false) {
  const visiblePanels = getVisiblePanelIds();

  if (!visiblePanels.length) {
    return null;
  }

  if (preferFresh) {
    return visiblePanels.find((panelId) => !hasGameProgress(panelId)) ?? visiblePanels[0];
  }

  if (visiblePanels.includes(state.activePanel)) {
    return state.activePanel;
  }

  return visiblePanels[0];
}

function getCompletedChallengeCount(challenges = state.challenges.current) {
  return challenges.filter((challenge) => challenge.done).length;
}

function getChallengeRewardStars(challenge) {
  if (challenge.kind === "game") {
    return 3;
  }

  if (challenge.kind === "explore") {
    return 3;
  }

  return 2;
}

function getChallengeHintCopy(challenge) {
  if (challenge.done) {
    return "今天这张任务卡已经完成啦。";
  }

  const remaining = Math.max(0, challenge.target - challenge.current);

  if (challenge.kind === "stars") {
    return remaining ? `再拿 ${remaining} 颗星星就可以完成。` : "已经快要完成这张任务卡啦。";
  }

  if (challenge.kind === "explore") {
    return remaining ? `再去 ${remaining} 个新站点看看就可以完成。` : "今天的新站点快看完啦。";
  }

  if (challenge.kind === "badges") {
    return remaining ? `再点亮 ${remaining} 枚徽章就可以完成。` : "奖章墙马上又要亮一枚啦。";
  }

  return remaining ? `再努力 ${remaining} 步就能收下这张奖励卡。` : "已经很接近完成目标啦。";
}

function pruneClaimedChallengeRewardIds(todayKey = getTodayKey()) {
  const nextClaimedIds = state.storage.claimedChallengeRewardIds.filter(
    (challengeId) => typeof challengeId === "string" && challengeId.includes(todayKey),
  );

  if (nextClaimedIds.length === state.storage.claimedChallengeRewardIds.length) {
    return;
  }

  state.storage.claimedChallengeRewardIds = nextClaimedIds;
  persistStorage();
}

function captureSessionProgressStart(targetState) {
  syncTodayChallenges();
  targetState.sessionStartStars = state.storage.stars;
  targetState.sessionStartDoneCount = getCompletedChallengeCount();
}

function buildRoundCelebrationStats({
  sessionStartStars = state.storage.stars,
  sessionStartDoneCount = getCompletedChallengeCount(),
  primaryLabel,
  primaryValue,
  panelId = state.activePanel,
}) {
  syncTodayChallenges();

  const stats = [];
  const earnedStars = Math.max(0, state.storage.stars - sessionStartStars);
  const completedCount = getCompletedChallengeCount();
  const totalCount = state.challenges.current.length;

  if (primaryLabel && primaryValue) {
    stats.push({ label: primaryLabel, value: primaryValue });
  }

  if (earnedStars > 0) {
    stats.push({ label: "这轮收获", value: `+${earnedStars} 星` });
  }

  if (totalCount) {
    if (completedCount > sessionStartDoneCount) {
      stats.push({ label: "今日任务", value: `新完成 ${completedCount - sessionStartDoneCount} 张` });
    } else {
      stats.push({ label: "今日任务", value: `${completedCount}/${totalCount}` });
    }
  }

  if (panelId && isKnownPanelId(panelId)) {
    stats.push({ label: "继续挑战", value: getGameLabel(panelId) });
  }

  return stats;
}

function enqueueRoundCelebration({
  panelId = state.activePanel,
  icon = "🎉",
  title,
  body,
  accent = "#ffb15e",
  stats = [],
}) {
  enqueueCelebration({
    id: `${panelId || "round"}-${Date.now()}-${randomBetween(100, 999)}`,
    icon,
    title,
    body,
    tag: "本轮表现",
    accent,
    meta: stats,
    action: panelId
      ? {
          type: "panel",
          panelId,
          label: "再玩一次",
        }
      : null,
  });
}

function buildStarChallenge() {
  const target = nextMilestone(state.storage.stars, challengeMilestones.stars, 10);

  return {
    id: `challenge-stars-${getTodayKey()}`,
    kind: "stars",
    icon: "⭐",
    title: "星星收集小目标",
    description: `把勇气星星收集到 ${target} 颗。`,
    target,
    unitLabel: "勇气星星",
    ctaLabel: "去赚星星",
    rewardStars: 2,
  };
}

function buildExploreChallenge() {
  const explored = getExploredGameCount();
  const target = Math.min(gameCatalog.length, nextMilestone(explored, challengeMilestones.explored, 2));

  return {
    id: `challenge-explore-${getTodayKey()}`,
    kind: "explore",
    icon: "🗺️",
    title: "游乐园打卡",
    description:
      target >= gameCatalog.length
        ? `试着把 ${gameCatalog.length} 个小游戏都留下自己的足迹。`
        : `去不同的小站看看，把体验过的游戏增加到 ${target} 个。`,
    target,
    unitLabel: "打卡足迹",
    ctaLabel: "去探索",
    rewardStars: 3,
  };
}

function buildBadgeChallenge() {
  const badgeCount = getUnlockedBadgeCount();
  const target = Math.min(badgeCatalog.length, nextMilestone(badgeCount, challengeMilestones.badges, 1));

  return {
    id: `challenge-badges-${getTodayKey()}`,
    kind: "badges",
    icon: "🏅",
    title: "点亮奖章墙",
    description: `把奖章墙点亮到 ${target} 枚徽章。`,
    target,
    unitLabel: "点亮徽章",
    ctaLabel: "去点亮徽章",
    rewardStars: 2,
  };
}

function buildGameFocusChallenge(visiblePanels) {
  const candidates = gameChallengeCatalog.filter((game) => visiblePanels.includes(game.panelId));

  if (!candidates.length) {
    return null;
  }

  const chosen = candidates[getTodaySeed() % candidates.length];
  const target = nextMilestone(
    getGameMetricValue(chosen.metricKey),
    chosen.milestones,
    chosen.fallbackStep,
  );

  return {
    id: `challenge-focus-${chosen.panelId}-${getTodayKey()}`,
    kind: "game",
    panelId: chosen.panelId,
    metricKey: chosen.metricKey,
    icon: chosen.icon,
    title: chosen.title,
    description: chosen.description(target),
    target,
    unitLabel: chosen.unitLabel,
    ctaLabel: chosen.ctaLabel,
    rewardStars: 3,
  };
}

function hydrateChallengeProgress(challenge) {
  let current = 0;

  if (challenge.kind === "stars") {
    current = state.storage.stars;
  }

  if (challenge.kind === "explore") {
    current = getExploredGameCount();
  }

  if (challenge.kind === "badges") {
    current = getUnlockedBadgeCount();
  }

  if (challenge.kind === "game") {
    current = getGameMetricValue(challenge.metricKey);
  }

  return {
    ...challenge,
    current,
    done: current >= challenge.target,
  };
}

function syncTodayChallenges() {
  const visiblePanels = getVisiblePanelIds();
  const todayKey = getTodayKey();
  const shouldRebuild =
    state.challenges.dayKey !== todayKey ||
    !state.challenges.current.length ||
    state.challenges.current.some(
      (challenge) =>
        challenge.kind === "game" && challenge.panelId && !visiblePanels.includes(challenge.panelId),
    );

  if (shouldRebuild) {
    const focusChallenge = buildGameFocusChallenge(visiblePanels) ?? buildBadgeChallenge();

    state.challenges.dayKey = todayKey;
    state.challenges.current = [buildStarChallenge(), buildExploreChallenge(), focusChallenge].map(
      hydrateChallengeProgress,
    );

    return;
  }

  state.challenges.current = state.challenges.current.map(hydrateChallengeProgress);
}

function getChallengeActionPanelId(challenge) {
  const visiblePanels = getVisiblePanelIds();

  if (!visiblePanels.length) {
    return null;
  }

  if (challenge.kind === "game" && challenge.panelId && visiblePanels.includes(challenge.panelId)) {
    return challenge.panelId;
  }

  if (challenge.kind === "explore") {
    return visiblePanels.find((panelId) => !hasGameProgress(panelId)) ?? visiblePanels[0];
  }

  const featuredPanel = gameChallengeCatalog.find((game) => visiblePanels.includes(game.panelId))?.panelId;
  return featuredPanel ?? getDefaultChallengePanelId(challenge.kind !== "stars");
}

function renderChallengeGrid() {
  const challenges = state.challenges.current;
  const completedCount = challenges.filter((challenge) => challenge.done).length;
  const claimedRewardIds = new Set(state.storage.claimedChallengeRewardIds);
  const fragment = document.createDocumentFragment();

  ui.challengeGrid.innerHTML = "";
  ui.challengeDoneCount.textContent = completedCount;
  ui.challengeTotalCount.textContent = challenges.length;

  challenges.forEach((challenge) => {
    const actionPanelId = getChallengeActionPanelId(challenge);
    const card = document.createElement("article");
    const top = document.createElement("div");
    const icon = document.createElement("span");
    const stateTag = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const chipRow = document.createElement("div");
    const rewardChip = document.createElement("span");
    const hintChip = document.createElement("span");
    const progress = document.createElement("div");
    const progressMeta = document.createElement("div");
    const progressLabel = document.createElement("span");
    const progressValue = document.createElement("strong");
    const progressBar = document.createElement("div");
    const progressFill = document.createElement("span");
    const action = document.createElement("button");
    const claimed = claimedRewardIds.has(challenge.id);
    const rewardStars = challenge.rewardStars ?? getChallengeRewardStars(challenge);

    card.className = "challenge-tile";
    card.classList.toggle("is-complete", challenge.done);

    top.className = "challenge-top";

    icon.className = "challenge-icon";
    icon.textContent = challenge.icon;

    stateTag.className = "challenge-state";
    stateTag.textContent = challenge.done ? (claimed ? "奖励已收下" : "完成啦") : "进行中";

    title.textContent = challenge.title;

    description.className = "challenge-copy";
    description.textContent = challenge.description;

    chipRow.className = "challenge-chip-row";

    rewardChip.className = "challenge-chip is-reward";
    rewardChip.textContent = `完成奖励 +${rewardStars} ⭐`;

    hintChip.className = "challenge-chip";
    hintChip.textContent = getChallengeHintCopy(challenge);
    chipRow.append(rewardChip, hintChip);

    progress.className = "challenge-progress";
    progressMeta.className = "challenge-progress-meta";
    progressLabel.textContent = challenge.unitLabel;
    progressValue.textContent = `${challenge.current}/${challenge.target}`;
    progressMeta.append(progressLabel, progressValue);

    progressBar.className = "challenge-progress-bar";
    progressFill.style.width = `${Math.min(100, (challenge.current / challenge.target) * 100)}%`;
    progressBar.appendChild(progressFill);
    progress.append(progressMeta, progressBar);

    action.type = "button";
    action.className = "challenge-action";
    action.disabled = !actionPanelId;
    action.textContent = challenge.done ? "再玩一次" : challenge.ctaLabel;
    action.addEventListener("click", () => {
      if (!actionPanelId) {
        return;
      }

      activatePanel(actionPanelId, true);
      launchPanel(actionPanelId);
    });

    card.append(top, title, description, chipRow, progress, action);
    top.append(icon, stateTag);
    fragment.appendChild(card);
  });

  ui.challengeGrid.appendChild(fragment);
}

function renderCheckinSection() {
  const activeProfile = getActiveProfileRecord();
  const profileName = activeProfile?.name ?? "小朋友 1";
  const streak = getPlayStreak();
  const totalDays = getPlayDays().length;
  const recentDays = getRecentCheckinDays();
  const playedThisWeek = recentDays.filter((day) => day.played).length;
  const nextGoal = nextMilestone(streak, checkinStreakMilestones, 5);
  const firstRouteStep = state.guide.current[0];
  const resumePanelId = state.resume.primaryPanelId;
  const fragment = document.createDocumentFragment();

  ui.checkinStreakCount.textContent = streak;
  ui.checkinTotalCount.textContent = totalDays;
  ui.checkinGrid.innerHTML = "";
  ui.checkinStartBtn.disabled = !firstRouteStep;
  ui.checkinResumeBtn.disabled = !resumePanelId;

  if (streak >= 7) {
    ui.checkinStatus.textContent = "连续来玩真棒";
    ui.checkinTitle.textContent = `${profileName} 已连续来玩 ${streak} 天`;
    ui.checkinCopy.textContent = `最近 7 天里有 ${playedThisWeek} 天都来过游乐园，今天也已经盖上新的小印章啦。`;
  } else if (streak >= 2) {
    ui.checkinStatus.textContent = "小火苗在变长";
    ui.checkinTitle.textContent = `${profileName} 已连续来玩 ${streak} 天`;
    ui.checkinCopy.textContent = `再连续来玩 ${Math.max(1, nextGoal - streak)} 天，小火苗就会长到 ${nextGoal} 天啦。`;
  } else {
    ui.checkinStatus.textContent = "今天已打卡";
    ui.checkinTitle.textContent = `${profileName} 的彩虹脚印`;
    ui.checkinCopy.textContent = `今天已经留下新脚印啦，最近 7 天里一共来玩了 ${playedThisWeek} 天。`;
  }

  ui.checkinStartBtn.textContent = firstRouteStep ? "去今天推荐站" : "先去推荐路线";
  ui.checkinResumeBtn.textContent = resumePanelId ? "继续上次那一站" : "先挑一站开始";

  recentDays.forEach((day, index) => {
    const card = document.createElement("article");
    const top = document.createElement("div");
    const weekday = document.createElement("strong");
    const date = document.createElement("span");
    const stamp = document.createElement("span");
    const note = document.createElement("p");
    const streaking = streak > 0 && day.played && recentDays.slice(index + 1).every((item) => item.played);

    card.className = "checkin-day";
    card.classList.toggle("is-played", day.played);
    card.classList.toggle("is-today", day.isToday);
    card.classList.toggle("is-streak", streaking);

    top.className = "checkin-day-top";
    weekday.textContent = day.isToday ? "今天" : day.weekday;
    date.textContent = day.monthDay;
    top.append(weekday, date);

    stamp.className = "checkin-day-stamp";
    stamp.textContent = day.isToday ? (day.played ? "🌈" : "☁️") : day.played ? "⭐" : "·";

    note.className = "checkin-day-note";
    note.textContent = day.isToday ? "今天已盖章" : day.played ? "来玩过" : "休息日";

    card.append(top, stamp, note);
    fragment.appendChild(card);
  });

  ui.checkinGrid.appendChild(fragment);
}

function renderBuddySection() {
  const currentBuddy = ensureCurrentBuddy();
  const unlockedCount = getUnlockedBuddyCount();
  const fragment = document.createDocumentFragment();

  ui.buddyCount.textContent = unlockedCount;
  ui.buddyTotal.textContent = buddyCatalog.length;
  ui.heroBuddyEmoji.textContent = currentBuddy.emoji;
  ui.heroBuddyName.textContent = currentBuddy.name;
  ui.heroBuddyTip.textContent = currentBuddy.heroTip;
  ui.buddyCurrentEmoji.textContent = currentBuddy.emoji;
  ui.buddyCurrentName.textContent = currentBuddy.name;
  ui.buddyCurrentCopy.textContent = currentBuddy.spotlightCopy;
  ui.heroBuddy.style.setProperty("--buddy-accent", currentBuddy.accent);
  ui.buddyCurrent.style.setProperty("--buddy-accent", currentBuddy.accent);
  ui.buddyGrid.innerHTML = "";

  buddyCatalog.forEach((buddy) => {
    const unlocked = buddy.unlocked(state.storage);
    const isSelected = currentBuddy.id === buddy.id;
    const card = document.createElement("button");
    const top = document.createElement("div");
    const emoji = document.createElement("span");
    const chip = document.createElement("span");
    const name = document.createElement("h3");
    const description = document.createElement("p");

    card.type = "button";
    card.className = "buddy-tile";
    card.disabled = !unlocked;
    card.setAttribute("aria-pressed", String(isSelected));
    card.style.setProperty("--buddy-accent", buddy.accent);
    card.classList.toggle("is-selected", isSelected);
    card.classList.toggle("is-locked", !unlocked);
    card.classList.toggle("is-unlocked", unlocked);
    card.addEventListener("click", () => selectBuddy(buddy.id));

    top.className = "buddy-tile-top";

    emoji.className = "buddy-tile-emoji";
    emoji.textContent = buddy.emoji;

    chip.className = "buddy-tile-chip";
    chip.textContent = unlocked ? (isSelected ? "正在陪玩" : "点我陪玩") : `解锁：${buddy.unlockHint}`;

    name.textContent = buddy.name;
    description.textContent = unlocked ? buddy.heroTip : buddy.unlockHint;

    top.append(emoji, chip);
    card.append(top, name, description);
    fragment.appendChild(card);
  });

  ui.buddyGrid.appendChild(fragment);
}

function selectBuddy(buddyId) {
  const buddy = buddyCatalog.find((item) => item.id === buddyId);

  if (!buddy || !buddy.unlocked(state.storage)) {
    return;
  }

  if (state.storage.selectedBuddyId === buddy.id) {
    setGlobalMessage(`${buddy.name} 已经在陪你一起玩啦。`);
    return;
  }

  state.storage.selectedBuddyId = buddy.id;
  persistStorage();
  renderBuddySection();
  setGlobalMessage(`${buddy.name} 来陪你一起玩啦。`);
}

function renderStickerSection() {
  const currentSticker = ensureCurrentSticker();
  const unlockedCount = getUnlockedStickerCount();
  const fragment = document.createDocumentFragment();

  ui.stickerCount.textContent = unlockedCount;
  ui.stickerTotal.textContent = stickerCatalog.length;
  ui.stickerCurrentEmoji.textContent = currentSticker.emoji;
  ui.stickerCurrentName.textContent = currentSticker.name;
  ui.stickerCurrentCopy.textContent = currentSticker.spotlightCopy;
  ui.stickerCurrent.style.setProperty("--sticker-accent", currentSticker.accent);
  ui.stickerGrid.innerHTML = "";

  stickerCatalog.forEach((sticker) => {
    const unlocked = sticker.unlocked(state.storage);
    const isSelected = currentSticker.id === sticker.id;
    const card = document.createElement("button");
    const top = document.createElement("div");
    const emoji = document.createElement("span");
    const chip = document.createElement("span");
    const name = document.createElement("h3");
    const description = document.createElement("p");

    card.type = "button";
    card.className = "sticker-tile";
    card.disabled = !unlocked;
    card.setAttribute("aria-pressed", String(isSelected));
    card.style.setProperty("--sticker-accent", sticker.accent);
    card.classList.toggle("is-selected", isSelected);
    card.classList.toggle("is-locked", !unlocked);
    card.classList.toggle("is-unlocked", unlocked);
    card.addEventListener("click", () => selectSticker(sticker.id));

    top.className = "sticker-tile-top";

    emoji.className = "sticker-tile-emoji";
    emoji.textContent = sticker.emoji;

    chip.className = "sticker-tile-chip";
    chip.textContent = unlocked ? (isSelected ? "今天贴这个" : "点我收藏") : `解锁：${sticker.unlockHint}`;

    name.textContent = sticker.name;
    description.textContent = unlocked ? sticker.tip : sticker.unlockHint;

    top.append(emoji, chip);
    card.append(top, name, description);
    fragment.appendChild(card);
  });

  ui.stickerGrid.appendChild(fragment);
}

function selectSticker(stickerId) {
  const sticker = stickerCatalog.find((item) => item.id === stickerId);

  if (!sticker || !sticker.unlocked(state.storage)) {
    return;
  }

  if (state.storage.selectedStickerId === sticker.id) {
    setGlobalMessage(`${sticker.name} 已经贴在今天的贴纸册里啦。`);
    return;
  }

  state.storage.selectedStickerId = sticker.id;
  persistStorage();
  renderStickerSection();
  setGlobalMessage(`${sticker.name} 已经贴到你的魔法贴纸册里啦。`);
}

function getCelebrationAccent(entry) {
  return entry?.accent ?? "#ffd447";
}

function normalizeCelebrationAction(action) {
  if (!action || !action.type) {
    return null;
  }

  if (action.type === "panel" && action.panelId && isKnownPanelId(action.panelId)) {
    const visiblePanels = getVisiblePanelIds();

    if (!visiblePanels.includes(action.panelId)) {
      return null;
    }

    return {
      type: "panel",
      panelId: action.panelId,
      label: action.label ?? `去玩 ${getGameLabel(action.panelId)}`,
    };
  }

  if (action.type === "element" && action.selector && document.querySelector(action.selector)) {
    return {
      type: "element",
      selector: action.selector,
      label: action.label ?? "去看看",
    };
  }

  return null;
}

function normalizeCelebrationMeta(meta) {
  if (!Array.isArray(meta)) {
    return [];
  }

  return meta
    .filter(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.label === "string" &&
        typeof item.value === "string" &&
        item.label &&
        item.value,
    )
    .slice(0, 4);
}

function renderCelebrationMeta(meta = []) {
  if (!ui.celebrationMeta) {
    return;
  }

  ui.celebrationMeta.innerHTML = "";
  ui.celebrationMeta.hidden = !meta.length;

  if (!meta.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  meta.forEach((item) => {
    const card = document.createElement("div");
    const label = document.createElement("span");
    const value = document.createElement("strong");

    card.className = "celebration-stat";
    label.textContent = item.label;
    value.textContent = item.value;
    card.append(label, value);
    fragment.appendChild(card);
  });

  ui.celebrationMeta.appendChild(fragment);
}

function renderCelebrationBurst(entry) {
  if (!ui.celebrationBurst) {
    return;
  }

  ui.celebrationBurst.innerHTML = "";

  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const particleColors = compactUnique([entry?.accent, "#ffd447", "#ff8c61", "#56a9ff", "#7bd65b", "#ff6f91"]);

  Array.from({ length: 18 }).forEach((_, index) => {
    const piece = document.createElement("span");
    piece.className = "celebration-confetti";
    piece.classList.toggle("is-round", index % 3 === 0);
    piece.style.setProperty("--particle-left", `${randomBetween(4, 96)}`);
    piece.style.setProperty("--particle-size", `${randomBetween(10, 18)}`);
    piece.style.setProperty("--particle-rotate", `${randomBetween(-50, 50)}deg`);
    piece.style.setProperty("--particle-delay", `${randomBetween(0, 12) / 10}s`);
    piece.style.setProperty("--particle-duration", `${randomBetween(18, 28) / 10}s`);
    piece.style.setProperty("--particle-color", sample(particleColors));
    ui.celebrationBurst.appendChild(piece);
  });
}

function performCelebrationAction(action) {
  const normalizedAction = normalizeCelebrationAction(action);

  if (!normalizedAction) {
    return;
  }

  if (normalizedAction.type === "panel") {
    activatePanel(normalizedAction.panelId, true);
    launchPanel(normalizedAction.panelId);
    return;
  }

  const target = document.querySelector(normalizedAction.selector);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleCelebrationAction() {
  const action = state.celebration.current?.action;

  if (!action) {
    closeCelebration();
    return;
  }

  const hasQueuedCelebration = state.celebration.queue.length > 0;
  closeCelebration({ showNext: false });
  performCelebrationAction(action);

  if (!hasQueuedCelebration) {
    return;
  }

  window.clearTimeout(state.celebration.followUpTimer);
  state.celebration.followUpTimer = window.setTimeout(() => {
    state.celebration.followUpTimer = null;
    showNextCelebration();
  }, 1200);
}

function enqueueCelebration(entry) {
  const isDuplicate =
    state.celebration.current?.id === entry.id ||
    state.celebration.queue.some((item) => item.id === entry.id);

  if (isDuplicate) {
    return;
  }

  state.celebration.queue.push(entry);
  showNextCelebration();
}

function showNextCelebration() {
  if (state.celebration.open || !state.celebration.queue.length) {
    return;
  }

  window.clearTimeout(state.celebration.followUpTimer);
  state.celebration.followUpTimer = null;

  const nextEntry = state.celebration.queue.shift();
  const currentEntry = {
    ...nextEntry,
    action: normalizeCelebrationAction(nextEntry.action),
    meta: normalizeCelebrationMeta(nextEntry.meta),
  };

  state.celebration.current = currentEntry;
  state.celebration.open = true;

  ui.celebrationCard.style.setProperty("--celebration-accent", getCelebrationAccent(currentEntry));
  ui.celebrationTag.textContent = currentEntry.tag ?? "成长奖励";
  ui.celebrationIcon.textContent = currentEntry.icon;
  ui.celebrationTitle.textContent = currentEntry.title;
  ui.celebrationBody.textContent = currentEntry.body;
  renderCelebrationMeta(currentEntry.meta);
  ui.celebrationAction.hidden = !currentEntry.action;
  ui.celebrationAction.textContent = currentEntry.action?.label ?? "去看看";
  renderCelebrationBurst(currentEntry);
  ui.celebrationModal.hidden = false;
  ui.celebrationModal.classList.add("is-open");
  document.body.classList.add("celebration-open");
  playFeedbackTone("success");

  window.requestAnimationFrame(() => {
    ui.celebrationClose.focus();
  });
}

function closeCelebration({ showNext = true } = {}) {
  if (!state.celebration.open) {
    return;
  }

  window.clearTimeout(state.celebration.followUpTimer);
  state.celebration.followUpTimer = null;
  state.celebration.open = false;
  state.celebration.current = null;
  ui.celebrationModal.classList.remove("is-open");
  ui.celebrationModal.hidden = true;
  document.body.classList.remove("celebration-open");

  if (!showNext) {
    return;
  }

  state.celebration.followUpTimer = window.setTimeout(() => {
    state.celebration.followUpTimer = null;
    showNextCelebration();
  }, 40);
}

function dismissCelebrationLayer() {
  window.clearTimeout(state.celebration.followUpTimer);
  state.celebration.followUpTimer = null;
  state.celebration.queue = [];
  state.celebration.open = false;
  state.celebration.current = null;
  ui.celebrationModal.classList.remove("is-open");
  ui.celebrationModal.hidden = true;
  document.body.classList.remove("celebration-open");
  ui.celebrationTag.textContent = "成长奖励";
  ui.celebrationAction.hidden = true;
  ui.celebrationAction.textContent = "去看看";
  renderCelebrationMeta([]);
  ui.celebrationBurst.innerHTML = "";
  ui.celebrationCard.style.removeProperty("--celebration-accent");
}

function checkNewBadgeCelebrations() {
  const unlockedBadges = getUnlockedBadges();
  const seenBadges = new Set(state.storage.seenBadges);
  let changed = false;

  unlockedBadges.forEach((badge) => {
    if (seenBadges.has(badge.id)) {
      return;
    }

    seenBadges.add(badge.id);
    changed = true;
    enqueueCelebration({
      id: `badge-${badge.id}`,
      icon: badge.icon,
      title: `新徽章点亮啦：${badge.title}`,
      body: badge.description,
      tag: "新徽章",
      accent: "#ffd447",
      action: {
        type: "element",
        selector: "#badge-grid",
        label: "看看徽章墙",
      },
    });
  });

  if (!changed) {
    return;
  }

  state.storage.seenBadges = [...seenBadges];
  persistStorage();
}

function checkNewBuddyCelebrations() {
  const unlockedBuddies = getUnlockedBuddies();
  const seenBuddies = new Set(state.storage.seenBuddies);
  let changed = false;

  unlockedBuddies.forEach((buddy) => {
    if (seenBuddies.has(buddy.id)) {
      return;
    }

    seenBuddies.add(buddy.id);
    changed = true;
    enqueueCelebration({
      id: `buddy-${buddy.id}`,
      icon: buddy.emoji,
      title: `新伙伴来啦：${buddy.name}`,
      body: `${buddy.name} 已经来到彩虹游乐园。${buddy.heroTip}`,
      tag: "新伙伴",
      accent: buddy.accent,
      action: {
        type: "element",
        selector: "#buddy-grid",
        label: "去认识伙伴",
      },
    });
  });

  if (!changed) {
    return;
  }

  state.storage.seenBuddies = [...seenBuddies];
  persistStorage();
}

function checkNewStickerCelebrations() {
  const unlockedStickers = getUnlockedStickers();
  const seenStickers = new Set(state.storage.seenStickers);
  let changed = false;

  unlockedStickers.forEach((sticker) => {
    if (seenStickers.has(sticker.id)) {
      return;
    }

    seenStickers.add(sticker.id);
    changed = true;
    enqueueCelebration({
      id: `sticker-${sticker.id}`,
      icon: sticker.emoji,
      title: `新贴纸收好啦：${sticker.name}`,
      body: sticker.spotlightCopy,
      tag: "新贴纸",
      accent: sticker.accent,
      action: {
        type: "element",
        selector: "#sticker-grid",
        label: "打开贴纸册",
      },
    });
  });

  if (!changed) {
    return;
  }

  state.storage.seenStickers = [...seenStickers];
  persistStorage();
}

function checkChallengeRewardCelebrations() {
  pruneClaimedChallengeRewardIds();

  const claimedRewardIds = new Set(state.storage.claimedChallengeRewardIds);
  let changed = false;

  state.challenges.current.forEach((challenge) => {
    if (!challenge.done || claimedRewardIds.has(challenge.id)) {
      return;
    }

    const rewardStars = challenge.rewardStars ?? getChallengeRewardStars(challenge);
    claimedRewardIds.add(challenge.id);
    changed = true;
    state.storage.claimedChallengeRewardIds = [...claimedRewardIds];
    persistStorage();
    awardStars(rewardStars, `今日任务完成啦，奖励 ${rewardStars} 颗勇气星星。`);
    enqueueCelebration({
      id: `challenge-reward-${challenge.id}`,
      icon: challenge.icon,
      title: `${challenge.title} 完成啦`,
      body: `这张今日任务卡已经完成，已经把 ${rewardStars} 颗勇气星星送到你的口袋里啦。`,
      tag: "今日任务",
      accent: challenge.kind === "game" ? "#ff8c61" : "#56a9ff",
      meta: [
        { label: "任务奖励", value: `+${rewardStars} 星` },
        { label: "今天进度", value: `${getCompletedChallengeCount()}/${state.challenges.current.length}` },
      ],
      action: {
        type: "element",
        selector: "#challenge-grid",
        label: "看看今日任务",
      },
    });
  });

  if (!changed) {
    return;
  }

  state.storage.claimedChallengeRewardIds = [...claimedRewardIds];
  persistStorage();
}

function checkDailyChallengeCelebration() {
  if (!state.challenges.current.length || !state.challenges.current.every((challenge) => challenge.done)) {
    return;
  }

  const todayKey = getTodayKey();

  if (state.storage.lastChallengeCelebrateKey === todayKey) {
    return;
  }

  state.storage.lastChallengeCelebrateKey = todayKey;
  persistStorage();
  awardStars(3, "今日任务全部完成啦，额外奖励 3 颗勇气星星。");
  enqueueCelebration({
    id: `daily-challenge-${todayKey}`,
    icon: "🎉",
    title: "今日挑战全部完成",
    body: "今天的 3 张任务卡都完成啦，额外奖励也已经收下，今天的游乐园行程圆满结束。",
    tag: "今日挑战",
    accent: "#ff8c61",
    meta: [
      { label: "全部完成奖励", value: "+3 星" },
      { label: "今日任务", value: `${state.challenges.current.length}/${state.challenges.current.length}` },
    ],
    action: {
      type: "element",
      selector: "#challenge-grid",
      label: "看看挑战卡",
    },
  });
}

function performProgressHubRefresh() {
  const didCheckInToday = registerTodayVisit();

  applyActiveProfileTheme();
  updateSessionCareUi();
  ui.exploredCount.textContent = getExploredGameCount();
  ui.hubStarCount.textContent = state.storage.stars;
  ui.badgeTotal.textContent = badgeCatalog.length;
  renderActiveProfileSummary();

  if (state.parent.open) {
    renderParentProfileList();
    renderParentProfileAppearance();
  }

  syncTodayChallenges();
  checkChallengeRewardCelebrations();
  renderGuideStrip();
  renderResumeStrip();
  renderGameFinder();
  renderCheckinSection();
  renderMapGrid();
  renderBadgeGrid();
  renderChallengeGrid();
  renderBuddySection();
  renderStickerSection();
  celebrateCheckinStreak(didCheckInToday);
  checkNewBadgeCelebrations();
  checkNewBuddyCelebrations();
  checkNewStickerCelebrations();
  checkDailyChallengeCelebration();
}

function refreshProgressHub({ immediate = false } = {}) {
  if (immediate) {
    clearProgressHubRefresh();
    performProgressHubRefresh();
    return;
  }

  if (progressHubRefreshHandle !== null) {
    return;
  }

  const callback = () => {
    progressHubRefreshHandle = null;
    progressHubRefreshMode = "";
    performProgressHubRefresh();
  };

  if (typeof window.requestAnimationFrame === "function") {
    progressHubRefreshMode = "frame";
    progressHubRefreshHandle = window.requestAnimationFrame(callback);
    return;
  }

  progressHubRefreshMode = "timeout";
  progressHubRefreshHandle = window.setTimeout(callback, 16);
}

function renderMapGrid() {
  const visiblePanels = getVisiblePanelIds();
  const visiblePanelSet = getVisiblePanelSet();
  const fragment = document.createDocumentFragment();
  ui.mapGrid.innerHTML = "";

  zoneCatalog.forEach((zone) => {
    const card = document.createElement("article");
    const heading = document.createElement("div");
    const icon = document.createElement("span");
    const copy = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const progress = document.createElement("p");
    const chips = document.createElement("div");
    const action = document.createElement("button");
    const activeCount = zone.panels.filter((panelId) => hasGameProgress(panelId)).length;
    const availablePanels = zone.panels.filter((panelId) => visiblePanelSet.has(panelId));
    const targetPanel = availablePanels[0];

    card.className = `map-zone zone-${zone.theme}`;
    card.classList.toggle("is-active", zone.panels.includes(state.activePanel));
    card.classList.toggle("is-resting", !availablePanels.length);

    heading.className = "map-zone-head";
    icon.className = "map-zone-icon";
    icon.textContent = zone.emoji;

    title.textContent = zone.title;
    description.textContent = zone.description;
    copy.append(title, description);
    heading.append(icon, copy);

    progress.className = "map-zone-progress";
    progress.textContent = !availablePanels.length
      ? "这一站在家长模式里暂时休息"
      : `已留下 ${activeCount}/${zone.panels.length} 个足迹`;

    chips.className = "map-zone-games";
    zone.panels.forEach((panelId) => {
      const chip = document.createElement("span");
      const game = gameCatalogById.get(panelId);

      chip.className = "map-game-chip";
      chip.textContent = game?.label ?? panelId;
      chip.classList.toggle("is-hidden", !visiblePanelSet.has(panelId));
      chip.classList.toggle("is-done", hasGameProgress(panelId));
      chips.appendChild(chip);
    });

    action.type = "button";
    action.className = "map-zone-action";
    action.disabled = !targetPanel;
    action.textContent = targetPanel
      ? zone.panels.includes(state.activePanel)
        ? "正在这一站"
        : "去这一站"
      : "这一站已隐藏";
    action.addEventListener("click", () => {
      if (!targetPanel) {
        return;
      }

      activatePanel(targetPanel, true);
      launchPanel(targetPanel);
    });

    card.append(heading, progress, chips, action);
    fragment.appendChild(card);
  });

  ui.mapGrid.appendChild(fragment);
}

function renderBadgeGrid() {
  const fragment = document.createDocumentFragment();
  let unlockedCount = 0;
  ui.badgeGrid.innerHTML = "";

  badgeCatalog.forEach((badge) => {
    const unlocked = badge.unlocked(state.storage);
    const card = document.createElement("article");
    const icon = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    if (unlocked) {
      unlockedCount += 1;
    }

    card.className = "badge-tile";
    card.classList.toggle("is-unlocked", unlocked);
    card.classList.toggle("is-locked", !unlocked);

    icon.className = "badge-icon";
    icon.textContent = badge.icon;
    title.textContent = badge.title;
    description.textContent = unlocked ? `已点亮：${badge.description}` : `解锁条件：${badge.description}`;

    card.append(icon, title, description);
    fragment.appendChild(card);
  });

  ui.badgeCount.textContent = unlockedCount;
  ui.badgeGrid.appendChild(fragment);
}

function getDifficultyProfile() {
  return difficultyProfiles[state.storage.settings.difficulty] ?? difficultyProfiles.normal;
}

function getVisiblePanelIds() {
  refreshVisiblePanelCache();
  return visiblePanelCache.ids;
}

function getVisiblePanelSet() {
  refreshVisiblePanelCache();
  return visiblePanelCache.set;
}

function rememberPanelVisit(panelId) {
  if (!isKnownPanelId(panelId)) {
    return;
  }

  const previousRecentPanels = getStoredRecentPanelIds();
  const nextRecentPanels = compactUnique([panelId, ...previousRecentPanels]).slice(0, 4);
  const changed =
    getStoredLastPanelId() !== panelId ||
    nextRecentPanels.length !== previousRecentPanels.length ||
    nextRecentPanels.some((recentPanelId, index) => previousRecentPanels[index] !== recentPanelId);

  if (!changed) {
    return;
  }

  state.storage.settings.lastPanelId = panelId;
  state.storage.settings.recentPanels = nextRecentPanels;
  persistStorage();
}

function launchPanel(panelId) {
  panelLaunchers[panelId]?.();
}

function renderParentGameList() {
  ui.parent.gameList.innerHTML = "";

  gameCatalog.forEach((game) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "parent-game-chip";
    button.dataset.panelId = game.id;
    button.textContent = game.label;
    button.addEventListener("click", () => toggleGameVisibilitySetting(game.id));

    ui.parent.gameList.appendChild(button);
  });
}

function renderActiveProfileSummary() {
  const activeProfile = getActiveProfileRecord();
  const activeAvatar = getProfileAvatar(activeProfile);
  const activeIndex = state.profileBook.profiles.findIndex((profile) => profile.id === activeProfile?.id);

  ui.parent.profileCount.textContent = state.profileBook.profiles.length;
  ui.parent.activeProfileName.textContent = activeProfile ? `${activeAvatar.emoji} ${activeProfile.name}` : "--";
  ui.heroProfileAvatar.textContent = activeAvatar.emoji;
  ui.heroProfileName.textContent = activeProfile?.name ?? "小朋友 1";
  ui.parent.moveProfileUp.disabled = activeIndex <= 0;
  ui.parent.moveProfileDown.disabled =
    activeIndex < 0 || activeIndex >= state.profileBook.profiles.length - 1;
}

function renderParentProfileList() {
  const activeProfile = getActiveProfileRecord();

  renderActiveProfileSummary();
  ui.parent.profileList.innerHTML = "";

  state.profileBook.profiles.forEach((profile, index) => {
    const button = document.createElement("button");
    const head = document.createElement("div");
    const avatar = document.createElement("span");
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    const themeName = document.createElement("small");
    const meta = document.createElement("div");
    const starChip = document.createElement("span");
    const badgeChip = document.createElement("span");
    const exploreChip = document.createElement("span");
    const profileAvatar = getProfileAvatar(profile);
    const profileTheme = getProfileTheme(profile);

    button.type = "button";
    button.className = "parent-profile-chip";
    button.classList.toggle("active", profile.id === activeProfile?.id);
    button.setAttribute("aria-pressed", String(profile.id === activeProfile?.id));
    button.addEventListener("click", () => switchProfile(profile.id));
    applyThemeVariables(button.style, profileTheme);

    head.className = "parent-profile-chip-head";
    avatar.className = "parent-profile-avatar";
    avatar.textContent = profileAvatar.emoji;

    copy.className = "parent-profile-copy";
    name.textContent = profile.name;
    themeName.textContent = `第 ${index + 1} 位 · ${profileTheme.name}`;
    copy.append(name, themeName);
    head.append(avatar, copy);

    meta.className = "parent-profile-meta";
    starChip.textContent = `⭐ ${profile.data.stars}`;
    badgeChip.textContent = `🏅 ${getUnlockedBadgeCount(profile.data)}`;
    exploreChip.textContent = `🗺️ ${getExploredGameCount(profile.data)}/${gameCatalog.length}`;
    meta.append(starChip, badgeChip, exploreChip);

    button.append(head, meta);
    ui.parent.profileList.appendChild(button);
  });
}

function moveCurrentProfile(offset) {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  if (state.profileBook.profiles.length === 1) {
    showParentProfileStatus("现在只有 1 个档案，不需要排序哦。", "error");
    setGlobalMessage("现在只有 1 个档案，不需要排序哦。");
    return;
  }

  const currentIndex = state.profileBook.profiles.findIndex((profile) => profile.id === activeProfile.id);
  const targetIndex = currentIndex + offset;

  if (targetIndex < 0 || targetIndex >= state.profileBook.profiles.length) {
    showParentProfileStatus(offset < 0 ? "当前档案已经排在最前面了。" : "当前档案已经排在最后面了。", "error");
    setGlobalMessage(offset < 0 ? "当前档案已经排在最前面了。" : "当前档案已经排在最后面了。");
    return;
  }

  syncActiveProfileRecord();

  const [movedProfile] = state.profileBook.profiles.splice(currentIndex, 1);
  state.profileBook.profiles.splice(targetIndex, 0, movedProfile);

  persistStorage();
  refreshProfilePresentation({ includeProfileList: true });
  showParentProfileStatus(
    `${activeProfile.name} 已经${offset < 0 ? "往前" : "往后"}排了一位。`,
    "success",
  );
  setGlobalMessage(`${activeProfile.name} 的档案顺序已经调整好啦。`);
}

function renderParentProfileAppearance() {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  const activeAvatar = getProfileAvatar(activeProfile);
  const activeTheme = getProfileTheme(activeProfile);

  applyThemeVariables(ui.parent.profilePreview.style, activeTheme);
  ui.parent.profilePreviewAvatar.textContent = activeAvatar.emoji;
  ui.parent.profilePreviewName.textContent = `${activeProfile.name} 的档案`;
  ui.parent.profilePreviewTheme.textContent = `当前主题：${activeTheme.name}`;
  ui.parent.avatarList.innerHTML = "";
  ui.parent.themeList.innerHTML = "";

  profileAvatarCatalog.forEach((avatar) => {
    const button = document.createElement("button");
    const emoji = document.createElement("span");
    const label = document.createElement("strong");
    const note = document.createElement("small");

    button.type = "button";
    button.className = "parent-avatar-chip";
    button.classList.toggle("active", avatar.id === activeProfile.avatarId);
    button.setAttribute("aria-pressed", String(avatar.id === activeProfile.avatarId));
    button.addEventListener("click", () => setCurrentProfileAvatar(avatar.id));
    applyThemeVariables(button.style, activeTheme);

    emoji.className = "parent-avatar-emoji";
    emoji.textContent = avatar.emoji;
    label.textContent = avatar.label;
    note.textContent = avatar.id === activeProfile.avatarId ? "正在使用" : "点一下切换";

    button.append(emoji, label, note);
    ui.parent.avatarList.appendChild(button);
  });

  profileThemeCatalog.forEach((theme) => {
    const button = document.createElement("button");
    const swatches = document.createElement("div");
    const primary = document.createElement("span");
    const secondary = document.createElement("span");
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    const note = document.createElement("small");

    button.type = "button";
    button.className = "parent-theme-chip";
    button.classList.toggle("active", theme.id === activeProfile.themeId);
    button.setAttribute("aria-pressed", String(theme.id === activeProfile.themeId));
    button.addEventListener("click", () => setCurrentProfileTheme(theme.id));
    applyThemeVariables(button.style, theme);

    swatches.className = "parent-theme-swatches";
    primary.style.background = theme.primary;
    secondary.style.background = theme.secondary;
    swatches.append(primary, secondary);

    copy.className = "parent-theme-copy";
    name.textContent = theme.name;
    note.textContent = theme.id === activeProfile.themeId ? "正在使用" : "点一下切换";
    copy.append(name, note);

    button.append(swatches, copy);
    ui.parent.themeList.appendChild(button);
  });
}

function switchProfile(profileId) {
  const activeProfile = getActiveProfileRecord();

  if (!profileId || profileId === activeProfile?.id) {
    return;
  }

  syncActiveProfileRecord();
  state.profileBook.activeProfileId = profileId;
  state.storage = cloneStorageData(getActiveProfileRecord()?.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(`已经切换到 ${getActiveProfileRecord()?.name} 的成长档案。`);
  showParentProfileStatus(`已经切换到 ${getActiveProfileRecord()?.name}。`, "success");
}

function setCurrentProfileAvatar(avatarId) {
  const activeProfile = getActiveProfileRecord();
  const avatar = profileAvatarCatalog.find((item) => item.id === avatarId);

  if (!activeProfile || !avatar) {
    return;
  }

  if (activeProfile.avatarId === avatar.id) {
    setGlobalMessage(`${avatar.label} 已经是 ${activeProfile.name} 的档案头像啦。`);
    return;
  }

  activeProfile.avatarId = avatar.id;
  persistStorage();
  refreshProfilePresentation({ includeProfileList: true, includeProfileAppearance: true });
  showParentProfileStatus(`${activeProfile.name} 的档案头像已经换成 ${avatar.label}。`, "success");
  setGlobalMessage(`${avatar.emoji} 现在会陪着 ${activeProfile.name} 一起玩啦。`);
}

function setCurrentProfileTheme(themeId) {
  const activeProfile = getActiveProfileRecord();
  const theme = profileThemeCatalog.find((item) => item.id === themeId);

  if (!activeProfile || !theme) {
    return;
  }

  if (activeProfile.themeId === theme.id) {
    setGlobalMessage(`${theme.name} 已经是 ${activeProfile.name} 的主题啦。`);
    return;
  }

  activeProfile.themeId = theme.id;
  persistStorage();
  applyActiveProfileTheme();
  refreshProfilePresentation({ includeProfileList: true, includeProfileAppearance: true });
  showParentProfileStatus(`${activeProfile.name} 的主题已经切换成 ${theme.name}。`, "success");
  setGlobalMessage(`${activeProfile.name} 的游乐园已经换成 ${theme.name} 主题啦。`);
}

function buildProfileRecordSnapshot(profile = getActiveProfileRecord()) {
  if (!profile) {
    return null;
  }

  if (profile.id === state.profileBook.activeProfileId) {
    syncActiveProfileRecord();
  }

  return {
    name: profile.name,
    avatarId: profile.avatarId,
    themeId: profile.themeId,
    updatedAt: profile.updatedAt,
    data: cloneStorageData(profile.data),
  };
}

function createProfile() {
  const suggestedName = getNextProfileName();
  const inputName = window.prompt("给新的孩子档案起个名字吧。", suggestedName);

  if (inputName === null) {
    return;
  }

  const profileName = sanitizeProfileName(inputName) || suggestedName;
  const newProfile = createProfileRecord(profileName, {
    settings: {
      ...state.storage.settings,
      lastPanelId: "",
      recentPanels: [],
      visiblePanels: { ...state.storage.settings.visiblePanels },
    },
    seenBuddies: [...initialStorage.seenBuddies],
    seenStickers: [...initialStorage.seenStickers],
    selectedBuddyId: initialStorage.selectedBuddyId,
    selectedStickerId: initialStorage.selectedStickerId,
  }, undefined, getNextProfileLook());

  syncActiveProfileRecord();
  state.profileBook.profiles.push(newProfile);
  state.profileBook.activeProfileId = newProfile.id;
  state.storage = cloneStorageData(newProfile.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(`${profileName} 的新档案已经准备好啦。`);
  showParentProfileStatus(`已经新建 ${profileName} 的档案，并切换过去了。`, "success");
}

function renameCurrentProfile() {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  const inputName = window.prompt("给当前孩子档案换个名字吧。", activeProfile.name);

  if (inputName === null) {
    return;
  }

  const profileName = sanitizeProfileName(inputName);

  if (!profileName) {
    showParentProfileStatus("名字不能为空哦，可以换一个更容易记住的名字。", "error");
    return;
  }

  activeProfile.name = profileName;
  persistStorage();
  refreshProfilePresentation({ includeProfileList: true, includeProfileAppearance: true });
  refreshGuideRelatedUi({ includeCheckin: true });
  showParentProfileStatus(`当前档案已经改名为 ${profileName}。`, "success");
  setGlobalMessage(`现在正在使用 ${profileName} 的成长档案。`);
}

function deleteCurrentProfile() {
  if (state.profileBook.profiles.length === 1) {
    showParentProfileStatus("至少要保留 1 个孩子档案。", "error");
    setGlobalMessage("至少要保留 1 个孩子档案哦。");
    return;
  }

  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  const shouldDelete = window.confirm(
    `要删除 ${activeProfile.name} 的成长档案吗？\n\n这个孩子的星星、徽章、小伙伴和贴纸记录都会一起删除。`,
  );

  if (!shouldDelete) {
    return;
  }

  syncActiveProfileRecord();

  const currentIndex = state.profileBook.profiles.findIndex((profile) => profile.id === activeProfile.id);
  state.profileBook.profiles = state.profileBook.profiles.filter((profile) => profile.id !== activeProfile.id);
  state.profileBook.activeProfileId =
    state.profileBook.profiles[Math.max(0, currentIndex - 1)]?.id ?? state.profileBook.profiles[0].id;
  state.storage = cloneStorageData(getActiveProfileRecord()?.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(`${activeProfile.name} 的档案已经删除啦。`);
  showParentProfileStatus(`已经删除 ${activeProfile.name} 的档案。`, "success");
}

function updateParentSettingsUi() {
  const { difficulty, soundOn, visiblePanels } = state.storage.settings;
  const breakReminderMinutes = getBreakReminderMinutes();
  const breakConfig = getBreakReminderConfig(breakReminderMinutes);
  const profile = getDifficultyProfile();

  ui.parent.difficultyEasy.classList.toggle("active", difficulty === "easy");
  ui.parent.difficultyNormal.classList.toggle("active", difficulty === "normal");
  ui.parent.difficultyHard.classList.toggle("active", difficulty === "hard");
  ui.parent.difficultyEasy.setAttribute("aria-pressed", String(difficulty === "easy"));
  ui.parent.difficultyNormal.setAttribute("aria-pressed", String(difficulty === "normal"));
  ui.parent.difficultyHard.setAttribute("aria-pressed", String(difficulty === "hard"));
  ui.parent.difficultyNote.textContent = profile.note;

  ui.parent.soundToggle.classList.toggle("active", soundOn);
  ui.parent.soundToggle.textContent = soundOn ? "声音已开启" : "声音已关闭";
  ui.parent.soundToggle.setAttribute("aria-pressed", String(soundOn));

  ui.parent.breakReminderOff.classList.toggle("active", breakReminderMinutes === 0);
  ui.parent.breakReminder10.classList.toggle("active", breakReminderMinutes === 10);
  ui.parent.breakReminder20.classList.toggle("active", breakReminderMinutes === 20);
  ui.parent.breakReminder30.classList.toggle("active", breakReminderMinutes === 30);
  ui.parent.breakReminderOff.setAttribute("aria-pressed", String(breakReminderMinutes === 0));
  ui.parent.breakReminder10.setAttribute("aria-pressed", String(breakReminderMinutes === 10));
  ui.parent.breakReminder20.setAttribute("aria-pressed", String(breakReminderMinutes === 20));
  ui.parent.breakReminder30.setAttribute("aria-pressed", String(breakReminderMinutes === 30));
  ui.parent.breakReminderNote.textContent = breakConfig.note;

  [...ui.parent.gameList.querySelectorAll(".parent-game-chip")].forEach((button) => {
    const isVisible = visiblePanels[button.dataset.panelId] !== false;
    button.classList.toggle("active", isVisible);
    button.setAttribute("aria-pressed", String(isVisible));
  });
}

function toggleParentPanel(forceOpen) {
  state.parent.open = typeof forceOpen === "boolean" ? forceOpen : !state.parent.open;
  ui.parent.panel.hidden = !state.parent.open;
  ui.parentToggle.classList.toggle("active", state.parent.open);
  ui.parentToggle.textContent = state.parent.open ? "收起家长模式" : "家长模式";

  if (state.parent.open) {
    renderParentProfileList();
    renderParentProfileAppearance();
    ui.parent.panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function applyPanelVisibility(shouldScrollToVisible = true) {
  const visiblePanels = getVisiblePanelIds();

  ui.tabs.forEach((tab) => {
    const isVisible = visiblePanels.includes(tab.dataset.panel);
    tab.hidden = !isVisible;
  });

  ui.panels.forEach((panel) => {
    const isVisible = visiblePanels.includes(panel.id);
    panel.hidden = !isVisible;
  });

  if (!visiblePanels.includes(state.activePanel)) {
    activatePanel(visiblePanels[0], shouldScrollToVisible);
  } else {
    activatePanel(state.activePanel, false);
  }

  queueDeferredPanelInitialization();
  refreshProgressHub();
  updateGameTabsScrollState();
  updateGameTabsIndicator();
}

function setDifficulty(level) {
  if (!difficultyProfiles[level]) {
    return;
  }

  if (state.storage.settings.difficulty === level) {
    setGlobalMessage(`${difficultyProfiles[level].label}模式已经在使用啦。`);
    return;
  }

  state.storage.settings.difficulty = level;
  persistStorage();
  updateParentSettingsUi();
  clearDifficultySensitiveActivity();
  resetDifficultySensitiveDisplays();

  const activePanelIsDifficultySensitive = difficultySensitivePanelIds.includes(state.activePanel);
  invalidatePanels(
    difficultySensitivePanelIds.filter((panelId) => !activePanelIsDifficultySensitive || panelId !== state.activePanel),
  );

  if (activePanelIsDifficultySensitive) {
    initializePanel(state.activePanel, { force: true });
  }

  queueDeferredPanelInitialization();
  setGlobalMessage(`已切换到${difficultyProfiles[level].label}模式。`);
}

function toggleSoundSetting() {
  state.storage.settings.soundOn = !state.storage.settings.soundOn;
  persistStorage();
  updateParentSettingsUi();
  stopWordsSpeech();
  setGlobalMessage(state.storage.settings.soundOn ? "声音已经打开啦。" : "声音已经关闭啦。");
}

function toggleGameVisibilitySetting(panelId) {
  const visiblePanels = getVisiblePanelIds();
  const isCurrentlyVisible = state.storage.settings.visiblePanels[panelId] !== false;

  if (isCurrentlyVisible && visiblePanels.length === 1) {
    setGlobalMessage("至少要保留 1 个游戏哦。");
    return;
  }

  state.storage.settings.visiblePanels[panelId] = !isCurrentlyVisible;
  invalidateVisiblePanelCache();
  persistStorage();
  updateParentSettingsUi();
  applyPanelVisibility(!isCurrentlyVisible);
}

function resetDifficultySensitiveDisplays() {
  const profile = getDifficultyProfile();

  if (!state.balloon.running) {
    state.balloon.timeLeft = profile.balloonTime;
    updateBalloonScoreboard();
  }

  if (!state.whack.running) {
    state.whack.timeLeft = profile.whackTime;
    updateWhackScoreboard();
  }

  if (!state.rhythm.running) {
    updateRhythmScoreboard();
  }

  if (!state.shadow.answered) {
    updateShadowScoreboard();
  }

  if (!state.different.answered) {
    updateDifferentScoreboard();
  }

  if (!state.more.answered) {
    updateMoreScoreboard();
  }

  if (!state.shape.answered) {
    updateShapeScoreboard();
  }

  if (!state.sort.answered) {
    updateSortScoreboard();
  }

  if (!state.position.answered) {
    updatePositionScoreboard();
  }

  if (!state.food.answered) {
    updateFoodScoreboard();
  }

  if (!state.family.answered) {
    updateFamilyScoreboard();
  }

  if (!state.weather.answered) {
    updateWeatherScoreboard();
  }

  if (!state.dayNight.answered) {
    updateDayNightScoreboard();
  }

  if (!state.hotCold.answered) {
    updateHotColdScoreboard();
  }

  if (!state.size.answered) {
    updateSizeScoreboard();
  }

  if (!state.home.answered) {
    updateHomeScoreboard();
  }

  updateParentSettingsUi();
}

function playFeedbackTone(kind = "success") {
  if (!state.storage.settings.soundOn) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  if (!playFeedbackTone.context) {
    playFeedbackTone.context = new AudioContextClass();
  }

  const audioContext = playFeedbackTone.context;

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;
  const toneMap = {
    success: { frequency: 720, duration: 0.14 },
    wrong: { frequency: 260, duration: 0.18 },
    start: { frequency: 540, duration: 0.12 },
  };
  const { frequency, duration } = toneMap[kind] ?? toneMap.success;

  oscillator.type = kind === "wrong" ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function highlightActivePanel(panelId) {
  const targetPanel = document.querySelector(`#${panelId}`);

  if (!targetPanel) {
    return;
  }

  window.clearTimeout(panelSpotlightTimer);
  ui.panels.forEach((panel) => panel.classList.remove("is-spotlight"));
  targetPanel.classList.add("is-spotlight");
  panelSpotlightTimer = window.setTimeout(() => {
    targetPanel.classList.remove("is-spotlight");
    panelSpotlightTimer = null;
  }, 920);
}

function updateGameTabsDock(panelId = state.activePanel) {
  const game = isKnownPanelId(panelId) ? getGameMeta(panelId) : null;
  const expanded = !state.menu.tabsCollapsed;

  if (ui.gameTabsCurrentLabel) {
    ui.gameTabsCurrentLabel.textContent = game?.label ?? "先选一站开始";
  }

  if (ui.gameTabsToggle) {
    ui.gameTabsToggle.setAttribute("aria-expanded", String(expanded));
    ui.gameTabsToggle.textContent = expanded ? "收起菜单" : "切换游戏";
  }

  ui.gameTabsDock?.classList.toggle("is-expanded", expanded);

  if (!ui.gameTabs) {
    return;
  }

  ui.gameTabs.hidden = state.menu.tabsCollapsed;

  if (state.menu.tabsCollapsed) {
    ui.gameTabs.style.setProperty("--tabs-indicator-opacity", "0");
    ui.gameTabs.classList.remove("can-scroll-left", "can-scroll-right");
    return;
  }

  updateGameTabsScrollState();
  updateGameTabsIndicator();
}

function setGameTabsCollapsed(collapsed) {
  state.menu.tabsCollapsed = Boolean(collapsed);
  updateGameTabsDock();
}

function toggleGameTabs() {
  if (isWideGameTabsLayout()) {
    setGameTabsCollapsed(false);
    return;
  }

  setGameTabsCollapsed(!state.menu.tabsCollapsed);
}

function isWideGameTabsLayout() {
  return Boolean(window.matchMedia?.("(min-width: 1100px)").matches);
}

function syncGameTabsResponsiveMode() {
  setGameTabsCollapsed(!isWideGameTabsLayout());
}

function ensureGameTabsIndicator() {
  if (!ui.gameTabs) {
    return null;
  }

  if (!ui.gameTabsIndicator) {
    const indicator = document.createElement("span");
    indicator.className = "game-tabs-indicator";
    indicator.setAttribute("aria-hidden", "true");
    ui.gameTabs.appendChild(indicator);
    ui.gameTabsIndicator = indicator;
  }

  return ui.gameTabsIndicator;
}

function updateGameTabsScrollState() {
  if (!ui.gameTabs) {
    return;
  }

  if (ui.gameTabs.hidden) {
    ui.gameTabs.classList.remove("can-scroll-left", "can-scroll-right");
    return;
  }

  const maxScrollLeft = Math.max(0, ui.gameTabs.scrollWidth - ui.gameTabs.clientWidth);
  const canScrollLeft = ui.gameTabs.scrollLeft > 6;
  const canScrollRight = ui.gameTabs.scrollLeft < maxScrollLeft - 6;

  ui.gameTabs.classList.toggle("can-scroll-left", canScrollLeft);
  ui.gameTabs.classList.toggle("can-scroll-right", canScrollRight);
}

function updateGameTabsIndicator() {
  const indicator = ensureGameTabsIndicator();

  if (!ui.gameTabs || !indicator) {
    return;
  }

  if (ui.gameTabs.hidden) {
    ui.gameTabs.style.setProperty("--tabs-indicator-opacity", "0");
    return;
  }

  const activeTab = ui.tabs.find((tab) => tab.classList.contains("active") && !tab.hidden);

  if (!activeTab) {
    ui.gameTabs.style.setProperty("--tabs-indicator-opacity", "0");
    return;
  }

  const left = activeTab.offsetLeft - ui.gameTabs.scrollLeft;
  const width = activeTab.offsetWidth;

  ui.gameTabs.style.setProperty("--tabs-indicator-left", `${left}px`);
  ui.gameTabs.style.setProperty("--tabs-indicator-width", `${width}px`);
  ui.gameTabs.style.setProperty("--tabs-indicator-opacity", "1");
}

function scrollActiveTabIntoView(panelId, behavior = "smooth") {
  if (!ui.gameTabs || ui.gameTabs.hidden) {
    return;
  }

  if (isWideGameTabsLayout()) {
    updateGameTabsScrollState();
    updateGameTabsIndicator();
    return;
  }

  const activeTab = ui.tabs.find((tab) => tab.dataset.panel === panelId);

  if (!activeTab) {
    return;
  }

  window.requestAnimationFrame(() => {
    activeTab.scrollIntoView({
      behavior,
      block: "nearest",
      inline: "center",
    });
    updateGameTabsScrollState();
    updateGameTabsIndicator();
  });
}

function activatePanel(panelId, shouldScroll) {
  state.activePanel = panelId;

  ui.tabs.forEach((tab) => {
    const isActive = tab.dataset.panel === panelId;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-current", isActive ? "page" : "false");
  });

  updateGameTabsDock(panelId);
  scrollActiveTabIntoView(panelId, shouldScroll ? "smooth" : "auto");

  ui.panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === panelId);
  });

  if (shouldScroll) {
    const targetPanel = document.querySelector(`#${panelId}`);
    if (targetPanel && !targetPanel.hidden) {
      targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      targetPanel.setAttribute("tabindex", "-1");
      targetPanel.focus({ preventScroll: true });
      highlightActivePanel(panelId);
    }

    if (window.location.hash !== `#${panelId}`) {
      window.history.replaceState(null, "", `#${panelId}`);
    }

    rememberPanelVisit(panelId);

    if (!state.menu.tabsCollapsed) {
      setGameTabsCollapsed(true);
    }
  }

  initializePanel(panelId);

  if (panelId === "panel-trace") {
    window.requestAnimationFrame(() => {
      resizeTraceCanvas();
    });
  }

  refreshActivePanelUi();
}

function createInitialStorageSnapshot() {
  return {
    ...initialStorage,
    seenBadges: [...initialStorage.seenBadges],
    seenBuddies: [...initialStorage.seenBuddies],
    seenStickers: [...initialStorage.seenStickers],
    claimedChallengeRewardIds: [...initialStorage.claimedChallengeRewardIds],
    settings: {
      ...initialStorage.settings,
      visiblePanels: { ...initialStorage.settings.visiblePanels },
    },
  };
}

function normalizeStorage(sourceValue) {
  const parsedSource = sourceValue && typeof sourceValue === "object" ? sourceValue : {};
  const source =
    parsedSource.data && typeof parsedSource.data === "object" ? parsedSource.data : parsedSource;
  const normalizedBreakReminderMinutes = getBreakReminderMinutes({
    settings: {
      breakReminderMinutes: source.settings?.breakReminderMinutes,
    },
  });
  const normalizedPlayDays = normalizePlayDays(source.playDays);
  const normalizedLastPanelId = isKnownPanelId(source.settings?.lastPanelId) ? source.settings.lastPanelId : "";
  const normalizedRecentPanels = compactUnique(
    Array.isArray(source.settings?.recentPanels)
      ? source.settings.recentPanels.filter((panelId) => isKnownPanelId(panelId))
      : [],
  ).slice(0, 4);
  const baseStorage = {
    ...createInitialStorageSnapshot(),
    ...source,
    playDays: normalizedPlayDays,
    seenBadges: Array.isArray(source.seenBadges)
      ? source.seenBadges.filter((badgeId) => typeof badgeId === "string")
      : [],
    seenBuddies: Array.isArray(source.seenBuddies)
      ? source.seenBuddies.filter((buddyId) => typeof buddyId === "string")
      : [],
    seenStickers: Array.isArray(source.seenStickers)
      ? source.seenStickers.filter((stickerId) => typeof stickerId === "string")
      : [],
    claimedChallengeRewardIds: Array.isArray(source.claimedChallengeRewardIds)
      ? source.claimedChallengeRewardIds.filter((challengeId) => typeof challengeId === "string")
      : [],
    lastChallengeCelebrateKey:
      typeof source.lastChallengeCelebrateKey === "string" ? source.lastChallengeCelebrateKey : "",
    selectedBuddyId:
      typeof source.selectedBuddyId === "string" ? source.selectedBuddyId : initialStorage.selectedBuddyId,
    selectedStickerId:
      typeof source.selectedStickerId === "string" ? source.selectedStickerId : initialStorage.selectedStickerId,
    settings: {
      ...initialStorage.settings,
      ...(source.settings ?? {}),
      breakReminderMinutes: normalizedBreakReminderMinutes,
      lastPanelId: normalizedLastPanelId,
      recentPanels: normalizedRecentPanels,
      visiblePanels: {
        ...createDefaultVisiblePanels(),
        ...(source.settings?.visiblePanels ?? {}),
      },
    },
  };

  if (!Array.isArray(source.seenBadges)) {
    baseStorage.seenBadges = getUnlockedBadges(baseStorage).map((badge) => badge.id);
  }

  if (!Array.isArray(source.seenBuddies)) {
    baseStorage.seenBuddies = getUnlockedBuddies(baseStorage).map((buddy) => buddy.id);
  }

  if (!Array.isArray(source.seenStickers)) {
    baseStorage.seenStickers = getUnlockedStickers(baseStorage).map((sticker) => sticker.id);
  }

  return baseStorage;
}

function syncActiveProfileRecord() {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  activeProfile.data = cloneStorageData(state.storage);
  activeProfile.updatedAt = new Date().toISOString();
}

function buildPersistedProfileBook() {
  syncActiveProfileRecord();

  return {
    app: "rainbow-playground",
    version: 18,
    activeProfileId: state.profileBook.activeProfileId,
    profiles: state.profileBook.profiles.map((profile) => ({
      id: profile.id,
      name: profile.name,
      avatarId: profile.avatarId,
      themeId: profile.themeId,
      updatedAt: profile.updatedAt,
      data: cloneStorageData(profile.data),
    })),
  };
}

function persistStorage() {
  invalidateProgressDerivedCache();
  localStorage.setItem(storageKey, JSON.stringify(buildPersistedProfileBook()));
}

function showParentStorageStatus(message, kind = "neutral") {
  ui.parent.storageStatus.textContent = message;
  ui.parent.storageStatus.classList.toggle("is-success", kind === "success");
  ui.parent.storageStatus.classList.toggle("is-error", kind === "error");
}

function downloadJsonFile(payload, fileName) {
  const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

function buildExportPayload() {
  return {
    app: "rainbow-playground",
    version: 18,
    exportedAt: new Date().toISOString(),
    data: buildPersistedProfileBook(),
  };
}

function buildCurrentProfileExportPayload() {
  return {
    app: "rainbow-playground",
    version: 18,
    scope: "single-profile",
    exportedAt: new Date().toISOString(),
    profile: buildProfileRecordSnapshot(),
  };
}

function resetSessionState() {
  clearDeferredPanelInitialization();
  clearProgressHubRefresh();
  dismissCelebrationLayer();
  stopWordsSpeech();
  hideBreakToast();
  clearBalloonLoops();
  clearMemoryTimer();
  clearColorTimer();
  clearShadowTimer();
  clearDifferentTimer();
  clearCountingTimer();
  clearMoreTimer();
  clearShapeTimer();
  clearSortTimer();
  clearPositionTimer();
  clearFoodTimer();
  clearFamilyTimer();
  clearWeatherTimer();
  clearDayNightTimer();
  clearHotColdTimer();
  clearSizeTimer();
  clearHomeTimer();
  clearWordsTimer();
  clearEnglishTimer();
  clearWhackLoops();
  clearRhythmTimers();
  clearBalloons();
  resetPanelInitializationState();

  const preservedWordsMode = state.words.mode;

  state.guide.routeVariant = 0;
  state.guide.current = [];
  state.resume.primaryPanelId = "";
  state.resume.secondaryPanelId = "";
  state.session.nextBreakAt = null;
  state.session.currentIntervalMs = 0;
  state.session.due = false;
  state.challenges.dayKey = "";
  state.challenges.current = [];

  state.balloon = {
    score: 0,
    timeLeft: getDifficultyProfile().balloonTime,
    running: false,
    spawnLoop: null,
    timerLoop: null,
  };
  state.memory = {
    deck: [],
    firstIndex: null,
    secondIndex: null,
    lock: false,
    moves: 0,
    matches: 0,
    resolveTimer: null,
  };
  state.color = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedName: "",
    roundTimer: null,
  };
  state.shadow = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  };
  state.different = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedIndex: null,
    roundTimer: null,
  };
  state.counting = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedValue: null,
    roundTimer: null,
  };
  state.more = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedSide: "",
    roundTimer: null,
  };
  state.shape = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  };
  state.sort = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedCategoryId: null,
    roundTimer: null,
  };
  state.position = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedSlotId: null,
    roundTimer: null,
  };
  state.food = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedFoodId: null,
    roundTimer: null,
  };
  state.family = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedParentId: null,
    roundTimer: null,
  };
  state.weather = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedWearId: null,
    roundTimer: null,
  };
  state.dayNight = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedPeriodId: null,
    roundTimer: null,
  };
  state.hotCold = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedChoiceId: null,
    roundTimer: null,
  };
  state.size = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    pickedKeys: [],
    nextIndex: 0,
    wrongKey: null,
    roundTimer: null,
  };
  state.home = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedPlaceId: null,
    roundTimer: null,
  };
  state.whack = {
    score: 0,
    timeLeft: getDifficultyProfile().whackTime,
    running: false,
    activeIndex: null,
    activeFruit: "",
    spawnLoop: null,
    timerLoop: null,
  };
  state.rhythm = {
    sequence: [],
    inputIndex: 0,
    round: 0,
    mode: "准备中",
    running: false,
    locked: true,
    showing: false,
    activePad: null,
    timeouts: [],
    pulseTimer: null,
  };
  state.puzzle = {
    tiles: [],
    selectedIndex: null,
    steps: 0,
    solved: false,
  };
  state.words = {
    score: 0,
    streak: 0,
    current: null,
    mode: preservedWordsMode,
    answered: false,
    selectedId: null,
    roundTimer: null,
  };
  state.english = {
    score: 0,
    streak: 0,
    current: null,
    answered: false,
    selectedId: null,
    roundTimer: null,
  };
  state.trace = {
    completed: 0,
    currentIndex: 0,
    hasDrawn: false,
    drawing: false,
    lastPoint: null,
  };

  updateBalloonScoreboard();
  setBalloonStatus("准备好了就开始点气球，看看你能拿多少分。");
}

function applyStorageSnapshot(nextStorage, message) {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile) {
    return;
  }

  activeProfile.data = cloneStorageData(nextStorage);
  activeProfile.updatedAt = new Date().toISOString();
  state.storage = cloneStorageData(activeProfile.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(message);
  showParentStorageStatus(message, "success");
}

function applyProfileBookSnapshot(nextProfileBook, message) {
  state.profileBook = normalizeProfileBook(nextProfileBook);
  state.storage = cloneStorageData(getActiveProfileRecord(state.profileBook)?.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(message);
  showParentStorageStatus(message, "success");
}

function exportStorageSnapshot() {
  const payload = JSON.stringify(buildExportPayload(), null, 2);
  const fileName = `彩虹游乐园全部档案-${getTodayKey()}.json`;

  downloadJsonFile(payload, fileName);

  showParentStorageStatus("全部孩子档案已经导出啦，可以在下载文件夹里找到它。", "success");
  setGlobalMessage("全部孩子档案已经导出好啦。");
}

function exportCurrentProfileSnapshot() {
  const activeProfile = getActiveProfileRecord();
  const profileSnapshot = buildProfileRecordSnapshot(activeProfile);

  if (!activeProfile || !profileSnapshot) {
    return;
  }

  const payload = JSON.stringify(buildCurrentProfileExportPayload(), null, 2);
  const fileName = `彩虹游乐园-${sanitizeFileNamePart(activeProfile.name, "小朋友")}-档案-${getTodayKey()}.json`;

  downloadJsonFile(payload, fileName);
  showParentStorageStatus(`${activeProfile.name} 的单独档案已经导出啦。`, "success");
  setGlobalMessage(`已经导出 ${activeProfile.name} 的单独档案。`);
}

function importSingleProfileSnapshot(profileSource) {
  if (!profileSource || typeof profileSource !== "object") {
    throw new Error("invalid");
  }

  const profileName = getUniqueProfileName(
    typeof profileSource.name === "string" ? profileSource.name : getNextProfileName(),
  );
  const importedProfile = createProfileRecord(
    profileName,
    profileSource.data,
    createProfileId(),
    {
      avatarId: profileSource.avatarId,
      themeId: profileSource.themeId,
    },
  );

  syncActiveProfileRecord();
  state.profileBook.profiles.push(importedProfile);
  state.profileBook.activeProfileId = importedProfile.id;
  state.storage = cloneStorageData(importedProfile.data);
  activeStorageRef = state.storage;
  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(`${profileName} 的档案已经导入啦。`);
  showParentStorageStatus(`已经把 ${profileName} 导入成新的孩子档案，并切换过去了。`, "success");
}

function replaceCurrentProfileWithSnapshot(profileSource) {
  const activeProfile = getActiveProfileRecord();

  if (!activeProfile || !profileSource || typeof profileSource !== "object") {
    throw new Error("invalid");
  }

  const currentIndex = state.profileBook.profiles.findIndex((profile) => profile.id === activeProfile.id);
  const nextName = getUniqueProfileName(
    typeof profileSource.name === "string" ? profileSource.name : activeProfile.name,
    state.profileBook,
    [activeProfile.id],
  );

  activeProfile.name = nextName;
  activeProfile.avatarId = normalizeProfileAvatarId(profileSource.avatarId, Math.max(0, currentIndex));
  activeProfile.themeId = normalizeProfileThemeId(profileSource.themeId, Math.max(0, currentIndex));
  activeProfile.data = cloneStorageData(profileSource.data);
  activeProfile.updatedAt = new Date().toISOString();
  state.storage = cloneStorageData(activeProfile.data);
  activeStorageRef = state.storage;

  persistStorage();
  refreshAfterProfileSessionChange();
  setGlobalMessage(`${nextName} 的档案已经覆盖导入完成啦。`);
  showParentStorageStatus(`已经把单个孩子档案覆盖到当前档案，并切换成 ${nextName}。`, "success");
}

async function importStorageSnapshot(event) {
  const [file] = [...(event.target.files ?? [])];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);

    if (!parsed || typeof parsed !== "object") {
      throw new Error("invalid");
    }

    const source = parsed?.data && typeof parsed.data === "object" ? parsed.data : parsed;
    const singleProfileSource =
      parsed?.profile && typeof parsed.profile === "object"
        ? parsed.profile
        : source?.profile && typeof source.profile === "object"
          ? source.profile
          : null;
    const importMode = state.parent.importMode;

    if (Array.isArray(source?.profiles) && source.profiles.length) {
      if (importMode === "replace-current") {
        throw new Error("profile-book-for-replace");
      }

      applyProfileBookSnapshot(parsed, "全部孩子档案已经导入成功啦。");
    } else if (singleProfileSource) {
      if (importMode === "replace-current") {
        replaceCurrentProfileWithSnapshot(singleProfileSource);
      } else {
        importSingleProfileSnapshot(singleProfileSource);
      }
    } else {
      applyStorageSnapshot(parsed, "当前孩子的成长存档已经导入成功啦。");
    }
  } catch (error) {
    if (error instanceof Error && error.message === "profile-book-for-replace") {
      showParentStorageStatus("这个按钮适合导入单个孩子档案；如果要导入整本档案，请点“导入档案”。", "error");
      setGlobalMessage("整本档案请用“导入档案”，单个孩子才用覆盖导入哦。");
    } else {
      showParentStorageStatus("这个文件看起来不是可用的成长存档，请换一个 JSON 文件试试。", "error");
      setGlobalMessage("导入没有成功，再换一个存档文件试试。");
    }
  } finally {
    state.parent.importMode = "auto";
    ui.parent.importFile.value = "";
  }
}

function resetProgressStorage() {
  const shouldReset = window.confirm(
    "要清空当前孩子的成长进度吗？\n\n会重置这个孩子的星星、徽章、小伙伴、贴纸和各游戏最好成绩，但会保留这个档案里的家长设置。",
  );

  if (!shouldReset) {
    return;
  }

  applyStorageSnapshot(
    {
      settings: {
        ...state.storage.settings,
        visiblePanels: { ...state.storage.settings.visiblePanels },
      },
      seenBuddies: [...initialStorage.seenBuddies],
      seenStickers: [...initialStorage.seenStickers],
      selectedBuddyId: initialStorage.selectedBuddyId,
      selectedStickerId: initialStorage.selectedStickerId,
    },
    "成长进度已经清空啦，家长设置还保留着。",
  );
}

function renderStars() {
  ui.starCount.textContent = state.storage.stars;
  refreshProgressHub();
}

function setGlobalMessage(message) {
  if (suppressGlobalMessage) {
    return;
  }

  ui.globalMessage.textContent = message;
}

function awardStars(amount, message) {
  state.storage.stars += amount;
  persistStorage();
  renderStars();
  setGlobalMessage(message);
}

function updateBestScore(key, value, preferLower = false) {
  const currentValue = state.storage[key];
  let nextValue = value;

  if (currentValue === null || currentValue === undefined) {
    nextValue = value;
  } else if (preferLower) {
    nextValue = Math.min(currentValue, value);
  } else {
    nextValue = Math.max(currentValue, value);
  }

  if (currentValue === nextValue) {
    return;
  }

  state.storage[key] = nextValue;
  persistStorage();
  refreshProgressHub();
}

function updateBalloonScoreboard() {
  ui.balloon.score.textContent = state.balloon.score;
  ui.balloon.time.textContent = state.balloon.timeLeft;
  ui.balloon.best.textContent = state.storage.balloonBest;
}

function setBalloonStatus(message) {
  ui.balloon.status.textContent = message;
}

function clearBalloonLoops() {
  window.clearInterval(state.balloon.spawnLoop);
  window.clearInterval(state.balloon.timerLoop);
  state.balloon.spawnLoop = null;
  state.balloon.timerLoop = null;
}

function clearMemoryTimer() {
  window.clearTimeout(state.memory.resolveTimer);
  state.memory.resolveTimer = null;
}

function clearColorTimer() {
  window.clearTimeout(state.color.roundTimer);
  state.color.roundTimer = null;
}

function clearShadowTimer() {
  window.clearTimeout(state.shadow.roundTimer);
  state.shadow.roundTimer = null;
}

function clearDifferentTimer() {
  window.clearTimeout(state.different.roundTimer);
  state.different.roundTimer = null;
}

function clearCountingTimer() {
  window.clearTimeout(state.counting.roundTimer);
  state.counting.roundTimer = null;
}

function clearMoreTimer() {
  window.clearTimeout(state.more.roundTimer);
  state.more.roundTimer = null;
}

function clearShapeTimer() {
  window.clearTimeout(state.shape.roundTimer);
  state.shape.roundTimer = null;
}

function clearSortTimer() {
  window.clearTimeout(state.sort.roundTimer);
  state.sort.roundTimer = null;
}

function clearPositionTimer() {
  window.clearTimeout(state.position.roundTimer);
  state.position.roundTimer = null;
}

function clearFoodTimer() {
  window.clearTimeout(state.food.roundTimer);
  state.food.roundTimer = null;
}

function clearFamilyTimer() {
  window.clearTimeout(state.family.roundTimer);
  state.family.roundTimer = null;
}

function clearWeatherTimer() {
  window.clearTimeout(state.weather.roundTimer);
  state.weather.roundTimer = null;
}

function clearDayNightTimer() {
  window.clearTimeout(state.dayNight.roundTimer);
  state.dayNight.roundTimer = null;
}

function clearHotColdTimer() {
  window.clearTimeout(state.hotCold.roundTimer);
  state.hotCold.roundTimer = null;
}

function clearSizeTimer() {
  window.clearTimeout(state.size.roundTimer);
  state.size.roundTimer = null;
}

function clearHomeTimer() {
  window.clearTimeout(state.home.roundTimer);
  state.home.roundTimer = null;
}

function clearWordsTimer() {
  window.clearTimeout(state.words.roundTimer);
  state.words.roundTimer = null;
}

function clearEnglishTimer() {
  window.clearTimeout(state.english.roundTimer);
  state.english.roundTimer = null;
}

function stopWordsSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function clearWhackLoops() {
  window.clearInterval(state.whack.spawnLoop);
  window.clearInterval(state.whack.timerLoop);
  state.whack.spawnLoop = null;
  state.whack.timerLoop = null;
}

function clearRhythmTimers() {
  state.rhythm.timeouts.forEach((timerId) => window.clearTimeout(timerId));
  state.rhythm.timeouts = [];
  window.clearTimeout(state.rhythm.pulseTimer);
  state.rhythm.pulseTimer = null;
}

function queueRhythmTimeout(callback, delay) {
  const timerId = window.setTimeout(() => {
    state.rhythm.timeouts = state.rhythm.timeouts.filter((queuedId) => queuedId !== timerId);
    callback();
  }, delay);

  state.rhythm.timeouts.push(timerId);
  return timerId;
}

function clearBalloons() {
  ui.balloon.area.innerHTML = "";
}

function startBalloonGame() {
  const profile = getDifficultyProfile();

  clearBalloonLoops();
  clearBalloons();

  state.balloon.score = 0;
  state.balloon.timeLeft = profile.balloonTime;
  state.balloon.running = true;
  captureSessionProgressStart(state.balloon);

  updateBalloonScoreboard();
  setBalloonStatus("开始啦，快去点破气球。");
  setGlobalMessage("气球飞起来了，快点它们。");
  playFeedbackTone("start");

  spawnBalloon();

  state.balloon.spawnLoop = window.setInterval(() => {
    spawnBalloon();
  }, profile.balloonSpawn);

  state.balloon.timerLoop = window.setInterval(() => {
    state.balloon.timeLeft -= 1;
    updateBalloonScoreboard();

    if (state.balloon.timeLeft <= 0) {
      endBalloonGame();
    }
  }, 1000);
}

function spawnBalloon() {
  if (!state.balloon.running) {
    return;
  }

  const balloon = document.createElement("button");
  const size = `${randomBetween(58, 92)}px`;
  const left = `${randomBetween(4, 84)}%`;
  const speed = `${randomBetween(5, 8)}s`;
  const color = sample(balloonColors);

  balloon.type = "button";
  balloon.className = "balloon";
  balloon.style.setProperty("--size", size);
  balloon.style.setProperty("--x", left);
  balloon.style.setProperty("--speed", speed);
  balloon.style.setProperty("--balloon-color", color);
  balloon.setAttribute("aria-label", "点破气球");

  balloon.addEventListener("click", () => {
    if (!state.balloon.running || balloon.classList.contains("popped")) {
      return;
    }

    balloon.classList.add("popped");
    state.balloon.score += 1;

    if (state.balloon.score > state.storage.balloonBest) {
      updateBestScore("balloonBest", state.balloon.score);
    }

    if (state.balloon.score % 5 === 0) {
      awardStars(1, "连续点中 5 个气球，得到 1 颗勇气星星。");
    }

    playFeedbackTone("success");
    updateBalloonScoreboard();
    setBalloonStatus(sample(happyCheers));
    window.setTimeout(() => balloon.remove(), 160);
  });

  balloon.addEventListener("animationend", () => {
    balloon.remove();
  });

  ui.balloon.area.appendChild(balloon);
}

function endBalloonGame() {
  state.balloon.running = false;
  clearBalloonLoops();

  if (state.balloon.score >= 12) {
    awardStars(2, "这次表现超棒，额外奖励 2 颗勇气星星。");
  } else {
    setGlobalMessage("气球挑战结束啦，再来一次也很好玩。");
  }

  setBalloonStatus(`时间到。你一共点中了 ${state.balloon.score} 个气球。`);
  updateBalloonScoreboard();
  enqueueRoundCelebration({
    panelId: "panel-balloon",
    icon: "🎈",
    title: state.balloon.score >= 12 ? "气球挑战收尾啦" : "气球热身完成啦",
    body:
      state.balloon.score >= 12
        ? `这轮一口气点中了 ${state.balloon.score} 个气球，今天的手速状态很不错。`
        : `这轮一共点中了 ${state.balloon.score} 个气球，休息一下后再来一轮也很适合。`,
    accent: "#ff8c61",
    stats: buildRoundCelebrationStats({
      sessionStartStars: state.balloon.sessionStartStars,
      sessionStartDoneCount: state.balloon.sessionStartDoneCount,
      primaryLabel: "本轮成绩",
      primaryValue: `${state.balloon.score} 个`,
      panelId: "panel-balloon",
    }),
  });
}

function setupMemoryGame() {
  const profile = getDifficultyProfile();
  const activeDeck = animalDeck.slice(0, profile.memoryPairs);

  clearMemoryTimer();

  state.memory.deck = shuffle([...activeDeck, ...activeDeck]).map((emoji, index) => ({
    id: index,
    emoji,
    flipped: false,
    matched: false,
  }));

  state.memory.firstIndex = null;
  state.memory.secondIndex = null;
  state.memory.lock = false;
  state.memory.moves = 0;
  state.memory.matches = 0;
  captureSessionProgressStart(state.memory);

  renderMemoryBoard();
  updateMemoryScoreboard();
  setMemoryStatus("卡片已经洗好啦，翻开两张试试看。");
  setGlobalMessage("动物翻翻乐准备好了，记住每张卡片的位置吧。");
}

function updateMemoryScoreboard() {
  ui.memory.moves.textContent = state.memory.moves;
  ui.memory.pairs.textContent = state.memory.matches;
  ui.memory.total.textContent = state.memory.deck.length / 2;
  ui.memory.best.textContent =
    state.storage.memoryBest === null ? "--" : state.storage.memoryBest;
}

function setMemoryStatus(message) {
  ui.memory.status.textContent = message;
}

function renderMemoryBoard() {
  ui.memory.board.innerHTML = "";

  state.memory.deck.forEach((card, index) => {
    const button = document.createElement("button");
    const inner = document.createElement("span");
    const front = document.createElement("span");
    const back = document.createElement("span");

    button.type = "button";
    button.className = "memory-card";
    button.setAttribute("aria-label", "翻开卡片");

    if (card.flipped) {
      button.classList.add("is-flipped");
    }

    if (card.matched) {
      button.classList.add("is-matched");
    }

    inner.className = "card-inner";
    front.className = "card-face card-front";
    back.className = "card-face card-back";

    front.textContent = "?";
    back.textContent = card.emoji;

    inner.append(front, back);
    button.appendChild(inner);
    button.addEventListener("click", () => flipMemoryCard(index));

    ui.memory.board.appendChild(button);
  });
}

function flipMemoryCard(index) {
  const card = state.memory.deck[index];

  if (state.memory.lock || card.flipped || card.matched) {
    return;
  }

  card.flipped = true;
  renderMemoryBoard();

  if (state.memory.firstIndex === null) {
    state.memory.firstIndex = index;
    setMemoryStatus("再翻一张，找找看有没有一样的小动物。");
    return;
  }

  state.memory.secondIndex = index;
  state.memory.moves += 1;
  state.memory.lock = true;
  updateMemoryScoreboard();

  const firstCard = state.memory.deck[state.memory.firstIndex];
  const secondCard = state.memory.deck[state.memory.secondIndex];

  if (firstCard.emoji === secondCard.emoji) {
    clearMemoryTimer();
    state.memory.resolveTimer = window.setTimeout(() => {
      firstCard.matched = true;
      secondCard.matched = true;
      state.memory.matches += 1;
      state.memory.firstIndex = null;
      state.memory.secondIndex = null;
      state.memory.lock = false;
      state.memory.resolveTimer = null;

      updateMemoryScoreboard();
      renderMemoryBoard();
      setMemoryStatus("找到了，真棒。");
      playFeedbackTone("success");
      awardStars(1, "成功配对一组小动物，得到 1 颗勇气星星。");

      if (state.memory.matches === state.memory.deck.length / 2) {
        finishMemoryGame();
      }
    }, 520);

    return;
  }

  setMemoryStatus("这两张不一样，再记一记它们的位置。");
  playFeedbackTone("wrong");

  clearMemoryTimer();
  state.memory.resolveTimer = window.setTimeout(() => {
    firstCard.flipped = false;
    secondCard.flipped = false;
    state.memory.firstIndex = null;
    state.memory.secondIndex = null;
    state.memory.lock = false;
    state.memory.resolveTimer = null;
    renderMemoryBoard();
  }, 780);
}

function finishMemoryGame() {
  updateBestScore("memoryBest", state.memory.moves, true);
  updateMemoryScoreboard();
  setMemoryStatus(`全都找到了。你用了 ${state.memory.moves} 步，真厉害。`);
  playFeedbackTone("success");
  awardStars(3, "翻翻乐通关啦，奖励 3 颗勇气星星。");
  enqueueRoundCelebration({
    panelId: "panel-memory",
    icon: "🐾",
    title: "动物翻翻乐通关啦",
    body: `这一轮把 ${state.memory.deck.length / 2} 组小动物全都配对好了，记忆力很棒。`,
    accent: "#4ecdc4",
    stats: buildRoundCelebrationStats({
      sessionStartStars: state.memory.sessionStartStars,
      sessionStartDoneCount: state.memory.sessionStartDoneCount,
      primaryLabel: "完成步数",
      primaryValue: `${state.memory.moves} 步`,
      panelId: "panel-memory",
    }),
  });
}

function updateColorScoreboard() {
  ui.color.score.textContent = state.color.score;
  ui.color.streak.textContent = state.color.streak;
  ui.color.best.textContent = state.storage.colorBest;
}

function setColorStatus(message) {
  ui.color.status.textContent = message;
}

function setupColorRound() {
  const profile = getDifficultyProfile();

  clearColorTimer();
  state.color.answered = false;
  state.color.selectedName = "";

  const choices = shuffle([...colorPool]);
  const target = choices[0];
  const options = shuffle([target, ...choices.slice(1, profile.colorOptionCount)]);

  state.color.current = {
    target,
    options,
  };

  renderColorRound();
  updateColorScoreboard();
}

function renderColorRound() {
  const { target, options } = state.color.current;
  ui.color.targetSwatch.style.background = target.value;
  ui.color.targetName.textContent = target.name;
  ui.color.options.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const swatch = document.createElement("span");
    const textWrap = document.createElement("span");
    const name = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = option.name === target.name;
    const isSelected = option.name === state.color.selectedName;

    button.type = "button";
    button.className = "color-option";
    button.disabled = state.color.answered;

    if (state.color.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.color.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    swatch.className = "color-option-swatch";
    swatch.style.background = option.value;

    name.textContent = option.name;
    tip.textContent = option.tip;
    textWrap.append(name, tip);
    button.append(swatch, textWrap);
    button.addEventListener("click", () => answerColor(option.name));

    ui.color.options.appendChild(button);
  });
}

function answerColor(selectedName) {
  if (state.color.answered) {
    return;
  }

  state.color.answered = true;
  state.color.selectedName = selectedName;

  const isCorrect = selectedName === state.color.current.target.name;

  if (isCorrect) {
    state.color.score += 1;
    state.color.streak += 1;
    updateBestScore("colorBest", state.color.streak);

    if (state.color.streak % 3 === 0) {
      awardStars(1, "颜色连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("颜色答对啦，继续下一题吧。");
    }

    playFeedbackTone("success");
    setColorStatus("答对了，颜色找得真快。");
  } else {
    state.color.streak = 0;
    setGlobalMessage("这一题没关系，下一题继续试试。");
    playFeedbackTone("wrong");
    setColorStatus(`差一点点，正确答案是 ${state.color.current.target.name}。`);
  }

  updateColorScoreboard();
  renderColorRound();

  state.color.roundTimer = window.setTimeout(() => {
    state.color.roundTimer = null;
    setupColorRound();
  }, 950);
}

function updateShadowScoreboard() {
  ui.shadow.score.textContent = state.shadow.score;
  ui.shadow.streak.textContent = state.shadow.streak;
  ui.shadow.best.textContent = state.storage.shadowBest;
}

function setShadowStatus(message) {
  ui.shadow.status.textContent = message;
}

function setupShadowRound() {
  const profile = getDifficultyProfile();

  clearShadowTimer();
  state.shadow.answered = false;
  state.shadow.selectedId = null;

  const choices = shuffle([...shadowCards]);
  const target = choices[0];
  const options = shuffle([target, ...choices.slice(1, profile.shadowOptionCount)]);

  state.shadow.current = {
    target,
    options,
  };

  renderShadowRound();
  updateShadowScoreboard();
}

function renderShadowRound() {
  const { target, options } = state.shadow.current;

  ui.shadow.emoji.textContent = target.emoji;
  ui.shadow.title.textContent = state.shadow.answered ? `${target.label} 的影子` : "神秘小影子";
  ui.shadow.note.textContent = state.shadow.answered
    ? `原来它是 ${target.label}。`
    : "从右边找出和它一模一样的朋友。";
  ui.shadow.options.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const emoji = document.createElement("span");
    const copy = document.createElement("span");
    const name = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = option.id === target.id;
    const isSelected = option.id === state.shadow.selectedId;

    button.type = "button";
    button.className = "shadow-option";
    button.disabled = state.shadow.answered;
    button.style.setProperty("--shadow-option-accent", option.accent);

    if (state.shadow.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.shadow.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    emoji.className = "shadow-option-emoji";
    emoji.textContent = option.emoji;

    copy.className = "shadow-option-copy";
    name.textContent = option.label;
    tip.textContent = "我是不是这个影子？";
    copy.append(name, tip);

    button.append(emoji, copy);
    button.addEventListener("click", () => answerShadow(option.id));
    ui.shadow.options.appendChild(button);
  });
}

function answerShadow(selectedId) {
  if (state.shadow.answered) {
    return;
  }

  state.shadow.answered = true;
  state.shadow.selectedId = selectedId;

  const isCorrect = selectedId === state.shadow.current.target.id;

  if (isCorrect) {
    state.shadow.score += 1;
    state.shadow.streak += 1;
    updateBestScore("shadowBest", state.shadow.streak);

    if (state.shadow.streak % 3 === 0) {
      awardStars(1, "影子找朋友连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找到了，影子朋友已经回来了。");
    }

    playFeedbackTone("success");
    setShadowStatus(`答对了，这个影子是 ${state.shadow.current.target.label}。`);
  } else {
    state.shadow.streak = 0;
    setGlobalMessage("差一点点，下一张影子再来试试。");
    playFeedbackTone("wrong");
    setShadowStatus(`正确答案是 ${state.shadow.current.target.label}。`);
  }

  updateShadowScoreboard();
  renderShadowRound();

  state.shadow.roundTimer = window.setTimeout(() => {
    state.shadow.roundTimer = null;
    setupShadowRound();
  }, 950);
}

function updateDifferentScoreboard() {
  ui.different.score.textContent = state.different.score;
  ui.different.streak.textContent = state.different.streak;
  ui.different.best.textContent = state.storage.differentBest;
}

function setDifferentStatus(message) {
  ui.different.status.textContent = message;
}

function setupDifferentRound() {
  const profile = getDifficultyProfile();

  clearDifferentTimer();
  state.different.answered = false;
  state.different.selectedIndex = null;

  const baseItems = shuffle([...differentItems]);
  const sameItem = baseItems[0];
  const oddItem = baseItems.find((item) => item.id !== sameItem.id) ?? differentItems[1];
  const cardCount = Math.max(4, profile.differentCardCount);
  const cards = shuffle([
    ...Array.from({ length: cardCount - 1 }, (_, index) => ({
      key: `same-${sameItem.id}-${index}`,
      kind: "same",
      item: sameItem,
    })),
    {
      key: `odd-${oddItem.id}`,
      kind: "odd",
      item: oddItem,
    },
  ]);

  state.different.current = {
    sameItem,
    oddItem,
    cards,
  };

  renderDifferentRound();
  updateDifferentScoreboard();
}

function renderDifferentRound() {
  const { oddItem, cards } = state.different.current;

  ui.different.title.textContent = state.different.answered ? `不一样的是 ${oddItem.label}` : "找出不一样的朋友";
  ui.different.note.textContent = state.different.answered
    ? `${oddItem.label} 和其他朋友不一样，你找到了吗？`
    : "看看右边这些小图案，点一下和其他不同的那个。";
  ui.different.options.innerHTML = "";

  cards.forEach((card, index) => {
    const button = document.createElement("button");
    const emoji = document.createElement("span");
    const label = document.createElement("strong");
    const isCorrect = card.kind === "odd";
    const isSelected = state.different.selectedIndex === index;

    button.type = "button";
    button.className = "different-option";
    button.disabled = state.different.answered;
    button.style.setProperty("--different-option-accent", card.item.accent);

    if (state.different.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.different.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    emoji.className = "different-option-emoji";
    emoji.textContent = card.item.emoji;

    label.textContent = card.item.label;
    button.append(emoji, label);
    button.addEventListener("click", () => answerDifferent(index));
    ui.different.options.appendChild(button);
  });
}

function answerDifferent(selectedIndex) {
  if (state.different.answered) {
    return;
  }

  state.different.answered = true;
  state.different.selectedIndex = selectedIndex;

  const selectedCard = state.different.current.cards[selectedIndex];
  const isCorrect = selectedCard.kind === "odd";

  if (isCorrect) {
    state.different.score += 1;
    state.different.streak += 1;
    updateBestScore("differentBest", state.different.streak);

    if (state.different.streak % 3 === 0) {
      awardStars(1, "找不同连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找到了，这个朋友和大家不一样。");
    }

    playFeedbackTone("success");
    setDifferentStatus(`答对了，不一样的是 ${state.different.current.oddItem.label}。`);
  } else {
    state.different.streak = 0;
    setGlobalMessage("差一点点，再仔细看看下一组图案。");
    playFeedbackTone("wrong");
    setDifferentStatus(`正确答案是 ${state.different.current.oddItem.label}。`);
  }

  updateDifferentScoreboard();
  renderDifferentRound();

  state.different.roundTimer = window.setTimeout(() => {
    state.different.roundTimer = null;
    setupDifferentRound();
  }, 950);
}

function updateCountingScoreboard() {
  ui.counting.score.textContent = state.counting.score;
  ui.counting.streak.textContent = state.counting.streak;
  ui.counting.best.textContent = state.storage.countingBest;
}

function setCountingStatus(message) {
  ui.counting.status.textContent = message;
}

function setupCountingRound() {
  const profile = getDifficultyProfile();

  clearCountingTimer();
  state.counting.answered = false;
  state.counting.selectedValue = null;

  const item = sample(countingItems);
  const total = randomBetween(1, profile.countingMax);
  const options = shuffle([total, ...pickDifferentNumbers(total, 2, 1, profile.countingMax)]);

  state.counting.current = {
    item,
    total,
    options,
  };

  renderCountingRound();
  updateCountingScoreboard();
}

function renderCountingRound() {
  const { item, total, options } = state.counting.current;
  ui.counting.question.textContent = `数一数，有几个${item.label}？`;
  ui.counting.display.innerHTML = "";
  ui.counting.options.innerHTML = "";

  for (let index = 0; index < total; index += 1) {
    const token = document.createElement("div");
    token.className = "count-token";
    token.textContent = item.emoji;
    ui.counting.display.appendChild(token);
  }

  options.forEach((value) => {
    const button = document.createElement("button");
    const isCorrect = value === total;
    const isSelected = value === state.counting.selectedValue;

    button.type = "button";
    button.className = "count-option";
    button.textContent = value;
    button.disabled = state.counting.answered;

    if (state.counting.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.counting.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    button.addEventListener("click", () => answerCounting(value));
    ui.counting.options.appendChild(button);
  });
}

function updateSizeScoreboard() {
  ui.size.score.textContent = state.size.score;
  ui.size.streak.textContent = state.size.streak;
  ui.size.best.textContent = state.storage.sizeBest;
}

function setSizeStatus(message) {
  ui.size.status.textContent = message;
}

function getSizeRoundScales(count) {
  if (count <= 3) {
    return [
      { id: "small", scale: 0.82 },
      { id: "medium", scale: 1.08 },
      { id: "large", scale: 1.38 },
    ];
  }

  if (count === 4) {
    return [
      { id: "tiny", scale: 0.76 },
      { id: "small", scale: 0.96 },
      { id: "medium", scale: 1.16 },
      { id: "large", scale: 1.4 },
    ];
  }

  return [
    { id: "tiny", scale: 0.72 },
    { id: "small", scale: 0.88 },
    { id: "medium", scale: 1.04 },
    { id: "large", scale: 1.24 },
    { id: "giant", scale: 1.48 },
  ];
}

function setupSizeRound() {
  const profile = getDifficultyProfile();
  const item = sample(sizeItems);
  const scaleCards = getSizeRoundScales(profile.sizeOptionCount);
  const orderedCards = scaleCards.map((entry, index) => ({
    key: `${item.id}-${entry.id}`,
    order: index + 1,
    scale: entry.scale,
  }));

  clearSizeTimer();
  state.size.answered = false;
  state.size.pickedKeys = [];
  state.size.nextIndex = 0;
  state.size.wrongKey = null;
  state.size.current = {
    item,
    cards: shuffle([...orderedCards]),
    orderedKeys: orderedCards.map((card) => card.key),
  };

  renderSizeRound();
  updateSizeScoreboard();
  setSizeStatus("先找最小的朋友，再一点点找到更大的。");
}

function renderSizeRound() {
  const { item, cards } = state.size.current;
  const totalSteps = cards.length;

  ui.size.icon.textContent = item.emoji;
  ui.size.title.textContent = state.size.answered
    ? state.size.wrongKey
      ? `正确顺序是从小到大的 ${item.label}`
      : `${item.label} 已经排好队啦`
    : `帮${item.label}排好队`;
  ui.size.note.textContent = state.size.answered
    ? state.size.wrongKey
      ? "看看每个角上的数字，再来试一轮就会更熟练。"
      : "这一次全都排对了，下一组大小马上就来。"
    : `现在要排第 ${state.size.nextIndex + 1} 步，共 ${totalSteps} 步。`;
  ui.size.options.innerHTML = "";

  cards.forEach((card) => {
    const button = document.createElement("button");
    const preview = document.createElement("span");
    const emoji = document.createElement("span");
    const label = document.createElement("strong");
    const note = document.createElement("small");
    const pickedIndex = state.size.pickedKeys.indexOf(card.key);
    const showOrder = state.size.answered || pickedIndex >= 0;

    button.type = "button";
    button.className = "size-option";
    button.disabled = state.size.answered || pickedIndex >= 0;
    button.style.setProperty("--size-option-accent", item.accent);
    button.style.setProperty("--size-scale", String(card.scale));
    button.setAttribute("aria-label", `${item.label} 大小选项`);

    if (pickedIndex >= 0) {
      button.classList.add("is-picked");
    }

    if (state.size.answered) {
      button.classList.add("is-solution");
    }

    if (state.size.wrongKey === card.key) {
      button.classList.add("is-wrong");
    }

    preview.className = "size-option-preview";
    emoji.className = "size-option-emoji";
    emoji.textContent = item.emoji;
    preview.appendChild(emoji);

    label.textContent = item.label;
    note.textContent = showOrder ? `排第 ${card.order} 个` : "轻轻看看谁更小";
    button.append(preview, label, note);

    if (showOrder) {
      const order = document.createElement("span");
      order.className = "size-option-order";
      order.textContent = card.order;
      button.appendChild(order);
    }

    button.addEventListener("click", () => answerSize(card.key));
    ui.size.options.appendChild(button);
  });
}

function answerSize(selectedKey) {
  if (state.size.answered || state.size.pickedKeys.includes(selectedKey)) {
    return;
  }

  const expectedKey = state.size.current.orderedKeys[state.size.nextIndex];
  const isCorrect = selectedKey === expectedKey;

  if (isCorrect) {
    state.size.pickedKeys.push(selectedKey);
    state.size.nextIndex += 1;
    playFeedbackTone("success");

    if (state.size.nextIndex >= state.size.current.orderedKeys.length) {
      state.size.answered = true;
      state.size.score += 1;
      state.size.streak += 1;
      updateBestScore("sizeBest", state.size.streak);

      if (state.size.streak % 3 === 0) {
        awardStars(1, "大小排排队连对 3 题，得到 1 颗勇气星星。");
      } else {
        setGlobalMessage("排好啦，这些朋友已经从小到大站整齐了。");
      }

      setSizeStatus(`答对了，${state.size.current.item.label}已经从小排到大啦。`);
      updateSizeScoreboard();
      renderSizeRound();
      state.size.roundTimer = window.setTimeout(() => {
        state.size.roundTimer = null;
        setupSizeRound();
      }, 1050);
      return;
    }

    renderSizeRound();
    setSizeStatus(`排对了，继续找第 ${state.size.nextIndex + 1} 个。`);
    setGlobalMessage("很好，继续找更大的朋友。");
    return;
  }

  state.size.answered = true;
  state.size.wrongKey = selectedKey;
  state.size.streak = 0;
  playFeedbackTone("wrong");
  setGlobalMessage("差一点点，看看正确顺序，下一轮再来。");
  setSizeStatus("顺序应该从最小到最大，先找更小的那一个。");
  updateSizeScoreboard();
  renderSizeRound();

  state.size.roundTimer = window.setTimeout(() => {
    state.size.roundTimer = null;
    setupSizeRound();
  }, 1150);
}

function updateHomeScoreboard() {
  ui.home.score.textContent = state.home.score;
  ui.home.streak.textContent = state.home.streak;
  ui.home.best.textContent = state.storage.homeBest;
}

function setHomeStatus(message) {
  ui.home.status.textContent = message;
}

function setupHomeRound() {
  const profile = getDifficultyProfile();
  const item = sample(homeItems);
  const correctPlace = homePlaces.find((place) => place.id === item.placeId) ?? homePlaces[0];
  const distractors = shuffle(homePlaces.filter((place) => place.id !== correctPlace.id)).slice(
    0,
    Math.max(2, profile.homeOptionCount) - 1,
  );
  const options = shuffle([correctPlace, ...distractors]);

  clearHomeTimer();
  state.home.answered = false;
  state.home.selectedPlaceId = null;
  state.home.current = {
    item,
    correctPlace,
    options,
  };

  renderHomeRound();
  updateHomeScoreboard();
  setHomeStatus("看看它属于哪里，再送它回到正确的地方。");
}

function renderHomeRound() {
  const { item, correctPlace, options } = state.home.current;

  ui.home.emoji.textContent = item.emoji;
  ui.home.title.textContent = state.home.answered ? `${item.label} 回到 ${correctPlace.label} 啦` : `帮${item.label}回家`;
  ui.home.note.textContent = state.home.answered
    ? `${item.label} 最适合去 ${correctPlace.label}。`
    : "下面哪个地方最适合它呢？";
  ui.home.options.innerHTML = "";

  options.forEach((place) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = place.id === correctPlace.id;
    const isSelected = place.id === state.home.selectedPlaceId;

    button.type = "button";
    button.className = "home-option";
    button.disabled = state.home.answered;
    button.style.setProperty("--home-option-accent", place.accent);

    if (state.home.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.home.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "home-option-icon";
    icon.textContent = place.emoji;

    copy.className = "home-option-copy";
    title.textContent = place.label;
    tip.textContent = place.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerHome(place.id));
    ui.home.options.appendChild(button);
  });
}

function answerHome(selectedPlaceId) {
  if (state.home.answered) {
    return;
  }

  state.home.answered = true;
  state.home.selectedPlaceId = selectedPlaceId;

  const isCorrect = selectedPlaceId === state.home.current.correctPlace.id;

  if (isCorrect) {
    state.home.score += 1;
    state.home.streak += 1;
    updateBestScore("homeBest", state.home.streak);

    if (state.home.streak % 3 === 0) {
      awardStars(1, "帮它回家连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("送到家啦，小东西已经找到自己的地方。");
    }

    playFeedbackTone("success");
    setHomeStatus(`答对了，${state.home.current.item.label} 应该去 ${state.home.current.correctPlace.label}。`);
  } else {
    state.home.streak = 0;
    setGlobalMessage("这一题记住它的家，下一题继续试试。");
    playFeedbackTone("wrong");
    setHomeStatus(`正确答案是 ${state.home.current.correctPlace.label}。`);
  }

  updateHomeScoreboard();
  renderHomeRound();

  state.home.roundTimer = window.setTimeout(() => {
    state.home.roundTimer = null;
    setupHomeRound();
  }, 980);
}

function answerCounting(selectedValue) {
  if (state.counting.answered) {
    return;
  }

  state.counting.answered = true;
  state.counting.selectedValue = selectedValue;

  const isCorrect = selectedValue === state.counting.current.total;

  if (isCorrect) {
    state.counting.score += 1;
    state.counting.streak += 1;
    updateBestScore("countingBest", state.counting.streak);

    if (state.counting.streak % 2 === 0) {
      awardStars(1, "数数连对 2 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("数得真认真，继续下一题。");
    }

    playFeedbackTone("success");
    setCountingStatus("答对啦，数数真仔细。");
  } else {
    state.counting.streak = 0;
    setGlobalMessage("这题先记住答案，下一题继续加油。");
    playFeedbackTone("wrong");
    setCountingStatus(`正确答案是 ${state.counting.current.total}。`);
  }

  updateCountingScoreboard();
  renderCountingRound();

  state.counting.roundTimer = window.setTimeout(() => {
    state.counting.roundTimer = null;
    setupCountingRound();
  }, 950);
}

function updateMoreScoreboard() {
  ui.more.score.textContent = state.more.score;
  ui.more.streak.textContent = state.more.streak;
  ui.more.best.textContent = state.storage.moreBest;
}

function setMoreStatus(message) {
  ui.more.status.textContent = message;
}

function setupMoreRound() {
  const profile = getDifficultyProfile();
  const item = sample(moreItems);
  const maxCount = Math.max(3, Number(profile.moreMaxCount) || 6);
  const minGap = Math.max(1, Number(profile.moreMinGap) || 1);
  const largerCount = randomBetween(Math.min(maxCount, minGap + 1), maxCount);
  const smallerCount = randomBetween(1, Math.max(1, largerCount - minGap));
  const correctSide = sample(["left", "right"]);

  clearMoreTimer();
  state.more.answered = false;
  state.more.selectedSide = "";
  state.more.current = {
    item,
    leftCount: correctSide === "left" ? largerCount : smallerCount,
    rightCount: correctSide === "right" ? largerCount : smallerCount,
    correctSide,
  };

  renderMoreRound();
  updateMoreScoreboard();
  setMoreStatus("看看左边和右边，找出更多的那一边。");
}

function renderMoreRound() {
  const { item, correctSide, leftCount, rightCount } = state.more.current;

  ui.more.question.textContent = state.more.answered
    ? `${correctSide === "left" ? "左边" : "右边"}的${item.label}更多`
    : `哪边的${item.label}更多？`;

  renderMoreSide(ui.more.left, "left", leftCount);
  renderMoreSide(ui.more.right, "right", rightCount);
}

function renderMoreSide(button, side, count) {
  const { item, correctSide } = state.more.current;
  const isCorrect = side === correctSide;
  const isSelected = side === state.more.selectedSide;
  const head = document.createElement("div");
  const label = document.createElement("span");
  const countText = document.createElement("span");
  const tokens = document.createElement("div");
  const tip = document.createElement("p");

  button.className = "more-side";
  button.disabled = state.more.answered;
  button.style.setProperty("--more-side-accent", item.accent);
  button.setAttribute("aria-label", `${side === "left" ? "左边" : "右边"}的${item.label}数量比较`);

  if (state.more.answered && isCorrect) {
    button.classList.add("is-correct");
  }

  if (state.more.answered && isSelected && !isCorrect) {
    button.classList.add("is-wrong");
  }

  head.className = "more-side-head";
  label.className = "more-side-label";
  countText.className = "more-side-count";
  label.textContent = side === "left" ? "左边" : "右边";
  countText.textContent = state.more.answered ? `${count} 个` : "轻轻比一比";
  head.append(label, countText);

  tokens.className = "more-side-tokens";
  Array.from({ length: count }, (_, index) => {
    const token = document.createElement("span");

    token.className = "more-token";
    token.textContent = item.emoji;
    token.style.setProperty("--token-index", String(index));
    tokens.appendChild(token);
  });

  tip.className = "more-side-tip";
  tip.textContent = state.more.answered ? `${item.label}一共有 ${count} 个。` : "点这一边，告诉我哪边更多。";

  button.replaceChildren(head, tokens, tip);
}

function answerMore(selectedSide) {
  if (state.more.answered) {
    return;
  }

  state.more.answered = true;
  state.more.selectedSide = selectedSide;

  const isCorrect = selectedSide === state.more.current.correctSide;

  if (isCorrect) {
    state.more.score += 1;
    state.more.streak += 1;
    updateBestScore("moreBest", state.more.streak);

    if (state.more.streak % 3 === 0) {
      awardStars(1, "比一比谁更多连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找到了，更多的那一边被你发现啦。");
    }

    playFeedbackTone("success");
    setMoreStatus(`答对了，${state.more.current.correctSide === "left" ? "左边" : "右边"}的${state.more.current.item.label}更多。`);
  } else {
    state.more.streak = 0;
    setGlobalMessage("这一题先记住，下一题继续比一比。");
    playFeedbackTone("wrong");
    setMoreStatus(`正确答案是${state.more.current.correctSide === "left" ? "左边" : "右边"}。`);
  }

  updateMoreScoreboard();
  renderMoreRound();

  state.more.roundTimer = window.setTimeout(() => {
    state.more.roundTimer = null;
    setupMoreRound();
  }, 980);
}

function updateShapeScoreboard() {
  ui.shape.score.textContent = state.shape.score;
  ui.shape.streak.textContent = state.shape.streak;
  ui.shape.best.textContent = state.storage.shapeBest;
}

function setShapeStatus(message) {
  ui.shape.status.textContent = message;
}

function setupShapeRound() {
  const profile = getDifficultyProfile();
  const choices = shuffle([...shapeCards]);
  const target = choices[0];
  const options = shuffle([target, ...choices.slice(1, profile.shapeOptionCount)]);

  clearShapeTimer();
  state.shape.answered = false;
  state.shape.selectedId = null;
  state.shape.current = {
    target,
    options,
  };

  renderShapeRound();
  updateShapeScoreboard();
  setShapeStatus("看看上面的形状，再找出一模一样的朋友。");
}

function renderShapeRound() {
  const { target, options } = state.shape.current;

  ui.shape.icon.textContent = target.symbol;
  ui.shape.icon.style.color = target.accent;
  ui.shape.title.textContent = state.shape.answered ? `找到 ${target.label} 啦` : target.label;
  ui.shape.note.textContent = state.shape.answered
    ? `${target.label} 就是这个样子。`
    : "下面哪个和它长得一模一样呢？";
  ui.shape.options.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = option.id === target.id;
    const isSelected = option.id === state.shape.selectedId;

    button.type = "button";
    button.className = "shape-option";
    button.disabled = state.shape.answered;
    button.style.setProperty("--shape-option-accent", option.accent);

    if (state.shape.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.shape.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "shape-option-icon";
    icon.textContent = option.symbol;

    copy.className = "shape-option-copy";
    title.textContent = option.label;
    tip.textContent = option.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerShape(option.id));
    ui.shape.options.appendChild(button);
  });
}

function answerShape(selectedId) {
  if (state.shape.answered) {
    return;
  }

  state.shape.answered = true;
  state.shape.selectedId = selectedId;

  const isCorrect = selectedId === state.shape.current.target.id;

  if (isCorrect) {
    state.shape.score += 1;
    state.shape.streak += 1;
    updateBestScore("shapeBest", state.shape.streak);

    if (state.shape.streak % 3 === 0) {
      awardStars(1, "形状找找看连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找到了，这个形状被你认出来啦。");
    }

    playFeedbackTone("success");
    setShapeStatus(`答对了，这就是 ${state.shape.current.target.label}。`);
  } else {
    state.shape.streak = 0;
    setGlobalMessage("差一点点，记住这个形状，下一题继续试试。");
    playFeedbackTone("wrong");
    setShapeStatus(`正确答案是 ${state.shape.current.target.label}。`);
  }

  updateShapeScoreboard();
  renderShapeRound();

  state.shape.roundTimer = window.setTimeout(() => {
    state.shape.roundTimer = null;
    setupShapeRound();
  }, 960);
}

function updateSortScoreboard() {
  ui.sort.score.textContent = state.sort.score;
  ui.sort.streak.textContent = state.sort.streak;
  ui.sort.best.textContent = state.storage.sortBest;
}

function setSortStatus(message) {
  ui.sort.status.textContent = message;
}

function setupSortRound() {
  const profile = getDifficultyProfile();
  const item = sample(sortItems);
  const correctCategory = sortCategories.find((category) => category.id === item.categoryId) ?? sortCategories[0];
  const distractors = shuffle(sortCategories.filter((category) => category.id !== correctCategory.id)).slice(
    0,
    Math.max(2, profile.sortOptionCount) - 1,
  );
  const options = shuffle([correctCategory, ...distractors]);

  clearSortTimer();
  state.sort.answered = false;
  state.sort.selectedCategoryId = null;
  state.sort.current = {
    item,
    correctCategory,
    options,
  };

  renderSortRound();
  updateSortScoreboard();
  setSortStatus("看看这个小东西，再找出它属于哪一类。");
}

function renderSortRound() {
  const { item, correctCategory, options } = state.sort.current;

  ui.sort.emoji.textContent = item.emoji;
  ui.sort.title.textContent = state.sort.answered ? `${item.label} 属于 ${correctCategory.label}` : item.label;
  ui.sort.note.textContent = state.sort.answered
    ? `${item.label} 应该放进 ${correctCategory.label}。`
    : "下面哪个分类最适合它呢？";
  ui.sort.options.innerHTML = "";

  options.forEach((category) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = category.id === correctCategory.id;
    const isSelected = category.id === state.sort.selectedCategoryId;

    button.type = "button";
    button.className = "sort-option";
    button.disabled = state.sort.answered;
    button.style.setProperty("--sort-option-accent", category.accent);

    if (state.sort.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.sort.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "sort-option-icon";
    icon.textContent = category.emoji;

    copy.className = "sort-option-copy";
    title.textContent = category.label;
    tip.textContent = category.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerSort(category.id));
    ui.sort.options.appendChild(button);
  });
}

function answerSort(selectedCategoryId) {
  if (state.sort.answered) {
    return;
  }

  state.sort.answered = true;
  state.sort.selectedCategoryId = selectedCategoryId;

  const isCorrect = selectedCategoryId === state.sort.current.correctCategory.id;

  if (isCorrect) {
    state.sort.score += 1;
    state.sort.streak += 1;
    updateBestScore("sortBest", state.sort.streak);

    if (state.sort.streak % 3 === 0) {
      awardStars(1, "分类小高手连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("分对啦，小东西已经找到自己的分类。");
    }

    playFeedbackTone("success");
    setSortStatus(`答对了，${state.sort.current.item.label} 属于 ${state.sort.current.correctCategory.label}。`);
  } else {
    state.sort.streak = 0;
    setGlobalMessage("这一题先记住它的分类，下一题继续试试。");
    playFeedbackTone("wrong");
    setSortStatus(`正确答案是 ${state.sort.current.correctCategory.label}。`);
  }

  updateSortScoreboard();
  renderSortRound();

  state.sort.roundTimer = window.setTimeout(() => {
    state.sort.roundTimer = null;
    setupSortRound();
  }, 980);
}

function updatePositionScoreboard() {
  ui.position.score.textContent = state.position.score;
  ui.position.streak.textContent = state.position.streak;
  ui.position.best.textContent = state.storage.positionBest;
}

function setPositionStatus(message) {
  ui.position.status.textContent = message;
}

function setupPositionRound() {
  const profile = getDifficultyProfile();
  const availableSlots = positionSlots.filter((slot) => profile.positionAllowCorners || !slot.isCorner);
  const slot = sample(availableSlots);
  const item = sample(positionItems);
  const distractors = shuffle(availableSlots.filter((candidate) => candidate.id !== slot.id)).slice(
    0,
    Math.max(2, profile.positionOptionCount) - 1,
  );
  const options = shuffle([slot, ...distractors]);

  clearPositionTimer();
  state.position.answered = false;
  state.position.selectedSlotId = null;
  state.position.current = {
    item,
    slot,
    options,
  };

  renderPositionRound();
  updatePositionScoreboard();
  setPositionStatus("看看方格里的小东西，再说说它在什么位置。");
}

function renderPositionRound() {
  const { item, slot, options } = state.position.current;

  ui.position.emoji.textContent = item.emoji;
  ui.position.title.textContent = state.position.answered ? `${item.label} 在${slot.label}` : `${item.label} 在哪里？`;
  ui.position.note.textContent = state.position.answered
    ? `${item.label} 就在${slot.tip}。`
    : "看看九宫格里的小东西，再找出它的位置。";
  ui.position.board.innerHTML = "";
  ui.position.options.innerHTML = "";

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      const cell = document.createElement("div");
      const isTarget = row === slot.row && col === slot.col;

      cell.className = "position-cell";

      if (isTarget) {
        const token = document.createElement("span");
        token.className = "position-item";
        token.textContent = item.emoji;
        cell.classList.add("has-item");
        cell.style.setProperty("--position-cell-accent", slot.accent);
        cell.appendChild(token);
      } else {
        const dot = document.createElement("span");
        dot.className = "position-cell-dot";
        dot.textContent = "·";
        cell.appendChild(dot);
      }

      ui.position.board.appendChild(cell);
    }
  }

  options.forEach((option) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = option.id === slot.id;
    const isSelected = option.id === state.position.selectedSlotId;

    button.type = "button";
    button.className = "position-option";
    button.disabled = state.position.answered;
    button.style.setProperty("--position-option-accent", option.accent);

    if (state.position.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.position.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "position-option-icon";
    icon.textContent = option.symbol;

    copy.className = "position-option-copy";
    title.textContent = option.label;
    tip.textContent = option.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerPosition(option.id));
    ui.position.options.appendChild(button);
  });
}

function answerPosition(selectedSlotId) {
  if (state.position.answered) {
    return;
  }

  state.position.answered = true;
  state.position.selectedSlotId = selectedSlotId;

  const isCorrect = selectedSlotId === state.position.current.slot.id;

  if (isCorrect) {
    state.position.score += 1;
    state.position.streak += 1;
    updateBestScore("positionBest", state.position.streak);

    if (state.position.streak % 3 === 0) {
      awardStars(1, "位置找找看连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找对啦，小东西的位置被你发现了。");
    }

    playFeedbackTone("success");
    setPositionStatus(`答对了，${state.position.current.item.label} 在${state.position.current.slot.label}。`);
  } else {
    state.position.streak = 0;
    setGlobalMessage("这一题记住它的位置，下一题继续试试。");
    playFeedbackTone("wrong");
    setPositionStatus(`正确答案是 ${state.position.current.slot.label}。`);
  }

  updatePositionScoreboard();
  renderPositionRound();

  state.position.roundTimer = window.setTimeout(() => {
    state.position.roundTimer = null;
    setupPositionRound();
  }, 980);
}

function updateFoodScoreboard() {
  ui.food.score.textContent = state.food.score;
  ui.food.streak.textContent = state.food.streak;
  ui.food.best.textContent = state.storage.foodBest;
}

function setFoodStatus(message) {
  ui.food.status.textContent = message;
}

function setupFoodRound() {
  const profile = getDifficultyProfile();
  const animal = sample(foodAnimals);
  const correctFood = foodChoices.find((choice) => choice.id === animal.foodId) ?? foodChoices[0];
  const distractors = shuffle(foodChoices.filter((choice) => choice.id !== correctFood.id)).slice(
    0,
    Math.max(2, profile.foodOptionCount) - 1,
  );
  const options = shuffle([correctFood, ...distractors]);

  clearFoodTimer();
  state.food.answered = false;
  state.food.selectedFoodId = null;
  state.food.current = {
    animal,
    correctFood,
    options,
  };

  renderFoodRound();
  updateFoodScoreboard();
  setFoodStatus("看看小动物，再找出它最想吃的食物。");
}

function renderFoodRound() {
  const { animal, correctFood, options } = state.food.current;

  ui.food.emoji.textContent = animal.emoji;
  ui.food.title.textContent = state.food.answered ? `${animal.label} 吃到 ${correctFood.label} 啦` : `${animal.label} 爱吃什么？`;
  ui.food.note.textContent = state.food.answered
    ? `${animal.label} 最喜欢 ${correctFood.label}。`
    : animal.note;
  ui.food.options.innerHTML = "";

  options.forEach((choice) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = choice.id === correctFood.id;
    const isSelected = choice.id === state.food.selectedFoodId;

    button.type = "button";
    button.className = "food-option";
    button.disabled = state.food.answered;
    button.style.setProperty("--food-option-accent", choice.accent);

    if (state.food.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.food.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "food-option-icon";
    icon.textContent = choice.emoji;

    copy.className = "food-option-copy";
    title.textContent = choice.label;
    tip.textContent = choice.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerFood(choice.id));
    ui.food.options.appendChild(button);
  });
}

function answerFood(selectedFoodId) {
  if (state.food.answered) {
    return;
  }

  state.food.answered = true;
  state.food.selectedFoodId = selectedFoodId;

  const isCorrect = selectedFoodId === state.food.current.correctFood.id;

  if (isCorrect) {
    state.food.score += 1;
    state.food.streak += 1;
    updateBestScore("foodBest", state.food.streak);

    if (state.food.streak % 3 === 0) {
      awardStars(1, "喂喂小动物连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("喂对啦，小动物吃得开开心心。");
    }

    playFeedbackTone("success");
    setFoodStatus(`答对了，${state.food.current.animal.label} 最喜欢 ${state.food.current.correctFood.label}。`);
  } else {
    state.food.streak = 0;
    setGlobalMessage("这一题记住它爱吃什么，下一题继续试试。");
    playFeedbackTone("wrong");
    setFoodStatus(`正确答案是 ${state.food.current.correctFood.label}。`);
  }

  updateFoodScoreboard();
  renderFoodRound();

  state.food.roundTimer = window.setTimeout(() => {
    state.food.roundTimer = null;
    setupFoodRound();
  }, 980);
}

function updateFamilyScoreboard() {
  ui.family.score.textContent = state.family.score;
  ui.family.streak.textContent = state.family.streak;
  ui.family.best.textContent = state.storage.familyBest;
}

function setFamilyStatus(message) {
  ui.family.status.textContent = message;
}

function setupFamilyRound() {
  const profile = getDifficultyProfile();
  const baby = sample(familyBabies);
  const correctParent = familyParents.find((parent) => parent.id === baby.parentId) ?? familyParents[0];
  const distractors = shuffle(familyParents.filter((parent) => parent.id !== correctParent.id)).slice(
    0,
    Math.max(2, profile.familyOptionCount) - 1,
  );
  const options = shuffle([correctParent, ...distractors]);

  clearFamilyTimer();
  state.family.answered = false;
  state.family.selectedParentId = null;
  state.family.current = {
    baby,
    correctParent,
    options,
  };

  renderFamilyRound();
  updateFamilyScoreboard();
  setFamilyStatus("看看这个小宝宝，再找出它的妈妈。");
}

function renderFamilyRound() {
  const { baby, correctParent, options } = state.family.current;

  ui.family.emoji.textContent = baby.emoji;
  ui.family.title.textContent = state.family.answered ? `${baby.label} 找到 ${correctParent.label} 啦` : `${baby.label} 在找妈妈`;
  ui.family.note.textContent = state.family.answered
    ? `${baby.label} 终于回到 ${correctParent.label} 身边啦。`
    : baby.note;
  ui.family.options.innerHTML = "";

  options.forEach((parent) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = parent.id === correctParent.id;
    const isSelected = parent.id === state.family.selectedParentId;

    button.type = "button";
    button.className = "family-option";
    button.disabled = state.family.answered;
    button.style.setProperty("--family-option-accent", parent.accent);

    if (state.family.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.family.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "family-option-icon";
    icon.textContent = parent.emoji;

    copy.className = "family-option-copy";
    title.textContent = parent.label;
    tip.textContent = parent.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerFamily(parent.id));
    ui.family.options.appendChild(button);
  });
}

function answerFamily(selectedParentId) {
  if (state.family.answered) {
    return;
  }

  state.family.answered = true;
  state.family.selectedParentId = selectedParentId;

  const isCorrect = selectedParentId === state.family.current.correctParent.id;

  if (isCorrect) {
    state.family.score += 1;
    state.family.streak += 1;
    updateBestScore("familyBest", state.family.streak);

    if (state.family.streak % 3 === 0) {
      awardStars(1, "宝宝找妈妈连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("找到啦，宝宝已经回到妈妈身边。");
    }

    playFeedbackTone("success");
    setFamilyStatus(`答对了，${state.family.current.baby.label} 的妈妈是 ${state.family.current.correctParent.label}。`);
  } else {
    state.family.streak = 0;
    setGlobalMessage("这一题先记住，下一题继续帮宝宝找妈妈。");
    playFeedbackTone("wrong");
    setFamilyStatus(`正确答案是 ${state.family.current.correctParent.label}。`);
  }

  updateFamilyScoreboard();
  renderFamilyRound();

  state.family.roundTimer = window.setTimeout(() => {
    state.family.roundTimer = null;
    setupFamilyRound();
  }, 980);
}

function updateWeatherScoreboard() {
  ui.weather.score.textContent = state.weather.score;
  ui.weather.streak.textContent = state.weather.streak;
  ui.weather.best.textContent = state.storage.weatherBest;
}

function setWeatherStatus(message) {
  ui.weather.status.textContent = message;
}

function setupWeatherRound() {
  const profile = getDifficultyProfile();
  const scene = sample(weatherScenes);
  const correctWear = weatherWearChoices.find((wear) => wear.id === scene.wearId) ?? weatherWearChoices[0];
  const distractors = shuffle(weatherWearChoices.filter((wear) => wear.id !== correctWear.id)).slice(
    0,
    Math.max(2, profile.weatherOptionCount) - 1,
  );
  const options = shuffle([correctWear, ...distractors]);

  clearWeatherTimer();
  state.weather.answered = false;
  state.weather.selectedWearId = null;
  state.weather.current = {
    scene,
    correctWear,
    options,
  };

  renderWeatherRound();
  updateWeatherScoreboard();
  setWeatherStatus("看看今天的天气，再选一件最合适的东西。");
}

function renderWeatherRound() {
  const { scene, correctWear, options } = state.weather.current;

  ui.weather.emoji.textContent = scene.emoji;
  ui.weather.title.textContent = state.weather.answered ? `${scene.label} 选 ${correctWear.label} 就对啦` : `${scene.label} 要带什么？`;
  ui.weather.note.textContent = state.weather.answered ? `${correctWear.label} 很适合 ${scene.label}。` : scene.note;
  ui.weather.options.innerHTML = "";

  options.forEach((wear) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = wear.id === correctWear.id;
    const isSelected = wear.id === state.weather.selectedWearId;

    button.type = "button";
    button.className = "weather-option";
    button.disabled = state.weather.answered;
    button.style.setProperty("--weather-option-accent", wear.accent);

    if (state.weather.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.weather.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "weather-option-icon";
    icon.textContent = wear.emoji;

    copy.className = "weather-option-copy";
    title.textContent = wear.label;
    tip.textContent = wear.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerWeather(wear.id));
    ui.weather.options.appendChild(button);
  });
}

function answerWeather(selectedWearId) {
  if (state.weather.answered) {
    return;
  }

  state.weather.answered = true;
  state.weather.selectedWearId = selectedWearId;

  const isCorrect = selectedWearId === state.weather.current.correctWear.id;

  if (isCorrect) {
    state.weather.score += 1;
    state.weather.streak += 1;
    updateBestScore("weatherBest", state.weather.streak);

    if (state.weather.streak % 3 === 0) {
      awardStars(1, "天气穿什么连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("选得真合适，这种天气出门会更舒服。");
    }

    playFeedbackTone("success");
    setWeatherStatus(`答对了，${state.weather.current.scene.label} 最适合带 ${state.weather.current.correctWear.label}。`);
  } else {
    state.weather.streak = 0;
    setGlobalMessage("这一题先记住这种天气适合什么，下一题继续试试。");
    playFeedbackTone("wrong");
    setWeatherStatus(`正确答案是 ${state.weather.current.correctWear.label}。`);
  }

  updateWeatherScoreboard();
  renderWeatherRound();

  state.weather.roundTimer = window.setTimeout(() => {
    state.weather.roundTimer = null;
    setupWeatherRound();
  }, 980);
}

function updateDayNightScoreboard() {
  ui.dayNight.score.textContent = state.dayNight.score;
  ui.dayNight.streak.textContent = state.dayNight.streak;
  ui.dayNight.best.textContent = state.storage.dayNightBest;
}

function setDayNightStatus(message) {
  ui.dayNight.status.textContent = message;
}

function setupDayNightRound() {
  const profile = getDifficultyProfile();
  const prompt = sample(dayNightPrompts);
  const correctPeriod = dayNightPeriods.find((period) => period.id === prompt.periodId) ?? dayNightPeriods[0];
  const options = shuffle(dayNightPeriods.slice(0, Math.max(2, profile.dayNightOptionCount)));

  clearDayNightTimer();
  state.dayNight.answered = false;
  state.dayNight.selectedPeriodId = null;
  state.dayNight.current = {
    prompt,
    correctPeriod,
    options,
  };

  renderDayNightRound();
  updateDayNightScoreboard();
  setDayNightStatus("看看这件事，再选白天还是夜晚。");
}

function renderDayNightRound() {
  const { prompt, correctPeriod, options } = state.dayNight.current;

  ui.dayNight.emoji.textContent = prompt.emoji;
  ui.dayNight.title.textContent = state.dayNight.answered ? `${prompt.label} 更像 ${correctPeriod.label}` : `${prompt.label} 更像什么时候？`;
  ui.dayNight.note.textContent = state.dayNight.answered ? `${prompt.label} 更像在 ${correctPeriod.label} 发生。` : prompt.note;
  ui.dayNight.options.innerHTML = "";

  options.forEach((period) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = period.id === correctPeriod.id;
    const isSelected = period.id === state.dayNight.selectedPeriodId;

    button.type = "button";
    button.className = "daynight-option";
    button.disabled = state.dayNight.answered;
    button.style.setProperty("--daynight-option-accent", period.accent);

    if (state.dayNight.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.dayNight.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "daynight-option-icon";
    icon.textContent = period.emoji;

    copy.className = "daynight-option-copy";
    title.textContent = period.label;
    tip.textContent = period.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerDayNight(period.id));
    ui.dayNight.options.appendChild(button);
  });
}

function answerDayNight(selectedPeriodId) {
  if (state.dayNight.answered) {
    return;
  }

  state.dayNight.answered = true;
  state.dayNight.selectedPeriodId = selectedPeriodId;

  const isCorrect = selectedPeriodId === state.dayNight.current.correctPeriod.id;

  if (isCorrect) {
    state.dayNight.score += 1;
    state.dayNight.streak += 1;
    updateBestScore("dayNightBest", state.dayNight.streak);

    if (state.dayNight.streak % 3 === 0) {
      awardStars(1, "白天和夜晚连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("分清啦，这件事的时间被你找对了。");
    }

    playFeedbackTone("success");
    setDayNightStatus(`答对了，${state.dayNight.current.prompt.label} 更像在 ${state.dayNight.current.correctPeriod.label}。`);
  } else {
    state.dayNight.streak = 0;
    setGlobalMessage("这一题先记住它更像白天还是夜晚，下一题继续试试。");
    playFeedbackTone("wrong");
    setDayNightStatus(`正确答案是 ${state.dayNight.current.correctPeriod.label}。`);
  }

  updateDayNightScoreboard();
  renderDayNightRound();

  state.dayNight.roundTimer = window.setTimeout(() => {
    state.dayNight.roundTimer = null;
    setupDayNightRound();
  }, 980);
}

function updateHotColdScoreboard() {
  ui.hotCold.score.textContent = state.hotCold.score;
  ui.hotCold.streak.textContent = state.hotCold.streak;
  ui.hotCold.best.textContent = state.storage.hotColdBest;
}

function setHotColdStatus(message) {
  ui.hotCold.status.textContent = message;
}

function setupHotColdRound() {
  const profile = getDifficultyProfile();
  const prompt = sample(hotColdPrompts);
  const correctChoice = hotColdChoices.find((choice) => choice.id === prompt.choiceId) ?? hotColdChoices[0];
  const options = shuffle(hotColdChoices.slice(0, Math.max(2, profile.hotColdOptionCount)));

  clearHotColdTimer();
  state.hotCold.answered = false;
  state.hotCold.selectedChoiceId = null;
  state.hotCold.current = {
    prompt,
    correctChoice,
    options,
  };

  renderHotColdRound();
  updateHotColdScoreboard();
  setHotColdStatus("看看这个东西，再选热热的还是凉凉的。");
}

function renderHotColdRound() {
  const { prompt, correctChoice, options } = state.hotCold.current;

  ui.hotCold.emoji.textContent = prompt.emoji;
  ui.hotCold.title.textContent = state.hotCold.answered
    ? `${prompt.label} 更像 ${correctChoice.label}`
    : `${prompt.label} 更像热热的还是凉凉的？`;
  ui.hotCold.note.textContent = state.hotCold.answered ? `${prompt.label} 更像 ${correctChoice.label}。` : prompt.note;
  ui.hotCold.options.innerHTML = "";

  options.forEach((choice) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const tip = document.createElement("small");
    const isCorrect = choice.id === correctChoice.id;
    const isSelected = choice.id === state.hotCold.selectedChoiceId;

    button.type = "button";
    button.className = "hotcold-option";
    button.disabled = state.hotCold.answered;
    button.style.setProperty("--hotcold-option-accent", choice.accent);

    if (state.hotCold.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.hotCold.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    icon.className = "hotcold-option-icon";
    icon.textContent = choice.emoji;

    copy.className = "hotcold-option-copy";
    title.textContent = choice.label;
    tip.textContent = choice.tip;
    copy.append(title, tip);

    button.append(icon, copy);
    button.addEventListener("click", () => answerHotCold(choice.id));
    ui.hotCold.options.appendChild(button);
  });
}

function answerHotCold(selectedChoiceId) {
  if (state.hotCold.answered) {
    return;
  }

  state.hotCold.answered = true;
  state.hotCold.selectedChoiceId = selectedChoiceId;

  const isCorrect = selectedChoiceId === state.hotCold.current.correctChoice.id;

  if (isCorrect) {
    state.hotCold.score += 1;
    state.hotCold.streak += 1;
    updateBestScore("hotColdBest", state.hotCold.streak);

    if (state.hotCold.streak % 3 === 0) {
      awardStars(1, "热热还是凉凉连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("分得真好，你把温度感觉认出来啦。");
    }

    playFeedbackTone("success");
    setHotColdStatus(`答对了，${state.hotCold.current.prompt.label} 更像 ${state.hotCold.current.correctChoice.label}。`);
  } else {
    state.hotCold.streak = 0;
    setGlobalMessage("这一题先记住它更像热热的还是凉凉的，下一题继续试试。");
    playFeedbackTone("wrong");
    setHotColdStatus(`正确答案是 ${state.hotCold.current.correctChoice.label}。`);
  }

  updateHotColdScoreboard();
  renderHotColdRound();

  state.hotCold.roundTimer = window.setTimeout(() => {
    state.hotCold.roundTimer = null;
    setupHotColdRound();
  }, 980);
}

function updateWhackScoreboard() {
  ui.whack.score.textContent = state.whack.score;
  ui.whack.time.textContent = state.whack.timeLeft;
  ui.whack.best.textContent = state.storage.whackBest;
}

function setWhackStatus(message) {
  ui.whack.status.textContent = message;
}

function buildWhackBoard() {
  ui.whack.board.innerHTML = "";

  for (let index = 0; index < 9; index += 1) {
    const button = document.createElement("button");
    const item = document.createElement("span");

    button.type = "button";
    button.className = "whack-hole";
    button.setAttribute("aria-label", `果园位置 ${index + 1}`);
    button.addEventListener("click", () => tapWhackHole(index));

    item.className = "whack-item";
    item.setAttribute("aria-hidden", "true");
    button.appendChild(item);
    ui.whack.board.appendChild(button);
  }
}

function renderWhackBoard() {
  const holes = [...ui.whack.board.querySelectorAll(".whack-hole")];

  holes.forEach((hole, index) => {
    const item = hole.querySelector(".whack-item");
    const isActive = index === state.whack.activeIndex;

    hole.classList.toggle("is-active", isActive);
    hole.disabled = !state.whack.running;
    item.textContent = isActive ? state.whack.activeFruit : "";
  });
}

function setupWhackGame() {
  const profile = getDifficultyProfile();

  clearWhackLoops();

  state.whack.score = 0;
  state.whack.timeLeft = profile.whackTime;
  state.whack.running = false;
  state.whack.activeIndex = null;
  state.whack.activeFruit = "";

  if (!ui.whack.board.children.length) {
    buildWhackBoard();
  }

  renderWhackBoard();
  updateWhackScoreboard();
  setWhackStatus("按开始按钮，小水果就会从果园里探出头。");
}

function startWhackGame() {
  const profile = getDifficultyProfile();

  if (!ui.whack.board.children.length) {
    buildWhackBoard();
  }

  clearWhackLoops();

  state.whack.score = 0;
  state.whack.timeLeft = profile.whackTime;
  state.whack.running = true;
  state.whack.activeIndex = null;
  state.whack.activeFruit = "";
  captureSessionProgressStart(state.whack);

  renderWhackBoard();
  updateWhackScoreboard();
  setWhackStatus("开始啦，小水果要冒出来啦。");
  setGlobalMessage("快去点中探头的小水果。");
  playFeedbackTone("start");

  spawnWhackTarget();

  state.whack.spawnLoop = window.setInterval(() => {
    spawnWhackTarget();
  }, profile.whackSpawn);

  state.whack.timerLoop = window.setInterval(() => {
    state.whack.timeLeft -= 1;
    updateWhackScoreboard();

    if (state.whack.timeLeft <= 0) {
      endWhackGame();
    }
  }, 1000);
}

function spawnWhackTarget() {
  if (!state.whack.running) {
    return;
  }

  state.whack.activeIndex = randomBetween(0, 8);
  state.whack.activeFruit = sample(whackFruits);
  renderWhackBoard();
}

function tapWhackHole(index) {
  if (!state.whack.running || index !== state.whack.activeIndex) {
    return;
  }

  state.whack.score += 1;

  if (state.whack.score > state.storage.whackBest) {
    updateBestScore("whackBest", state.whack.score);
  }

  if (state.whack.score % 4 === 0) {
    awardStars(1, "连续点中 4 个小水果，得到 1 颗勇气星星。");
  } else {
    setGlobalMessage("打中啦，小水果被你发现了。");
  }

  state.whack.activeIndex = null;
  state.whack.activeFruit = "";
  playFeedbackTone("success");
  updateWhackScoreboard();
  setWhackStatus(sample(happyCheers));
  renderWhackBoard();
}

function endWhackGame() {
  state.whack.running = false;
  clearWhackLoops();
  state.whack.activeIndex = null;
  state.whack.activeFruit = "";

  renderWhackBoard();
  updateWhackScoreboard();

  if (state.whack.score >= 10) {
    awardStars(2, "果园挑战表现真棒，额外奖励 2 颗勇气星星。");
  } else {
    setGlobalMessage("水果打地鼠结束啦，再玩一次会更熟练。");
  }

  setWhackStatus(`时间到。你一共点中了 ${state.whack.score} 个小水果。`);
  enqueueRoundCelebration({
    panelId: "panel-whack",
    icon: "🍓",
    title: state.whack.score >= 10 ? "果园挑战完成啦" : "果园热身结束啦",
    body:
      state.whack.score >= 10
        ? `这一轮一共点中了 ${state.whack.score} 个小水果，今天反应真快。`
        : `这一轮抓到了 ${state.whack.score} 个小水果，再试一次会更顺手。`,
    accent: "#ff9f1c",
    stats: buildRoundCelebrationStats({
      sessionStartStars: state.whack.sessionStartStars,
      sessionStartDoneCount: state.whack.sessionStartDoneCount,
      primaryLabel: "本轮成绩",
      primaryValue: `${state.whack.score} 个`,
      panelId: "panel-whack",
    }),
  });
}

function updateRhythmScoreboard() {
  ui.rhythm.round.textContent = state.rhythm.round;
  ui.rhythm.best.textContent = state.storage.rhythmBest;
  ui.rhythm.mode.textContent = state.rhythm.mode;
}

function setRhythmStatus(message) {
  ui.rhythm.status.textContent = message;
}

function buildRhythmBoard() {
  ui.rhythm.board.innerHTML = "";

  rhythmPads.forEach((pad) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const label = document.createElement("span");

    button.type = "button";
    button.className = `rhythm-pad pad-${pad.tone}`;
    button.setAttribute("aria-label", pad.label);
    button.addEventListener("click", () => answerRhythmPad(pad.id));

    icon.className = "rhythm-icon";
    icon.textContent = pad.emoji;

    label.className = "rhythm-label";
    label.textContent = pad.label;

    button.append(icon, label);
    ui.rhythm.board.appendChild(button);
  });
}

function renderRhythmBoard() {
  const buttons = [...ui.rhythm.board.querySelectorAll(".rhythm-pad")];

  buttons.forEach((button, index) => {
    const pad = rhythmPads[index];
    const isActive = state.rhythm.activePad === pad.id;

    button.classList.toggle("is-active", isActive);
    button.disabled = !state.rhythm.running || state.rhythm.locked;
  });
}

function setupRhythmGame() {
  clearRhythmTimers();

  state.rhythm.sequence = [];
  state.rhythm.inputIndex = 0;
  state.rhythm.round = 0;
  state.rhythm.mode = "准备中";
  state.rhythm.running = false;
  state.rhythm.locked = true;
  state.rhythm.showing = false;
  state.rhythm.activePad = null;

  if (!ui.rhythm.board.children.length) {
    buildRhythmBoard();
  }

  renderRhythmBoard();
  updateRhythmScoreboard();
  setRhythmStatus("先看彩灯顺序，再按出同样的顺序。");
}

function startRhythmGame() {
  setupRhythmGame();
  state.rhythm.running = true;
  state.rhythm.mode = "准备中";
  captureSessionProgressStart(state.rhythm);

  updateRhythmScoreboard();
  renderRhythmBoard();
  setRhythmStatus("游戏开始啦，先记住第一组灯光。");
  setGlobalMessage("注意看彩灯顺序，再跟着按。");
  playFeedbackTone("start");

  advanceRhythmRound();
}

function advanceRhythmRound() {
  if (!state.rhythm.running) {
    return;
  }

  state.rhythm.sequence.push(sample(rhythmPads).id);
  state.rhythm.inputIndex = 0;
  state.rhythm.round = state.rhythm.sequence.length;
  state.rhythm.locked = true;
  state.rhythm.showing = true;
  state.rhythm.activePad = null;
  state.rhythm.mode = "看灯光";

  updateRhythmScoreboard();
  renderRhythmBoard();
  setRhythmStatus(`第 ${state.rhythm.round} 回合，先看一遍。`);
  playRhythmSequence();
}

function playRhythmSequence() {
  const profile = getDifficultyProfile();

  clearRhythmTimers();
  state.rhythm.activePad = null;
  renderRhythmBoard();

  let delay = 260;

  state.rhythm.sequence.forEach((padId, index) => {
    queueRhythmTimeout(() => {
      if (!state.rhythm.running) {
        return;
      }

      state.rhythm.activePad = padId;
      renderRhythmBoard();
    }, delay);

    queueRhythmTimeout(() => {
      if (!state.rhythm.running) {
        return;
      }

      state.rhythm.activePad = null;
      renderRhythmBoard();

      if (index === state.rhythm.sequence.length - 1) {
        state.rhythm.showing = false;
        state.rhythm.locked = false;
        state.rhythm.mode = "轮到你";
        updateRhythmScoreboard();
        setRhythmStatus("轮到你啦，按出刚才看到的顺序。");
      }
    }, delay + profile.rhythmFlash);

    delay += profile.rhythmGap;
  });
}

function flashRhythmPad(padId) {
  window.clearTimeout(state.rhythm.pulseTimer);
  state.rhythm.activePad = padId;
  renderRhythmBoard();

  state.rhythm.pulseTimer = window.setTimeout(() => {
    state.rhythm.pulseTimer = null;

    if (!state.rhythm.showing) {
      state.rhythm.activePad = null;
      renderRhythmBoard();
    }
  }, 180);
}

function answerRhythmPad(padId) {
  if (!state.rhythm.running || state.rhythm.locked) {
    return;
  }

  flashRhythmPad(padId);

  const expectedPadId = state.rhythm.sequence[state.rhythm.inputIndex];

  if (padId !== expectedPadId) {
    playFeedbackTone("wrong");
    finishRhythmGame();
    return;
  }

  state.rhythm.inputIndex += 1;

  if (state.rhythm.inputIndex === state.rhythm.sequence.length) {
    updateBestScore("rhythmBest", state.rhythm.round);
    state.rhythm.locked = true;
    state.rhythm.mode = "准备下一回合";

    updateRhythmScoreboard();

    if (state.rhythm.round % 2 === 0) {
      awardStars(1, "彩灯记忆连过 2 回合，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("彩灯顺序记住啦，下一回合会更长。");
    }

    setRhythmStatus("完全正确，下一回合会多一个灯光。");
    playFeedbackTone("success");
    queueRhythmTimeout(() => {
      if (!state.rhythm.running) {
        return;
      }

      advanceRhythmRound();
    }, 900);
    return;
  }

  setRhythmStatus(`记住了 ${state.rhythm.inputIndex} 个，继续按。`);
}

function finishRhythmGame() {
  const clearedRounds = Math.max(0, state.rhythm.round - 1);

  state.rhythm.running = false;
  state.rhythm.locked = true;
  state.rhythm.showing = false;
  state.rhythm.mode = "休息一下";
  state.rhythm.activePad = null;
  clearRhythmTimers();

  renderRhythmBoard();
  updateRhythmScoreboard();
  setGlobalMessage("这次灯光顺序有点长，再来一次会更顺手。");
  setRhythmStatus(`差一点点，这次停在第 ${state.rhythm.round} 回合。`);
  enqueueRoundCelebration({
    panelId: "panel-rhythm",
    icon: "🥁",
    title: "节奏挑战先停一停",
    body:
      clearedRounds > 0
        ? `这轮已经顺利记住了 ${clearedRounds} 回合，下一次再往前冲一冲。`
        : "第一组灯光已经看过啦，再来一轮会更容易进入状态。",
    accent: "#8b7cff",
    stats: buildRoundCelebrationStats({
      sessionStartStars: state.rhythm.sessionStartStars,
      sessionStartDoneCount: state.rhythm.sessionStartDoneCount,
      primaryLabel: "连过回合",
      primaryValue: `${clearedRounds} 回合`,
      panelId: "panel-rhythm",
    }),
  });
}

function updatePuzzleScoreboard() {
  const matched = state.puzzle.tiles.filter((tile, index) => tile.id === puzzleGoal[index].id).length;

  ui.puzzle.steps.textContent = state.puzzle.steps;
  ui.puzzle.matched.textContent = matched;
  ui.puzzle.best.textContent =
    state.storage.puzzleBest === null ? "--" : state.storage.puzzleBest;
}

function setPuzzleStatus(message) {
  ui.puzzle.status.textContent = message;
}

function renderPuzzleReference() {
  ui.puzzle.reference.innerHTML = "";

  puzzleGoal.forEach((tile) => {
    const card = document.createElement("div");
    const emoji = document.createElement("strong");
    const label = document.createElement("span");

    card.className = "puzzle-tile reference-tile";
    emoji.textContent = tile.emoji;
    label.textContent = tile.label;

    card.append(emoji, label);
    ui.puzzle.reference.appendChild(card);
  });
}

function renderPuzzleBoard() {
  ui.puzzle.board.innerHTML = "";

  state.puzzle.tiles.forEach((tile, index) => {
    const button = document.createElement("button");
    const emoji = document.createElement("strong");
    const label = document.createElement("span");
    const isSelected = state.puzzle.selectedIndex === index;

    button.type = "button";
    button.className = "puzzle-tile";
    button.classList.toggle("is-selected", isSelected);
    button.classList.toggle("is-correct", tile.id === puzzleGoal[index].id);
    button.setAttribute("aria-label", `拼图块 ${tile.label}`);
    button.addEventListener("click", () => selectPuzzleTile(index));

    emoji.textContent = tile.emoji;
    label.textContent = tile.label;

    button.append(emoji, label);
    ui.puzzle.board.appendChild(button);
  });
}

function setupPuzzleGame() {
  let shuffledTiles = shuffle([...puzzleGoal]);

  while (shuffledTiles.every((tile, index) => tile.id === puzzleGoal[index].id)) {
    shuffledTiles = shuffle([...puzzleGoal]);
  }

  state.puzzle.tiles = shuffledTiles;
  state.puzzle.selectedIndex = null;
  state.puzzle.steps = 0;
  state.puzzle.solved = false;
  captureSessionProgressStart(state.puzzle);

  renderPuzzleReference();
  renderPuzzleBoard();
  updatePuzzleScoreboard();
  setPuzzleStatus("先看看参考图，再点两块交换位置。");
  setGlobalMessage("拼图准备好了，把小花园整理整齐吧。");
}

function selectPuzzleTile(index) {
  if (state.puzzle.solved) {
    return;
  }

  if (state.puzzle.selectedIndex === null) {
    state.puzzle.selectedIndex = index;
    renderPuzzleBoard();
    setPuzzleStatus("已经选中一块啦，再点另一块和它交换位置。");
    return;
  }

  if (state.puzzle.selectedIndex === index) {
    state.puzzle.selectedIndex = null;
    renderPuzzleBoard();
    setPuzzleStatus("已取消选择，重新挑一块试试。");
    return;
  }

  const firstIndex = state.puzzle.selectedIndex;
  [state.puzzle.tiles[firstIndex], state.puzzle.tiles[index]] = [
    state.puzzle.tiles[index],
    state.puzzle.tiles[firstIndex],
  ];

  state.puzzle.selectedIndex = null;
  state.puzzle.steps += 1;

  renderPuzzleBoard();
  updatePuzzleScoreboard();

  const isSolved = state.puzzle.tiles.every((tile, tileIndex) => tile.id === puzzleGoal[tileIndex].id);

  if (isSolved) {
    state.puzzle.solved = true;
    updateBestScore("puzzleBest", state.puzzle.steps, true);
    updatePuzzleScoreboard();
    awardStars(3, "花园拼图完成啦，奖励 3 颗勇气星星。");
    setPuzzleStatus(`拼好啦。你用了 ${state.puzzle.steps} 步，真厉害。`);
    enqueueRoundCelebration({
      panelId: "panel-puzzle",
      icon: "🧩",
      title: "花园拼图完成啦",
      body: "小花园已经全部拼回去了，这一轮的耐心和观察力都很棒。",
      accent: "#f78fb3",
      stats: buildRoundCelebrationStats({
        sessionStartStars: state.puzzle.sessionStartStars,
        sessionStartDoneCount: state.puzzle.sessionStartDoneCount,
        primaryLabel: "完成步数",
        primaryValue: `${state.puzzle.steps} 步`,
        panelId: "panel-puzzle",
      }),
    });
    return;
  }

  setPuzzleStatus(sample(happyCheers));
}

function updateWordsScoreboard() {
  ui.words.score.textContent = state.words.score;
  ui.words.streak.textContent = state.words.streak;
  ui.words.best.textContent = state.storage.wordsBest;
}

function setWordsStatus(message) {
  ui.words.status.textContent = message;
}

function getWordsModeCopy() {
  return state.words.mode === "picture"
    ? {
        modeLabel: "看图模式",
        cardTip: "这个字读作",
        cardNote: "请找到和它对应的小图案。",
        status: "看看汉字，再选出它对应的小图案。",
        ariaLabel: "识字图案选项",
      }
    : {
        modeLabel: "拼音模式",
        cardTip: "读一读这个字",
        cardNote: "请找到它的正确拼音。",
        status: "看看汉字，再找出正确拼音。",
        ariaLabel: "拼音选项",
      };
}

function updateWordsModeUi() {
  const copy = getWordsModeCopy();
  const isPictureMode = state.words.mode === "picture";

  ui.words.modeLabel.textContent = copy.modeLabel;
  ui.words.cardTip.textContent = copy.cardTip;
  ui.words.cardNote.textContent = copy.cardNote;
  ui.words.options.setAttribute("aria-label", copy.ariaLabel);
  ui.words.pictureMode.classList.toggle("active", isPictureMode);
  ui.words.pinyinMode.classList.toggle("active", !isPictureMode);
  ui.words.pictureMode.setAttribute("aria-pressed", String(isPictureMode));
  ui.words.pinyinMode.setAttribute("aria-pressed", String(!isPictureMode));
}

function setWordsMode(mode) {
  if (state.words.mode === mode) {
    return;
  }

  state.words.mode = mode;
  setupWordsRound();
  setWordsStatus(getWordsModeCopy().status);
  setGlobalMessage(mode === "picture" ? "已切到看图模式。" : "已切到拼音模式。");
}

function setupWordsRound() {
  clearWordsTimer();
  stopWordsSpeech();

  const choices = shuffle([...wordCards]);
  const target = choices[0];
  const options = shuffle([target, ...choices.slice(1, 4)]);

  state.words.current = {
    target,
    options,
  };
  state.words.answered = false;
  state.words.selectedId = null;

  renderWordsRound();
  updateWordsScoreboard();
  setWordsStatus(getWordsModeCopy().status);
}

function renderWordsRound() {
  const { target, options } = state.words.current;
  const isPictureMode = state.words.mode === "picture";

  updateWordsModeUi();
  ui.words.emoji.hidden = isPictureMode;
  ui.words.emoji.textContent = target.emoji;
  ui.words.char.textContent = target.char;
  ui.words.pinyin.textContent = target.pinyin;
  ui.words.pinyin.hidden = !isPictureMode;
  ui.words.options.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const isCorrect = option.id === target.id;
    const isSelected = option.id === state.words.selectedId;

    button.type = "button";
    button.className = "word-option";
    button.disabled = state.words.answered;

    if (state.words.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.words.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    if (isPictureMode) {
      const emoji = document.createElement("span");
      const label = document.createElement("strong");

      emoji.className = "word-option-emoji";
      emoji.textContent = option.emoji;

      label.textContent = option.label;
      button.append(emoji, label);
    } else {
      const pinyin = document.createElement("strong");
      const hint = document.createElement("small");

      button.classList.add("is-pinyin");
      pinyin.className = "word-option-pinyin-text";
      pinyin.textContent = option.pinyin;
      hint.textContent = `${option.label}`;

      button.append(pinyin, hint);
    }

    button.addEventListener("click", () => answerWords(option.id));
    ui.words.options.appendChild(button);
  });
}

function speakWordsCard() {
  const target = state.words.current?.target;

  if (!target) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    setWordsStatus("这个浏览器暂时不支持发音按钮。");
    return;
  }

  if (!state.storage.settings.soundOn) {
    setWordsStatus("家长模式里已经把声音关掉啦。");
    return;
  }

  stopWordsSpeech();

  const utterance = new SpeechSynthesisUtterance(`${target.char}，${target.label}`);
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  utterance.pitch = 1.04;

  window.speechSynthesis.speak(utterance);
  setWordsStatus(`正在读：${target.char}。`);
}

function answerWords(selectedId) {
  if (state.words.answered) {
    return;
  }

  state.words.answered = true;
  state.words.selectedId = selectedId;

  const isCorrect = selectedId === state.words.current.target.id;

  if (isCorrect) {
    state.words.score += 1;
    state.words.streak += 1;
    updateBestScore("wordsBest", state.words.streak);

    if (state.words.streak % 3 === 0) {
      awardStars(1, "识字连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("认对啦，继续看看下一张小卡片。");
    }

    setWordsStatus(
      state.words.mode === "picture"
        ? `答对了，${state.words.current.target.char} 表示 ${state.words.current.target.label}。`
        : `答对了，${state.words.current.target.char} 的拼音是 ${state.words.current.target.pinyin}。`,
    );
    playFeedbackTone("success");
  } else {
    state.words.streak = 0;
    setGlobalMessage("这张卡先记住，下一张继续认一认。");
    setWordsStatus(
      state.words.mode === "picture"
        ? `正确答案是 ${state.words.current.target.label}，这个字是 ${state.words.current.target.char}。`
        : `正确答案是 ${state.words.current.target.pinyin}，这个字是 ${state.words.current.target.char}。`,
    );
    playFeedbackTone("wrong");
  }

  updateWordsScoreboard();
  renderWordsRound();

  state.words.roundTimer = window.setTimeout(() => {
    state.words.roundTimer = null;
    setupWordsRound();
  }, 950);
}

function updateEnglishScoreboard() {
  ui.english.score.textContent = state.english.score;
  ui.english.streak.textContent = state.english.streak;
  ui.english.best.textContent = state.storage.englishBest;
}

function setEnglishStatus(message) {
  ui.english.status.textContent = message;
}

function setupEnglishRound() {
  clearEnglishTimer();
  stopWordsSpeech();

  const choices = shuffle([...englishCards]);
  const target = choices[0];
  const options = shuffle([target, ...choices.slice(1, 4)]);

  state.english.current = {
    target,
    options,
  };
  state.english.answered = false;
  state.english.selectedId = null;

  renderEnglishRound();
  updateEnglishScoreboard();
  setEnglishStatus("看看图案，再从右边找出正确英文。");
}

function renderEnglishRound() {
  const { target, options } = state.english.current;
  ui.english.emoji.textContent = target.emoji;
  ui.english.meaning.textContent = target.chinese;
  ui.english.note.textContent = state.english.answered
    ? `这个单词是 ${target.word}。`
    : "点“读英文”可以听发音。";
  ui.english.options.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    const word = document.createElement("strong");
    const hint = document.createElement("small");
    const isCorrect = option.id === target.id;
    const isSelected = option.id === state.english.selectedId;

    button.type = "button";
    button.className = "english-option";
    button.disabled = state.english.answered;

    if (state.english.answered && isCorrect) {
      button.classList.add("is-correct");
    }

    if (state.english.answered && isSelected && !isCorrect) {
      button.classList.add("is-wrong");
    }

    word.textContent = option.word;
    hint.textContent = option.chinese;
    button.append(word, hint);
    button.addEventListener("click", () => answerEnglish(option.id));
    ui.english.options.appendChild(button);
  });
}

function speakEnglishCard() {
  const target = state.english.current?.target;

  if (!target) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    setEnglishStatus("这个浏览器暂时不支持英文发音。");
    return;
  }

  if (!state.storage.settings.soundOn) {
    setEnglishStatus("家长模式里已经把声音关掉啦。");
    return;
  }

  stopWordsSpeech();

  const utterance = new SpeechSynthesisUtterance(target.word);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
  setEnglishStatus(`正在读：${target.word}。`);
}

function answerEnglish(selectedId) {
  if (state.english.answered) {
    return;
  }

  state.english.answered = true;
  state.english.selectedId = selectedId;

  const isCorrect = selectedId === state.english.current.target.id;

  if (isCorrect) {
    state.english.score += 1;
    state.english.streak += 1;
    updateBestScore("englishBest", state.english.streak);

    if (state.english.streak % 3 === 0) {
      awardStars(1, "英语单词连对 3 题，得到 1 颗勇气星星。");
    } else {
      setGlobalMessage("英文也认出来啦，继续下一张。");
    }

    setEnglishStatus(`答对了，${state.english.current.target.chinese} 的英文是 ${state.english.current.target.word}。`);
    playFeedbackTone("success");
  } else {
    state.english.streak = 0;
    setGlobalMessage("这张英文卡先记住，下一张继续。");
    setEnglishStatus(`正确答案是 ${state.english.current.target.word}。`);
    playFeedbackTone("wrong");
  }

  updateEnglishScoreboard();
  renderEnglishRound();

  state.english.roundTimer = window.setTimeout(() => {
    state.english.roundTimer = null;
    setupEnglishRound();
  }, 950);
}

function updateTraceScoreboard() {
  const currentTemplate = traceTemplates[state.trace.currentIndex];

  ui.trace.complete.textContent = state.trace.completed;
  ui.trace.target.textContent = currentTemplate.guide;
  ui.trace.best.textContent = state.storage.traceBest;
}

function setTraceStatus(message) {
  ui.trace.status.textContent = message;
}

function renderTracePicker() {
  ui.trace.picker.innerHTML = "";

  traceTemplates.forEach((template, index) => {
    const button = document.createElement("button");
    const isActive = index === state.trace.currentIndex;

    button.type = "button";
    button.className = "trace-chip";
    button.textContent = template.label;
    button.classList.toggle("active", isActive);
    button.style.setProperty("--trace-chip-accent", template.accent);
    button.addEventListener("click", () => selectTraceTemplate(index));
    ui.trace.picker.appendChild(button);
  });
}

function resizeTraceCanvas() {
  const rect = ui.trace.canvas.getBoundingClientRect();

  if (!rect.width || !rect.height) {
    return;
  }

  const ratio = window.devicePixelRatio || 1;
  const context = ui.trace.canvas.getContext("2d");

  ui.trace.canvas.width = Math.floor(rect.width * ratio);
  ui.trace.canvas.height = Math.floor(rect.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 8;
  context.strokeStyle = traceTemplates[state.trace.currentIndex].accent;

  clearTraceCanvas(false);
}

function clearTraceCanvas(announce = true) {
  const context = ui.trace.canvas.getContext("2d");

  if (!context) {
    return;
  }

  context.clearRect(0, 0, ui.trace.canvas.width, ui.trace.canvas.height);
  state.trace.hasDrawn = false;
  state.trace.drawing = false;
  state.trace.lastPoint = null;

  if (announce) {
    setTraceStatus("画板清空啦，可以重新描一遍。");
  }
}

function selectTraceTemplate(index, message = null) {
  state.trace.currentIndex = index;
  ui.trace.guide.textContent = traceTemplates[index].guide;
  ui.trace.guide.style.color = traceTemplates[index].accent;
  renderTracePicker();
  updateTraceScoreboard();
  resizeTraceCanvas();
  setTraceStatus(message ?? `现在来描 ${traceTemplates[index].label}。`);
}

function setupTraceGame() {
  state.trace.completed = 0;
  state.trace.currentIndex = 0;
  state.trace.hasDrawn = false;
  state.trace.drawing = false;
  state.trace.lastPoint = null;

  renderTracePicker();
  selectTraceTemplate(0, "按住鼠标或手指，在画板上跟着大图案慢慢描线。");
  updateTraceScoreboard();
  setGlobalMessage("描线写字页准备好了，慢慢描就很好。");
}

function nextTraceTemplate() {
  const nextIndex = (state.trace.currentIndex + 1) % traceTemplates.length;
  selectTraceTemplate(nextIndex);
}

function getTracePoint(event) {
  const rect = ui.trace.canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function startTraceDrawing(event) {
  event.preventDefault();
  ui.trace.canvas.setPointerCapture?.(event.pointerId);
  state.trace.drawing = true;
  state.trace.lastPoint = getTracePoint(event);
  state.trace.hasDrawn = true;
}

function moveTraceDrawing(event) {
  if (!state.trace.drawing) {
    return;
  }

  event.preventDefault();

  const context = ui.trace.canvas.getContext("2d");
  const nextPoint = getTracePoint(event);

  context.strokeStyle = traceTemplates[state.trace.currentIndex].accent;
  context.beginPath();
  context.moveTo(state.trace.lastPoint.x, state.trace.lastPoint.y);
  context.lineTo(nextPoint.x, nextPoint.y);
  context.stroke();

  state.trace.lastPoint = nextPoint;
}

function endTraceDrawing(event) {
  if (!state.trace.drawing) {
    return;
  }

  ui.trace.canvas.releasePointerCapture?.(event.pointerId);
  state.trace.drawing = false;
  state.trace.lastPoint = null;
}

function completeTraceTemplate() {
  if (!state.trace.hasDrawn) {
    setTraceStatus("先描一描，再按“我描好啦”。");
    return;
  }

  state.trace.completed += 1;
  updateBestScore("traceBest", state.trace.completed);
  updateTraceScoreboard();

  if (state.trace.completed % 2 === 0) {
    awardStars(1, "认真描好 2 张写字页，得到 1 颗勇气星星。");
  } else {
    setGlobalMessage("描得很认真，继续下一张。");
  }

  const currentLabel = traceTemplates[state.trace.currentIndex].label;
  const nextIndex = (state.trace.currentIndex + 1) % traceTemplates.length;
  playFeedbackTone("success");
  selectTraceTemplate(nextIndex, `${currentLabel} 描好啦，来试试下一张。`);
}

function pickDifferentNumbers(correctValue, amount, min, max) {
  const bag = [];

  for (let value = min; value <= max; value += 1) {
    if (value !== correctValue) {
      bag.push(value);
    }
  }

  return shuffle(bag).slice(0, amount);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}
