Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
            fontSize: '24px'
        }
    }
});

Highcharts.chart('area-compare-month-spending', {
    chart: {
        type: 'areaspline' // เปลี่ยนจาก area เป็น areaspline
    },
    title: {
        text: 'แผนภูมิแสดงการเปรียบเทียบ ประมาณการใช้จ่ายรายเดือน'
    },
    xAxis: {
        categories: [
            'ม.ค', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',
        ]
    },
    yAxis: {
        title: {
            text: 'จำนวนเงิน (ล้านบาท)'
        },
        labels: {
            formatter: function () {
                return this.value + ' ล้านบาท';
            }
        }
    },
    tooltip: {
        valueSuffix: ' ล้านบาท'
    },
    plotOptions: {
        areaspline: { // ตั้งค่าให้เป็น areaspline
            fillOpacity: 0.5, // กำหนดความโปร่งใสของพื้นที่
            linecap: 'round', // เพิ่มความโค้งมนของเส้น
            dataLabels: {
                enabled: true,
                formatter: function () {
                    const seriesData = this.series.data.map(point => point.y);
                    const max = Math.max(...seriesData);
                    const min = Math.min(...seriesData);

                    // แสดงผลเฉพาะจุดที่เป็น min หรือ max
                    if (this.y === max) {
                        return `สูงสุด: ${this.y} ล้านบาท`;
                    } else if (this.y === min) {
                        return `ต่ำสุด: ${this.y} ล้านบาท`;
                    }
                    return null;
                }
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'ปี 2567',
        color: '#8A0C27', // สีเส้นกราฟ
        data: [
            80, 70, 90, 100, 50, 125, 90, 155, 130, 75, 65, 120
        ]
    }, {
        name: 'ปี 2568',
        color: '#2F3F59', // สีเส้นกราฟ
        data: [
            60, 80, 130, 70, 90, 100, 60, 180, 200, 130, 170, 65
        ]
    }],
    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 768 // สำหรับหน้าจอที่มีความกว้างไม่เกิน 768px
                },
                chartOptions: {
                    title: {
                        style: {
                            fontSize: '18px' // ฟอนต์หัวเรื่องขนาดเล็ก
                        }
                    },
                    xAxis: {
                        labels: {
                            style: {
                                fontSize: '14px' // ฟอนต์ป้ายชื่อแกน X
                            }
                        }
                    },
                    yAxis: {
                        labels: {
                            style: {
                                fontSize: '14px' // ฟอนต์ป้ายชื่อแกน Y
                            }
                        },
                        title: {
                            style: {
                                fontSize: '16px' // ฟอนต์ชื่อแกน Y
                            }
                        }
                    },
                    plotOptions: {
                        areaspline: { // เปลี่ยนจาก area เป็น areaspline
                            lineWidth: 1, // ลดขนาดของเส้นเมื่อหน้าจอเล็ก
                            dataLabels: {
                                style: {
                                    fontSize: '12px' // ฟอนต์ป้ายข้อมูลบนกราฟ
                                }
                            }
                        }
                    },
                    legend: {
                        itemStyle: {
                            fontSize: '14px' // ฟอนต์ของ legend
                        }
                    }
                }
            },
            {
                condition: {
                    maxWidth: 320 // สำหรับหน้าจอที่มีความกว้างไม่เกิน 320px
                },
                chartOptions: {
                    title: {
                        style: {
                            fontSize: '10px' // ฟอนต์หัวเรื่องขนาดเล็กมาก
                        }
                    },
                    xAxis: {
                        labels: {
                            style: {
                                fontSize: '10px' // ฟอนต์ป้ายชื่อแกน X เล็กสุด
                            }
                        }
                    },
                    yAxis: {
                        labels: {
                            style: {
                                fontSize: '10px' // ฟอนต์ป้ายชื่อแกน Y เล็กสุด
                            }
                        },
                        title: {
                            style: {
                                fontSize: '12px' // ฟอนต์ชื่อแกน Y เล็กสุด
                            }
                        }
                    },
                    plotOptions: {
                        areaspline: { // เปลี่ยนจาก area เป็น areaspline
                            lineWidth: 0.5, // ลดขนาดของเส้นเมื่อหน้าจอเล็ก
                            dataLabels: {
                                style: {
                                    fontSize: '8px' // ฟอนต์ป้ายข้อมูลบนกราฟเล็กสุด
                                }
                            }
                        }
                    },
                    legend: {
                        itemStyle: {
                            fontSize: '10px' // ฟอนต์ legend เล็กสุด
                        }
                    }
                }
            }
        ]
    }
});
