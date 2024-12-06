Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('column-compare-disbursement', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'แผนภูมิเปรียบเทียบงบ',
        align: 'center'
    },
    xAxis: {
        categories: ['ปี 2566', 'ปี 2567', 'ปี 2568'],
        crosshair: true,
        title: {
        },
        accessibility: {
            description: 'Categories'
        }
    },
    legend: {
      enabled: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'ล้านบาท'
        }
    },
    tooltip: {
        valueSuffix: ' ล้านบาท'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return Highcharts.numberFormat(this.y, 0, ',', ',') + ' ล้านบาท'
                },
                style: {
                    fontSize: '24px'
                }
            }
        }
    },
    series: [{
        name: 'เบิกจ่าย',
        color: '#881227', // สีของบาร์แรก
        data: [20000,10000,5000],
        color: '#881227', // สีของบาร์แรก
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
                    column: {  // แก้ไขจาก bar เป็น column
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
                    column: {  // แก้ไขจาก bar เป็น column
                        dataLabels: {
                            style: {
                                fontSize: '10px' // ลดขนาดฟอนต์ของ Data Labels
                            }
                        }
                    }
                }
            }
        }]
    }
});
