Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('area-project-expenses-year', {
    chart: {
        type: 'area' // เปลี่ยนเป็น area
    },
    title: {
        text: 'แผนภูมิแสดงการใช้จ่ายภาพรวมรายเดือน ปีงบประมาณ 2568'
    },
    xAxis: {
        categories: [
            'ม.ค', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค' ,'ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.',
        ]
    },
    yAxis: {
        title: {
            text: 'จำนวนเงิน (ล้านบาท)'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        }
    },
    plotOptions: {
        area: { // ตั้งค่า area chart
            fillOpacity: 0.5, // กำหนดความโปร่งใสของพื้นที่
            lineWidth: 2, // กำหนดขนาดเส้น
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return (this.y) + ' ล้านบาท';
                }
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'ค่าใช้จ่ายภาพรวมรายเดือน',
        color: '#2F5948', // สีเส้นกราฟ
        data: [
            6.2,3.4,5.6,-3.2,4.1,2.7,4.8,6.8,1.9,-0.6,3,4
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
                        area: {
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
                        area: {
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
