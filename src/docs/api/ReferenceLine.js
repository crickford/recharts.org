export default {
  name: 'ReferenceLine',
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
        'zh-CN': '参考线对应的 x 轴的 id。',
      },
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '参考线对应的 y 轴的 id。',
      },
    }, {
      name: 'x',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set a string or a number, a vertical line perpendicular to the x-axis specified by xAxisId will be drawn. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys, otherwise no line will be drawn.',
        'zh-CN': '用来描述一条垂直于 x 轴的线，当 x 轴是数值类型的坐标轴时，这个值必须为数值类型。当 x 轴为类目轴时， 这个值必须为 x 轴 domain 中的一个元素。',
      },
    }, {
      name: 'y',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set a string or a number, a horizontal line perpendicular to the y-axis specified by yAxisId will be drawn. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys, otherwise no line will be drawn.',
        'zh-CN': '用来描述一条垂直于 y 轴的线，当 y 轴是数值类型的坐标轴时，这个值必须为数值类型。当 y 轴为类目轴时， 这个值必须为 y 轴 domain 中的一个元素。',
      },
    }, {
      name: 'ifOverflow',
      type: 'string',
      defaultVal: 'discard',
      isOptional: true,
      desc: {
        'en-US': 'Defines how a ReferenceLine is displayed if positioned outside of the visible graph. Available values are: "hidden", "visible", "discard", and "extendDomain". When used with the "extendDomain" option, the domain of the graph is extended to include the ReferenceLine (mirrors the functionality of the deprecated "alwaysShow" prop).',
      },
      examples: [{
        name: 'A LineChart with ifOverflow="extendDomain" used to display a ReferenceLine outside of the chart domain',
        url: 'https://jsfiddle.net/fqt7xw0m/',
        isExternal: true
      }],
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
        'zh-CN': '图表的可视区域',
      },
    }, {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding x-axis, usually calculated internally.',
        'zh-CN': 'x 轴配置。',
      },
    }, {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding y-axis, usually calculated internally.',
        'zh-CN': 'y 轴配置。',
      },
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
        'zh-CN': '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
      format: [
        '<ReferenceLine x="05" label="Middle" />',
        '<ReferenceLine y={400} yAxisId="left" label={<CustomizedLabel />} />',
      ],
      examples: [{
        name: 'ReferenceLines with label',
        url: '/examples/LineChartWithReferenceLines',
      }],
    }, {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the line will be rendered in front of bars in BarChart, etc.',
        'zh-CN': '是否展示在图表的最上层。',
      },
    },{
      name: 'strokeWidth',
      type: 'Number',
      defaultVal: '1',
      isOptional: true,
      desc: {
        'en-US': 'The width of the stroke',
        'zh-CN': '虚线的宽度',
      },
    },
  ],
  parentComponents: [
    'AreaChart', 'BarChart', 'LineChart', 'ComposedChart',
    'ScatterChart',
  ],
  childrenComponents: [
    'Label',
  ],
};
