Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('column-procurement-status', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'แผนภูมิแสดงสถานะการจัดจ้าง',
        align: 'center'
    },
    xAxis: {
        categories: ['ยกเลิกสัญญา', 'ตรวจรับแล้ว', 'อยู่ระหว่างทำสัญญา/PO', 'อยู่ระหว่างการขอซื้อการจ้าง'],
        crosshair: true,
        title: {
            text: 'สถานะครุภัณฑ์'
        },
        accessibility: {
            description: 'Categories'
        }
    },
    legend: {
      enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'รายการ'
        }
    },
    tooltip: {
        valueSuffix: ' รายการ'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y + ' รายการ'; // เพิ่มคำว่า 'รายการ' หลังค่าที่แสดง
                }
            }
        }
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        data: [{
            y: 10,
            color: '#881227'  // สีของบาร์แรก
        }, {
            y: 27,
            color: '#315259'  // สีของบาร์ที่สอง
        }, {
            y: 15,
            color: '#581123'  // สีของบาร์ที่สาม
        }, {
            y: 30,
            color: '#888C8B'  // สีของบาร์ที่สี่
        }]
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
