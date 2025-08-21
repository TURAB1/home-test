<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!-- 본문 -->
        <div class="map-wrap box-layout">
			<div class="title">
				<h3 class="tit3">작업 스케줄 등록</h3>
				<div class="btn-closed">
					<a href="" class="icon-spr">닫기</a>
				</div>
			</div>
        	<div class="aside">
        		<form id="frm" onsubmit="return false;">
					<div class="scroll-box" >
						<table class="table" >
							<caption>배차정보 리스트</caption>
							<colgroup>
								<col style="width:40%" />
								<col style="width:60%" />
							</colgroup>
							<tbody>
								<tr>
									<td colspan="2">
										<div class="map-set-title">
											<input type="text" placeholder="스케줄 명을 입력해주세요." id="taskName" name="taskName">
											<input type="hidden" id="route" name="route">
											<div class="right">
												<button class="btn btn04 md" id="BtnCarSchedule">불러오기</button>
											</div>
										</div>

									</td>
								</tr>
								<tr>
									<th scope="row">스케줄 성상</th>
									<!--원본   <td class="text-right">
										<select name="taskType">
											<option value="0">일반 쓰레기</option>
											<option value="1">음식물 쓰레기</option>
											<option value="2">재활용 쓰레기</option>
<%--											<option value="3">대형 폐기물</option>--%>
<%--											<option value="4">대형광등 등 기타</option>--%>
<%--											<option value="5">기동처리반</option>--%>
										</select>
									</td>-->
								</tr>
				                <tr>
                                    <td>
                                        <select id="garbageSelect1" data-priority="1">
                                            <option value="">성상을 선택하세요</option>
								<option value="0">일반 쓰레기</option>
								<option value="1">음식물 쓰레기</option>
								<option value="2">재활용 쓰레기</option>
								<option value="3">대형 폐기물</option>
								<option value="4">노면 청소</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="garbageDepotSelect1">
                                            <option value="">처리장 선택</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select id="garbageSelect2" data-priority="2">
                                            <option value="">성상을 선택하세요</option>
								<option value="0">일반 쓰레기</option>
								<option value="1">음식물 쓰레기</option>
								<option value="2">재활용 쓰레기</option>
								<option value="3">대형 폐기물</option>
								<option value="4">노면 청소</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="garbageDepotSelect2">
                                            <option value="">처리장 선택</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select id="garbageSelect3" data-priority="3">
                                            <option value="">성상을 선택하세요</option>
								<option value="0">일반 쓰레기</option>
								<option value="1">음식물 쓰레기</option>
								<option value="2">재활용 쓰레기</option>
								<option value="3">대형 폐기물</option>
								<option value="4">노면 청소</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="garbageDepotSelect3" >
                                            <option value="">처리장 선택</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                        </select>
                                    </td>
                                </tr>
                                    
								<tr>
									<td colspan="2">
										<div class="set-info">
											<div class="img"><img src="/common/new/img/vehicle/L47.png"></div>
											<div class="info">
												<div class="inp-box" id="BtnCarChoice">
													<p class="tit">차량번호</p>
													<input type="text" class="inp1 none-border" placeholder="차량번호" name="plateNum" readonly>
													<input type="hidden" name="vehicleKey"/>
													<button class="btn-srch btnVehiclePop"><span class="hidden">검색</span></button>
												</div>
												<div class="inp-box" id="BtnCarUser">
													<p class="tit">운전자</p>
													<input type="text" class="inp1 none-border" placeholder="운전자" value="" name="accountName" readonly>
													<input type="hidden" name="accountKey"/>
													<button class="btn-srch btnUserPop"><span class="hidden">검색</span></button>
												</div>
<%--												<div class="inp-box values">--%>
<%--													<p class="tit" style="flex:0 0 120px;">일일 운행부담횟수</p>--%>
<%--													<input type="text" class="inp1 numberMax" value="1" id="defaultUnloadCnt" name="defaultUnloadCnt">--%>
<%--													<button class="btn-up btnArrow"></button>--%>
<%--													<button class="btn-down btnArrow"></button>--%>
<%--												</div>--%>
												<div class="inp-box values">
													<p class="tit">담당구역</p>
													<input type="text" readonly class="inp1" id="cleanerArea" name="cleanerArea">
												</div>
											</div>

										</div>
									</td>
								</tr>
							<!-- 원본<tr>
									<th scope="row">요일만 설정</th>
									<td class="text-right">
										<label><input type="checkbox" class="switch" name="roop"><p><em></em></p></label>
									</td>
								</tr>
								<tr class="trDate">
									<th scope="row">시작일자</th>
									<td><input type="text" class="datePicker R-span" value="" name="roopStart"/></td>
								</tr>
								<tr class="trDate">
									<th scope="row">종료일자</th>
									<td><input type="text" class="datePicker R-span" value="" name="roopEnd"/></td>
								</tr>
								<tr>
									<th scope="row">요일 설정</th>
									<td>
										<div class="days-chck">
											<label><input type="checkbox" class="checkbox-day" name='daySun'><p>일</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayMon'><p>월</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayTue'><p>화</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayWed'><p>수</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayThu'><p>목</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayFri'><p>금</p></label>
											<label><input type="checkbox" class="checkbox-day" name='daySat'><p>토</p></label>
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="2" class="chk-border clickableRC">
										<input type="checkbox" class="select-checkbox" hidden>
										<h3>자원순환센터</h3>
										<div class="addrs-sorting">
											<div class="NOsorting">
												<div class="inNout-box flex mb10">
													<%--													<div class="inNout-text">자원순환센터</div>--%>
													<div class="addr" style="margin-left: auto;">
														<input type="hidden" name="taskDepotLat"
															   class="returnCenterLat">
														<input type="hidden" name="taskDepotLon"
															   class="returnCenterLon">
														<input type="hidden" name="taskDepotRadius"
															   class="returnCenterRadius" value="250">
														<input type="text" name="taskDepotAddr"
															   class="inp returnCenterAddr" placeholder="지도에서 선택해주세요.">
													</div>
													<select id="fenceRadius">
														<%--											<option value="">선택해주세요</option>--%>
													</select>
												</div>
												<div class="addrs-tit">지도상에서 마우스 우클릭으로 지정할 수 있습니다.</div>
												<div class="out-check flex mb5">
													<input type="checkbox" name="taskDepotChk"> 자원순환센터에서 출발하지 않습니다

													<span class="help">
														<dl class="help-layer">
														<dd>
															자원순환센터에서 출발하지 않지만,<br />작업시작 전 자원순환센터를 방문하시는 경우 체크하세요.<br />자원순환센터 최초 방문 1회를<br />일일운행부담횟수에서 제외합니다.
														</dd>
													</dl>
													</span>
												</div>
											</div>
										</div>
									</td>
								</tr>
								-->
								
							   <tr>
                                     <th scope="row">일운행부담횟수</th>
                                      
                                     <td style="text-align: right;">
                                     <input type="number" id="unload-count" min="1" max="10" value="1">
                                     </td>
                                </tr>
								<tr>
									<th scope="row">요일 설정</th>
									<td>
										<div class="days-chck">
											<label><input type="checkbox" class="checkbox-day" name='daySun'><p>일</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayMon'><p>월</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayTue'><p>화</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayWed'><p>수</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayThu'><p>목</p></label>
											<label><input type="checkbox" class="checkbox-day" name='dayFri'><p>금</p></label>
											<label><input type="checkbox" class="checkbox-day" name='daySat'><p>토</p></label>
										</div>
									</td>
								</tr>
								<tr id="addrs-tr">
									<td colspan="2" class="chk-border clickable">
										<h3>작업지</h3>
										<%--										<div class="addrs-tit">자원순환센터를 제외한 작업지만 선택해주세요.</div>--%>
										<div class="addrs-sorting">
											<div class="sorting">
												<div class="box">
													<div class="num">1</div>
													<div class="addr"><input type="text" class="inp"
																			 placeholder="지도에서 선택해주세요." readonly
																			 name="addr"></div>
													<div class="time"><input type="text" class="time" placeholder="도착시간"
																			 name="targetTime">
														<input type="hidden" name="lat">
														<input type="hidden" name="lon">
														<input type="hidden" name="radius">
													</div>
													<button class="btn-del"></button>
												</div>
											</div>
										</div>
										<div class="addrs-tit">지도상에서 마우스 좌클릭으로 지정할 수 있습니다.
											<br />자원순환센터를 제외한 작업지만 선택해주세요.</div>
										<div class="addr-btns">
											<button class="btn btn03 md" id="btnMap">등록</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</form>
        	</div>
        
        	<iframe src="/index?cmd=/map/taskMap" width="100%" height="450" frameborder="0" style="border:0; width: calc(100% - 350px);" allowfullscreen id="frame"></iframe>
        </div>

        <!--/ 본문 -->
        
        
        
        
        
        
	<div id="car-schedule" title="스케줄 불러오기" style="display: none">
       	<div class="dialog-content">
			<div class="top-search">
				<select id="pop_taskSearchType">
					<option value="">전체</option>
					<option value="plateNum">차량번호</option>
					<option value="taskName">스케쥴명</option>
				</select>
				<input type="text" placeholder="검색어를 입력해주세요." id="pop_taskSearchText">
				<button class="btn btn03" id="pop_btnSearch">조회</button>
			</div>
			<div class="btn-function row-2">
				<div class="left">
					<div class="date">
						<button class="active btnTaskFillter" data-fillter=''>전체</button>
						<button class="btnTaskFillter" data-fillter='0'>일반 쓰레기</button>
						<button class="btnTaskFillter" data-fillter='1'>음식물 쓰레기</button>
						<button class="btnTaskFillter" data-fillter='2'>재활용 쓰레기</button>
<%--						<button class="btnTaskFillter" data-fillter='3'>대형 폐기물</button>--%>
<%--						<button class="btnTaskFillter" data-fillter='4'>폐형광등 등 기타</button>--%>
<%--						<button class="btnTaskFillter" data-fillter='5'>기동처리반</button>--%>
					</div>
				</div>
			</div>

			<div class="scroll-table">
				<table class="table list mgt20" id="pop_taskTable"></table>
			</div>
		</div>

    </div>

    <div id="car-choice" title="차량 선택" style="display: none">
       	<div class="dialog-content">
			<div class="top-search">
				<select id="pop_vehicleSearchType">
					<option value="">전체</option>
					<option value="plateNum">차량번호</option>
					<option value="modelMaster">모델명</option>
					<option value="groupNm">부서명</option>
				</select>
				<input type="text" placeholder="검색어를 입력해주세요." id="pop_vehicleSearchText">
				<button class="btn btn03" id="pop_btnVeihcleSearch">조회</button>
			</div>
			<div class="btn-function row-2">
				<div class="left">
					<div class="date">
						<button class="active btnTaskFillter"  data-fillter=''>전체</button>
						<button class="btnTaskFillter" data-fillter='0'>일반 쓰레기</button>
						<button class="btnTaskFillter" data-fillter='1'>음식물 쓰레기</button>
						<button class="btnTaskFillter" data-fillter='2'>재활용 쓰레기</button>
<%--						<button class="btnTaskFillter" data-fillter='3'>대형 폐기물</button>--%>
<%--						<button class="btnTaskFillter" data-fillter='4'>폐형광등 등 기타</button>--%>
<%--						<button class="btnTaskFillter" data-fillter='5'>기동처리반</button>--%>
					</div>
				</div>
			</div>

			<div class="scroll-table">
				<table class="table list mgt20"></table>
			</div>
		</div>

    </div>



    <div id="car-user" title="운전자 선택" style="display: none">
       	<div class="dialog-content">
			<div class="top-search">
				<select id="pop_userSearchType">
					<option value="">전체</option>
					<option value="groupNm">부서명</option>
					<option value="name">성명</option>
					<option value="corpPosition">직급</option>
				</select>
				<input type="text" placeholder="검색어를 입력해주세요." id="pop_userSearchText">
				<button class="btn btn03" id="pop_btnUserSearch">조회</button>
			</div>
			<div class="scroll-table">
				<table class="table list mgt20"></table>
			</div>
		</div>

    </div>

    <div id="car-map" title="작업구간 미리보기" style="display: none">
       	<div class="dialog-content">
			<div class="map-preview"><iframe src="/index?cmd=/map/taskMapPreview" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen id="mapPreview"></iframe></div>
		</div>

   	 	<div class="btn-bottom">
            <button class="btn btn04 md" id="previewBreak">취소</button>
            <button class="btn btn03 md" id="previewConfirm">등록</button>
        </div>
    </div>





    <div class="modal" id="modal2" style="display: none">
		<div class="modal-dialog" style="width:450px">
			<div class="modal-content">
				<div class="modal-header">
					<h4>아래 내용을 확인해주세요.</h4>
					<button class="close-modal" data-dismiss="modal">닫기</button>
				</div>
				<div class="modal-body">
					<div class="modal-txt">

					</div>
					<div class="modal-tit">계속 진행하시겠습니까?</div>

					<div class="modal-bottom flex">
						<button class="btn btn04 md" data-dismiss="modal" id="btnWaringBreak">취소</button>
						<button class="btn btn03 md" id="btnWaringContiue">선택하기</button>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div class="modal" id="modal3" style="display: none">
		<div class="modal-dialog" style="width:450px">
			<div class="modal-content">
				<div class="modal-header">
					<h4>아래 내용을 확인해주세요.</h4>
					<!--<button class="close-modal" data-dismiss="modal">닫기</button>-->
				</div>
				<div class="modal-body">
					<div class="modal-txt">

					</div>

					<div class="modal-bottom flex">
						<button class="btn btn03 md" data-dismiss="modal">확인</button>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div class="modal" id="modal4" style="display: none">
		<div class="modal-dialog" style="width:450px">
			<div class="modal-content">
				<!--
				<div class="modal-header">
					<h4>&nbsp;</h4>
					<button class="close-modal" data-dismiss="modal">닫기</button>
				</div>
				-->
				<div class="modal-body">
					<div class="modal-tit">위 내용으로 스케줄을<br>등록하시겠습니까?</div>
					<div class="modal-bottom flex">
						<button class="btn btn04 md" data-dismiss="modal" id="finalBreak">취소</button>
						<button class="btn btn03 md" id="finalConfirm">등록</button>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    <script type="text/javascript">

    let depotType1,depotType2,depotType3,_defaultUnloadCnt;
    
	var _selVehicle,_selUser;
	
	window.temp = {}
	window.temp.latLonRads = {
		center: {
			lat: '0',
			lon: '0',
			radius: '0'
		},
		taskArea: {
			lat: '0',
			lon: '0',
			radius: '0'
		},
	}
	window.temp.circles = []

$(function(){

	// 좌측표 부분 높이 조절
	$('.aside').css({
		height: ($('.map-wrap').outerHeight() - $('.map-wrap .title').outerHeight() - 2) + 'px',
		overflowY: 'auto',
		overflowX: 'hidden'
	})

	// 자원순환센터 반경 option 추가
	const $fenceRadius = $('#fenceRadius')
	for(let i = 250 ; i <= 1000 ; i += 50){
		$fenceRadius.append(`<option \${i === 250 ? 'selected' : ''} value="\${i}">\${i}m</option>`)
	}
	$fenceRadius.on('change', function(){
		temp.latLonRads.center.radius = $(this).val()
		$('input[name="taskDepotRadius"]').val($(this).val())
	})


	// $(".btnArrow").on("click",function(){
	// 	var max = 255;
	// 	var isUp = $(this).hasClass('btn-up');
	// 	var cnt = $("#defaultUnloadCnt").val();
	//
	// 	cnt = cnt?parseInt(cnt):0;
	//
	// 	if(isUp) cnt += 1;
	// 	else cnt -= 1;
	//
	// 	if (cnt < 0) cnt = 0;
	// 	else if(cnt > max) cnt = max;
	//
	// 	$("#defaultUnloadCnt").val(cnt);
	//
	// });

	$(".numberMax").on("keyup",function(){
		var val = $(this).val().replace(/[^0-9]/gi,"");
		if(parseInt(val) > 255) val = 255;
		$(this).val(val);
	});

	$(".switch").on("click",function(){
		var isChk = $(this).is(":checked");
		if(isChk) $(".trDate").hide();
		else $(".trDate").show();


	});

	$( ".sorting" ).sortable({
		update: function( event, ui ) {
			//console.log(event);
			//console.log(ui);
			//var el = event.toElement;

			$(".sorting").children("div").each(function(i){
				$(this).find("div.num").text(i+1);
			});

		}
	});

	$('#addrs-tr').on("click",'.btn-del',function(){

		var targetDiv = $(this).closest('.box');

		var dataInfo = targetDiv.data("info");
		if(dataInfo){
			var info = base64ToJsonObj(dataInfo);
			var mapFrame = $("#frame").get(0).contentWindow;
	    	mapFrame.removePoint(info.idx);
		}


		targetDiv.remove();

		$(".sorting").children("div").each(function(i){
			$(this).find("div.num").text(i+1);
		});

		if(!$(".sorting").children("div").length)  appendBox(null);




	});
	
	
	//추가 작업
    $("#garbageSelect1,#garbageSelect2,#garbageSelect3").on("change", function () {
        const $allSelects = $('select[id^="garbageSelect"]');
        const selectedValue = $(this).val();
        const selectedText = $(this).find(":selected").text();
        const priority = $(this).data('priority');
      
        if (selectedValue !== '') {
           if(priority==1)
        	   depotType1 = selectedValue
           if(priority==2)
               depotType2 = selectedValue
           if(priority==3)
               depotType3 = selectedValue    	   
        }
        if (selectedValue === "4") {
            // Disable all others except the one that triggered the change
            $('select[id^="garbageSelect"]').not(this).prop('disabled', true).val('');
        } else {
            // Enable all selects again
            $('select[id^="garbageSelect"]').prop('disabled', false);
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


       // console.log("arrwork:", chosenValues);
    });
    $("#garbageDepotSelect1").on("change", function () {
        const valueSelect = $(this).val();
        const garbageDepot = $(this).find(":selected").text();
        console.log(garbageDepot)  
    });
    $("#unload-count").on("change", function() {
        const current = $(this).val();
        _defaultUnloadCnt=current
        
       
    });

    
   //--추가 작업 

	$('input.time').timepicker(timepickerOpt);


	const setOutterCircle = function(){
		const _circle = temp.circles;
	    const v = {}
	    const arrTaskList = []

	    for(var g in _circle){
	        const item = {}
	        // console.log(_circle[g]._shape_data.center)
	        item['lat'] = _circle[g]['_shape_data'].center['_lat']
	        item['lon'] = _circle[g]['_shape_data'].center['_lng']
	        item['radius'] = _circle[g]['_shape_data'].radius
	        arrTaskList.push(item)
	    }

	    v['arrTaskList'] = arrTaskList

	    // $V4.http_post("/common/json/test/testMapCircle.json",v,{
	    $V4.http_post("/api/1/cleaner/findMinimumEnclosingCircleWGS84",v,{
	        requestMethod:"POST"
	        ,success : function(data){

	            // const obj = getProperty(data,"result");
	            // const lat = getProperty(data,"center.x",0);
	            // const lon = getProperty(data,"center.y",0);
	            // const radius = getProperty(data,"radius",0);

	            const taskArea = temp.latLonRads.taskArea;
	            taskArea.lat = '' + data.center.y;
	            taskArea.lon = '' + data.center.x;
	            taskArea.radius = '' + data.radius + 200;

	            // const radius = data.radius + 100;
	            //
	            // var circle = new Tmapv2.Circle({
	            //     center: new Tmapv2.LatLng(lat, lon), // 중심좌표
	            //     fillColor: "#FF0000", // 원 내부 색상
	            //     fillOpacity : 0.2, //원 내부 투명도
	            //     strokeColor: "#FF0000", // 테두리 색상
	            //     strokeWeight : 3, //테두리 두께
	            //     radius: radius, // 원의 반지름. 크기설정
	            //     map: objMap // 지도 객체
	            // });
	        }
	    });
	}


	
	$('#btnMap').on("click",function(){
		if(valid()){
			setOutterCircle();
			if(warning()){
				preview();
			}
			
			
		}
	});
	
	$("#btnWaringContiue").on("click",function(){
		$("#btnWaringBreak").trigger("click");
		preview();
	});

	$("#previewBreak").on("click",function(){
		$("#car-map").dialog("close");
	});
	
	var preview = function(){
		
		$("#car-map").dialog({
            autoOpen: true,
            show: {
                duration: 500
            },
            width: '600',
			modal : true
        });
		
		var param = {arrPoints : []};
		
		$(".sorting").children("div").each(function(i){
			var dataInfo = $(this).data("info");
			if(dataInfo){
				var info = base64ToJsonObj(dataInfo);
				param['arrPoints'].push({lat:info.lat , lon:info.lon , addr : info.addr , radius : 50 , idx : (i+1)});
			}
		});
		
		var _interval = setInterval(function(){
			var mapFrame = $("#mapPreview").get(0).contentWindow;
			if(mapFrame && mapFrame.drawPreview) {
				clearInterval(_interval);
				mapFrame.drawPreview(param);
			}
		},100);
	}
	
	$("#previewConfirm").on("click",function(){
		$("#finalConfirm").attr('disabled', false);
		$("#modal4").modal();
	});
	
	$("#finalConfirm").on("click",function(ev){
		$(this).attr('disabled', true);
		
		var v = $('#frm').serializeObject(1);
		
		delete v['lat'];
		delete v['lon'];
		delete v['radius'];
		delete v['addr'];
		delete v['targetTime'];
		
		v['daySun'] = $("input[name=daySun]").is(":checked")?1:0;
		v['dayMon'] = $("input[name=dayMon]").is(":checked")?1:0;
		v['dayTue'] = $("input[name=dayTue]").is(":checked")?1:0;
		v['dayWed'] = $("input[name=dayWed]").is(":checked")?1:0;
		v['dayThu'] = $("input[name=dayThu]").is(":checked")?1:0;
		v['dayFri'] = $("input[name=dayFri]").is(":checked")?1:0;
		v['daySat'] = $("input[name=daySat]").is(":checked")?1:0;
		v['roop'] = $("input[name=roop]").is(":checked")?1:0;

		if(v['roopStart']) v['roopStart'] = $("input[name=roopStart]").datepicker( "getDate" ).getTime();
		if(v['roopEnd']) v['roopEnd'] = $("input[name=roopEnd]").datepicker( "getDate" ).getTime();

		v['taskAreaLat'] = temp.latLonRads.taskArea.lat;
		v['taskAreaLon'] = temp.latLonRads.taskArea.lon;
		v['taskAreaRadius'] = temp.latLonRads.taskArea.radius;

		// v['taskDepotLat'] = temp.latLonRads.center.lat;
		// v['taskDepotLon'] = temp.latLonRads.center.lon;
		// v['taskDepotRadius'] = temp.latLonRads.center.radius;
		
		var arrPoints = [];
		
		$(".sorting").children("div").each(function(i){
			arrPoints.push(
				{addr : $(this).find("input[name=addr]").val()
				,lat :  $(this).find("input[name=lat]").val()
				,lon :  $(this).find("input[name=lon]").val()
				,radius :  $(this).find("input[name=radius]").val()
				,targetTs : HHMMtoSec($(this).find("input[name=targetTime]").val())
				,idx :  i}
			);
		});
		
		v['arrTaskList'] = arrPoints;

		v['taskDepotChk'] = $("input[name=taskDepotChk]").is(":checked")?1:0;

		// console.log(v)

		$V4.http_post("/api/1/cleaner/taskChecker",v,{
			success : function(rtv){

				//console.log(rtv);



				if(rtv['result']){
					$("#modal3 .modal-txt").html("스케쥴명 : '"+rtv['result']['taskName']+"' 과 중복되어 등록불가능합니다.");
					$(this).attr('disabled', false);
					$("#modal3").modal();
					$("#finalBreak").trigger("click");
				}else{

					$V4.http_post("/api/1/cleaner/task",v,{
						success : function(rtv){
							console.log(rtv);
							alert("저장되었습니다.");
							$V4.move(null,'/config/geoTask/list');
				    	}
						,error : function(e){
							console.log(e);
							alert("알수없는 오류가 발생하였습니다.\n관리자에게 문의하여 주십시오.");
							$(this).attr('disabled', false);
						}
					});
				}




	    	}
			,error : function(e){
				console.log(e);
			}
		});
	});
	
	
	$("#pop_btnSearch").on("click",$.debounce(500,1,function(){
		
		var param = $("#pop_taskTable").commonLazy("getParam");
		
		var fillter = $("#car-schedule .btnTaskFillter.active").data('fillter');
		
		param['searchTaskType'] = fillter;
		param['searchType'] = $("#pop_taskSearchType").val();
		param['searchText'] = $.trim($("#pop_taskSearchText").val());		
			
		$('#pop_taskTable').commonLazy("setParam",param).search();
		
		
	}));
	
	$("#pop_taskSearchText").on("keyup",function(e){
		if(e.keyCode == 13) $("#pop_btnSearch").trigger("click");
	});
	
	$("#car-schedule .btnTaskFillter").on("click",function(){
		$("#car-schedule .btnTaskFillter").removeClass("active");
		$(this).addClass("active");
		$("#pop_btnSearch").trigger("click");
	});
	
	$('#BtnCarSchedule').on("click",function(){
		
		var setting = {
			thead :
				[			
					,'스케쥴성상'
					,'차량 정보'
					,'스케쥴명'
					,'운전자'
					,'작업기간'
					,'불러오기'
		   	    ]
	   		,bodyHtml : function(data){
	   			var strHtml = "";
	   			for(var i in data.result){
	   				var obj = data.result[i];

	   				strHtml += '<tr>';

	   				var taskType = getProperty(obj,"taskType","-1");
					var taskTypeName = taskType=="0"?"일반쓰레기":taskType=="1"?"음식물쓰레기":taskType=="2"?"재활용쓰레기":taskType=="3"?"대형폐기물":taskType=="4"?"폐형광등 등 기타":taskType=="5"?"기동처리반":"";
					var vehicle = getProperty(obj,"vehicle");
	   				strHtml += '<td>'+taskTypeName+'</td>';
	   				strHtml += '<td>';
	   				strHtml += '  <div class="car-img d-flex" style="cursor: pointer;">';
					strHtml += '  <span class="img"><img src="'+getCommonImgVehicle(vehicle,"S")+'" alt="" /></span>';

					let modelNameText = getProperty(vehicle,"modelNameText","")
					if(modelNameText === '재활용품수거차') modelNameText = '재활용품 수거차'
					else if(modelNameText === '음식물쓰레기수거차') modelNameText = '음식물 쓰레기 수거차'
					else if(modelNameText.length > 4 && modelNameText.indexOf(' ') === -1) { // 차종이 길지만 공백이 없는 경우에 공백 강제 추가
						let divide4 = modelNameText.length/4|0
						for(i = 0 ; i < divide4 ; i++) {
							modelNameText = modelNameText.substring(0, 4*(i+1)+i) + ' ' + modelNameText.substring(4*(i+1)+i)
						}
					}
					strHtml += '  <span class="num">'+modelNameText+'</br>'+getProperty(vehicle,"plateNum","")+'</span>';

					strHtml += '  </div>';
					strHtml += '</td>';


	   				strHtml += '<td>'+getProperty(obj,'taskName','')+'</td>';
	   				strHtml += '<td>'+getProperty(obj,'account.name','')+'</td>';
	   				strHtml += '<td>';
	   					var isRoop = getProperty(obj,'roop',0);
	   					var roopStart = getProperty(obj,'roopStart',0);
	   					var roopEnd = getProperty(obj,'roopEnd',0);
	   					var arrDay = [];
	   					if(getProperty(obj,'dayMon',0)) arrDay.push('월');
	   					if(getProperty(obj,'dayTue',0)) arrDay.push('화');
	   					if(getProperty(obj,'dayWed',0)) arrDay.push('수');
	   					if(getProperty(obj,'dayThu',0)) arrDay.push('목');
	   					if(getProperty(obj,'dayFri',0)) arrDay.push('금');
	   					if(getProperty(obj,'daySat',0)) arrDay.push('토');
	   					if(getProperty(obj,'daySun',0)) arrDay.push('일');
	   					if(!isRoop){
	   						strHtml += new Date(roopStart).format('yyyy-MM-dd')+' 부터 '+new Date(roopEnd).format('yyyy-MM-dd')+' 까지</br>';
	   					}
	   				
	   					strHtml += arrDay.join(",");
	   				strHtml += '</td>';
	   				
	   				strHtml += '<td><button class="states-value state05 btn-toggle btnTaskLoad" data-key="'+getProperty(obj,'seq')+'">불러오기</button></td>';
	   				strHtml += '</tr>';
	   			}
	   			return strHtml;
	   		}
	   		,limit : 10
	   		,url : "/api/1/cleaner/origin/task"
	   		,param : {}
	   		,http_post_option : {
	   			requestMethod : "GET"
	   			,header : {}
	   		}
	   		,initSearch : true //생성과 동시에 search		
	   		,loadingBodyViewer : true //로딩중!! 표시됨
	   		,debugMode : true
		};
		
		$("#pop_taskTable").commonLazy(setting);
		
		
		$("#car-schedule").dialog({
            autoOpen: true,
            show: {
                duration: 500
            },
            width: '1000',
			modal : true
        });	
	});
	
	$("body").on("click",".btnTaskLoad",function(){
		var key = $(this).data('key');
		
		loadTask(key);
		
		$("#car-schedule").dialog('close');	
	});
	
	
	
	
	/////////////
	$('.btnVehiclePop').on("click",function(){
		
		var setting = {
			thead :
				[			
					,'차량정보'
					,'차량 성상'
					,'비고'
					,'선택'
		   	    ]
	   		,bodyHtml : function(data){
	   			var strHtml = "";
	   			for(var i in data.result){
	   				var obj = data.result[i];
	   				
	   				strHtml += '<tr>';
	   				
	   				var taskType = getProperty(obj,"cleanerType","-1");
					var taskTypeName = taskType=="0"?"일반쓰레기":taskType=="1"?"음식물쓰레기":taskType=="2"?"재활용쓰레기":taskType=="3"?"대형폐기물":taskType=="4"?"폐형광등 등 기타":taskType=="5"?"기동처리반":"";
					
	   				strHtml += '<td>';
	   				strHtml += '  <div class="car-img" style="cursor: pointer;">';
					strHtml += '  <span class="img"><img src="'+getCommonImgVehicle(obj,"S")+'" alt="" /></span>';
					strHtml += '  <span class="num">'+getProperty(obj,"modelNameText","")+'</br>'+getProperty(obj,"plateNum","")+'</span>';
					strHtml += '  </div>';
					strHtml += '</td>';
	   				strHtml += '<td>'+taskTypeName+'</td>';
	   				
	   				
	   				strHtml += '<td>'+getProperty(obj,'vehicleDescript','')+'</td>';
	   				strHtml += '<td><button class="states-value state05 btn-toggle btn_selVehicle" data-info="'+jsonObjToBase64(obj)+'">선택하기</button></td>';
	   				strHtml += '</tr>';
	   			}
	   			return strHtml;
	   		}
	   		,limit : 10
	   		,url : "/api/1/vehicle"
	   		,param : {}
	   		,http_post_option : {
	   			requestMethod : "GET"
	   			,header : {}
	   		}
	   		,initSearch : true //생성과 동시에 search		
	   		,loadingBodyViewer : true //로딩중!! 표시됨
	   		,debugMode : true
		};
		
		$("#car-choice table").commonLazy(setting);
		
		$("#car-choice").dialog({
            autoOpen: true,
            show: {
                duration: 500
            },
            width: '1000',
			modal : true
        });	
		
		
	});
	
	
	
	$("body").on("click",".btn_selVehicle",function(){
		var info = base64ToJsonObj($(this).data("info"));
		
		_selVehicle = info;
		
		$('input[name="plateNum"]').val(info.plateNum);
		$('input[name="vehicleKey"]').val(info.vehicleKey);
		
		$("#car-choice").dialog('close');	
	});
	
	$("#pop_btnVeihcleSearch").on("click",$.debounce(500,1,function(){
		
		var param = $("#car-choice table").commonLazy("getParam");
		
		var fillter = $("#car-choice .btnTaskFillter.active").data('fillter');
		
		param['cleanerType'] = fillter;
		param['searchType'] = $("#pop_vehicleSearchType").val();
		param['searchText'] = $.trim($("#pop_vehicleSearchText").val());		
			
		$('#car-choice table').commonLazy("setParam",param).search();
		
		
	}));
	
	$("#pop_vehicleSearchText").on("keyup",function(e){
		if(e.keyCode == 13) $("#pop_btnVeihcleSearch").trigger("click");
	});
	
	$("#car-choice .btnTaskFillter").on("click",function(){
		$("#car-choice .btnTaskFillter").removeClass("active");
		$(this).addClass("active");
		$("#pop_btnVeihcleSearch").trigger("click");
	});
	///////////
	
	$('.btnUserPop').on("click",function(){
		
		var setting = {
			thead :
				[			
					,'부서'
					,'성명'
					,'비고'
					,'선택'
		   	    ]
	   		,bodyHtml : function(data){
	   			var strHtml = "";
	   			for(var i in data.result){
	   				var obj = data.result[i];
	   				
	   				strHtml += '<tr>';
	   				
	   				
					
	   				strHtml += '<td>';
	   				if(obj.group&&obj.group.parentGroupNm){
	   					strHtml += (obj.group&&obj.group.parentGroupNm)?(convertNullString(obj.group.parentGroupNm)):"";
						strHtml += (obj.group&&obj.group.groupNm)?("/"+convertNullString(obj.group.groupNm)):"";
	   				}else{
						strHtml += (obj.group&&obj.group.groupNm)?(convertNullString(obj.group.groupNm)):"";
	   				}
					strHtml += '</td>';
					
	   				strHtml += '<td>'+getProperty(obj,'name','')+'</td>';
	   				strHtml += '<td>'+getProperty(obj,'descript','')+'</td>';
	   				strHtml += '<td><button class="states-value state05 btn-toggle btn_selUser" data-info="'+jsonObjToBase64(obj)+'">선택하기</button></td>';
	   				strHtml += '</tr>';
	   			}
	   			return strHtml;
	   		}
	   		,limit : 10
	   		,url : "/api/1/account"
	   		,param : {}
	   		,http_post_option : {
	   			requestMethod : "GET"
	   			,header : {}
	   		}
	   		,initSearch : true //생성과 동시에 search		
	   		,loadingBodyViewer : true //로딩중!! 표시됨
	   		,debugMode : true
		};
		
		$("#car-user table").commonLazy(setting);
		
		$("#car-user").dialog({
            autoOpen: true,
            show: {
                duration: 500
            },
            width: '800',
			modal : true
        });	
		
		
	});
	
	
	
	$("body").on("click",".btn_selUser",function(){
		var info = base64ToJsonObj($(this).data("info"));
		
		_selUser = info;
		
		$('input[name="accountName"]').val(info.name);
		$('input[name="accountKey"]').val(info.accountKey);
		
		$("#car-user").dialog('close');	
	});
	
	$("#pop_btnUserSearch").on("click",$.debounce(500,1,function(){
		
		var param = $("#car-user table").commonLazy("getParam");
		
		param['searchType'] = $("#pop_userSearchType").val();
		param['searchText'] = $.trim($("#pop_userSearchText").val());		
			
		$('#car-user table').commonLazy("setParam",param).search();
		
		
	}));
	
	$("#pop_userSearchText").on("keyup",function(e){
		if(e.keyCode == 13) $("#pop_btnUserSearch").trigger("click");
	});
	
	
	
});

function loadTask(seq){
	$V4.http_post("/api/1/cleaner/origin/task/"+seq,{appendChild:true},{
		requestMethod : "GET"
		,success : function(rtv){
			setTask(rtv['result']);		
			
		}
		,error : function(e){
			console.log(e);
		}  
	});
}

function setTask(obj){
	
	_selVehicle = getProperty(obj,'vehicle');

	window.temp.latLonRads.center.lat = '' + getProperty(obj,'taskDepotLat',"0");
	window.temp.latLonRads.center.lon = '' + getProperty(obj,'taskDepotLon',"0");
	window.temp.latLonRads.center.radius = '' + getProperty(obj,'taskDepotRadius',"0");
	$('#fenceRadius').val(window.temp.latLonRads.center.radius !== "0" ? window.temp.latLonRads.center.radius : "250")

	window.temp.latLonRads.taskArea.lat = '' + getProperty(obj,'taskAreaLat',"0");
	window.temp.latLonRads.taskArea.lon = '' + getProperty(obj,'taskAreaLon',"0");
	window.temp.latLonRads.taskArea.radius = '' + getProperty(obj,'taskAreaRadius',"0");

	const taskAreas = [];
	const defaultCleanerArea = getProperty(obj, 'vehicle.defaultCleanerArea', []);

	if(!defaultCleanerArea.length) defaultCleanerArea.push({
		area : {lev3 : {areaNmKr : ''}}
	})

	for(const it of defaultCleanerArea) taskAreas.push(getProperty(it, 'area.lev3.areaNmKr'));

	$('#cleanerArea').val(taskAreas.join(', '))

	$("#taskName").val(getProperty(obj,'taskName'));
	$("input[name=plateNum]").val(getProperty(obj,'vehicle.plateNum'));
	$("input[name=vehicleKey]").val(getProperty(obj,'vehicle.vehicleKey'));
	$("input[name=accountName]").val(getProperty(obj,'account.name'));
	$("input[name=accountKey]").val(getProperty(obj,'account.accountKey'));
	// $("input[name=defaultUnloadCnt]").val(getProperty(obj,'defaultUnloadCnt',0));
	$("select[name=taskType]").val(getProperty(obj,'taskType'));

	if(getProperty(obj,'roop','0')=='1') {
		$("input[name=roop]").prop("checked",true);
		$(".trDate").hide();
	}
	if(getProperty(obj,'roopStart')) $("input[name=roopStart]").datepicker("setDate", new Date(getProperty(obj,'roopStart')) );
	if(getProperty(obj,'roopEnd')) $("input[name=roopEnd]").datepicker("setDate", new Date(getProperty(obj,'roopEnd')) );

	if(getProperty(obj,'daySun')) $("input[name=daySun]").prop("checked",true);
	if(getProperty(obj,'dayMon')) $("input[name=dayMon]").prop("checked",true);
	if(getProperty(obj,'dayTue')) $("input[name=dayTue]").prop("checked",true);
	if(getProperty(obj,'dayWed')) $("input[name=dayWed]").prop("checked",true);
	if(getProperty(obj,'dayThu')) $("input[name=dayThu]").prop("checked",true);
	if(getProperty(obj,'dayFri')) $("input[name=dayFri]").prop("checked",true);
	if(getProperty(obj,'daySat')) $("input[name=daySat]").prop("checked",true);
	
	var _i = 0;
	var _interval = setInterval(function(){
		var mapFrame = $("#frame").get(0).contentWindow;
		if(mapFrame && mapFrame.outerReset && mapFrame.isLoaded()) {
			clearInterval(_interval);
			mapFrame._o['initCenter'] = 1;
			mapFrame.outerReset();

			$(".sorting").html("");
			appendBox(null);

			for(var i in getProperty(obj,'arrTaskList',[])){
				var aTask = getProperty(obj,'arrTaskList',[])[i];

				if(aTask['idx']) aTask['idx']++;
				else aTask['idx'] = 1;

				addPoint(aTask);

				mapFrame.addNewPoint(aTask['lat'],aTask['lon'],aTask['radius'],aTask['addr'],true);
			}

			const taskDepotLat = '' + getProperty(obj,'taskDepotLat', "0")
			const taskDepotLon = '' + getProperty(obj,'taskDepotLon', "0")
			const taskDepotRadius = '' + getProperty(obj,'taskDepotRadius', "0")

			if(getProperty(obj,'taskDepotChk') === '1') {
				$('input[name=taskDepotChk]').attr('checked', true)
			}

			if(taskDepotLat !== "0" && taskDepotLon !== "0") {
				var returnCenterObj = {}

				$('.returnCenterLat').val(taskDepotLat);
				$('.returnCenterLon').val(taskDepotLon);
				$('.returnCenterRadius').val(taskDepotRadius);
				$('.returnCenterAddr').val(getProperty(obj,'taskDepotAddr'));

				window.temp.latLonRads.center.lat = taskDepotLat
				window.temp.latLonRads.center.lon = taskDepotLon
				window.temp.latLonRads.center.radius = taskDepotRadius

				returnCenterObj['lat'] = $('.returnCenterLat').val();
				returnCenterObj['lon'] = $('.returnCenterLon').val();
				returnCenterObj['radius'] = $('.returnCenterRadius').val();
				returnCenterObj['addr'] = $('.returnCenterAddr').val();


				addPoint(returnCenterObj, 'returnCenter')

				mapFrame.addNewPoint2(returnCenterObj['lat'], returnCenterObj['lon'], returnCenterObj['radius'], returnCenterObj['addr'],true);
			}
			mapFrame.setCenter();
			
		}
	},100);
	
	
}

var timepickerOpt = {
	    timeFormat: 'HH:mm',
	    zindex : 11,
	    interval: 1,
	    minTime: '3',
	    maxTime: '8:00pm',
	    defaultTime: '3',
	    startTime: '03:00',
	    dynamic: false,
	    dropdown: true,
	    scrollbar: true
	};
	
function addPoint(obj,type){
	$('.chk-border').removeClass('selected')
	if(type == 'returnCenter'){
		$('.clickableRC').addClass('selected');

		$('.returnCenterRadius').val(getProperty(obj,'radius'))
		$('.returnCenterLat').val(getProperty(obj,'lat'))
		$('.returnCenterLon').val(getProperty(obj,'lon'))
		$('.returnCenterAddr').val(getProperty(obj,'addr'))
	}else {
		var divCnt = $(".sorting").children("div").length;

		if (divCnt == 1) {
			if ($(".sorting").children("div").find("input.inp").val()) {
				appendBox(obj);
			} else {
				$(".sorting").children("div").find("input.inp").val(getProperty(obj, "addr"));
				$(".sorting").children("div").find("input[name=lat]").val(getProperty(obj, "lat"));
				$(".sorting").children("div").find("input[name=lon]").val(getProperty(obj, "lon"));
				$(".sorting").children("div").find("input[name=radius]").val(getProperty(obj, "radius"));
				$(".sorting").children("div").data("info", jsonObjToBase64(obj));
			}
		} else {
			appendBox(obj);
		}

		$('.addrs-sorting').scrollTop($('.sorting')[0].scrollHeight)
		$('.clickable').addClass('selected');
	}
}

function addRoute(obj){
	
	$("#route").val(JSON.stringify(obj));

}

function appendBox(obj){
	var divCnt = $(".sorting").children("div").length;
	var targetTime;
	if(obj && obj.hasOwnProperty("targetTs")) {
		targetTime = secToHHMM(obj.targetTs);
	}

	var strHtml = '<div class="box">';
		strHtml += '<div class="num">'+(divCnt+1)+'</div>' ;
		strHtml += '<div class="addr"><input type="text" class="inp" value="'+getProperty(obj,"addr","")+'" placeholder="지도에서 선택해주세요." readonly name="addr"></div>';
		strHtml += '<div class="time"><input type="text" class="time" placeholder="도착시간" name="targetTime"><input type="hidden" name="lat" value="'+getProperty(obj,"lat","")+'"><input type="hidden" name="lon" value="'+getProperty(obj,"lon","")+'"><input type="hidden" name="radius" value="'+getProperty(obj,"radius","")+'"></div>';
		strHtml += '<button class="btn-del"></button>';
		strHtml += '</div>';

	$(".sorting").append(strHtml);

	if(obj) $(".sorting").children("div").last().data("info",jsonObjToBase64(obj));

	$(".sorting").children("div").last().find('input.time').timepicker(timepickerOpt);
	targetTime?$(".sorting").children("div").last().find('input.time').val(targetTime):'';

}

function valid(){
	var rtv = false;

	var strHtmlAlertImg = '<i><img src="${pageContext.request.contextPath}/common/new/img/common/ico_alert.png"></i>'; //스케줄과 차량의 성상이 다릅니다.
	var strHtml = '';
	var taskName = $.trim($("#taskName").val()); //스케쥴 명을 입력해주세요.
	if(!taskName) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '스케쥴 명을 입력해주세요.';
	}
	var vehicleKey = $.trim($("input[name=vehicleKey]").val()); //차량을 선택해주세요.
	if(!vehicleKey) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '차량을 선택해주세요.';
	}
	var accountKey = $.trim($("input[name=accountKey]").val()); //운전자를 선택해주세요.
	if(!accountKey) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '운전자를 선택해주세요.';
	}
	// var defaultUnloadCnt = parseInt($("#defaultUnloadCnt").val()); //일일 운행부담횟수를 입력해주세요.
	// if(!defaultUnloadCnt) {
	// 	if(strHtml) strHtml += '</br>';
	// 	strHtml += strHtmlAlertImg + '일일 운행부담횟수를 입력해주세요.';
	// }
	var daySun = $("input[name=daySun]").is(":checked")?1:0;
	var dayMon = $("input[name=dayMon]").is(":checked")?1:0;
	var dayTue = $("input[name=dayTue]").is(":checked")?1:0;
	var dayWed = $("input[name=dayWed]").is(":checked")?1:0;
	var dayThu = $("input[name=dayThu]").is(":checked")?1:0;
	var dayFri = $("input[name=dayFri]").is(":checked")?1:0;
	var daySat = $("input[name=daySat]").is(":checked")?1:0;
	//작업 요일을 선택해주세요.
	if(!daySun && !dayMon && !dayTue && !dayWed && !dayThu && !dayFri && !daySat) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '작업 요일을 선택해주세요.';		
	}
	
	var isRoop = $("input[name=roop]").is(":checked");
	if(!isRoop){
		if ( !($.trim($("input[name=roopStart]").val()) && $.trim($("input[name=roopEnd]").val())) ){
			if(strHtml) strHtml += '</br>';
			strHtml += strHtmlAlertImg + '요일만 설정이 아닐경우 시작시간 종료시간을 입력해주세요.';
		}
	}


	//요일만설정일때 날짜 필수

	var divCnt = $(".sorting").children("div").length;//작업지를 선택해주세요.
	if(divCnt == 1 && !$(".sorting").children("div").find("input.inp").val()) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '작업지를 선택해주세요.';
	}

	if(divCnt < 3 || divCnt > 200) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '작업지는 3 ~ 200개 여야 합니다.';
	}

	const taskDepotAddr = $('input[name="taskDepotAddr"]').val() // 자원순환센터가 지정되지 않았습니다.
	if(!taskDepotAddr) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '자원순환센터가 지정되지 않았습니다.';
	}

	if(strHtml){
		$("#modal3 .modal-txt").html(strHtml);
		$("#modal3").modal();
		return false;
	}

	return true;

}

function warning(){
	var rtv = false;
	var strHtmlAlertImg = '<i><img src="${pageContext.request.contextPath}/common/new/img/common/ico_alert.png"></i>';
	var strHtml = '';


	var taskType = $("select[name=taskType]").val(); //스케줄과 차량의 성상이 다릅니다.
	var vehicleCleanerType = getProperty(_selVehicle,'cleanerType','-1');

	if(taskType != vehicleCleanerType) {
		if(strHtml) strHtml += '</br>';
		strHtml += strHtmlAlertImg + '스케줄과 차량의 성상이 다릅니다.';
	}

	//스케줄과 차량의 성상이 다릅니다.
	var prevSec = 0;
	$(".sorting").children("div").each(function(i){
		var time = $(this).find("input.time").val();
		var sec = HHMMtoSec(time);
		if(prevSec >= sec){
			if(strHtml) strHtml += '</br>';
			strHtml += strHtmlAlertImg + '작업지 도착시간이 정렬되어있지 않습니다. ( '+ (i+1) +'번 작업지)';
		}
		
		prevSec = sec;
		
	});
	
	
	if(strHtml){
		$("#modal2 .modal-txt").html(strHtml);
		$("#modal2").modal();
		return false;
	}
	
	return true;
	
}

function HHMMtoSec(hhmm){
	var hh = parseInt(hhmm.split(':')[0]);
	var mm = parseInt(hhmm.split(':')[1]);
	
	return (hh*3600) + (mm * 60);
}
function secToHHMM(sec){
	
	var h = parseInt(sec/3600);
	var m = parseInt(parseInt(sec%3600)/60);
	
	return (LPAD(h+"",'0',2)) +':'+ (LPAD(m+"",'0',2));
}
</script>
    
    
