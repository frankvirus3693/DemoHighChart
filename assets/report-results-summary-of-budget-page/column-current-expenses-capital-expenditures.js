Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
            fontSize: '24px'
        },
        // ทำให้แผนภูมิยืดหยุ่นตามขนาดหน้าจอ
        reflow: true
    }
});

Highcharts.chart('column-current-expenses-capital-expenditures', {
    chart: {
        type: 'column',
        // รองรับการแสดงผลบนมือถือและอุปกรณ์ที่มีหน้าจอขนาดเล็ก
        height: 'auto'
    },
    title: {
        text: 'แผนภูมิแสดงมิติรายจ่ายประจำ - รายจ่ายลงทุน',
        style: {
            fontSize: '24px',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['ภาพรวม', 'รายจ่ายประจำ', 'รายจ่ายลงทุน'],
        crosshair: true,
        accessibility: {
            description: 'Categories'
        }
    },
    yAxis: {
        min: 0,
        max: 1,
        title: {
            text: 'อัตราร้อยละ'
        },
        labels: {
            formatter: function() {
                return this.value * 100; // แปลงค่าบนแกน Y เป็นร้อยละ
            }
        }
    },
    tooltip: {
        valueSuffix: '%',
        formatter: function () {
            return `<b>${this.series.name}</b>: ร้อยละ ${this.y * 100}`; // แปลงค่าที่แสดงใน tooltip เป็นร้อยละ
        }
    },
    plotOptions: {
        column: {  // แก้ไขจาก bar เป็น column
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#000' // สีข้อความ
                },
                formatter: function() {
                    return `ร้อยละ ${this.y * 100}`; // เพิ่มคำว่า ร้อยละ และแปลงค่าเป็นร้อยละ
                }
            }
        }
    },
    series: [
        {
            name: 'เบิกจ่าย',
            color: '#8A0C27',
            data: [0.4, 0.25, 0.6]
        },
        {
            name: 'ใช้จ่าย',
            color: '#888C8B',
            data: [0.6, 0.75, 0.4]
        },
    ],
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
