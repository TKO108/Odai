// マスターデータ定義
const MASTER_DATA = {
  location: [
    "雨上がりの路地裏", "アンティーク図書館", "海辺の無人駅", "ネオン輝くサイバー都市",
    "廃墟となった温室", "雲の上の天文台", "夕暮れの屋上フェンス前", "ランタンが灯る夜市場",
    "深海のガラス張りカフェ", "雪化粧の神社境内", "歯車が回る時計塔の内部", "桜吹雪の通学路",
    "ステンドグラスの聖堂", "霧に包まれた森の湖畔", "レトロな純喫茶の窓際", "星空が見えるキャンプ場",
    "空中庭園のバルコニー", "夏祭りの提灯通り", "枯れ葉舞う秋の並木道", "魔法薬学の実験室"
  ],
  time: [
    "夜明け前（ブルーアワー）", "朝日が差し込む早朝", "爽やかな午前中", "真昼の強い日差し",
    "傾き始めた午後", "燃えるような夕暮れ（マジックアワー）", "黄昏時（逢魔が時）",
    "月明かりの深夜", "ネオンが滲む真夜中", "時間停止したような白昼"
  ],
  weather: [
    "快晴・入道雲", "穏やかな春風", "しとしと降る雨", "激しい雷雨・稲妻",
    "雨上がりの虹", "舞い散る粉雪", "吹雪", "幻想的な朝霧",
    "流星群の夜空", "真夏の陽炎", "秋晴れの澄んだ空", "花びらが舞う強風"
  ],
  atmosphere: [
    "ドラマチックな逆光", "ノスタルジック・セピア調", "透明感あふれる爽やかさ",
    "ミステリアス・退廃的", "幻想的・ファンタジー", "サイバーパンク・近未来",
    "温かみのある日常感", "静謐で切ない空気感", "ポップでカラフル", "ゴシック・重厚感"
  ],
  theme: [
    "旅立ちの朝", "秘密の待ち合わせ", "失われた記憶の欠片", "最後の魔法",
    "境界線を越える瞬間", "雨宿りの会話", "届かない手紙", "双子の対比",
    "機械と心の目覚め", "季節の終わり", "約束の場所", "仮面の下の素顔"
  ],
  flower: [
    "彼岸花（情熱・独立）", "青いバラ（夢かなう・奇跡）", "かすみ草（清らかな心・感謝）",
    "ひまわり（憧れ・あなただけを見つめる）", "藤の花（優しさ・決して離れない）",
    "スズラン（再び幸せが訪れる）", "椿（控えめな優しさ・誇り）", "ネモフィラ（どこでも成功・可憐）",
    "キンモクセイ（謙虚・初恋）", "白ユリ（純潔・威厳）", "アネモネ（はかない恋・期待）",
    "ミモザ（感謝・思いやり）"
  ],
  gender: [
    "少年", "少女", "青年", "大人の女性", "中性的・アンドロジナス",
    "幼い子ども", "長命種・エルフ風", "アンドロイド・人外風"
  ],
  age: [
    "10歳前後（無邪気）", "14歳前後（思春期・あどけなさ）", "17歳前後（高校生・青春）",
    "20代前半（フレッシュ・大人びた）", "20代後半（落ち着き・色気）", "年齢不詳（神秘的）"
  ],
  hairstyle: [
    "ウルフカット", "姫カットロング", "ゆるふわウェーブボブ", "高めのポニーテール",
    "無造作マッシュショート", "三つ編みおさげ", "ハーフアップお団子", "外ハネミディアム",
    "センターパートショート", "スーパーロングストレート", "片目隠れアシメヘア", "低めツインテール",
    "かきあげバングロング", "ベリーショート", "編み込みカチューシャ風"
  ],
  haircolor: [
    "漆黒×インナーブルー", "プラチナブロンド", "アッシュグレー×シルバーメッシュ",
    "ミルクティーベージュ", "深紅・ワインレッド", "ネイビーブルー×毛先グラデ",
    "桜ピンク×ホワイトインナー", "オリーブアッシュ", "ココアブラウン",
    "ラベンダーパープル", "白髪・アルビノ風", "ターコイズグリーン"
  ],
  eyecolor: [
    "琥珀色（アンバー）", "深いサファイアブルー", "エメラルドグリーン", "オッドアイ（金×青）",
    "ルビーレッド", "紫水晶（アメジスト）", "透き通るシルバーグレー", "夕焼けグラデーション瞳",
    "三白眼・クール", "たれ目・優しい茶瞳", "ハイライトなしの虚ろな瞳", "星が宿るような夜空色"
  ],
  expression: [
    "少し照れた微笑み", "何かを企む不敵な笑み", "切なげに遠くを見つめる",
    "驚いて目を見開く", "無表情・クール", "涙を浮かべた笑顔",
    "眠たげなジト目", "自信満々のドヤ顔", "口元に指を当てて内緒のポーズ", "優しい慈愛の眼差し"
  ],
  fashion: [
    "オーバーサイズパーカー×ストリート系", "ゴシックロリータドレス", "和洋折衷大正ロマン着物",
    "サイバーパンク風テックウェア", "ブレザー制服×カーディガン", "ロングトレンチコート×スーツ",
    "魔法使いのローブ×星柄マント", "中華風チャイナジャケットコーデ", "白衣・研究者スタイル",
    "スチームパンク風ベスト×ゴーグル", "レトロ喫茶のメイド服", "厚手のニットセーター×マフラー",
    "夏用セーラー服×麦わら帽子", "軍服風マント×装飾ボタン", "サブカル系ジャージメイド"
  ],
  pose: [
    "振り返りざまの視線", "空を見上げて手を伸ばす", "椅子に深く腰掛けて頬杖",
    "風になびく髪を押さえる", "しゃがみ込んでこちらを見上げる", "武器や小物を構える躍動感",
    "窓枠に腰掛けるリラックスポーズ", "フードを深く被って顔半分を隠す", "歩み寄りながら手を差し伸べる",
    "俯瞰アングル（上から見下ろす構図）", "あおりアングル（下から見上げる構図）"
  ],
  prop: [
    "透明なビニール傘", "アンティークの懐中時計", "古い革装丁の魔導書",
    "クリームソーダ", "一輪の花束", "ヘッドホン・カセットプレイヤー",
    "ランタン・ランプ", "日本刀・装飾剣", "カメラ（フィルムカメラ）",
    "手紙と封蝋", "黒猫・使い魔", "トランクケース"
  ]
};

// ラベル名マッピング
const CATEGORY_LABELS = {
  location: "場所・背景",
  time: "時間帯",
  weather: "天気・季節感",
  atmosphere: "雰囲気・ライティング",
  theme: "テーマ・物語性",
  flower: "モチーフ花・花言葉",
  gender: "性別・タイプ",
  age: "年齢感",
  hairstyle: "髪型",
  haircolor: "髪色・インナーカラー",
  eyecolor: "瞳の色・特徴",
  expression: "表情",
  fashion: "服装・衣装デザイン",
  pose: "ポーズ・構図",
  prop: "小物・持ち物"
};

// 状態管理
const state = {
  current: {},
  locked: {},
  stocks: []
};

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  loadStocks();
  setupEventListeners();
  generateAll();
});

// ランダム取得ヘルパー
function getRandomItem(list, excludeValue = null) {
  if (list.length <= 1) return list[0];
  let candidate;
  let attempts = 0;
  do {
    candidate = list[Math.floor(Math.random() * list.length)];
    attempts++;
  } while (candidate === excludeValue && attempts < 10);
  return candidate;
}

// 矛盾防止ルールチェック
function isContradictory(topicObj) {
  const weather = topicObj.weather || "";
  const fashion = topicObj.fashion || "";
  const location = topicObj.location || "";

  // 真夏・入道雲 × 厚手ニット・吹雪
  if ((weather.includes("真夏") || weather.includes("入道雲")) &&
      (fashion.includes("厚手のニット") || fashion.includes("マフラー") || location.includes("雪化粧"))) {
    return true;
  }
  // 吹雪・雪化粧 × 夏用セーラー服・麦わら帽子
  if ((weather.includes("吹雪") || weather.includes("粉雪") || location.includes("雪化粧")) &&
      (fashion.includes("夏用セーラー服") || fashion.includes("麦わら帽子"))) {
    return true;
  }
  return false;
}

// 全項目抽選
function generateAll() {
  const useExclusion = document.getElementById("exclusionToggle").checked;
  const keys = Object.keys(MASTER_DATA);
  let attempts = 0;
  let nextValues = {};

  do {
    nextValues = { ...state.current };
    keys.forEach((key) => {
      if (!state.locked[key]) {
        nextValues[key] = getRandomItem(MASTER_DATA[key], state.current[key]);
      }
    });
    attempts++;
  } while (useExclusion && isContradictory(nextValues) && attempts < 20);

  state.current = nextValues;
  renderAll();
}

// 個別抽選
function generateSingle(key) {
  if (state.locked[key]) {
    showToast("ロック中の項目は変更されません");
    return;
  }
  const useExclusion = document.getElementById("exclusionToggle").checked;
  let attempts = 0;
  let candidate;

  do {
    candidate = getRandomItem(MASTER_DATA[key], state.current[key]);
    attempts++;
  } while (
    useExclusion &&
    isContradictory({ ...state.current, [key]: candidate }) &&
    attempts < 15
  );

  state.current[key] = candidate;
  renderSingle(key);
}

// 画面描画（全体）
function renderAll() {
  Object.keys(MASTER_DATA).forEach((key) => {
    renderSingle(key);
  });
}

// 画面描画（個別）
function renderSingle(key) {
  const valEl = document.getElementById(`val-${key}`);
  if (valEl) {
    valEl.textContent = state.current[key] || "---";
  }

  // Safari検索リンクの更新（髪型・服装）
  if (key === "hairstyle") {
    updateSafariSearchLink("searchHairBtn", state.current.hairstyle, "髪型 イラスト 資料");
  }
  if (key === "fashion") {
    updateSafariSearchLink("searchFashionBtn", state.current.fashion, "服装 イラスト 資料");
  }
}

// Safari（Google検索）URLを生成してリンクに反映
function updateSafariSearchLink(elementId, keyword, suffix) {
  const btn = document.getElementById(elementId);
  if (!btn || !keyword) return;
  // 記号などを整理して検索しやすいクエリを作成
  const cleanWord = keyword.replace(/×/g, " ");
  const query = encodeURIComponent(`${cleanWord} ${suffix}`);
  btn.href = `https://www.google.com/search?q=${query}&tbm=isch`;
}

// ロック切り替え
function toggleLock(key) {
  state.locked[key] = !state.locked[key];
  const card = document.querySelector(`.topic-card[data-key="${key}"]`);
  const lockBtn = card.querySelector(".lock-btn");

  if (state.locked[key]) {
    card.classList.add("locked");
    lockBtn.textContent = "🔒";
  } else {
    card.classList.remove("locked");
    lockBtn.textContent = "🔓";
  }
}

// テキスト整形
function formatPromptText(topicObj) {
  return Object.keys(CATEGORY_LABELS)
    .map((key) => `【${CATEGORY_LABELS[key]}】${topicObj[key] || "---"}`)
    .join("\n");
}

// クリップボードコピー（iOS Safariフォールバック対応）
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast("お題をコピーしました！");
      return;
    }
  } catch (err) {
    // フォールバックへ
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showToast("お題をコピーしました！");
  } catch (err) {
    showToast("コピーに失敗しました");
  }
  document.body.removeChild(textArea);
}

// ストック保存・読み込み
function loadStocks() {
  try {
    const saved = localStorage.getItem("odp_stocks_v1");
    if (saved) {
      state.stocks = JSON.parse(saved);
    }
  } catch (e) {
    state.stocks = [];
  }
  updateStockBadge();
}

function saveCurrentToStock() {
  const newItem = {
    id: Date.now(),
    date: new Date().toLocaleString("ja-JP", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    data: { ...state.current }
  };
  state.stocks.unshift(newItem);
  localStorage.setItem("odp_stocks_v1", JSON.stringify(state.stocks));
  updateStockBadge();
  showToast("ストックに保存しました！");
}

function deleteStock(id) {
  state.stocks = state.stocks.filter((item) => item.id !== id);
  localStorage.setItem("odp_stocks_v1", JSON.stringify(state.stocks));
  updateStockBadge();
  renderStockList();
}

function restoreStock(id) {
  const target = state.stocks.find((item) => item.id === id);
  if (!target) return;
  state.current = { ...target.data };
  renderAll();
  document.getElementById("stockModal").classList.add("hidden");
  showToast("ストックから復元しました！");
}

function updateStockBadge() {
  document.getElementById("stockCountBadge").textContent = state.stocks.length;
}

function renderStockList() {
  const listEl = document.getElementById("stockList");
  if (state.stocks.length === 0) {
    listEl.innerHTML = `<p class="empty-msg">まだストックされたお題はありません。</p>`;
    return;
  }

  listEl.innerHTML = state.stocks
    .map(
      (item) => `
      <div class="stock-item">
        <div class="stock-item-header">
          <span>保存日時: ${item.date}</span>
          <button class="icon-btn" onclick="deleteStock(${item.id})" title="削除">🗑️</button>
        </div>
        <div class="stock-item-body">
          <strong>${item.data.gender} / ${item.data.fashion}</strong><br>
          髪型: ${item.data.hairstyle}（${item.data.haircolor}）<br>
          場所: ${item.data.location} / テーマ: ${item.data.theme}
        </div>
        <div class="stock-item-actions">
          <button class="btn-secondary" onclick="restoreStock(${item.id})">🔄 画面に復元</button>
          <button class="btn-ghost" onclick="copyStockItem(${item.id})">📋 コピー</button>
        </div>
      </div>
    `
    )
    .join("");
}

window.copyStockItem = function (id) {
  const target = state.stocks.find((item) => item.id === id);
  if (target) {
    copyToClipboard(formatPromptText(target.data));
  }
};
window.deleteStock = deleteStock;
window.restoreStock = restoreStock;

// トースト通知
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

// ワンドロタイマー機能
let timerSeconds = 60 * 60;
let defaultMinutes = 60;
let timerInterval = null;
let isRunning = false;

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  document.getElementById("timerDisplay").textContent =
    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function toggleTimer() {
  const startBtn = document.getElementById("timerStartBtn");
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.textContent = "再開";
  } else {
    if (timerSeconds <= 0) {
      timerSeconds = defaultMinutes * 60;
    }
    isRunning = true;
    startBtn.textContent = "一時停止";
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.textContent = "スタート";
        showToast("⏰ お疲れ様でした！時間終了です！");
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timerSeconds = defaultMinutes * 60;
  document.getElementById("timerStartBtn").textContent = "スタート";
  updateTimerDisplay();
}

// イベントリスナー登録
function setupEventListeners() {
  document.getElementById("generateAllBtn").addEventListener("click", generateAll);

  document.getElementById("copyAllBtn").addEventListener("click", () => {
    copyToClipboard(formatPromptText(state.current));
  });

  document.getElementById("saveStockBtn").addEventListener("click", saveCurrentToStock);

  // 各カードのロック・個別再抽選
  document.querySelectorAll(".topic-card").forEach((card) => {
    const key = card.dataset.key;
    card.querySelector(".lock-btn").addEventListener("click", () => toggleLock(key));
    card.querySelector(".reroll-btn").addEventListener("click", () => generateSingle(key));
  });

  // ストックモーダル開閉
  document.getElementById("stockToggleBtn").addEventListener("click", () => {
    renderStockList();
    document.getElementById("stockModal").classList.remove("hidden");
  });

  document.getElementById("closeStockBtn").addEventListener("click", () => {
    document.getElementById("stockModal").classList.add("hidden");
  });

  document.getElementById("stockModal").addEventListener("click", (e) => {
    if (e.target.id === "stockModal") {
      document.getElementById("stockModal").classList.add("hidden");
    }
  });

  // タイマー操作
  document.getElementById("timerStartBtn").addEventListener("click", toggleTimer);
  document.getElementById("timerResetBtn").addEventListener("click", resetTimer);

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      defaultMinutes = parseInt(btn.dataset.min, 10);
      resetTimer();
    });
  });
}
