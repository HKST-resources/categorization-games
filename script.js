// --- 1. DATA & CONSTANTS ---
const bulkVocabData = `
水果	哈密瓜	水果/哈密瓜.png
水果	士多啤梨	水果/士多啤梨.png
水果	奇異果	水果/奇異果.png
水果	提子	水果/提子.png
水果	木瓜	水果/木瓜.png
水果	楊桃	水果/楊桃.png
水果	榴槤	水果/榴槤.png
水果	橙	水果/橙.png
水果	檸檬	水果/檸檬.png
水果	火龍果	水果/火龍果.png
水果	牛油果	水果/牛油果.png
水果	芒果	水果/芒果.png
水果	荔枝	水果/荔枝.png
水果	菠蘿	水果/菠蘿.png
水果	藍莓	水果/藍莓.png
水果	蘋果	水果/蘋果.png
水果	西瓜	水果/西瓜.png
水果	車厘子	水果/車厘子.png
水果	香蕉	水果/香蕉.png
水果	龍眼	水果/龍眼.png
蔬菜	南瓜	蔬菜/南瓜.png
蔬菜	娃娃菜	蔬菜/娃娃菜.png
蔬菜	椰菜	蔬菜/椰菜.png
蔬菜	椰菜花	蔬菜/椰菜花.png
蔬菜	洋蔥	蔬菜/洋蔥.png
蔬菜	生菜	蔬菜/生菜.png
蔬菜	番薯	蔬菜/番薯.png
蔬菜	白菜	蔬菜/白菜.png
蔬菜	粟米	蔬菜/粟米.png
蔬菜	紅椒	蔬菜/紅椒.png
蔬菜	紅蘿蔔	蔬菜/紅蘿蔔.png
蔬菜	茄子	蔬菜/茄子.png
蔬菜	菜心	蔬菜/菜心.png
蔬菜	菠菜	蔬菜/菠菜.png
蔬菜	蕃茄	蔬菜/蕃茄.png
蔬菜	薯仔	蔬菜/薯仔.png
蔬菜	蘑菇	蔬菜/蘑菇.png
蔬菜	蘿蔔	蔬菜/蘿蔔.png
蔬菜	西蘭花	蔬菜/西蘭花.png
蔬菜	辣椒	蔬菜/辣椒.png
蔬菜	青椒	蔬菜/青椒.png
蔬菜	青瓜	蔬菜/青瓜.png
蔬菜	青豆	蔬菜/青豆.png
蔬菜	黃椒	蔬菜/黃椒.png
動物	企鵝	動物/企鵝.png
動物	倉鼠	動物/倉鼠.png
動物	兔	動物/兔.png
動物	北極熊	動物/北極熊.png
動物	大象	動物/大象.png
動物	天鵝	動物/天鵝.png
動物	斑馬	動物/斑馬.png
動物	樹熊	動物/樹熊.png
動物	河馬	動物/河馬.png
動物	熊	動物/熊.png
動物	熊貓	動物/熊貓.png
動物	牛	動物/牛.png
動物	狐狸	動物/狐狸.png
動物	狗	動物/狗.png
動物	獅子	動物/獅子.png
動物	羊	動物/羊.png
動物	老虎	動物/老虎.png
動物	老鼠	動物/老鼠.png
動物	蛇	動物/蛇.png
動物	袋鼠	動物/袋鼠.png
動物	豬	動物/豬.png
動物	豹	動物/豹.png
動物	貓	動物/貓.png
動物	貓頭營	動物/貓頭營.png
動物	長頸鹿	動物/長頸鹿.png
動物	雞	動物/雞.png
動物	馬	動物/馬.png
動物	馬騮｜猴子	動物/馬騮｜猴子.png
動物	駱駝	動物/駱駝.png
動物	鱷魚	動物/鱷魚.png
動物	鴨	動物/鴨.png
動物	鸚鵡	動物/鸚鵡.png
動物	鹿	動物/鹿.png
動物	麻雀｜雀仔	動物/麻雀｜雀仔.png
動物	龜	動物/龜.png
交通工具	單車	交通工具/單車.png
交通工具	垃圾車	交通工具/垃圾車.png
交通工具	天星小輪	交通工具/天星小輪.png
交通工具	小巴	交通工具/小巴.png
交通工具	巴士	交通工具/巴士.png
交通工具	救護車	交通工具/救護車.png
交通工具	旅遊巴	交通工具/旅遊巴.png
交通工具	消防車	交通工具/消防車.png
交通工具	港鐵	交通工具/港鐵.png
交通工具	的士	交通工具/的士.png
交通工具	直升機	交通工具/直升機.png
交通工具	警車	交通工具/警車.png
交通工具	貨櫃車	交通工具/貨櫃車.png
交通工具	輕鐵	交通工具/輕鐵.png
交通工具	郵輪	交通工具/郵輪.png
交通工具	電單車	交通工具/電單車.png
交通工具	電車	交通工具/電車.png
交通工具	飛機	交通工具/飛機.png
衣服	冷帽	衣服/冷帽.png
衣服	冷衫｜外套	衣服/冷衫｜外套.png
衣服	冷衫｜毛衣	衣服/冷衫｜毛衣.png
衣服	呔	衣服/呔.png
衣服	外套｜褸	衣服/外套｜褸.png
衣服	帽	衣服/帽.png
衣服	恤衫	衣服/恤衫.png
衣服	手襪	衣服/手襪.png
衣服	拖鞋	衣服/拖鞋.png
衣服	校服	衣服/校服.png
衣服	泳衣	衣服/泳衣.png
衣服	泳褲	衣服/泳褲.png
衣服	皮帶	衣服/皮帶.png
衣服	短褲	衣服/短褲.png
衣服	羽絨	衣服/羽絨.png
衣服	衫	衣服/衫.png
衣服	裙	衣服/裙.png
衣服	襪	衣服/襪.png
衣服	長褲	衣服/長褲.png
衣服	雨衣｜雨褸	衣服/雨衣｜雨褸.png
衣服	雨靴	衣服/雨靴.png
衣服	鞋	衣服/鞋.png
衣服	頸巾	衣服/頸巾.png
文具	刨筆機	文具/刨筆機.png
文具	原子筆	文具/原子筆.png
文具	擦膠	文具/擦膠.png
文具	橡筋	文具/橡筋.png
文具	水筆	文具/水筆.png
文具	漿糊筆	文具/漿糊筆.png
文具	白膠漿	文具/白膠漿.png
文具	簿	文具/簿.png
文具	膠水	文具/膠水.png
文具	膠紙	文具/膠紙.png
文具	萬字夾	文具/萬字夾.png
文具	螢光筆	文具/螢光筆.png
文具	釘書機	文具/釘書機.png
文具	鉛筆	文具/鉛筆.png
文具	鉛筆刨	文具/鉛筆刨.png
文具	鉸剪｜剪刀	文具/鉸剪｜剪刀.png
文具	間尺	文具/間尺.png
文具	顏色筆	文具/顏色筆.png
文具	顏色紙	文具/顏色紙.png
傢俬	床	傢俬/床.png
傢俬	書櫃	傢俬/書櫃.png
傢俬	枱	傢俬/枱.png
傢俬	梳化	傢俬/梳化.png
傢俬	櫃	傢俬/櫃.png
傢俬	櫈	傢俬/櫈.png
傢俬	衣櫃	傢俬/衣櫃.png
電器	冷氣機	電器/冷氣機.png
電器	吸塵機	電器/吸塵機.png
電器	微波爐	電器/微波爐.png
電器	洗衣機	電器/洗衣機.png
電器	焗爐	電器/焗爐.png
電器	熨斗	電器/熨斗.png
電器	熱水壺	電器/熱水壺.png
電器	燈	電器/燈.png
電器	雪櫃	電器/雪櫃.png
電器	電磁爐	電器/電磁爐.png
電器	電腦	電器/電腦.png
電器	電視	電器/電視.png
電器	電飯煲	電器/電飯煲.png
電器	風扇	電器/風扇.png
電器	風筒	電器/風筒.png
玩具	套圈	玩具/套圈.png
玩具	恐龍	玩具/恐龍.png
玩具	機械人	玩具/機械人.png
玩具	水槍	玩具/水槍.png
玩具	波	玩具/波.png
玩具	火車	玩具/火車.png
玩具	煮飯仔	玩具/煮飯仔.png
玩具	熊啤啤	玩具/熊啤啤.png
玩具	玩具屋	玩具/玩具屋.png
玩具	琴	玩具/琴.png
玩具	積木	玩具/積木.png
玩具	籃球	玩具/籃球.png
玩具	足球	玩具/足球.png
玩具	車	玩具/車.png
玩具	遙控車	玩具/遙控車.png
玩具	風箏	玩具/風箏.png
玩具	鼓	玩具/鼓.png
玩具	Lego｜積木	玩具/Lego｜積木.png
玩具	puzzle｜拼圖	玩具/puzzle｜拼圖.png
飲品	咖啡	飲品/咖啡.png
飲品	朱古力奶	飲品/朱古力奶.png
飲品	橙汁	飲品/橙汁.png
飲品	檸檬茶	飲品/檸檬茶.png
飲品	水	飲品/水.png
飲品	汽水	飲品/汽水.png
飲品	湯	飲品/湯.png
飲品	牛奶	飲品/牛奶.png
飲品	益力多	飲品/益力多.png
飲品	維他奶	飲品/維他奶.png
飲品	茶	飲品/茶.png
飲品	豆漿	飲品/豆漿.png
餐具及廚具	刀	餐具及廚具/刀.png
餐具及廚具	匙羹	餐具及廚具/匙羹.png
餐具及廚具	叉	餐具及廚具/叉.png
餐具及廚具	杯	餐具及廚具/杯.png
餐具及廚具	煲	餐具及廚具/煲.png
餐具及廚具	碗	餐具及廚具/碗.png
餐具及廚具	碟	餐具及廚具/碟.png
餐具及廚具	筷子	餐具及廚具/筷子.png
餐具及廚具	鑊鏟	餐具及廚具/鑊鏟.png
餐具及廚具	飲筒｜飲管	餐具及廚具/飲筒｜飲管.png
廁所物品	地拖	廁所物品/地拖.png
廁所物品	廁紙	廁所物品/廁紙.png
廁所物品	掃把	廁所物品/掃把.png
廁所物品	梘液	廁所物品/梘液.png
廁所物品	梳	廁所物品/梳.png
廁所物品	毛巾	廁所物品/毛巾.png
廁所物品	水桶	廁所物品/水桶.png
廁所物品	浴缸	廁所物品/浴缸.png
廁所物品	牙刷	廁所物品/牙刷.png
廁所物品	牙膏	廁所物品/牙膏.png
廁所物品	花灑	廁所物品/花灑.png
廁所物品	馬桶	廁所物品/馬桶.png
職業	侍應	職業/侍應.png
職業	司機	職業/司機.png
職業	外賣員	職業/外賣員.png
職業	太空人	職業/太空人.png
職業	工程師	職業/工程師.png
職業	廚師	職業/廚師.png
職業	收銀員	職業/收銀員.png
職業	消防員	職業/消防員.png
職業	清潔工人	職業/清潔工人.png
職業	老師	職業/老師.png
職業	警察	職業/警察.png
職業	護士	職業/護士.png
職業	農夫	職業/農夫.png
職業	郵差	職業/郵差.png
職業	醫生	職業/醫生.png
顏色	啡色	顏色/啡色.png
顏色	橙色	顏色/橙色.png
顏色	灰色	顏色/灰色.png
顏色	白色	顏色/白色.png
顏色	粉紅色	顏色/粉紅色.png
顏色	紅色	顏色/紅色.png
顏色	紫色	顏色/紫色.png
顏色	綠色	顏色/綠色.png
顏色	藍色	顏色/藍色.png
顏色	黃色	顏色/黃色.png
顏色	黑色	顏色/黑色.png
形狀	三角形	形狀/三角形.png
形狀	圓形	形狀/圓形.png
形狀	心形	形狀/心形.png
形狀	星形	形狀/星形.png
形狀	正方形	形狀/正方形.png
形狀	菱形	形狀/菱形.png
形狀	長方形	形狀/長方形.png
數字	1	數字/1.png
數字	2	數字/2.png
數字	3	數字/3.png
數字	4	數字/4.png
數字	5	數字/5.png
數字	6	數字/6.png
數字	7	數字/7.png
數字	8	數字/8.png
數字	9	數字/9.png
數字	10	數字/10.png
`.trim();

const categoryColors = ["#FF6B6B", "#48DBFB", "#1DD1A1", "#FECA57", "#A29BFE", "#FAB1A0"];

const vocabList = bulkVocabData.split('\n').map((line, i) => {
    const parts = line.split(/[,\t]/);
    return { id: i, category: parts[0]?.trim(), name: parts[1]?.trim(), img: parts[2]?.trim() };
});

// State Management
let selectedCards = [];
let gameType = 'fixed'; 
let currentGameMode = ""; 

// --- 2. UTILITIES ---
function playSoundEffect(type) {
    let soundId = "";
    if (type === 'ok') soundId = 'snd-star';
    else if (type === 'wrong') soundId = 'snd-wrong';
    else if (type === 'hooray') soundId = 'snd-hooray';

    const snd = document.getElementById(soundId);
    if (snd) {
        snd.currentTime = 0; 
        snd.play().catch(e => console.warn("Audio play blocked", e));
    }
}

function getCategoryImg(cat) {
    return `images/${cat}/${cat}.png`;
}

document.getElementById('sizeSlider').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--img-size', `${e.target.value}px`);
});

function changeBg(val) {
    if (val === 'white') {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundImage = `url('images/${val}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }
}

function toggleTextDisplay() {
    const stage = document.getElementById('game-stage');
    const toggle = document.getElementById('textToggle');
    if(toggle && toggle.checked) stage.classList.remove('hide-text');
    else stage.classList.add('hide-text');
}

// --- 3. NAVIGATION ---
function initGame(mode) {
    currentGameMode = mode;
    selectedCards = [];
    const stage = document.getElementById('game-stage');
    
    if (mode === 'sorting') {
        stage.innerHTML = `
        <div style="text-align:center; padding-top:100px;">
            <button class="nav-btn btn-sorting" style="font-size:2rem; padding:40px 60px;" onclick="startSelection('fixed')">按類別分類</button>
            <button class="nav-btn btn-naming" style="font-size:2rem; padding:40px 60px; margin-left:20px;" onclick="startSelection('free')">自由分類</button>
        </div>`;
    }
}

function startSelection(type) {
    gameType = type;
    renderSelectionPage();
}

// --- 4. SELECTION PAGE ---
function renderSelectionPage() {
    const stage = document.getElementById('game-stage');
    const cats = [...new Set(vocabList.map(v => v.category))];
    
    stage.innerHTML = `
        <div class="selection-screen" style="padding-bottom: 120px;">
            <div class="selection-controls" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 30px;">
                <button class="nav-btn" style="background:#95a5a6;" onclick="initGame('sorting')">⇠ 返回</button>
                
                <div style="display: flex; align-items: center; gap: 20px;">
                    <select id="catJumpMenu" onchange="const el = document.getElementById(this.value); if(el) el.scrollIntoView({behavior: 'smooth', block: 'center'});" 
                            style="font-size: 1.4rem; padding: 12px 25px; border-radius: 15px; border: 3px solid #f39c12; font-weight:bold; cursor:pointer;">
                        <option value="">🚀 跳轉至類別...</option>
                        ${cats.map(c => `<option value="cat-${c}">${c}</option>`).join('')}
                    </select>
                    
                    <input type="text" id="vocabSearch" placeholder="🔍 搜尋..." onkeyup="updateSelectionList(this.value)"
                           style="width: 250px; padding: 12px 20px; border-radius: 25px; border: 2px solid #ddd; font-size: 1.1rem;">
                </div>
            </div>

            <div id="selection-scroll-area"></div>

            <div class="selection-footer" style="position: fixed; bottom: 0; left: 0; width: 100%; padding: 20px; background: rgba(255,255,255,0.9); display: flex; justify-content: flex-end; box-sizing: border-box; z-index: 1000;">
                <button class="btn-proceed" onclick="proceed()" style="background: #27ae60; color: white; border: none; font-size: 1.6rem; padding: 15px 50px; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(39,174,96,0.3);">
                    下一步 (已選: <span id="selCount">0</span>) ➔
                </button>
            </div>
        </div>`;
    updateSelectionList();
}

function updateSelectionList(query = "") {
    const container = document.getElementById('selection-scroll-area');
    const cats = [...new Set(vocabList.map(v => v.category))];
    let html = "";

    cats.forEach(cat => {
        const items = vocabList.filter(v => v.category === cat && v.name.includes(query));
        if (items.length > 0) {
            const allIn = items.every(i => selectedCards.some(s => s.id === i.id));
            html += `
                <div class="category-section" id="cat-${cat}" style="margin-bottom:40px;">
                    <div class="category-header" style="background: #f39c12; color: white; padding: 15px 25px; border-radius: 15px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <span style="font-size: 1.5rem; font-weight: bold;">${cat}</span>
                        <button class="nav-btn" style="background: white; color: #f39c12; border: none;" onclick="toggleCat('${cat}')">
                            ${allIn ? '取消全選' : '全選本類'}
                        </button>
                    </div>
                    <div class="selection-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">
                        ${items.map(item => {
                            const isActive = selectedCards.some(c => c.id === item.id);
                            const activeClass = isActive ? 'active' : '';
                            return `
                                <div class="select-item ${activeClass}" onclick="toggleCard(${item.id})" 
                                     style="border: 4px solid ${isActive ? '#2ecc71' : '#eee'}; background: ${isActive ? '#eafaf1' : 'white'}; border-radius: 20px; padding: 15px; text-align: center; cursor: pointer; transition: 0.2s;">
                                    <img src="images/${item.img}" style="width: 100%; height: auto; object-fit: contain;">
                                    <p style="margin: 10px 0 0 0; font-weight: bold; font-size: 1.2rem; color: #2c3e50;">${item.name}</p>
                                </div>`;
                        }).join('')}
                    </div>
                </div>`;
        }
    });
    container.innerHTML = html;
    document.getElementById('selCount').innerText = selectedCards.length;
    toggleTextDisplay();
}

function toggleCard(id) {
    const idx = selectedCards.findIndex(c => c.id === id);
    if(idx > -1) selectedCards.splice(idx, 1);
    else selectedCards.push(vocabList.find(v => v.id === id));
    updateSelectionList(document.getElementById('vocabSearch').value);
}

function toggleCat(catName) {
    const items = vocabList.filter(v => v.category === catName);
    const allIn = items.every(i => selectedCards.some(s => s.id === i.id));
    items.forEach(i => {
        const idx = selectedCards.findIndex(s => s.id === i.id);
        if(allIn && idx > -1) selectedCards.splice(idx, 1);
        else if(!allIn && idx === -1) selectedCards.push(i);
    });
    updateSelectionList();
}

function proceed() {
    if(selectedCards.length === 0) return alert("請先選擇圖片");
    gameType === 'free' ? runChallenge() : renderPrep();
}

// --- 5. PREPARATION BOARD ---
function renderPrep() {
    const stage = document.getElementById('game-stage');
    const cats = [...new Set(selectedCards.map(c => c.category))];
    
    stage.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; padding: 20px;">
            <button class="nav-btn" style="background:#95a5a6; margin-bottom: 20px;" onclick="renderSelectionPage()">⇠ 返回修改</button>
            
            <div class="prep-container" style="display: flex; flex-wrap: nowrap; gap: 30px; overflow-x: auto; width: 100%; padding-bottom: 20px;">
                ${cats.map((cat, i) => {
                    const color = categoryColors[i % categoryColors.length];
                    return `
                    <div class="prep-bin" style="min-width: 350px; background: white; border: 6px solid ${color}; border-radius: 30px; display: flex; flex-direction: column; overflow: hidden;">
                        <div style="background: ${color}; padding: 20px; display: flex; align-items: center; justify-content: center; gap: 15px;">
                            <img src="${getCategoryImg(cat)}" style="height: 60px; width: auto;" onerror="this.style.display='none'">
                            <span style="color: white; font-size: 2rem; font-weight: bold;">${cat}</span>
                        </div>
                        <div style="padding: 20px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                            ${selectedCards.filter(c => c.category === cat).map(c => `
                                <div style="width: 80px; text-align: center;">
                                    <img src="images/${c.img}" style="width: 100%;">
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                }).join('')}
            </div>
            
            <button class="btn-proceed" onclick="runChallenge()" style="margin-top: 30px; background: #f39c12; font-size: 2rem; padding: 20px 80px;">開始遊戲 🚀</button>
        </div>`;
    toggleTextDisplay();
}

// --- 6. CHALLENGE PHASE ---
function runChallenge() {
    const stage = document.getElementById('game-stage');
    const cats = gameType === 'fixed' ? [...new Set(selectedCards.map(c => c.category))] : ["籃子 A", "籃子 B"];
    
    stage.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 92vh; gap: 20px; padding: 20px;">
            <div id="pool" style="background: rgba(255,255,255,0.4); min-height: 180px; border-radius: 30px; border: 4px dashed white; display: flex; flex-wrap: wrap; gap: 15px; padding: 20px; justify-content: center; align-content: flex-start;"></div>
            
            <div class="prep-container" style="flex-grow: 1; display: flex; flex-wrap: nowrap; gap: 30px; overflow-x: auto;">
                ${cats.map((cat, i) => {
                    const color = categoryColors[i % categoryColors.length];
                    return `
                    <div class="prep-bin" style="min-width: 350px; background: white; border: 6px solid ${color}; border-radius: 30px; display: flex; flex-direction: column;">
                        <div style="background: ${color}; padding: 15px; text-align: center;">
                            <span style="color: white; font-size: 1.8rem; font-weight: bold;">${cat}</span>
                        </div>
                        <div class="drop-zone" data-cat="${cat}" style="flex-grow: 1; padding: 20px; display: flex; flex-wrap: wrap; gap: 15px; align-content: flex-start;"></div>
                    </div>`;
                }).join('')}
            </div>
            
            <button class="nav-btn" style="width: 150px; background:#95a5a6;" onclick="renderSelectionPage()">退出遊戲</button>
        </div>`;

    const pool = document.getElementById('pool');
    [...selectedCards].sort(() => 0.5 - Math.random()).forEach(c => {
        const d = document.createElement('div');
        d.className = 'select-item';
        d.dataset.cat = c.category;
        d.style.position = "relative";
        d.style.width = "120px";
        d.innerHTML = `<img src="images/${c.img}" style="width:100%"><p style="font-size:0.9rem; font-weight:bold;">${c.name}</p>`;
        pool.appendChild(d);
    });

    [pool, ...document.querySelectorAll('.drop-zone')].forEach(z => {
        new Sortable(z, {
            group: 'sort',
            animation: 200,
            forceFallback: true, // The "Secret Sauce" for following cursor/finger
            fallbackOnBody: true,
            onAdd: (e) => {
                if (e.to.id !== 'pool') {
                    const ok = (gameType === 'free' || e.item.dataset.cat === e.to.dataset.cat);
                    
                    // Floating Emoji Logic
                    const old = e.item.querySelector('.feedback-overlay');
                    if(old) old.remove();

                    const emoji = document.createElement('div');
                    emoji.className = 'feedback-overlay';
                    emoji.innerText = ok ? '⭐' : '❌';
                    // CSS absolute positioning floats it ABOVE the card
                    emoji.style.cssText = "position:absolute; top:-40px; right:-10px; font-size:3.5rem; z-index:100; pointer-events:none; text-shadow: 2px 2px 10px rgba(0,0,0,0.2);";
                    e.item.appendChild(emoji);

                    playSoundEffect(ok ? 'ok' : 'wrong');

                    if(pool.children.length === 0) {
                        const allOk = [...document.querySelectorAll('.drop-zone .feedback-overlay')].every(em => em.innerText === '⭐');
                        if(allOk) { setTimeout(() => { confetti(); playSoundEffect('hooray'); }, 300); }
                    }
                } else {
                    const em = e.item.querySelector('.feedback-overlay');
                    if(em) em.remove();
                }
            }
        });
    });
    toggleTextDisplay();
}

// Start with sorting
initGame('sorting');
