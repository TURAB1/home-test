<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>운전점수 분석</title>
    <link href="https://fonts.googleapis.com/css2?family=Pretendard&display=swap" rel="stylesheet" />

    <link href="css/front.css" rel="stylesheet" type="text/css" />
    <link href="css/common.css" rel="stylesheet" type="text/css" />

    <style>
        body {
            font-family: 'Pretendard', sans-serif;
            font-size: 1.2rem;
            margin: 0;
            background-color: #f5f5f5;
            background: #fff;
        }

        .container {
            /* max-width: 480px; */
            max-width: 100vw;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            min-height: 100vh;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            font-size: 1.3rem;
            margin-bottom: 1.3rem;
        }

        .back-button {
            display: flex;
            align-items: center;
            padding: 8px;
            font-size: 18px;
            color: #222;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        .back-button svg {
            width: 32px;
            height: 32px;
            fill: #222;
        }

        .header-title {
            font-size: 1.3rem;
            flex: 1;
            text-align: left;
            padding-left: 8px;
        }

        .close {
            font-size: 1.5rem;
            cursor: pointer;
        }

        .Gauge {
            width: 100%;
            height: 500px;
        }


        .upper-section {
            margin-top: 2rem;
        }

        .score-box {
            color: #222;
            font-size: 2.5rem;
            font-weight: bold;

        }

        .score-diff {
            color: gray;
            font-size: 1.3rem;
            ;
        }

        .sub-scores {
            margin-top: 1rem;
            font-size: 1.3rem;
            ;
            font-weight: 600;
        }

        .sub-score {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
        }

        .score-delta {
            color: gray;
            font-size: 1rem;
        }

        .delta-up {
            color: red;
        }

        .delta-down {
            color: blue;
        }

        .section {
            margin-top: 1.5rem;
        }

        .summary-box {
            background: #f0f0f0;
            border-radius: 6px;
            padding: 10px;
            font-size: 1.2rem;
        }

        /* .chart-placeholder {
        height: 150px;
        background: #f9f9f9;
        border: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        margin-top: 10px;
        } */

        .highlight {
            font-size: 1.2rem;
            font-weight: bold;
            color: #000;
        }

        .subtext {
            font-size: 1.2rem;
            color: #666;
            margin-top: 4px;
        }

        .lasttext {
            font-size: 1.2rem;
            font-weight: 600;
            color: #222;
            margin-top: 4px;
        }


        .red-text {
            color: red;
        }

        .blue-text {
            color: blue;
        }

        .gray-box {
            background: #f2f2f2;
            padding: 10px;
            border-radius: 8px;
            margin-top: 10px;
        }

        .chart-container {
            width: 100%;
            max-width: 800px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        }

        .chart-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .chart {
            width: 100%;
            height: 300px;
        }
    </style>

    <script src="js/jquery-1.12.4.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui.min.js" type="text/javascript"></script>

    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/locales/ko_KR.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="js/common.js" type="text/javascript"></script>
</head>

<body>
    <now-loading></now-loading>
    <header>
        <div class="left">
            <h2>운전점수</h2>
        </div>
        <div class="right">
            <button class="btn-ico corpType1 d-none"><i class="ico-add"></i></button>
            <button class="btn-ico d-none" id="BtnTrash"><i class="ico-trash"></i></button>
            <button class="btn-ico"><i class="ico-menu"></i></button>
        </div>
    </header>
    <script>
        $('.ico-add').on('click', function () {
            location.href = 'car_add0.html?prev_page_check=Y';
        });
        $('.ico-menu').on('click', function () {
            location.href = 'side_menu.html';
        });
        sessionStorage.setItem('last_page', 'driving_score.html');

        // if (member_info.corp.corpType == '1') {
        //     $('#BtnTrash').removeClass('d-none');
        // }
    </script>
    <div class="container">

        <div class="upper-section">
            <br />
            <div class="score-box"></div>
            <br />
            <div class="score-diff">첫번째 날짜보다 <span class="highlight">8점</span> ▲</div>

            <div class="sub-scores">
                <div class="sub-score">
                    <span>안전점수</span>
                    <span id="safe-score"></span>
                </div>
                <div class="sub-score">
                    <span>경제점수</span>
                    <span id="fuel-score"></span>
                </div>
                <div class="sub-score">
                    <span>에코점수</span>
                    <span id="eco-score"></span>
                </div>
            </div>

            <div class="Gauge"></div>
        </div>

        <div class="section">
            <p>최근 90일간의 주행을 토대로 분석한 결과예요.</p>
            <div class="gray-box">
                <div id="distance">주행거리: 1,714km</div>
                <div id="duration">주행시간: 72회</div>
                <div id="trip-count">주행횟수: 56시간</div>
            </div>
        </div>

        <div class="section">
            <p id="public-score-summary">전체적으로 점수가 <span class="highlight">[10점]</span>이나 상승했어요!</p>
            <div class="chart-container">
                <div class="chart-title">종합점수</div>
                <div id="chartdiv1" class="chart"></div>
            </div>
            <!-- <div class="chart-placeholder">[전체 점수 차트 영역]</div> -->
            <div class="subtext" id="public-score-date"></div>
        </div>

        <div class="section">
            <p>안전점수 <span class="highlight" id="today-safe-score"></span></p>
            <div class="chart-container">
                <div class="chart-title">안전점수</div>
                <div id="chartdiv2" class="chart"></div>
            </div>
            <!-- <div class="chart-placeholder">[안전 점수 차트 영역]</div> -->
            <div class="subtext" id="safe-score-date"></div>
        </div>

        <div class="section">
            <p id="safe-hard-accel-score"><span class="highlight">최다 감점 항목 |</span> 급가속 -6점</p>
            <div class="subtext">
                장시간 운전은 피로 누적으로 사고 위험을 높일 수 있으니,<br>
                적절히 휴식을 취하는 걸 권장 드려요.
            </div>
        </div>

        <div class="section">
            <p>경제점수 <span class="highlight" id="today-fuel-score"></span></p>
            <div class="chart-container">
                <div class="chart-title">경제점수</div>
                <div id="chartdiv3" class="chart"></div>
            </div>
            <!-- <div class="chart-placeholder">[안전 점수 차트 영역]</div> -->
            <div class="subtext" id="fuel-score-date"></div>
        </div>

        <div class="section">
            <p id="fuel-hard-accel-score"><span class="highlight">최다 감점 항목 |</span> 급가속 -6점</p>
            <div class="subtext">
                장시간 운전은 피로 누적으로 사고 위험을 높일 수 있으니,<br>
                적절히 휴식을 취하는 걸 권장 드려요.
            </div>
        </div>

        <div class="section">
            <p>에코점수 <span class="highlight" id="today-eco-score"></span></p>
            <div class="chart-container">
                <div class="chart-title">에코점수</div>
                <div id="chartdiv4" class="chart"></div>
            </div>
            <!-- <div class="chart-placeholder">[안전 점수 차트 영역]</div> -->
            <div class="subtext" id="eco-score-date"></div>
        </div>

        <div class="section">
            <p id="eco-hard-accel-score"><span class="highlight">최다 감점 항목 |</span> 급가속 -6점</p>
            <div class="subtext">
                장시간 운전은 피로 누적으로 사고 위험을 높일 수 있으니,<br>
                적절히 휴식을 취하는 걸 권장 드려요.
            </div>
        </div>

        <br />

        <div class="lasttext">더 자세한 운전점수 분석결과는 뷰카 웹사이트에서 확인하실 수 있습니다.</div>


        <!-- // floating layer -->
        <div class="fixed-navigation">
            <div id="nav_div"></div>
        </div>
    </div>

    <script>
        $(function () {
            let _key = sessionStorage.getItem('token');
            let _data = [];
            console.log(_key, 'token=>');
            $.ajax({
                url: "http://localhost/api/1/score/public/daily?limit=30%",
                method: "GET",
                headers: {
                    key: _key,
                    "Content-Type": "application/json"
                },
                success: function (data) {
                    console.log(data['result'], 'success');
                    //  console.log(data['result'].reverse(), 'reverse');
                    _data = data['result'];
                    if (_data.length > 0) {
                        const todaySafeScore = _data[_data.length - 1]?.safeScore || 0;
                        const todayFuelScore = _data[_data.length - 1]?.fuelScore || 0;
                        const todayEcoScore = _data[_data.length - 1]?.ecoScore || 0;
                        const prevDaySafeScore = _data[_data.length - 2]?.safeScore || 0;
                        const prevDayFuelScore = _data[_data.length - 2]?.fuelScore || 0;
                        const prevDayEcoScore = _data[_data.length - 2]?.ecoScore || 0;
                        const firstDaySafeScore = _data[0]?.safeScore || 0;
                        const firstDayFuelScore = _data[0]?.fuelScore || 0;
                        const firstDayEcoScore = _data[0]?.ecoScore || 0;
                        const todaySafeHardAccelScore = _data[_data.length - 1]?.safeHardAccelScore || 0;
                        const todayFuelHardAccelScore = _data[_data.length - 1]?.fuelHardAccelScore || 0;
                        const todayEcoHardAccelScore = _data[_data.length - 1]?.ecoHardAccelScore || 0;
                        const date = new Date();
                        const month = date.getMonth() + 1;  // getMonth() returns 0~11
                        const day = date.getDate();
                        const safeScoreDiff = todaySafeScore - prevDaySafeScore;
                        const fuelScoreDiff = todayFuelScore - prevDayFuelScore;
                        const ecoScoreDiff = todayEcoScore - prevDayEcoScore;

                        const todayPublicScore = ((todaySafeScore + todayFuelScore + todayEcoScore) / 3).toFixed(0);
                        const firstDayPublicScore = ((firstDaySafeScore + firstDayFuelScore + firstDayEcoScore) / 3).toFixed(0);
                        const firstDayVsTodayDiff = todayPublicScore - firstDayPublicScore;

                        $(".score-box").html(`${todayPublicScore}점`);
                        if (todayPublicScore > firstDayPublicScore) {
                            $(".score-diff").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 <span class="highlight"> ${Math.abs(firstDayVsTodayDiff)}점</span> ▲`);
                            $("#public-score-summary").html(`전체적으로 점수가 <span class="highlight">${Math.abs(firstDayVsTodayDiff)}점</span>이나 상승했어요!`);
                        } else if (todayPublicScore === firstDayPublicScore) {
                            $(".score-diff").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 <span class="highlight">${Math.abs(firstDayVsTodayDiff)}점</span>-`);
                            $("#public-score-summary").html(`전체적으로 점수가  유지되었어요!`);
                        }
                        else {
                            $(".score-diff").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 <span class="highlight"> ${Math.abs(firstDayVsTodayDiff)}점</span>▼`);
                            $("#public-score-summary").html(`전체적으로 점수가 <span class="highlight">${Math.abs(firstDayVsTodayDiff)}점</span>이나 떨어졌습니다!`);
                        }

                        if (todaySafeScore > prevDaySafeScore)
                            $("#safe-score").html(`${todaySafeScore} (<span class="delta-up">${Math.abs(safeScoreDiff)} ▲</span>)`);
                        else if (todaySafeScore === prevDaySafeScore)
                            $("#safe-score").html(`${todaySafeScore} (<span class="delta-up">${Math.abs(safeScoreDiff)}-</span>)`);
                        else
                            $("#safe-score").html(`${todaySafeScore} (<span class="delta-down">${Math.abs(safeScoreDiff)} ▼</span>)`);
                        if (todayFuelScore > prevDayFuelScore)
                            $("#fuel-score").html(`${todayFuelScore} (<span class="delta-up">${Math.abs(fuelScoreDiff)} ▲</span>)`);
                        else if (todayFuelScore === prevDayFuelScore)
                            $("#fuel-score").html(`${todayFuelScore} (<span class="delta-up">${Math.abs(fuelScoreDiff)}-</span>)`);
                        else
                            ("#fuel-score").html(`${todayFuelScore} (<span class="delta-down">${Math.abs(fuelScoreDiff)} ▼</span>)`);
                        if (todayEcoScore > prevDayEcoScore)
                            $("#eco-score").html(`${todayEcoScore} (<span class="delta-up">${Math.abs(ecoScoreDiff)} ▲</span>)`);
                        else if (todayEcoScore === prevDayEcoScore)
                            $("#eco-score").html(`${todayEcoScore} (<span class="delta-up">${Math.abs(ecoScoreDiff)}-</span>)`);
                        else
                            $("#eco-score").html(`${todayEcoScore} (<span class="delta-down">${Math.abs(ecoScoreDiff)} ▼</span>)`);

                        $("#distance").html(`주행거리: ${_data[_data.length - 1]?.total90dDistKm || ""}km`);
                        $("#duration").html(`주행시간: ${_data[_data.length - 1]?.total90dHour || ""}시간`);
                        $("#trip-count").html(`주행횟수: ${_data[_data.length - 1]?.total90dTripCnt || ""}회`);
                        $("#today-safe-score").html(`${todaySafeScore}점`);
                        $("#today-fuel-score").html(`${todayFuelScore}점`);
                        $("#today-eco-score").html(`${todayEcoScore}점`);
                        $("#public-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${todayPublicScore}점이에요.`);
                        $("#safe-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${todaySafeScore}점이에요.`);
                        $("#fuel-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${todayFuelScore}점이에요.`);
                        $("#eco-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${todayEcoScore}점이에요.`);
                        $("#safe-hard-accel-score").html(`<span class="highlight">최다 감점 항목 |</span> 급가속 -${todaySafeHardAccelScore.toFixed(1)}점`);
                        $("#fuel-hard-accel-score").html(`<span class="highlight">최다 감점 항목 |</span> 급가속 -${todayFuelHardAccelScore.toFixed(1)}점`);
                        $("#eco-hard-accel-score").html(`<span class="highlight">최다 감점 항목 |</span> 급가속 -${todayEcoHardAccelScore.toFixed(1)}점`);


                        am5.ready(
                            function () {
                                createGaugeChart();
                                createPublicScoreChart("chartdiv1", 0x222222);// 그래프 1
                                createSafeScoreChart("chartdiv2", 0xE73846) // 그래프 2
                                createFuelScoreChart("chartdiv3", 0xA150CB); // 그래프 3
                                createEcoScoreChart("chartdiv4", 0x68B2C2); // 그래프 4
                            })

                    } else {
                        // Show a message or hide the chart area
                        document.querySelector('.Gauge').innerHTML = '<div style="text-align:center;color:#888;">데이터가 없습니다.</div>';
                        document.getElementById('chartdiv1').innerHTML = '<div style="text-align:center;color:#888;">데이터가 없습니다.</div>';
                        document.getElementById('chartdiv2').innerHTML = '<div style="text-align:center;color:#888;">데이터가 없습니다.</div>';
                        document.getElementById('chartdiv3').innerHTML = '<div style="text-align:center;color:#888;">데이터가 없습니다.</div>';
                        document.getElementById('chartdiv4').innerHTML = '<div style="text-align:center;color:#888;">데이터가 없습니다.</div>';

                    }
                },
                error: function () {
                    console.error("데이터를 불러오는 데 실패했습니다.");
                }
            });

            $('#nav_div').load('inc/nav.html', function () {
                $('.m3').addClass('active');
            });

            function createGaugeChart() {
                var root = am5.Root.new(document.querySelector(".Gauge"));
                root._logo.dispose();
                root.locale = am5locales_ko_KR;
                root.setThemes([am5themes_Animated.new(root)]);

                var chart = root.container.children.push(am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180
                }));

                var data = [{
                    category: "안전점수",
                    value: _data[_data.length - 1]?.safeScore || 0,
                    full: 100,
                    columnSettings: {
                        fill: am5.color(0xE73846)
                    }
                }, {
                    category: "경제 점수",
                    value: _data[_data.length - 1]?.fuelScore || 0,
                    full: 100,
                    columnSettings: {
                        fill: am5.color(0xA150CB)
                    }
                }, {
                    category: "에코 점수",
                    value: _data[_data.length - 1]?.ecoScore || 0,
                    full: 100,
                    columnSettings: {
                        fill: am5.color(0x68B2C2)
                    }
                }];

                var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
                    behavior: "zoomX"
                }));
                cursor.lineY.set("visible", false);

                var xRenderer = am5radar.AxisRendererCircular.new(root, {});
                xRenderer.labels.template.setAll({
                    radius: 10
                });
                xRenderer.grid.template.setAll({
                    forceHidden: true
                });

                var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                    renderer: xRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    numberFormat: "#점",
                    tooltip: am5.Tooltip.new(root, {})
                }));

                var yRenderer = am5radar.AxisRendererRadial.new(root, {
                    minGridDistance: 20
                });
                yRenderer.labels.template.setAll({
                    centerX: am5.p100,
                    fontWeight: "500",
                    fontSize: 18,
                    templateField: "columnSettings",
                    text: "{category} ({valueX}점)"
                });
                yRenderer.grid.template.setAll({
                    forceHidden: true
                });

                var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: yRenderer
                }));
                yAxis.data.setAll(data.map(item => ({
                    ...item,
                    valueX: item.value
                })));

                var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "full",
                    categoryYField: "category",
                    fill: root.interfaceColors.get("alternativeBackground")
                }));
                series1.columns.template.setAll({
                    width: am5.p100,
                    fillOpacity: 0.08,
                    strokeOpacity: 0,
                    cornerRadius: 20
                });
                series1.data.setAll(data);

                var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "value",
                    categoryYField: "category"
                }));
                series2.columns.template.setAll({
                    width: am5.p100,
                    strokeOpacity: 0,
                    tooltipText: "{category}: {valueX}점",
                    cornerRadius: 20,
                    templateField: "columnSettings"
                });
                series2.data.setAll(data);

                series1.appear(1000);
                series2.appear(1000);
                chart.appear(1000, 100);
            }

            function createPublicScoreChart(chartId, color) {
                const root = am5.Root.new(chartId);
                root._logo.dispose();
                root.setThemes([am5themes_Animated.new(root)]);

                const chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: false,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "none",
                    pinchZoomX: true,
                    paddingLeft: 0
                }));
                const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);
                // ✅ X Axis: CategoryAxis for names
                const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                    categoryField: "name",
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 30,
                        minorGridEnabled: true,
                        pan: "zoom"
                    }),
                                        tooltip: am5.Tooltip.new(root, {
                        labelText: "{name}"  // ← 허버링 시
                    })
                }));

                // ✅ Y Axis: ValueAxis for numeric values
                const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: am5xy.AxisRendererY.new(root, {
                         pan: "zoom"
                    })
                }));

                // ✅ Series: Column chart (can be changed to line if needed)
                const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    categoryXField: "name",
                     sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{categoryX}: {valueY}점"
                    })
                }));

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        sprite: am5.Circle.new(root, {
                            radius: 5,
                            fill: am5.color(color),
                            strokeWidth: 2,
                            stroke: root.interfaceColors.get("background")
                        })
                    });
                });
                ///제일 가까운 데이터 포인트를 찾는 클릭 이벤트
                chart.plotContainer.events.on("click", function (ev) {
                    const point = chart.plotContainer.toLocal(ev.point);

                    const xVal = xAxis.positionToValue(
                        xAxis.toAxisPosition(point.x / chart.plotContainer.width())
                    );

                    const yVal = yAxis.positionToValue(
                        yAxis.toAxisPosition(point.y / chart.plotContainer.height())
                    );

                    let closest = null;
                    let minDiff = Number.MAX_VALUE;

                    // ✅ Loop safely using am5.array.each
                    am5.array.each(series.dataItems, function (item) {
                        const itemX = item.get("valueX");
                        const diff = Math.abs(itemX - xVal);

                        if (diff < minDiff) {
                            closest = item;
                            minDiff = diff;
                        }
                    });

                    if (closest) {
                        const closestX = closest.get("valueX");
                        const closestY = closest.get("valueY");
                        //const dateStr = new Date(closestX).toLocaleDateString("en-US");

                        console.log("🟢 Closest Data Point:");
                       // console.log("🕓 X (date):", dateStr);
                        console.log("📈 Y (value):", closestY);
                        // console.log("📦 Raw Data:", closest.dataContext);
                        // const date = new Date(closestX);
                        // const month = date.getMonth() + 1;
                        // const day = date.getDate();
                        // $("#public-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${closestY}점이에요.`);

                    } else {
                        console.log("⚠️ No data points found.");
                    }
                });


                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));
                // ✅ Data setup
                const data = [
                    { name: "John", value: 72 },
                    { name: "Mary", value: 85 },
                    { name: "Alice", value: 60 },
                    { name: "Bob", value: 91 }
                ];

                series.data.setAll(data);
                xAxis.data.setAll(data);

                series.appear(1000);
                chart.appear(1000, 100);
            }

            function createPublicScoreChart_Og(chartId, color) {
                const root = am5.Root.new(chartId);
                root._logo.dispose();
                root.locale = am5locales_ko_KR;
                root.setThemes([am5themes_Animated.new(root)]);

                const chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: false,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "none",
                    pinchZoomX: true,
                    paddingLeft: 0
                }));

                const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);

                const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    baseInterval: {
                        timeUnit: "day",
                        count: 1
                    },
                    maxDeviation: 0.5,
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 80,
                        minorGridEnabled: true,
                        pan: "zoom"
                    }),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{value.formatDate('MM/dd')}"  // ← 허버링 시
                    })
                }));

                // xAxis.get("renderer").labels.template.setAll({
                //     oversizedBehavior: "wrap",
                //     text: "{value}", // 기본값은 그대로 두고
                //     populateText: true // 내부 텍스트 생성을 강제함
                // });

                // xAxis.get("renderer").labels.template.adapters.add("text", function (text, target) {
                //     const value = target.dataItem?.get("value");

                //     if (!value) return "";

                //     const date = new Date(value);
                //     const month = date.getMonth() + 1;
                //     const day = date.getDate();

                //     return `${month}월 ${day}일`; // ✅ 원하는 형식
                // });




                const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: am5xy.AxisRendererY.new(root, {
                        pan: "zoom"
                    })
                }));

                const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    valueXField: "date",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                }));

                series.strokes.template.setAll({
                    strokeWidth: 2,
                    stroke: am5.color(color)
                });

                series.bullets.push(function (root, series, dataItem) {
                    const circle = am5.Circle.new(root, {
                        radius: 5,
                        fill: am5.color(color),
                        strokeWidth: 2,
                        stroke: root.interfaceColors.get("background"),
                        interactive: true,               // ✅ 필수
                        cursorOverStyle: "pointer"      // ✅ 시각적 피드백
                    });

                    return am5.Bullet.new(root, {
                        locationY: 0.5,
                        sprite: circle
                    });
                });
                // /// Add click event anywhere on the chart
                // chart.plotContainer.events.on("click", function (ev) {
                //     // Convert pixel position to relative axis position (0 to 1)
                //     const point = chart.plotContainer.toLocal(ev.point);
                //     const xAxisValue = xAxis.positionToValue(xAxis.toAxisPosition(point.x / chart.plotContainer.width()));
                //     const yAxisValue = yAxis.positionToValue(yAxis.toAxisPosition(point.y / chart.plotContainer.height()));
                //     const dateStr = new Date(xAxisValue).toLocaleDateString("en-US");

                //     console.log("📍 Clicked chart at:");
                //     console.log("🕓 X (date):", dateStr);
                //     console.log("📈 Y (value):", yAxisValue.toFixed(2));
                // });
                ///제일 가까운 데이터 포인트를 찾는 클릭 이벤트
                chart.plotContainer.events.on("click", function (ev) {
                    const point = chart.plotContainer.toLocal(ev.point);

                    const xVal = xAxis.positionToValue(
                        xAxis.toAxisPosition(point.x / chart.plotContainer.width())
                    );

                    const yVal = yAxis.positionToValue(
                        yAxis.toAxisPosition(point.y / chart.plotContainer.height())
                    );

                    let closest = null;
                    let minDiff = Number.MAX_VALUE;

                    // ✅ Loop safely using am5.array.each
                    am5.array.each(series.dataItems, function (item) {
                        const itemX = item.get("valueX");
                        const diff = Math.abs(itemX - xVal);

                        if (diff < minDiff) {
                            closest = item;
                            minDiff = diff;
                        }
                    });

                    if (closest) {
                        const closestX = closest.get("valueX");
                        const closestY = closest.get("valueY");
                        const dateStr = new Date(closestX).toLocaleDateString("en-US");

                        console.log("🟢 Closest Data Point:");
                        console.log("🕓 X (date):", dateStr);
                        console.log("📈 Y (value):", closestY);
                        console.log("📦 Raw Data:", closest.dataContext);
                        const date = new Date(closestX);
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        $("#public-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${closestY}점이에요.`);

                    } else {
                        console.log("⚠️ No data points found.");
                    }
                });


                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                const data = [];
                const reverseData = _data.reverse();


                for (let i = 0; i < reverseData.length; i++) {
                    const item = reverseData[i];
                    const safeScore = item.safeScore || 0;
                    const fuelScore = item.fuelScore || 0;
                    const ecoScore = item.ecoScore || 0;
                    const publicScore = Math.round((safeScore + fuelScore + ecoScore) / 3);

                    var _date2 = new Date(item.scoreDateTs);
                    _date2.setHours(0, 0, 0, 0);

                    data.push({
                        date: _date2.getTime(),
                        value: publicScore
                    });
                }




                series.data.setAll(data);
                series.appear(1000);
                chart.appear(1000, 100);
            }


            function createSafeScoreChart(chartId, color) {
                const root = am5.Root.new(chartId);
                root._logo.dispose();
                root.locale = am5locales_ko_KR;
                root.setThemes([am5themes_Animated.new(root)]);

                const chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    pinchZoomX: true,
                    paddingLeft: 0
                }));

                const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);

                const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    baseInterval: {
                        timeUnit: "day",
                        count: 1
                    },
                    maxDeviation: 0.5,
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 80,
                        minorGridEnabled: true,
                        pan: "zoom"
                    }),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueX.formatDate('MM월 dd일')}"
                    })
                }));


                const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: am5xy.AxisRendererY.new(root, {
                        pan: "zoom"
                    })
                }));

                const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    valueXField: "date",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                }));

                series.strokes.template.setAll({
                    strokeWidth: 2,
                    stroke: am5.color(color)
                });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationY: 0,
                        sprite: am5.Circle.new(root, {
                            radius: 4,
                            stroke: root.interfaceColors.get("background"),
                            strokeWidth: 2,
                            fill: am5.color(color)
                        })
                    });
                });
                ///제일 가까운 데이터 포인트를 찾는 클릭 이벤트
                chart.plotContainer.events.on("click", function (ev) {
                    const point = chart.plotContainer.toLocal(ev.point);

                    const xVal = xAxis.positionToValue(
                        xAxis.toAxisPosition(point.x / chart.plotContainer.width())
                    );

                    const yVal = yAxis.positionToValue(
                        yAxis.toAxisPosition(point.y / chart.plotContainer.height())
                    );

                    let closest = null;
                    let minDiff = Number.MAX_VALUE;

                    // ✅ Loop safely using am5.array.each
                    am5.array.each(series.dataItems, function (item) {
                        const itemX = item.get("valueX");
                        const diff = Math.abs(itemX - xVal);

                        if (diff < minDiff) {
                            closest = item;
                            minDiff = diff;
                        }
                    });

                    if (closest) {
                        const closestX = closest.get("valueX");
                        const closestY = closest.get("valueY");
                        const dateStr = new Date(closestX).toLocaleDateString("en-US");

                        console.log("🟢 Closest Data Point:");
                        console.log("🕓 X (date):", dateStr);
                        console.log("📈 Y (value):", closestY);
                        console.log("📦 Raw Data:", closest.dataContext);
                        const date = new Date(closestX);
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        $("#safe-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${closestY}점이에요.`);

                    } else {
                        console.log("⚠️ No data points found.");
                    }
                });


                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                const data = [];
                _data.map(item => {
                    data.push({
                        date: item.scoreDate,
                        value: item.safeScore
                    });
                });
                series.data.setAll(data);
                series.appear(1000);
                chart.appear(1000, 100);
            }

            function createFuelScoreChart(chartId, color) {
                const root = am5.Root.new(chartId);
                root._logo.dispose();
                root.locale = am5locales_ko_KR;
                root.setThemes([am5themes_Animated.new(root)]);

                const chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    pinchZoomX: true,
                    paddingLeft: 0
                }));

                const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);

                const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    baseInterval: {
                        timeUnit: "day",
                        count: 1
                    },
                    maxDeviation: 0.5,
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 80,
                        minorGridEnabled: true,
                        pan: "zoom"
                    }),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueX.formatDate('yyyy년 MM월 dd일')}"
                    })
                }));

                const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: am5xy.AxisRendererY.new(root, {
                        pan: "zoom"
                    })
                }));

                const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    valueXField: "date",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                }));

                series.strokes.template.setAll({
                    strokeWidth: 2,
                    stroke: am5.color(color)
                });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationY: 0,
                        sprite: am5.Circle.new(root, {
                            radius: 4,
                            stroke: root.interfaceColors.get("background"),
                            strokeWidth: 2,
                            fill: am5.color(color)
                        })
                    });
                });
                ///제일 가까운 데이터 포인트를 찾는 클릭 이벤트
                chart.plotContainer.events.on("click", function (ev) {
                    const point = chart.plotContainer.toLocal(ev.point);

                    const xVal = xAxis.positionToValue(
                        xAxis.toAxisPosition(point.x / chart.plotContainer.width())
                    );

                    const yVal = yAxis.positionToValue(
                        yAxis.toAxisPosition(point.y / chart.plotContainer.height())
                    );

                    let closest = null;
                    let minDiff = Number.MAX_VALUE;

                    // ✅ Loop safely using am5.array.each
                    am5.array.each(series.dataItems, function (item) {
                        const itemX = item.get("valueX");
                        const diff = Math.abs(itemX - xVal);

                        if (diff < minDiff) {
                            closest = item;
                            minDiff = diff;
                        }
                    });

                    if (closest) {
                        const closestX = closest.get("valueX");
                        const closestY = closest.get("valueY");
                        const dateStr = new Date(closestX).toLocaleDateString("en-US");

                        console.log("🟢 Closest Data Point:");
                        console.log("🕓 X (date):", dateStr);
                        console.log("📈 Y (value):", closestY);
                        console.log("📦 Raw Data:", closest.dataContext);
                        const date = new Date(closestX);
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        $("#fuel-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${closestY}점이에요.`);

                    } else {
                        console.log("⚠️ No data points found.");
                    }
                });



                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                const data = [];
                _data.map(item => {
                    data.push({
                        date: item.scoreDate,
                        value: item.fuelScore
                    });
                });
                series.data.setAll(data);
                series.appear(1000);
                chart.appear(1000, 100);
            }

            function createEcoScoreChart(chartId, color) {
                const root = am5.Root.new(chartId);
                root._logo.dispose();
                root.locale = am5locales_ko_KR;
                root.setThemes([am5themes_Animated.new(root)]);

                const chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    pinchZoomX: true,
                    paddingLeft: 0
                }));

                const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);

                const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    baseInterval: {
                        timeUnit: "day",
                        count: 1
                    },
                    maxDeviation: 0.5,
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 80,
                        minorGridEnabled: true,
                        pan: "zoom"
                    }),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueX.formatDate('yyyy년 MM월 dd일')}"
                    })
                }));

                const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: am5xy.AxisRendererY.new(root, {
                        pan: "zoom"
                    })
                }));

                const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    valueXField: "date",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                }));

                series.strokes.template.setAll({
                    strokeWidth: 2,
                    stroke: am5.color(color)
                });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationY: 0,
                        sprite: am5.Circle.new(root, {
                            radius: 4,
                            stroke: root.interfaceColors.get("background"),
                            strokeWidth: 2,
                            fill: am5.color(color),

                        })
                    });
                });

                chart.plotContainer.events.on("click", function (ev) {
                    const point = chart.plotContainer.toLocal(ev.point);

                    const xVal = xAxis.positionToValue(
                        xAxis.toAxisPosition(point.x / chart.plotContainer.width())
                    );

                    const yVal = yAxis.positionToValue(
                        yAxis.toAxisPosition(point.y / chart.plotContainer.height())
                    );

                    let closest = null;
                    let minDiff = Number.MAX_VALUE;

                    // ✅ Loop safely using am5.array.each
                    am5.array.each(series.dataItems, function (item) {
                        const itemX = item.get("valueX");
                        const diff = Math.abs(itemX - xVal);

                        if (diff < minDiff) {
                            closest = item;
                            minDiff = diff;
                        }
                    });

                    if (closest) {
                        const closestX = closest.get("valueX");
                        const closestY = closest.get("valueY");
                        const dateStr = new Date(closestX).toLocaleDateString("en-US");

                        console.log("🟢 Closest Data Point:");
                        console.log("🕓 X (date):", dateStr);
                        console.log("📈 Y (value):", closestY);
                        console.log("📦 Raw Data:", closest.dataContext);
                        const date = new Date(closestX);
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        $("#eco-score-date").html(`${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 점수는 ${closestY}점이에요.`);

                    } else {
                        console.log("⚠️ No data points found.");
                    }
                });



                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                // 데이터 생성
                const data = [];

                _data.map(item => {
                    data.push({
                        date: item.scoreDate,
                        value: item.ecoScore
                    });
                });
                series.data.setAll(data);
                series.appear(1000);
                chart.appear(1000, 100);
            }
        })
    </script>
</body>

</html>
