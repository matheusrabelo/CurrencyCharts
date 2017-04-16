/*
    All rights reserved to creator of:
    http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/dynamic-master-detail/
*/
export default function(history) {
    const data = history.data;
    if (data && data.length > 0) {
        $('#chart').val('');

        let $chart = $('#chart')
            .css('position', 'relative');

        $('<div id="detail-container">')
            .appendTo($chart);

        $('<div id="master-container">')
            .css({
                position: 'absolute',
                top: 300,
                height: 100,
                width: '100%',
            })
                .appendTo($chart);

        createMaster(history);
    }
};

function createDetail(masterChart, history) {
    const { data, source } = history;
    let detailData = [];
    let detailStart = data[0][0];

    $.each(masterChart.series[0].data, function() {
        // eslint-disable-next-line
        if (this.x >= detailStart) {
            // eslint-disable-next-line
            detailData.push(this.y);
        }
    });

    Highcharts.chart('detail-container', {
        chart: {
            marginBottom: 120,
            reflow: false,
            marginLeft: 50,
            marginRight: 20,
            style: {
                position: 'absolute',
            },
        },
        credits: {
            enabled: false,
        },
        title: {
            text: `USD x ${source}`,
        },
        subtitle: {
            text: '',
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: null,
            },
            maxZoom: 0.1,
        },
        tooltip: {
            formatter: function() {
                let point = this.points[0];
                return '<b>' + point.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%A %B %e %Y', this.x) +
                    ':<br/>' + '1 USD = ' +
                    Highcharts.numberFormat(point.y, 2) + ' ' + source;
            },
            shared: true,
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: true,
                            radius: 3,
                        },
                    },
                },
            },
        },
        series: [{
            name: `USD to ${source}`,
            pointStart: detailStart,
            pointInterval: 24 * 3600 * 1000,
            data: detailData,
        }],

        exporting: {
            enabled: false,
        },

    });
};

function createMaster(history) {
    const { data, source } = history;
    Highcharts.chart('master-container', {
        chart: {
            reflow: false,
            borderWidth: 0,
            backgroundColor: null,
            marginLeft: 50,
            marginRight: 20,
            zoomType: 'x',
            events: {
                selection: function(event) {
                    let extremesObject = event.xAxis[0];
                    let min = extremesObject.min;
                    let max = extremesObject.max;
                    let detailData = [];
                    let xAxis = this.xAxis[0];

                    $.each(this.series[0].data, function() {
                        // eslint-disable-next-line
                        if (this.x > min && this.x < max) {
                            // eslint-disable-next-line
                            detailData.push([this.x, this.y]);
                        }
                    });

                    xAxis.removePlotBand('mask-before');
                    xAxis.addPlotBand({
                        id: 'mask-before',
                        from: data[0][0],
                        to: min,
                        color: 'rgba(0, 0, 0, 0.2)',
                    });

                    xAxis.removePlotBand('mask-after');
                    xAxis.addPlotBand({
                        id: 'mask-after',
                        from: max,
                        to: data[data.length - 1][0],
                        color: 'rgba(0, 0, 0, 0.2)',
                    });


                    detailChart.series[0].setData(detailData);

                    return false;
                },
            },
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'datetime',
            showLastTickLabel: true,
            maxZoom: 14 * 24 * 3600000,
            plotBands: [{
                id: 'mask-before',
                from: data[0][0],
                to: data[data.length - 1][0],
                color: 'rgba(0, 0, 0, 0.2)',
            }],
            title: {
                text: null,
            },
        },
        yAxis: {
            gridLineWidth: 0,
            labels: {
                enabled: false,
            },
            title: {
                text: null,
            },
            min: 0.6,
            showFirstLabel: false,
        },
        tooltip: {
            formatter: function() {
                return false;
            },
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            series: {
                fillColor: {
                    linearGradient: [0, 0, 0, 70],
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
                lineWidth: 1,
                marker: {
                    enabled: false,
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1,
                    },
                },
                enableMouseTracking: false,
            },
        },

        series: [{
            type: 'area',
            name: `USD to ${source}`,
            pointInterval: 24 * 3600 * 1000,
            pointStart: data[0][0],
            data: data,
        }],

        exporting: {
            enabled: false,
        },

    }, function(masterChart) {
        createDetail(masterChart, history);
    });
};
