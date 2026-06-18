const events = [
  { name:'NPOふれあい', tag:'体験・ワークショップ', genre:'体験', time:'10:00 - 12:00', place:'市役所1Fロビー', booth:'A-5', desc:'地域の交流を目的としたワークショップを行います。', floor:'1F', x:72, y:36, walk:'約30秒' },
  { name:'手づくり工房', tag:'販売・体験', genre:'体験', time:'10:00 - 15:00', place:'市役所1Fロビー', booth:'B-2', desc:'手作り雑貨の販売と簡単な制作体験ができます。', floor:'1F', x:49, y:30, walk:'約40秒' },
  { name:'こども未来クラブ', tag:'子ども向け', genre:'子ども向け', time:'12:00 - 15:00', place:'市役所2F多目的室', booth:'C-1', desc:'親子で参加できる楽しいイベントです。', floor:'2F', x:42, y:24, walk:'約1分' },
  { name:'健康サポート町田', tag:'健康相談', genre:'相談会', time:'15:00 - 17:00', place:'市役所3F研修室', booth:'D-4', desc:'健康チェックと生活相談を行います。', floor:'3F', x:68, y:25, walk:'約1分30秒' },
  { name:'シニアスマホ相談会', tag:'相談会', genre:'相談会', time:'10:00 - 16:00', place:'市役所2F会議室B', booth:'C-7', desc:'スマートフォンの使い方を丁寧にサポートします。', floor:'2F', x:72, y:44, walk:'約1分' },
  { name:'防災体験ブース', tag:'防災・体験', genre:'体験', time:'10:00 - 15:00', place:'市役所1F入口付近', booth:'A-1', desc:'防災グッズや避難体験ができます。', floor:'1F', x:26, y:70, walk:'約20秒' },
  { name:'まちだ音楽クラブ', tag:'音楽', genre:'音楽', time:'13:00 - 15:00', place:'市役所3Fホール', booth:'E-2', desc:'地域の音楽グループによる演奏会です。', floor:'3F', x:48, y:35, walk:'約1分20秒' },
  { name:'ボランティア相談会', tag:'相談会', genre:'相談会', time:'11:00 - 16:00', place:'市役所2F会議室A', booth:'C-5', desc:'地域ボランティア活動について相談できます。', floor:'2F', x:28, y:34, walk:'約55秒' },
  { name:'環境エコ展示', tag:'展示', genre:'展示', time:'10:00 - 17:00', place:'市役所3F展示室', booth:'D-1', desc:'環境保全活動やリサイクルについて紹介します。', floor:'3F', x:24, y:28, walk:'約1分10秒' },
  { name:'地域交流カフェ', tag:'交流', genre:'交流', time:'10:00 - 17:00', place:'市役所1Fホール', booth:'B-5', desc:'地域住民同士が気軽に交流できるカフェです。', floor:'1F', x:66, y:62, walk:'約50秒' },
  { name:'英会話サークル', tag:'学習・交流', genre:'交流', time:'13:00 - 16:00', place:'市役所2F研修室', booth:'C-8', desc:'初心者向け英会話体験レッスンを行います。', floor:'2F', x:60, y:26, walk:'約1分' },
  { name:'子ども工作教室', tag:'子ども向け', genre:'子ども向け', time:'10:00 - 14:00', place:'市役所2F多目的室', booth:'C-2', desc:'自由工作やクラフト作りを楽しめます。', floor:'2F', x:45, y:62, walk:'約1分10秒' },
  { name:'町田歴史研究会', tag:'展示', genre:'展示', time:'10:00 - 16:00', place:'市役所3F展示室', booth:'D-6', desc:'町田の歴史資料や写真を展示しています。', floor:'3F', x:35, y:62, walk:'約1分20秒' },
  { name:'スポーツ体験コーナー', tag:'体験', genre:'体験', time:'11:00 - 15:00', place:'市役所1F広場', booth:'A-8', desc:'簡単なスポーツ体験ができます。', floor:'1F', x:78, y:70, walk:'約1分' },
  { name:'ペット相談会', tag:'相談会', genre:'相談会', time:'12:00 - 16:00', place:'市役所2F会議室B', booth:'C-9', desc:'ペットの健康や飼育について相談できます。', floor:'2F', x:74, y:58, walk:'約1分15秒' }
];

const $ = (id) => document.getElementById(id);
const results = $('results');
const resultCount = $('resultCount');
const routeLine = $('routeLine');
const mapPin = $('mapPin');
const boothLabel = $('boothLabel');

function scrollToSection(id){ $(id).scrollIntoView({behavior:'smooth', block:'start'}); }

document.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => scrollToSection(btn.dataset.jump)));

document.querySelectorAll('.quick-chips button').forEach(btn => {
  btn.addEventListener('click', () => { $('keyword').value = btn.dataset.key; filterEvents(); });
});

function renderEvents(list){
  results.innerHTML = '';
  resultCount.textContent = list.length ? `${list.length}件のイベントを表示しています。` : '条件に合うイベントはありません。';
  if(!list.length){
    results.innerHTML = '<article class="event-card"><h3>結果がありません</h3><p class="desc">キーワードや条件を変えて、もう一度検索してください。</p></article>';
    return;
  }
  list.forEach((event) => {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.innerHTML = `
      <span class="tag">${event.tag}</span>
      <h3>${event.name}</h3>
      <p class="info">🕒 ${event.time}</p>
      <p class="info">📍 ${event.place}</p>
      <p class="info">🏷 ブース：${event.booth}</p>
      <p class="desc">${event.desc}</p>
      <div class="card-actions">
        <button class="detail-btn" type="button">詳細を見る</button>
        <button class="map-btn" type="button">マップを見る</button>
      </div>`;
    card.querySelector('.detail-btn').addEventListener('click', () => alert(`${event.name}\n\n時間：${event.time}\n場所：${event.place}\nブース：${event.booth}\n\n${event.desc}`));
    card.querySelector('.map-btn').addEventListener('click', () => showMap(event, true));
    results.appendChild(card);
  });
}

function filterEvents(){
  const keyword = $('keyword').value.trim().toLowerCase();
  const genre = $('genre').value;
  const place = $('place').value;
  const time = $('time').value;
  const list = events.filter(e => {
    const text = `${e.name} ${e.tag} ${e.genre} ${e.time} ${e.place} ${e.booth} ${e.desc}`.toLowerCase();
    return (!keyword || text.includes(keyword)) &&
      (genre === 'all' || e.genre === genre || e.tag.includes(genre)) &&
      (place === 'all' || e.floor === place) &&
      (time === 'all' || e.time.startsWith(time + ':'));
  });
  renderEvents(list);
  scrollToSection('eventList');
}

function showMap(event, shouldScroll=false){
  $('selectedName').textContent = event.name;
  $('selectedPlace').textContent = `${event.place}（${event.booth}）`;
  $('selectedTime').textContent = event.time;
  $('mapTitle').textContent = `市役所${event.floor} フロアマップ`;
  $('walkTime').textContent = event.walk;
  boothLabel.textContent = event.booth;
  mapPin.style.left = event.x + '%';
  mapPin.style.top = event.y + '%';
  const startX = 18, startY = 82;
  const bendY = Math.min(83, Math.max(38, Number(event.y) + 16));
  routeLine.setAttribute('points', `${startX},${startY} ${startX},${bendY} ${event.x},${bendY} ${event.x},${event.y}`);
  document.querySelectorAll('#floorTabs button').forEach(btn => btn.classList.toggle('active', btn.dataset.floor === event.floor));
  if(shouldScroll) scrollToSection('map');
}

$('searchForm').addEventListener('submit', e => { e.preventDefault(); filterEvents(); });
$('resetBtn').addEventListener('click', () => { $('keyword').value=''; $('genre').value='all'; $('place').value='all'; $('time').value='all'; renderEvents(events); });
$('fontBtn').addEventListener('click', () => document.body.classList.toggle('large'));

document.querySelectorAll('#floorTabs button').forEach(btn => btn.addEventListener('click', () => {
  const event = events.find(e => e.floor === btn.dataset.floor);
  if(event) showMap(event);
}));

renderEvents(events);
showMap(events[0]);
