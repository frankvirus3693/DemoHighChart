Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-budget-spend-for-project', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายงบประมาณรายสำนัก (โครงการ)',
        align: 'center'
    },
    xAxis: {
        categories: ['สำนักกรรมาธิการ 1','สำนักกรรมาธิการ 2','สำนักกรรมาธิการ 3'],
        title: {
            text: 'สำนัก',
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวนเงิน(ล้านบาท)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' ล้านบาท'
    },
    plotOptions: {
        bar: {
            borderRadius: '10%',
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y.toLocaleString() + ' ล้านบาท';
                }

            },
            groupPadding: 0.1
        }
    },
    legend: {
      enabled: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        color: '#590F23',
        data: [5400,4600,6000],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [4500,3200,3800],
    },{
        name: 'คงเหลือ',
        color: '#315259',
        data: [900,1400,2200],
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 768 // สำหรับหน้าจอขนาด <= 768px
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '18px' // ฟอนต์หัวเรื่องขนาดเล็ก
                    }
                },
                chart: {
                    height: 400 // ลดความสูงกราฟ
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '14px' // ลดขนาดฟอนต์ของป้ายชื่อแกน X
                        }
                    },
                    title: {
                        style: {
                            fontSize: '14px' // ลดขนาดฟอนต์ของหัวข้อแกน X
                        }
                    }
                },
                yAxis: {
                    title: {
                        style: {
                            fontSize: '14px' // ลดขนาดฟอนต์ของหัวข้อแกน Y
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '14px' // ลดขนาดฟอนต์ตัวเลขแกน Y
                        }
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '14px' // ลดขนาดฟอนต์ของ Legend
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            style: {
                                fontSize: '12px' // ลดขนาดฟอนต์ของ Data Labels
                            }
                        }
                    }
                }
            }
        }, {
            condition: {
                maxWidth: 375 // สำหรับหน้าจอขนาด <= 320px
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '10px' // ฟอนต์หัวเรื่องขนาดเล็ก
                    }
                },
                chart: {
                    height: 300, // ลดความสูงกราฟเพิ่มเติม
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '10px' // ลดขนาดฟอนต์ของป้ายชื่อแกน X
                        }
                    },
                    title: {
                        style: {
                            fontSize: '10px' // ลดขนาดฟอนต์ของหัวข้อแกน X
                        }
                    }
                },
                yAxis: {
                    title: {
                        style: {
                            fontSize: '10px' // ลดขนาดฟอนต์ของหัวข้อแกน Y
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '10px' // ลดขนาดฟอนต์ตัวเลขแกน Y
                        }
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '10px' // ลดขนาดฟอนต์ของ Legend
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            style: {
                                fontSize: '8px' // ลดขนาดฟอนต์ของ Data Labels
                            }
                        }
                    }
                }
            }
        }]
    }
});
