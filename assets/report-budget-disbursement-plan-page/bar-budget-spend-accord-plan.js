Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-budget-spend-accord-plan', {
    chart: {
        type: 'bar',
    },
    title: {
        text: '',
        align: 'center'
    },
    xAxis: {
        categories: [
            'แผนงานยุทธศาสตร์เพื่อสนับสนุนด้านการปรับสมดุล<br>และพัฒนาระบบการบริหารจัดการภาครัฐ',
            'แผนงานพื้นฐานด้านการปรับสมดุล<br>และพัฒนาระบบบริหารจัดการภาครัฐ',
            'แผนงานบุคลากรภาครัฐ',
            'แผนงานยุทธศาสตร์พัฒนาและเสริมสร้างการเมือง<br>ในระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุข',
        ],
        title: {
            text: 'ยุทธศาสตร์/แผนงาน'
        }
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
                    return this.y.toLocaleString() + ' ล้านบาท';
                }
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'horizontal',
        enabled: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        color: '#590F23',
        data: [4000, 3000, 3500, 2500],
    }, {
        name: 'เบิกจ่ายแผนงานยุทธศาสตร์เพื่อสนับสนุนด้านการปรับสมดุลและพัฒนาระบบการบริหารจัดการภาครัฐ',
        color: '#881227',
        data: [2700, 1500, 2200, 1000],
    },{
        name: 'เบิกจ่ายแผนงานพื้นฐานด้านการปรับสมดุลและพัฒนาระบบการบริหารจัดการภาครัฐ',
        color: '#313F59',
        data: [2300, 1500, 1300, 1500],
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
                    height: 400 // ลดความสูงกราฟ
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
                    height: 300, // ลดความสูงกราฟเพิ่มเติม
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
