<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>Smart City Mobile Web View</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/common.css" rel="stylesheet">
    <link href="css/front.css" rel="stylesheet">

    <script src="js/jquery-1.12.4.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="js/axios.min.js" type="text/javascript"></script>

    <script src="js/common.js"></script>
    <script src="js/api.lib.js"></script>

    <script
        src="https://apis.openapi.sk.com/tmap/jsv2?version=1&format=javascript&appKey=43e32609-b337-47d5-b058-7813f232c2d5">
        </script>
    <script>
        var objMap;
        const token = sessionStorage.getItem("token");
        let _marker = [];
        let _vehicles = [];
        var currentInfoWindow = null;

        $(document).ready(function () {


            objMap = new Tmapv2.Map("mapDiv",
                {
                    width: "100%"
                    , height: "100%"
                    , animation: true
                    , draggable: true
                });
        });
    </script>
</head>

<body id="SCREEN-2">
    <div id="wrap">
        <div class="find-wrap">
            <div class="map-area">
                <div id="mapDiv" style="width:100%; height:100%;"></div>
            </div>
        </div>
    </div>

    <!-- 상단 바 -->
    <div class="top-bar">
        <button class="back-btn"><img src="common/img/back.svg" alt="뒤로가기"></button>
        <div id="dateText" class="date-text">2025-09-12</div>
        <input type="date" id="datePicker" class="date-hidd en">
    </div>

    <!-- 달력 전체화면 모달 -->
    <div id="calendarModal" class="cal-wrap" aria-modal="true" role="dialog" style="display:none;">
        <div class="cal-sheet">
            <div class="cal-header">
                <button class="nav prev" aria-label="이전달">‹</button>
                <div class="cal-title" id="calTitle">0000년 00월</div>
                <button class="nav next" aria-label="다음달">›</button>
            </div>
            <div class="cal-weekdays">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
            </div>
            <div id="calGrid" class="cal-grid"></div>
            <div class="cal-footer">
                <button class="btn cancel" id="calCancel">취소</button>
                <button class="btn confirm" id="calConfirm">확인</button>
            </div>
        </div>
    </div>

    <!-- 별도 알림 카드 -->
    <div id="alertFloat">
        <div id="alertBox"></div>
    </div>

    <!-- 하단: 이벤트 발생내역 바텀시트 -->
    <div id="eventSheet" class="event-sheet collapsed" role="region" aria-label="이벤트 발생내역">
        <button id="eventHeader" class="event-header" aria-expanded="false">
            <span class="event-title">이벤트 발생내역</span>
            <img id="eventChevron" class="chev" src="common/img/up.svg" alt="위로" />
        </button>
        <div id="eventBody" class="event-body"></div>
    </div>

    <script>
        const vehicle = JSON.parse(sessionStorage.getItem("vehicle") || '{}');
        const _key=vehicle.vehicleKey;
        console.log("veh2", vehicle);

        $.ajax({
            url: `http://localhost/api/1/vehicle/${_key}/timeSeries?keys=journeyStart,journeyEnd,dtc,batteryVolt,hardEvent,vehicleDepot`,
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.setRequestHeader("key", token);
            },
            data: {},
            dataType: "json",
            success: function (r) {
                console.log("result", r);
                const data = r.result;
                if (data == null || data.length == 0) {
                    alert("데이터가 없습니다");
                } else {
                    console.log("marker data", data);

                }
            }
        });
        /* ===== 상단 날짜 & 달력 모달 ===== */
        (function () {
            const dateText = document.getElementById('dateText');
            const dateInput = document.getElementById('datePicker');
            const modal = document.getElementById('calendarModal');
            const calTitle = document.getElementById('calTitle');
            const calGrid = document.getElementById('calGrid');
            const btnPrev = modal.querySelector('.prev');
            const btnNext = modal.querySelector('.next');
            const btnCancel = document.getElementById('calCancel');
            const btnOk = document.getElementById('calConfirm');

            let viewYear, viewMonth; // 표시 중인 연/월(0~11)
            let tempSelected = null; // 모달 내 임시 선택(YYYY-MM-DD)

            const pad = n => String(n).padStart(2, '0');
            const toISO = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
            const parseISO = s => {
                const [y, m, dd] = s.split('-').map(Number);
                return new Date(y, m - 1, dd);
            };
            const todayISO = () => toISO(new Date());

            // 초기값
            const initial = dateInput?.value || todayISO();
            dateInput.value = initial;
            dateText.textContent = initial;

            function openCalendar(baseISO) {
                const base = parseISO(baseISO || todayISO());
                viewYear = base.getFullYear();
                viewMonth = base.getMonth();
                tempSelected = baseISO || todayISO();
                renderCalendar();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            function closeCalendar() {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }

            function renderCalendar() {
                calTitle.textContent = `${viewYear}년 ${pad(viewMonth + 1)}월`;
                calGrid.innerHTML = '';

                const first = new Date(viewYear, viewMonth, 1);
                const startDay = first.getDay();
                const lastDate = new Date(viewYear, viewMonth + 1, 0).getDate();

                // 이전달 말일 채우기
                const prevLastDate = new Date(viewYear, viewMonth, 0).getDate();
                for (let i = startDay - 1; i >= 0; i--) {
                    const d = prevLastDate - i;
                    const iso = toISO(new Date(viewYear, viewMonth - 1, d));
                    calGrid.appendChild(dayCell(d, iso, true));
                }
                // 이번달
                for (let d = 1; d <= lastDate; d++) {
                    const iso = toISO(new Date(viewYear, viewMonth, d));
                    calGrid.appendChild(dayCell(d, iso, false));
                }
                // 다음달(6주 42칸 보장)
                const cells = calGrid.children.length;
                const need = 42 - cells;
                for (let d = 1; d <= need; d++) {
                    const iso = toISO(new Date(viewYear, viewMonth + 1, d));
                    calGrid.appendChild(dayCell(d, iso, true));
                }
            }

            function dayCell(label, iso, muted) {
                const div = document.createElement('div');
                div.className = 'day' + (muted ? ' muted' : '');
                if (iso === todayISO()) div.classList.add('today');
                if (iso === tempSelected) div.classList.add('selected');
                div.textContent = label;
                div.addEventListener('click', () => {
                    console.log("date click");
                    tempSelected = iso;
                    [...calGrid.querySelectorAll('.day')].forEach(d => d.classList.remove('selected'));
                    div.classList.add('selected');
                    // 다른 달 날짜 클릭 시 해당 달로 이동
                    const d = parseISO(iso);
                    viewYear = d.getFullYear();
                    viewMonth = d.getMonth();
                    renderCalendar();
                });
                return div;
            }

            btnPrev.addEventListener('click', () => {
                viewMonth--;
                if (viewMonth < 0) {
                    viewMonth = 11;
                    viewYear--;
                }
                renderCalendar();
            });
            btnNext.addEventListener('click', () => {
                viewMonth++;
                if (viewMonth > 11) {
                    viewMonth = 0;
                    viewYear++;
                }
                renderCalendar();
            });
            btnCancel.addEventListener('click', closeCalendar);
            btnOk.addEventListener('click', () => {
                if (tempSelected) {
                    dateInput.value = tempSelected;
                    dateText.textContent = tempSelected;
                    // TODO: tempSelected 기준으로 데이터 갱신
                    // loadMapData(tempSelected);
                }
                closeCalendar();
            });

            dateText.addEventListener('click', () => {

                openCalendar(dateInput.value || todayISO())
            });

            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && modal.style.display === 'flex') {
                    closeCalendar();
                }
            });
            modal.addEventListener('click', e => {
                if (e.target === modal) closeCalendar();
            });

            // 뒤로가기 버튼 동작
            document.querySelector('.back-btn')?.addEventListener('click', () => history.back());
        })();

        /* ===== 별도 알림 카드 렌더링 ===== */
        function renderAlertCard(alert) {
            const box = document.getElementById('alertBox');
            if (!box) return;
            const on = String(alert.ignition).toUpperCase() === 'ON';

            box.innerHTML = `
                <div class="alert-card">
                <div class="alert-head">${alert.plate ?? ''}</div>
                <div class="alert-body">
                    <div class="alert-left">
                    <div class="alert-label">시동</div>
                    <div class="alert-value ${on ? 'on' : ''}">${on ? 'ON' : 'OFF'}</div>
                    <div class="alert-label" style="margin-top:1.8vh;">고장코드</div>
                    <div class="alert-value" style="font-size:2.2vh;">${alert.faultCode ?? '-'}</div>
                    <div class="alert-time">${alert.timeLeft ?? ''}</div>
                    </div>
                    <div class="alert-right">
                    <div class="alert-label">배터리 전압</div>
                    <div class="alert-value">${alert.battery ?? '-'}</div>
                    <div class="alert-time">${alert.timeRight ?? alert.timeLeft ?? ''}</div>
                    </div>
                </div>
                </div>
            `;
        }
        // 초기 예시 데이터
        renderAlertCard({
            plate: '123가1234',
            ignition: 'ON',
            faultCode: '-',
            battery: '20V',
            timeLeft: '2025-09-17 11:19 기준',
            timeRight: '2025-09-17 11:19 기준'
        });

        /* ===== 하단 이벤트 발생내역(리스트) ===== */
        (function () {
            const sheet = document.getElementById('eventSheet');
            const header = document.getElementById('eventHeader');
            const chev = document.getElementById('eventChevron');
            const body = document.getElementById('eventBody');

            let eventList = [
                { time: '10:13:01', label: '주행시작', desc: '' },
                { time: '10:20:53', label: '차고지 이탈', desc: '' },
                { time: '13:01:22', label: '배터리 이상', desc: '' },
                { time: '13:12:34', label: '고장 감지', desc: '고장코드설명이 들어갑니다.' },
                { time: '15:03:21', label: '차고지 진입', desc: '' },
                { time: '15:20:53', label: '5', desc: '차고지 이탈' },
                { time: '15:56:33', label: '0', desc: '주행종료' }
            ];

            function renderEventList(items) {
                if (!items || items.length === 0) {
                    body.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:20vh;font-size:2vh;color:#333;">최근 발생한 이벤트가 없습니다.</div>`;
                    return;
                }
                const rows = items.map(ev => `
                    <div class="ev-row">
                    <div class="ev-time">${ev.time}</div>
                    <div class="ev-cell">
                        <span class="ev-badge">${ev.label}</span>
                        ${ev.desc ? `<span class="ev-desc">${ev.desc}</span>` : ''}
                    </div>
                    </div>
                `).join('');
                body.innerHTML = `
                    <div class="ev-table">
                    <div class="ev-thead"><div>시간</div><div>이벤트</div></div>
                    ${rows}
                    </div>`;
            }

            // ✅ 바텀시트 토글 로직
            function setCollapsed(collapsed) {
                sheet.classList.toggle('collapsed', collapsed);
                header.setAttribute('aria-expanded', (!collapsed).toString());
                chev.src = collapsed ? 'common/img/up.svg' : 'common/img/down.svg';
                chev.alt = collapsed ? '위로' : '아래로';

                if (!collapsed) {
                    renderEventList(eventList);
                }

                // 🔁 알림 카드 위치 조정
                updateAlertPosition();
            }

            // 알림 카드 위치 조정 함수
            function updateAlertPosition() {
                const float = document.getElementById('alertFloat');
                const sheet = document.getElementById('eventSheet');
                if (!float || !sheet) return;

                const isCollapsed = sheet.classList.contains('collapsed');
                float.style.bottom = isCollapsed ? 'calc(8vh + 1.2vh)' : 'calc(44vh + 1.2vh)';
            }

            // 최초 실행 & 리사이즈 대응
            updateAlertPosition();
            window.addEventListener('resize', updateAlertPosition);

            setCollapsed(true);
            header.addEventListener('click', () => setCollapsed(!sheet.classList.contains('collapsed')));
        })();
    </script>



</body>

</html>
