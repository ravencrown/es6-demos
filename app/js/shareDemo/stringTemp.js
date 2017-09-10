{

    const array = [
        { first: 'Jane', last: 'Bond' },
        { first: 'Lars', last: 'Croft' },
    ];

    // forEach
    const forEachTmpl = (data) => `
        ${data.map(item => `
            <table class="table-border">
                <tr>
                    <td>${item.first}</td>
                    <td>${item.last}</td>
                </tr>
            </table>
        `).join('')}
    `;

    // $(".demo").append(forEachTmpl(array));

    const flag = true;

    const ifTmpl = data => `
        ${data && data == true && `
            <div style='font-size:20px;'>GOOD<div>
        `}
    `;

    $(".demo").append(ifTmpl(flag));

    const array2 = [
        { key: 'tmpl', value: 'foo' },
        { key: 'tmpl', value: 'bar' },
        { key: 'tmpl22', value: 'baz' }
    ];

    const sanmuTmpl = data => `
        ${data.map(item => `
            <table class="table-border">
                ${(item.key && item.key == 'tmpl') ? `
                    <tr>
                        <td>${item.key}</td>
                        <td>${item.value}</td>
                    </tr>
                ` : `` }
            </table>
        `).join("")}
    `;

    // $(".demo").append(sanmuTmpl(array2));
    

    const array3 = [
        {
            "atts": [
                {
                    "attName": "储存条件",
                    "attRemark": null,
                    "categoryGroupAttId": "20099625",
                    "sort": 1,
                    "valLables": [
                        {
                            "label": "储存条件",
                            "value": "G98"
                        }
                    ],
                    "vals": ["G98"]
                }, 
                {
                    "attName": "型号",
                    "attRemark": null,
                    "categoryGroupAttId": "20000306",
                    "sort": 3,
                    "valLables": [
                        {
                            "label": "型号",
                            "value": "X5SL"
                        }, 
                        {
                            "label": "型号",
                            "value": "X5SL11"
                        }

                    ],
                    "vals": ["X5SL"]
                }
            ],
            "groupName": "主体",
            "sort": 1
        },
        {
            "atts": [
                {
                    "attName": "后置摄像头1",
                    "attRemark": null,
                    "categoryGroupAttId": "20002140",
                    "sort": 1,
                    "valLables": [{
                        "label": "后置摄像头1",
                        "value": "130万以下"
                    }],
                    "vals": ["130万以下"]
                }
            ],
            "groupName": "摄像功能",
            "sort": 5
        }, 
        {
            "atts": [
                {
                    "attName": "屏幕材质",
                    "attRemark": null,
                    "categoryGroupAttId": "20003987",
                    "sort": 9,
                    "valLables": [{
                        "label": "屏幕材质",
                        "value": "LCD"
                    }],
                    "vals": ["LCD"]
                }, 
                {
                    "attName": "副屏参数",
                    "attRemark": null,
                    "categoryGroupAttId": "20005127",
                    "sort": 11,
                    "valLables": [{
                        "label": "副屏参数",
                        "value": "测试"
                    }],
                    "vals": ["测试"]
                }, 
                {
                    "attName": "超大字体",
                    "attRemark": null,
                    "categoryGroupAttId": "20005059",
                    "sort": 13,
                    "valLables": [{
                        "label": "超大字体",
                        "value": "不支持"
                    }],
                    "vals": ["不支持"]
                }, 
                {
                    "attName": "屏幕色彩",
                    "attRemark": null,
                    "categoryGroupAttId": "20003942",
                    "sort": 56,
                    "valLables": [{
                        "label": "屏幕色彩",
                        "value": "测完"
                    }],
                    "vals": ["测完"]
            }],
            "groupName": "显示",
            "sort": 6
            }, 
        {
            "atts": [
                {
                    "attName": "PCI Express x16",
                    "attRemark": null,
                    "categoryGroupAttId": "300000398",
                    "sort": 0,
                    "valLables": [{
                        "label": "PCI Express x16",
                        "value": "123"
                    }],
                    "vals": ["123"]
                }
            ],
            "groupName": "100-1000",
            "sort": 13
        }
    ];


    // ${(data && data != '') && `<div>${data}</div>`} 
    // ${(data && data != '') ? `<div>${data}</div>` : `<div>no contnet</div>`} 
    const multiForEachTmpl = data => `
        ${data.map(item => `
            <table class="table-border">
                <caption>${item.groupName}</caption>
                <tbody>
                    ${item.atts && item.atts != '' && `
                        ${item.atts.map(attsItem => `
                            ${attsItem.valLables.map(trItem => `
                                <tr>
                                    <td>${trItem.label}</td>
                                    <td>${trItem.value}</td>
                                </tr>
                            `).join('')}
                        `).join('')}
                    `}
                </tbody>
            </table>
        `).join('')}
    `;

    // $(".demo").append(multiForEachTmpl(array3));
}