<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="title" content="차량운행 관리 서비스 VIEW CAR" />
    <meta name="description" content="" />

    <title>차량운행 관리 서비스 VIEW CAR</title>
    <script src="js/jquery-2.2.4.min.js" type="text/javascript"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="component/header/header.js"></script>
    <script src="component/footer/footer.js"></script>
    <script src="js/common.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
    <link rel="stylesheet" href="css/jquery-ui.min.css" />
    <link rel="stylesheet" href="css/styleko.css" />
    <link rel="stylesheet" href="css/stylenew.css" />
    <link rel="stylesheet" href="css/styledev.css" />

</head>

<body>
    <h1 class="hidden">차량운행 관리 서비스 VIEW CAR</h1>

    <!-- 바로가기 메뉴 -->
    <dl id="skip-navigation">
        <dt>바로가기메뉴</dt>
        <dd>
            <a href="#gnb" class="skip">사이트 메뉴 바로가기</a>
        </dd>
        <dd>
            <a href="#container" class="skip">본문 바로가기</a>
        </dd>
    </dl>
    <!--/ 바로가기 메뉴 -->

    <div id="wrap">
        <header-0></header-0>
        <section id="container">
            <div id="sub-container">
                <div class="page-header">
                    <h2>처리장 설정</h2>
                    <span>처리장 정보를 설정하실 수 있습니다.</span>
                </div>
                <div id="contents-page" class="vehicle-page">
                    <div class="">
                        <!-- 상단 상태값 -->
                        <div class="top-state clr">
                            <div class="item">

                                <span>
                                    등록 시설
                                    <strong>2</strong>대
                                </span>
                            </div>

                            <div class="time">
                                <span>2025/07/04</span>
                                <span>09:57</span>
                                <span>기준</span>
                                <button class="btn btn04">새로고침</button>
                            </div>
                        </div>
                        <!--/ 상단 상태값 -->

                        <h3 class="tit2 mgt30">처리장 등록</h3>
                        <div class="box-register">
                            처리장 정보를 등록해주세요. 해당 센터에 방문 시, 1순위 성상을 처리한 것으로 자동 판정됩니다.</br>
                            ※ 예: A처리장에 "음식물(1순위), 대형(2순위)" 성상이 등록된 경우, 이 처리장 방문 시 '음식물' 성상이 처리된 것으로 간주합니다.

                            <div class="right">
                                <button class="btn btn01" id="modal3-open">처리장 등록</button>
                            </div>
                        </div>

                        <!-- table 버튼 -->
                        <div class="btn-function row-2">
                            <div class="right">
                                <button class="img-btn delete">삭제</button>
                                <select name="">
                                    <option value="">10건씩 보기</option>
                                </select>
                            </div>
                        </div>
                        <!--/ table 버튼 -->

                        <table class="table list mgt20" id="main-table">
                            <caption>처리장 등록 리스트</caption>
                            <colgroup>
                                <col style="width:8%" />
                                <col style="width:26%" />
                                <col style="width:30%" />
                                <col style="width:12%" />
                                <col style="width:24%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col"><input type="checkbox" /></th>
                                    <th scope="col">시설명</th>
                                    <th scope="col">주소</th>
                                    <th scope="col">담당 성상</th>
                                    <th scope="col">상세</th>
                                </tr>
                            </thead>
                            <!-- <script>

                                $(document).ready(function () {
                                        const $table = $('#main-table'); // make sure your <table> exists

                                    // const data = [
                                    //     {
                                    //         "depotName": "1음식물쓰레기소각장",
                                    //         "address": "경기도 성남시 수정구 판교로1234 처리장",
                                    //         "arrWorkTypes": [
                                    //             { "workType": "1", "priority": 1 },
                                    //             { "workType": "3", "priority": 2 }
                                    //         ]
                                    //     },
                                    //     {
                                    //         "depotName": "2OO시 자원순환센터",
                                    //         "address": "경기도 성남시 수정구 한국로22 OO시 자원순환센터",
                                    //         "arrWorkTypes": [
                                    //             { "workType": "2", "priority": 1 }
                                    //         ]
                                    //     },
                                    //     {
                                    //         "depotName": "3OO처리장",
                                    //         "address": "경기도 성남시 수정구 한국로123",
                                    //         "arrWorkTypes": [
                                    //             { "workType": "3", "priority": 2 },
                                    //             { "workType": "4", "priority": 1 }
                                    //         ]
                                    //     }
                                    // ];

                                    const _key = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyS2V5IjoiYTUzOWUxODQtZmVlOC00ZjNlLTgyMTgtMjNhODkwMTZhNGQ1IiwiZXhwaXJlZCI6MTc1NDk2NjUzOSwiY29ycEtleSI6IjM0OWQ0Yzk0LTcwZTktMTFmMC04MDg0LTAyNDJhYzE0MDAwMiIsImNvcnBUeXBlIjoiMTIiLCJzZXJ2aWNlR3JhZGUiOiIzIn0.Ox9W6QePQBmsxOXLnfoC22SO8mJ2oxKAEmShO0jDyIA"
                                    let _data = []
                                    let depotName = "";
                                    let arrWorkTypes = [];
                                    const _url = "http://localhost/api/1/cleanerB/garbageDepot";
                                    // const _url = "https://jsonplaceholder.typicode.com/todos/1"
                                    $.ajax({
                                        url: _url,
                                        method: "GET",
                                        headers: {
                                            key: _key,
                                            "Content-Type": "application/json"
                                        },
                                        success: function (data) {
                                            _data = data['result']
                                            console.log(_data)

                                        

                                            _data.forEach((item, index) => {
                                                let workTypeList = '';
                                                let workTypeDetail = '';
                                                let indexIcon = '';

                                                item.arrWorkTypes.forEach((item2, i) => {
                                                    if (item2.workType == "0")
                                                        workTypeDetail = "일반쓰래기";
                                                    else if (item2.workType == "1")
                                                        workTypeDetail = "음식물"
                                                    else if (item2.workType == "2")
                                                        workTypeDetail = "재활용"
                                                    else if (item2.workType == "3")
                                                        workTypeDetail = "대형"
                                                    else if (item2.workType == "4")
                                                        workTypeDetail = "노면청소";
                                                    if (i == 0)
                                                        indexIcon = "<strong class='title w40'>①</strong>";
                                                    else if (i == 1)
                                                        indexIcon = "<strong class='title w40'>②</strong>";
                                                    else if (i == 2)
                                                        indexIcon = "<strong class='title w40'>③</strong>";
                                                    else if (i == 3)
                                                        indexIcon = "<strong class='title w40'>④</strong>";
                                                    workTypeList += `
                                                <li>
                                                    ${indexIcon}
                                                    <span>${workTypeDetail}</span>
                                                </li>`;
                                                });
                                                const $tbody = $(`
                                            <tbody>
                                                <tr>
                                                    <td><input type="checkbox" /></td>
                                                    <td>${item.depotName}</td>
                                                    <td>${item.address}</td>
                                                    <td class="left">
                                                        <div class="driving-info">
                                                            <ul>
                                                                ${workTypeList}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="open-modal" onclick="openEditModal" style="cursor: pointer; color: blue;">[상세/수정페이지]</td>
                                                    
                                                    
                                                </tr>
                                            </tbody>
                                        `);
                                                $table.append($tbody);
                                            });

                                        },
                                        error: function () {
                                            console.error("데이터를 불러오는 데 실패했습니다.");
                                        }

                                    })
                                    $table.on('click', '.open-modal', function () {
                                        const index = $(this).data('index');
                                        $('#modalContent').text('Clicked depot #' + (index + 1));
                                        $('#modal').show();
                                    });


                                    $("#depot-name").on("input", function () {
                                        depotName = $(this).val();   // get input value
                                        console.log("User typed:", depotName);
                                    });
                                    $("#radiusSelect").on("change", function () {
                                        const selectedValue = $(this).val();          // gets the value attribute
                                        const selectedText = $(this).find(":selected").text(); // gets visible text

                                        console.log("Value:", selectedValue);
                                        console.log("Text:", selectedText);
                                    });
                                    $("#workTypeSelect").on("change", function () {
                                        const selectedValue = $(this).val();          // gets the value attribute
                                        const selectedText = $(this).find(":selected").text(); // gets visible text
                                        arrWorkTypes.push({
                                            workType: selectedValue, priority: 1
                                        })
                                        console.log("Value:", selectedValue);
                                        console.log("Text:", selectedText);
                                    });


                                    $("#modal2-open, #modal3-open, .open-modal").on("click", function () {
                                        $("#modal2-dialog").dialog({
                                            autoOpen: true,
                                            show: {
                                                duration: 500
                                            },
                                            width: '940',
                                            modal: true
                                        });
                                    });


                                })
                                function openEditModal() {
                                    console.log("Edit modal opened");
                                    $("#modal2-dialog").dialog({
                                        autoOpen: true,
                                        show: {
                                            duration: 500
                                        },
                                        width: '940',
                                        modal: true
                                    });
                                };
                                const handleRegister = () => {

                                    console.log("등록 완료");

                                };   
                            </script> -->

                            <!-- <tbody id="garbage-depot">
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>음식물쓰레기소각장</td>
                                    <td>경기도 성남시 수정구 판교로1234 처리장</td>
                                    <td class="left">
                                        <div class="driving-info">
                                            <ul>
                                                <li>
                                                    <strong class="title w40">①</strong>
                                                    <span>음식물</span>
                                                </li>
                                                <li>
                                                    <strong class="title w40">②</strong>
                                                    <span>대형</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="open-modal" style="cursor: pointer; color: blue;">[상세/수정페이지]</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>OO시 자원순환센터</td>
                                    <td>경기도 성남시 수정구 한국로22 OO시 자원순환센터</td>
                                    <td class="left">
                                        <div class="driving-info with-btn">
                                            <ul>
                                                <li>
                                                    <strong class="title w40">①</strong>
                                                    <span>재활용</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="open-modal" style="cursor: pointer; color: blue;">[상세/수정페이지]</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>OO처리장</td>
                                    <td>경기도 성남시 수정구 한국로123</td>
                                    <td class="left">
                                        <div class="driving-info with-btn">
                                            <ul>
                                                <li>
                                                    <strong class="title w40">②</strong>
                                                    <span>대형</span>
                                                </li>
                                                <li>
                                                    <strong class="title w40">①</strong>
                                                    <span>노면청소</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="open-modal" style="cursor: pointer; color: blue;">[상세/수정페이지]</td>
                                </tr>
                            </tbody> -->
                        </table>
                    </div>
                </div>
                <!--/ 콘텐츠 본문 -->
            </div>
            <!-- 처리장 등록 -->
            <div class="modal" id="modal2-dialog" title="처리장 등록">

                <div class="flex">
                    <div class="lefttab">
                        <table class="table mb20">
                            <colgroup>
                                <col style="width: 30%;">
                                <col style="width: 35%;">
                                <col style="width: 35%;">
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th scope="row">처리장명</th>
                                    <td colspan="2">
                                        <input type="text" placeholder="처리장명을 입력해 주세요." id="depot-name">
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="3">
                                        <h2 class="etc-tit">처리장 위치</h2>
                                    </td>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2">
                                        <input type="text" placeholder="지도에서 선택해 주세요." id="depot-address">
                                    </td>
                                    <td>
                                        <select id="radiusSelect">
                                            <option value="">선택해주세요</option>
                                            <option value="250">250m</option>
                                            <option value="300">300m</option>
                                            <option value="350">350m</option>
                                            <option value="400">400m</option>
                                            <option value="450">450m</option>
                                            <option value="500">500m</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="mgt3 red">지도상에서 마우스 좌클릭으로 지정할 수 있습니다.</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <h2 class="etc-tit">담당 성상</h2>
                                    </td>
                                </tr>

                                <tr id="waste-type-row">
                                    <td colspan="2" id="waste-select-container">
                                        <select id="workTypeSelect1">
                                            <option value="">성상을 선택하세요</option>
                                            <option value="0">일반 쓰레기</option>
                                            <option value="1">음식물 쓰레기</option>
                                            <option value="2">재활용 쓰레기</option>
                                            <option value="3">대형 폐기물</option>
                                            <option value="4">노면 청소</option>
                                        </select>
                                        <select id="workTypeSelect2">
                                            <option value="">성상을 선택하세요</option>
                                            <option value="0">일반 쓰레기</option>
                                            <option value="1">음식물 쓰레기</option>
                                            <option value="2">재활용 쓰레기</option>
                                            <option value="3">대형 폐기물</option>
                                            <option value="4">노면 청소</option>
                                        </select>
                                        <select id="workTypeSelect3">
                                            <option value="">성상을 선택하세요</option>
                                            <option value="0">일반 쓰레기</option>
                                            <option value="1">음식물 쓰레기</option>
                                            <option value="2">재활용 쓰레기</option>
                                            <option value="3">대형 폐기물</option>
                                            <option value="4">노면 청소</option>
                                        </select>
                                        <select id="workTypeSelect4">
                                            <option value="">성상을 선택하세요</option>
                                            <option value="0">일반 쓰레기</option>
                                            <option value="1">음식물 쓰레기</option>
                                            <option value="2">재활용 쓰레기</option>
                                            <option value="3">대형 폐기물</option>
                                            <option value="4">노면 청소</option>
                                        </select>

                                    </td>
                                    <!-- <td>
                                        &nbsp;
                                        <button type="button" class="btn-img plus">추가</button> &nbsp;
                                        <button type="button" class="btn-img minus">삭제</button>
                                    </td> -->
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="mgt3 red">해당 처리장에서 취급하는 성상과, 성상별 우선순위를 지정합니다.
                                            해당 처리장에 방문 시, 1순위 성상을 처리한 것으로 자동 판정됩니다.</div>
                                        ※ 예: A처리장에 "음식물(1순위), 대형(2순위)" 성상이 등록된 경우, 이 처리장 방문 시 '음식물' 성상이 처리된 것으로 간주합니다.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div class="right-map">
                        <!-- <div id="daumRoughmapContainer1533601510591"
                            class="root_daum_roughmap root_daum_roughmap_landing  map" style="height:200px">
                            <iframe id="mapFrame" style="width:100%;height: 200px"></iframe>
                        </div> -->
                        <div class="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25357.461822122736!2d127.10473640699269!3d37.39733480314603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7fe934881c7%3A0x30db2f32566ac8fb!2z6rK96riw64-EIOyEseuCqOyLnCDrtoTri7nqtawg7YyQ6rWQ66Gc!5e0!3m2!1sko!2skr!4v1534812939236"
                                width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
                <div class="btn-bottom">
                    <button class="btn btn02 md" id="cancel-btn">취소</button>
                    <button class="btn btn03 md" id="register-btn">등록완료</button>
                </div>

            </div>
            <!-- // 처리장 등록-->
        </section>

        <footer-0></footer-0>
        <!--/ 하단 -->
    </div>

    <script>

        $(document).ready(function () {

            const _key = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyS2V5IjoiYTUzOWUxODQtZmVlOC00ZjNlLTgyMTgtMjNhODkwMTZhNGQ1IiwiZXhwaXJlZCI6MTc1NDk2NjUzOSwiY29ycEtleSI6IjM0OWQ0Yzk0LTcwZTktMTFmMC04MDg0LTAyNDJhYzE0MDAwMiIsImNvcnBUeXBlIjoiMTIiLCJzZXJ2aWNlR3JhZGUiOiIzIn0.Ox9W6QePQBmsxOXLnfoC22SO8mJ2oxKAEmShO0jDyIA"
            _data = []
            let depotName = "";
            let depotRadius;
            let arrWorkTypes = [];
            let chosenValues;
            const $table = $('#main-table');
            if ($table.attr('id') !== 'main-table') {
                return; // do nothing for other tables
            }
            $.ajax({
                url: "http://localhost/api/1/cleanerB/garbageDepot",
                method: "GET",
                headers: {
                    key: _key,
                    "Content-Type": "application/json"
                },
                success: function (data) {
                    _data = data['result']
                    console.log(_data)
                    // const $table = $('table'); // make sure your <table> exists

                    data['result'].forEach((item, index) => {
                        let workTypeList = '';
                        let workTypeDetail = '';
                        let indexIcon = '';

                        item.arrWorkTypes.forEach((item2, i) => {
                            if (item2.workType == "0")
                                workTypeDetail = "일반쓰래기";
                            else if (item2.workType == "1")
                                workTypeDetail = "음식물"
                            else if (item2.workType == "2")
                                workTypeDetail = "재활용"
                            else if (item2.workType == "3")
                                workTypeDetail = "대형"
                            else if (item2.workType == "4")
                                workTypeDetail = "노면청소"
                            if (i == 0)
                                indexIcon = "①";
                            else if (i == 1)
                                indexIcon = "②";
                            else if (i == 2)
                                indexIcon = "③";
                            else if (i == 3)
                                indexIcon = "④";


                            workTypeList += `
                                    <li>
                                        <strong class="title w40">${indexIcon}</strong>
                                        <span>${workTypeDetail}</span>
                                    </li>`;
                        });

                        const $tbody = $(`
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>${item.depotName}</td>
                                    <td>경기도 성남시 수정구 판교로1234 처리장</td>
                                    <td class="left">
                                        <div class="driving-info">
                                            <ul>

                                                <li>
                                     ${workTypeList}
                                                </li>


                                            </ul>
                                        </div>
                                    </td>
                                    <td class="open-modal" style="cursor: pointer; color: blue;">[상세/수정페이지]</td>
                                </tr>
                            </tbody>
                   `);
                        $table.append($tbody);
                    });

                    initFunction()

                },
                error: function () {
                    console.error("데이터를 불러오는 데 실패했습니다.");
                }

            })
            $(".img-btn.delete").on("click", function () {
                const $checkedRows = $("table.table input[type='checkbox']:checked").closest("tr");

                if ($checkedRows.length === 0) {
                    alert("삭제할 항목을 선택해주세요.");
                    return;
                }

                if (confirm("선택한 항목을 삭제하시겠습니까?")) {
                    $checkedRows.remove();
                }
            });
            $("#depot-name").on("input", function () {
                depotName = $(this).val();   // get input value
                console.log("User typed:", depotName);
            });
            $("#radiusSelect").on("change", function () {
                depotRadius = $(this).val();          // gets the value attribute
                const selectedText = $(this).find(":selected").text(); // gets visible text
            });
            $("#workTypeSelect1,#workTypeSelect2,#workTypeSelect3,#workTypeSelect4").on("change", function () {
                 const $allSelects = $('select[id^="workTypeSelect"]');
                const selectedValue = $(this).val();     
                const selectedText = $(this).find(":selected").text(); 
                if (selectedValue !== '') {
                    arrWorkTypes.push({
                        workType: selectedValue, priority: 1
                    })
                }
                if (selectedValue === "4") {
                    // Disable all others except the one that triggered the change
                    $('select[id^="workTypeSelect"]').not(this).prop('disabled', true);
                } else {
                    // Enable all selects again
                    $('select[id^="workTypeSelect"]').prop('disabled', false);
                }
                 chosenValues = [];
                $allSelects.each(function () {
                    const val = $(this).val();
                    if (val) {
                        if (chosenValues.includes(val)) {
                            alert("이미 선택된 성상입니다.");
                            $(this).val(""); // reset duplicate
                        } else {
                            chosenValues.push(val);
                        }
                    }
                });


                console.log("arrwork:", chosenValues);
            });


            $("#register-btn").on("click", function () {

                // if (!depotName | !depotRadius || workTypes.length === 0) {
                //     alert("모든 필드를 입력해주세요.");
                //     return;
                // }

                const bodyData = {
                    depotName: depotName,
                    depoLat: 37.39733480314603,
                    depotLon: 127.10473640699269,
                    depotRadius: depotRadius,
                    arrWorkTypes: arrWorkTypes
                };
                console.log("Sending data:", bodyData);
                $.ajax({
                    url: 'http://localhost/api/1/cleanerB/garbageDepot',
                    method: 'POST',
                    headers: {
                        key: _key,
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(bodyData),
                    success: function (response) {
                        alert("처리장이 등록되었습니다.");
                    },
                    error: function (error) {
                        alert("처리장 등록에 실패했습니다.");
                        console.error("Error:", error);
                    }
                });


                $("#modal2-dialog").dialog("close");

            });

            $("#cancel-btn").on("click", function () {
                $("#modal2-dialog").dialog("close");
            });


            // //지도 데이터 처리 시작
            // $V4.http_post("/api/1/addrPointSearch", { addr: addr }, {
            //     requestMethod: "GET"
            //     , success: function (r) {
            //         var radius = $("#fenceRadius").val();
            //         if (_unitLengthMeter == 'yard') {
            //             radius = parseInt(parseInt(radius) * 0.9144);
            //         }
            //         var d = r.result;
            //         var vo = JSON.parse(d);
            //         var lat = vo.coordinateInfo.coordinate[0].newLat;
            //         var lon = vo.coordinateInfo.coordinate[0].newLon;
            //         var mapFrame = $("#mapFrame").get(0).contentWindow;
            //         mapFrame.move(lon, lat, radius);
            //         setAddr(addr);
            //         setLonLat(lon, lat, radius);
            //     }
            // });
            //     var setAddr = function (addr) {
            //         $("#fenceAddress").val(addr);
            //         $('.dialogAddress').val(addr);//등록 스케줄 리스트 pop 주소 노출
            //     }
            //     var setLonLat = function (lon, lat, radius) {
            //         $("#lon").val(lon);
            //         $("#lat").val(lat);
            //         $("#radius").val(radius);
            //     }
            // //지도 데이터 처리 끝
        });


        // 공통 성상 옵션
        const wasteOptions = `
        <option value="">성상을 선택하세요</option>
        <option value="0">일반 쓰레기</option>
        <option value="1">음식물 쓰레기</option>
        <option value="2">재활용 쓰레기</option>
        <option value="3">대형 폐기물</option>
        <option value="4">노면 청소</option>`;

        function initFunction() {
            // // 추가 버튼 클릭 시
            // $(".plus").on("click", function () {
            //     const currentCount = $("#waste-select-container select").length;

            //     if (currentCount >= 4) {
            //         alert("최대 4개까지 등록할 수 있습니다.");
            //         return;
            //     }

            //     const newSelect = $('<div class="select-wrapper" style="margin-top: 5px;"><select id="workTypeSelect2">' +
            //         wasteOptions + '</select></div>');
            //     $("#waste-select-container").append(newSelect);


            // });
            // $(document).on('change', '#waste-select-container .workTypeSelect2', function () {
            //     const selectedValue = $(this).val();
            //     const selectedText = $(this).find('option:selected').text();
            //     console.log('Selected:', selectedText, `(value=${selectedValue})`);
            //     if (selectedValue !== '') {
            //         console.log('Selected:', selectedText, `(value=${selectedValue})`);

            //     }
            // });

            // // 삭제 버튼 클릭 시
            // $(".minus").on("click", function () {
            //     const selects = $("#waste-select-container .select-wrapper");
            //     if (selects.length > 0) {
            //         selects.last().remove(); // 마지막 추가된 select만 제거
            //     } else {
            //         alert("더 이상 삭제할 수 없습니다.");
            //     }
            // });
            $("#modal2-open, #modal3-open, .open-modal").on("click", function () {
                $("#modal2-dialog").dialog({
                    autoOpen: true,
                    show: {
                        duration: 500
                    },
                    width: '940',
                    modal: true
                });
            });
        };
        initFunction();

    </script>
</body>

</html>
