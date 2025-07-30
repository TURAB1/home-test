            function createChart(chartId, color) {
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
                    let circle = am5.Circle.new(root, {
                        radius: 4,
                        stroke: root.interfaceColors.get("background"),
                        strokeWidth: 2,
                        fill: am5.color(color)
                    });

                    // circle.events.on("click", function (ev) {
                    //     const dataItem = ev.target.dataItem;
                    //     if (dataItem) {
                    //         const xValue = dataItem.get("valueX");
                    //         const yValue = dataItem.get("valueY");
                    //         alert("X: " + xValue + "\nY: " + yValue);
                    //     }
                    // });
                    circle.events.on("click", function (ev) {
                        const dataItem = ev.target.dataItem;
                        if (dataItem) {
                            const xValue = dataItem.get("valueX");
                            const yValue = dataItem.get("valueY");

                            // Loop through all bullets in the series
                            series.bullets.each(function (bullet) {
                                const bulletDataItem = bullet.dataItem;
                                if (bulletDataItem && bulletDataItem.get("valueX") === xValue) {
                                    // Do something for all bullets with the same x value
                                    // Example: show alert for each (or highlight, etc.)
                                    // You can also access y value: bulletDataItem.get("valueY")
                                    // For demonstration, let's log all matching points:
                                    console.log("Matching X: " + xValue + ", Y: " + bulletDataItem.get("valueY"));
                                }
                            });

                            // Optionally, show alert for all at once
                            let yValues = [];
                            series.bullets.each(function (bullet) {
                                const bulletDataItem = bullet.dataItem;
                                if (bulletDataItem && bulletDataItem.get("valueX") === xValue) {
                                    yValues.push(bulletDataItem.get("valueY"));
                                }
                            });
                            alert("X: " + xValue + "\nY values: " + yValues.join(", "));
                        }
                    });
                    return am5.Bullet.new(root, {
                        locationY: 0,
                        sprite: circle
                    });
                });

                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                // 데이터 생성
                let date = new Date();
                date.setHours(0, 0, 0, 0);
                const data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({
                        date: date.getTime(),
                        value: Math.floor(Math.random() * 100)
                    });
                    date.setDate(date.getDate() + 1);
                }

                series.data.setAll(data);
                series.appear(1000);
                chart.appear(1000, 100);
            }
