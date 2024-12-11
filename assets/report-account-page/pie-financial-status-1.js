Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '18px'
        }
    }
});

Highcharts.chart('pie-financial-status-1', {
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
                            '<strong>รวมสินทรัพย์</strong></br>100,000</br>ล้านบาท'
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
                    fontSize: `${series.center[2] / 10}px`
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
        text: 'แผนภูมิแสดงฐานะทางการเงิน (1)'
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
                    fontSize: '1em'
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
            name: 'สินทรัพย์หมุนเวียน',
            color: '#313F59', 
            y: 60000
        }, {
            name: 'สินทรัพย์ไม่หมุนเวียน',
            color: '#590F23', 
            y: 40000
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
