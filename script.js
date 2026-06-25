const events = [
  {
    name:'謎解きスタンプラリー',
    tag:'体験・ワークショップ',
    genre:'体験',
    time:'10:00 - 17:00',
    place:'市役所1F ワンストップロビー',
    booth:'A',
    desc:'市役所に隠された謎を解きながら楽しめるスタンプラリーです。',
    floor:'1F',
    x:36,
    y:24,
    walk:'約30秒',
    startX:50,
    startY:92
  },
  
  {
    name:'手づくり工房',
    tag:'販売・体験',
    genre:'体験',
    time:'10:00 - 15:00',
    place:'市役所1F みんなの広場',
    booth:'C',
    desc:'手作り雑貨の販売と簡単な制作体験ができます。',
    floor:'1F',
    x:76,
    y:78,
    walk:'約40秒',
    startX:50,
    startY:92
  },
  
  {
    name:'こども未来クラブ',
    tag:'子ども向け',
    genre:'子ども向け',
    time:'12:00 - 15:00',
    place:'市役所2F キッズスペース',
    booth:'E',
    desc:'親子で参加できる楽しいイベントです。',
    floor:'2F',
    x:88,
    y:82,
    walk:'約1分',
    startX:18,
    startY:55
  },
  
  {
    name:'健康サポート町田',
    tag:'健康相談',
    genre:'相談会',
    time:'15:00 - 17:00',
    place:'市役所3F 研修室',
    booth:'A',
    desc:'健康チェックと生活相談を行います。',
    floor:'3F',
    x:28,
    y:20,
    walk:'約1分',
    startX:18,
    startY:56
  },
  
  {
    name:'スマホ相談&見直し',
    tag:'相談会',
    genre:'相談会',
    time:'10:00 - 16:00',
    place:'市役所2F 会議室B',
    booth:'B',
    desc:'スマートフォンの使い方や料金の見直しについて相談できます。',
    floor:'2F',
    x:58,
    y:18,
    walk:'約1分',
    startX:18,
    startY:55
  },
  
  {
    name:'防災ゲーム',
    tag:'防災・体験',
    genre:'体験',
    time:'10:00 - 15:00',
    place:'市役所1F イベントスタジオ',
    booth:'D',
    desc:'ゲームを通して防災について楽しく学べます。',
    floor:'1F',
    x:33,
    y:79,
    walk:'約30秒',
    startX:50,
    startY:92
  },
  
  {
    name:'オカリナ＆ピアノ演奏',
    tag:'音楽',
    genre:'音楽',
    time:'13:00 - 15:00',
    place:'市役所3F ホール',
    booth:'D',
    desc:'オカリナとピアノによる演奏を楽しめます。',
    floor:'3F',
    x:30,
    y:80,
    walk:'約1分20秒',
    startX:18,
    startY:56
  },
  
  {
    name:'ボランティア相談会',
    tag:'相談会',
    genre:'相談会',
    time:'11:00 - 16:00',
    place:'市役所1F 相談コーナー',
    booth:'B',
    desc:'地域ボランティア活動について相談できます。',
    floor:'1F',
    x:66,
    y:56,
    walk:'約40秒',
    startX:50,
    startY:92
  },
  
  {
    name:'生きものを守る活動の紹介',
    tag:'展示',
    genre:'展示',
    time:'10:00 - 17:00',
    place:'市役所3F 展示室',
    booth:'C',
    desc:'地域の生きものを守る活動について紹介します。',
    floor:'3F',
    x:72,
    y:20,
    walk:'約1分',
    startX:18,
    startY:56
  },
  
  {
    name:'地域交流カフェ',
    tag:'交流',
    genre:'交流',
    time:'10:00 - 17:00',
    place:'市役所1F カフェスペース',
    booth:'Cafe',
    desc:'地域住民同士が気軽に交流できるカフェです。',
    floor:'1F',
    x:24,
    y:56,
    walk:'約30秒',
    startX:50,
    startY:92
  },
  
  {
    name:'明日からスマホがもっと楽しくなる',
    tag:'学習・交流',
    genre:'交流',
    time:'13:00 - 16:00',
    place:'市役所2F 会議室A',
    booth:'A',
    desc:'スマートフォンをもっと楽しく使うための体験型イベントです。',
    floor:'2F',
    x:30,
    y:18,
    walk:'約1分',
    startX:18,
    startY:55
  },
  
  {
    name:'リサイクル工作',
    tag:'子ども向け',
    genre:'子ども向け',
    time:'10:00 - 14:00',
    place:'市役所2F 多目的室',
    booth:'C',
    desc:'身近な材料を使って工作を楽しめます。',
    floor:'2F',
    x:26,
    y:82,
    walk:'約1分',
    startX:18,
    startY:55
  },
  
  {
    name:'町田歴史研究会',
    tag:'展示',
    genre:'展示',
    time:'10:00 - 16:00',
    place:'市役所3F 図書・情報コーナー',
    booth:'E',
    desc:'町田の歴史資料や写真を展示しています。',
    floor:'3F',
    x:56,
    y:80,
    walk:'約1分20秒',
    startX:18,
    startY:56
  },
  
  {
    name:'スポーツ体験コーナー',
    tag:'体験',
    genre:'体験',
    time:'11:00 - 15:00',
    place:'市役所2F 食堂・休憩スペース',
    booth:'F',
    desc:'簡単なスポーツ体験ができます。',
    floor:'2F',
    x:60,
    y:82,
    walk:'約1分',
    startX:18,
    startY:55
  },
  
  {
    name:'ペット相談会',
    tag:'相談会',
    genre:'相談会',
    time:'12:00 - 16:00',
    place:'市役所3F 会議室',
    booth:'F',
    desc:'ペットの健康や飼育について相談できます。',
    floor:'3F',
    x:88,
    y:80,
    walk:'約1分',
    startX:18,
    startY:56
  }
  ];

const $ = (id) => document.getElementById(id);
const results = $('results');
const resultCount = $('resultCount');
const mapPin = $('mapPin');
const boothLabel = $('boothLabel');
const routeLine = $('routeLine');

function scrollToSection(id){
  $(id).scrollIntoView({ behavior:'smooth', block:'start' });
}

document.querySelectorAll('[data-jump]').forEach(btn => {
  btn.addEventListener('click', () => scrollToSection(btn.dataset.jump));
});

document.querySelectorAll('.quick-chips button').forEach(btn => {
  btn.addEventListener('click', () => {
    $('keyword').value = btn.dataset.key;
    filterEvents();
  });
});

function renderEvents(list){
  results.innerHTML = '';
  resultCount.textContent = list.length
    ? `${list.length}件のイベントを表示しています。`
    : '条件に合うイベントはありません。';

  if(!list.length){
    results.innerHTML =
      '<article class="event-card"><h3>結果がありません</h3><p class="desc">キーワードや条件を変えて、もう一度検索してください。</p></article>';
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
      </div>
    `;

    card.querySelector('.detail-btn').addEventListener('click', () => {
      alert(`${event.name}\n\n時間：${event.time}\n場所：${event.place}\nブース：${event.booth}\n\n${event.desc}`);
    });

    card.querySelector('.map-btn').addEventListener('click', () => {
      showMap(event, true);
    });

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

function drawRoute(event){
  let startX, startY, turnX, turnY;

  if(event.floor === "1F"){
    startX = 50;
    startY = 92;
    turnX = 50;
    turnY = 84;  
  }
  else if(event.floor === "2F"){
    startX = 28;  
    startY = 58;   
    turnX = event.x;
    turnY = 58;    
  }
  else if(event.floor === "3F"){
    startX = 28;   
    startY = 58;   
    turnX = event.x;
    turnY = 58;   
  }

  let points = `${startX},${startY} ${turnX},${turnY} ${event.x},${event.y}`;
  
  routeLine.setAttribute("points", points);
}

function showMap(event, shouldScroll=false){
  $('selectedName').textContent = event.name;
  $('selectedPlace').textContent = `${event.place}（${event.booth}）`;
  $('selectedTime').textContent = event.time;
  $('mapTitle').textContent = `市役所${event.floor} フロアマップ`;
  $('walkTime').textContent = event.walk;

  boothLabel.textContent = event.booth;
  $('floorImage').src = event.floor + '.png';

  mapPin.style.left = event.x + '%';
  mapPin.style.top = event.y + '%';

  drawRoute(event);

  document.querySelectorAll('#floorTabs button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.floor === event.floor);
  });

  if(shouldScroll){
    scrollToSection('map');
  }
}

$('searchForm').addEventListener('submit', e => {
  e.preventDefault();
  filterEvents();
});

$('resetBtn').addEventListener('click', () => {
  $('keyword').value = '';
  $('genre').value = 'all';
  $('place').value = 'all';
  $('time').value = 'all';
  renderEvents(events);
});

$('fontBtn').addEventListener('click', () => {
  document.body.classList.toggle('large');
});

document.querySelectorAll('#floorTabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    const event = events.find(e => e.floor === btn.dataset.floor);
    if(event) showMap(event);
  });
});

renderEvents(events);
showMap(events[0]);