Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '18px'
        }
    }
});

Highcharts.chart('pie-overall-budget-2568', {
    chart: {
        type: 'pie',
        custom: {},
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            '<strong>งบประมาณ</strong><br/><strong style="font-size: 1em;">ภาพรวมปี 2568</strong></br>13,000</br>ล้านบาท'
                        )
                            .css({
                                color: '#000',
                                textAnchor: 'middle',
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                    (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: 'แผนภูมิแสดงงบประมาณภาพรวมปี 2567'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    legend: {
        itemStyle: {
            fontSize: '18px',
            fontWeight: 'normal',
        },
        labelFormatter: function() {
        return this.name + ' (' + this.percentage.toFixed(1) + '%) : ' + Highcharts.numberFormat(this.y, 0, ',', ',') + ' ล้านบาท';
    }
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 8,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}',
                style: {
                    fontSize: '1em'  // เพิ่มขนาดฟอนต์สำหรับชื่อ
                }
            }, {
                enabled: true,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: true
        }
    },
    series: [{
        name: 'เปอเซ็น',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'เบิกจ่าย',
            color: '#881227', // สีแดง
            y: 1300
        }, {
            name: 'คงเหลือ',
            color: '#315259', // สีเหลือ
            y: 11700
        },]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 768 // For iPad and similar devices
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '16px' // Smaller font size for title
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: [{
                            style: {
                                fontSize: '0.9em' // Adjusted font size for data labels
                            }
                        }, {
                            style: {
                                fontSize: '0.9em' // Adjusted font size for percentage labels
                            }
                        }]
                    },
                    pie: {
                        dataLabels: {
                            style: {
                                fontSize: '0.9em' // Adjusted font size for pie data labels
                            },
                            distance: 15 // Adjusted distance for iPad
                        },
                        size: '70%' // Adjusted size for iPad
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '14px' // Smaller font size for legend
                    }
                }
            }
        }, {
            condition: {
                maxWidth: 375 // For mobile devices
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '14px' // Even smaller font size for title
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: [{
                            style: {
                                fontSize: '0.8em' // Adjusted font size for data labels
                            }
                        }, {
                            style: {
                                fontSize: '0.8em' // Adjusted font size for percentage labels
                            }
                        }]
                    },
                    pie: {
                        dataLabels: {
                            style: {
                                fontSize: '0.8em' // Adjusted font size for mobile
                            },
                            distance: -15,
                            format: '{point.percentage:.0f}%',
                        },
                        size: '80%' // Adjusted size for mobile
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '12px' // Even smaller font size for legend
                    }
                }
            }
        }]
      }
});
