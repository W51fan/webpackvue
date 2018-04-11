module.exports = [
    {
        name: '地图',
        id: 'basic',
        icon: 'th-large',
        sub: [
                {
                    name: '高德',
                    componentName: '/detail/1-1'
                }, 
                {
                    name: '百度',
                    componentName: '/detail/1-2'
                },
                {
                    name: '谷歌',
                    componentName: '/detail/1-3'
                },
                {
                    name: '必应',
                    componentName: '/detail/1-4'
                }
            ]
        }, 
    {
        name: 'Echarts',
        id: 'form',
        icon: 'columns',
        sub: [
                {
                    name: '雷达图',
                    componentName: '/detail/2-1'
                }, 
                {
                    name: '柱形图',
                    componentName: '/detail/2-2'
                },
                {
                    name: '饼形图',
                    componentName: '/detail/2-3'
                },
                {
                    name: '散点图',
                    componentName: '/detail/2-4'
                }
        ]
    }
]
