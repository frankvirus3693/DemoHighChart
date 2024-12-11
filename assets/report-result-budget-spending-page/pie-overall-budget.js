Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '18px'
        }
    }
});

Highcharts.chart('pie-overall-budget', {
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
                            '<strong>งบประมาณ</strong><br/><span style="font-size: 1em;">ภาพรวม</span></br>100,000 </br>ล้านบาท'
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

                // ปรับขนาดฟอนต์ตามเส้นผ่านศูนย์กลางของกราฟ
                customLabel.css({
                    fontSize: `${series.center[2] / 10}px`
                });
            }
        },
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: 'แผนภูมิแสดงงบประมาณภาพรวม',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
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
                    fontSize: '1em'
                }
            }],
            showInLegend: true
        },
        pie: {
            dataLabels: {
                enabled: true,
                distance: 20, // Adjust distance as needed
                format: '{point.name}: {point.percentage:.0f}%', // Display name and percentage
                style: {
                    fontSize: '1em' // Adjust font size as needed
                }
            },
            size: '80%'
        }
    },
    series: [{
        name: 'เปอร์เซ็นต์',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'เบิกจ่าย',
            color: '#8A0C27', // สีแดง
            y: 60000
        }, {
            name: 'คงเหลือ',
            color: '#2F5259', // สีฟ้า
            y: 40000
        }]
    }],
    legend: {
    labelFormatter: function() {
        const total = this.series.data.reduce((sum, point) => sum + point.y, 0);
        return `${this.name}: ${this.percentage.toFixed(0)}% (รวม: ${total} ล้านบาท)`; // Display name, percentage, and total
    },
    itemStyle: {
        fontSize: '18px' // Adjust font size as needed
    }
},
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

