import Mock from 'mockjs'

let data = [
    {
        "label": "厨房顶灯",
        "value": "1",
        "children": [{
            "childrenName": "照明1",
            "childrenS": [{
                "childrenSName": "照明1-1"
            }, {
                "childrenSName": "照明1-2"
            }]
        }, {
            "childrenName": "照明2",
            "childrenS": [{
                "childrenSName": "照明2-1"
            }, {
                "childrenSName": "照明2-2"
            }]
        }, {
            "childrenName": "照明3",
            "childrenS": [{
                "childrenSName": "照明3-1"
            }, {
                "childrenSName": "照明3-2"
            }]
        }, {
            "childrenName": "照明4",
            "childrenS": [{
                "childrenSName": "照明4-1"
            }, {
                "childrenSName": "照明4-2"
            }]
        }]
    }, {
        "label": "家居",
        "value": "2",
    }, {
        "label": "出具",
        "value": "3",
    }, {
        "label": "高达上",
        "value": "4",
    }
]
Mock.mock('/data', () => {
    return {
        code: 0,
        data
    }
})