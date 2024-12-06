
Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-month-spend-year', {
    chart: {
        type: 'bar',
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายภาพรวมรายเดือน ปีงบประมาณ 2568',
        align: 'center'
    },
    xAxis: {
        categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        title: {
            text: 'เดือน'
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
                enabled: true,
                formatter: function () {
                    return this.y + ' ล้านบาท'; // เพิ่มคำว่า 'ล้านบาท' หลังค่าที่แสดง
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
        name: 'สำนักการต่างประเทศ',
        color: '#26151B',
        data: [150, 180, 130, 140, 170, 190, 160, 180, 170, 150, 140, 130],
    }, {
        name: 'สำนักกรรมาธิการ 1',
        color: '#7C696D',
        data: [110, 70, 140, 120, 150, 160, 180, 170, 150, 140, 130, 120],
    }, {
        name: 'สำนักกรรมาธิการ 2',
        color: '#3E577F',
        data: [200, 150, 160, 180, 170, 150, 140, 130, 120, 110, 100, 90],
    }, {
        name: 'สำนักกรรมาธิการ 3',
        color: '#2F5948',
        data: [100, 80, 95, 120, 200, 190, 180, 170, 160, 150, 140, 130],
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 768 // สำหรับหน้าจอขนาด <= 768px
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '14px' // ฟอนต์หัวเรื่องขนาดเล็ก
                    }
                },
                chart: {
                    height: 800 // ลดความสูงกราฟ
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '12px', // ลดขนาดฟอนต์ของป้ายชื่อแกน X
                            whiteSpace: 'normal', // ทำให้ข้อความสามารถขึ้นบรรทัดใหม่ได้
                        },
                        formatter: function () {
                            // สามารถใช้คำสั่งนี้เพื่อลดข้อความลงในขนาดหน้าจอเล็ก
                            return this.value.length > 20 ? this.value.substr(0, 20) + '...' : this.value;
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
                maxWidth: 375 // สำหรับหน้าจอขนาด <= 375px
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '8px' // ฟอนต์หัวเรื่องขนาดเล็ก
                    }
                },
                chart: {
                    height: 600, // ลดความสูงกราฟเพิ่มเติม
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '8px', // ลดขนาดฟอนต์ของป้ายชื่อแกน X
                            whiteSpace: 'normal', // ทำให้ข้อความสามารถขึ้นบรรทัดใหม่ได้
                        },
                        formatter: function () {
                            return this.value.length > 10 ? this.value.substr(0, 10) + '...' : this.value;
                        }
                    },
                    title: {
                        style: {
                            fontSize: '8px' // ลดขนาดฟอนต์ของหัวข้อแกน X
                        }
                    }
                },
                yAxis: {
                    title: {
                        style: {
                            fontSize: '8px' // ลดขนาดฟอนต์ของหัวข้อแกน Y
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '8px' // ลดขนาดฟอนต์ตัวเลขแกน Y
                        }
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '8px' // ลดขนาดฟอนต์ของ Legend
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
