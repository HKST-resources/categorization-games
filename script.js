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
動物	貓頭鷹	動物/貓頭鷹.png
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

let selectedCards = [];
let gameType = 'fixed';

// 1. Settings
document.getElementById('sizeSlider').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--img-size', `${e.target.value}px`);
});

document.getElementById('bgPicker').addEventListener('change', (e) => {
    document.body.style.background = e.target.value === 'white' ? "white" : `url('images/${e.target.value}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
});

function toggleTextDisplay() {
    const stage = document.getElementById('game-stage');
    document.getElementById('textToggle').checked ? stage.classList.remove('hide-text') : stage.classList.add('hide-text');
}

// 2. Selection Logic
function initGame(mode) {
    if (mode === 'sorting') {
        const stage = document.getElementById('game-stage');
        stage.innerHTML = `<div style="text-align:center; padding-top:100px;">
            <button class="nav-btn btn-sorting" style="font-size:2rem; padding:40px 60px;" onclick="startSelection('fixed')">按類別分類</button>
            <button class="nav-btn btn-naming" style="font-size:2rem; padding:40px 60px; margin-left:20px;" onclick="startSelection('free')">自由分類</button>
        </div>`;
        document.getElementById('current-game-title').innerText = "1. 選擇活動模式";
    }
}

function startSelection(type) {
    gameType = type;
    renderSelectionPage();
}

function renderSelectionPage() {
    const stage = document.getElementById('game-stage');
    const cats = [...new Set(vocabList.map(v => v.category))];
    stage.innerHTML = `
        <div class="selection-screen">
            <div class="selection-controls">
                <button class="nav-btn" style="background:#999;" onclick="initGame('sorting')">⇠ 返回</button>
                <select id="catJumpMenu" onchange="document.getElementById(this.value).scrollIntoView()">
                    <option value="">快速跳轉至...</option>
                    ${cats.map(c => `<option value="cat-${c}">${c}</option>`).join('')}
                </select>
                <input type="text" id="vocabSearch" placeholder="🔍 搜尋詞彙..." onkeyup="updateSelectionList(this.value)">
            </div>
            <div id="selection-scroll-area"></div>
            <div class="selection-footer">
                <button class="nav-btn btn-naming" style="width:80%; font-size:1.6rem; padding:20px;" onclick="proceed()">下一步 (已選: <span id="selCount">0</span>) ➔</button>
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
            html += `<div class="category-section" id="cat-${cat}">
                <div class="category-header"><span>${cat}</span><button class="nav-btn" style="background:rgba(0,0,0,0.2);" onclick="toggleCat('${cat}')">全選 / 取消</button></div>
                <div class="selection-grid">${items.map(item => {
                    const active = selectedCards.some(c => c.id === item.id) ? 'active' : '';
                    return `<div class="select-item ${active}" onclick="toggleCard(${item.id})"><img src="images/${item.img}"><p>${item.name}</p></div>`;
                }).join('')}</div>
            </div>`;
        }
    });
    container.innerHTML = html;
    document.getElementById('selCount').innerText = selectedCards.length;
    toggleTextDisplay();
}

function toggleCard(id) {
    const idx = selectedCards.findIndex(c => c.id === id);
    idx > -1 ? selectedCards.splice(idx, 1) : selectedCards.push(vocabList.find(v => v.id === id));
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
    if(selectedCards.length === 0) return alert("請至少選擇一張圖片");
    gameType === 'free' ? runChallenge() : renderPrep();
}

// 3. Game Pages
function renderPrep() {
    const stage = document.getElementById('game-stage');
    const cats = [...new Set(selectedCards.map(c => c.category))];
    stage.innerHTML = `<div class="vertical-scroll">
        <button class="nav-btn" style="background:#999; margin-bottom:20px;" onclick="renderSelectionPage()">⇠ 返回修改</button>
        <div class="bin-container">${cats.map((cat, i) => `
            <div class="bin" style="flex:none; height:180px;">
                <div class="bin-header" style="background:${categoryColors[i % categoryColors.length]}">
                    <img src="images/categories/${cat}.png" onerror="this.style.display='none'"><span>${cat}</span>
                </div>
                <div class="drop-zone">${selectedCards.filter(c => c.category === cat).map(c => `<div class="card"><img src="images/${c.img}"><p>${c.name}</p></div>`).join('')}</div>
            </div>`).join('')}</div>
        <div style="text-align:center; padding:50px;"><button class="nav-btn btn-sorting" style="font-size:1.8rem; padding:25px 80px;" onclick="runChallenge()">正式開始 🚀</button></div>
    </div>`;
    document.getElementById('current-game-title').innerText = "3. 預覽與教學";
    toggleTextDisplay();
}

function runChallenge() {
    const stage = document.getElementById('game-stage');
    const cats = gameType === 'fixed' ? [...new Set(selectedCards.map(c => c.category))] : ["籃子 1", "籃子 2"];
    stage.innerHTML = `<div class="challenge-layout">
        <div id="pool" class="challenge-pool"></div>
        <div class="bin-container">${cats.map((cat, i) => `
            <div class="bin">
                <div class="bin-header" style="background:${categoryColors[i % categoryColors.length]}">
                    ${gameType === 'fixed' ? `<img src="images/categories/${cat}.png" onerror="this.style.display='none'">` : ''}<span>${cat}</span>
                </div>
                <div class="drop-zone" data-cat="${cat}"></div>
            </div>`).join('')}</div>
        <button class="nav-btn" style="position:absolute; bottom:10px; left:10px; background:#999; z-index:100; font-size:0.8rem;" onclick="renderSelectionPage()">退出</button>
    </div>`;

    const pool = document.getElementById('pool');
    [...selectedCards].sort(() => 0.5 - Math.random()).forEach(c => {
        const d = document.createElement('div'); d.className = 'card'; d.dataset.cat = c.category;
        d.innerHTML = `<img src="images/${c.img}"><p>${c.name}</p>`; pool.appendChild(d);
    });

    [pool, ...document.querySelectorAll('.drop-zone')].forEach(z => {
        new Sortable(z, { group: 'sort', animation: 150, onAdd: (e) => {
            if (e.to.id !== 'pool') {
                const ok = (gameType === 'free' || e.item.dataset.cat === e.to.dataset.cat);
                playFX(e.item, ok);
                if(pool.children.length === 0 && gameType === 'fixed') {
                    if(document.querySelectorAll('.bin .card').length === selectedCards.length) finish();
                }
            }
        }});
    });
    document.getElementById('current-game-title').innerText = "分類挑戰中";
    toggleTextDisplay();
}

// Fixed FX: Now uses absolute screen coordinates and cloned audio
function playFX(cardEl, ok) {
    // 1. Position Logic
    const rect = cardEl.getBoundingClientRect();
    const fx = document.createElement('div');
    fx.className = 'feedback-fx';
    fx.innerText = ok ? '⭐' : '❌';
    fx.style.left = `${rect.left + rect.width/2 - 40}px`;
    fx.style.top = `${rect.top}px`;
    document.body.appendChild(fx);
    setTimeout(() => fx.remove(), 800);

    // 2. Sound Logic (Cloning ensures it plays every time)
    const originalSnd = document.getElementById(ok ? 'snd-star' : 'snd-wrong');
    if (originalSnd) {
        const clonedSnd = originalSnd.cloneNode();
        clonedSnd.play().catch(e => console.log("Audio play failed:", e));
    }
}

function finish() {
    const snd = document.getElementById('snd-hooray');
    if(snd) snd.play();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

async function takeScreenshot() {
    const canvas = await html2canvas(document.getElementById('capture-area'), { useCORS: true, scale: 2 });
    const link = document.createElement('a');
    link.download = `活動_${new Date().getTime()}.png`;
    link.href = canvas.toDataURL(); link.click();
}
