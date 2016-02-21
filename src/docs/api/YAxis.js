export default {
  name: 'YAxis',
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the axis do not display in the chart.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of y-axis.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '60',
      isOptional: false,
      desc: 'The width of axis, which can be setted by user.',
    }, {
      name: 'hight',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of axis which is usually calculated internally.',
    }, {
      name: 'orientation',
      type: '\'left\' , \'right\'',
      defaultVal: '\'left\'',
      isOptional: false,
      desc: 'The orientation of axis.',
    }, {
      name: 'type',
      type: '\'number\' , \'category\'',
      defaultVal: '\'number\'',
      isOptional: false,
      desc: 'The type of axis.',
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The number of axis ticks.',
    }, {
      name: 'domain',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Specify the domain of axis when the axis is a number axis. The length of domain should be 2, and we will validate the values in domain.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of tick.',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Set the values of axis ticks manually.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis.',
    }, {
      name: 'tick',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set false, no ticks will be drawed. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks.',
      format: [
        `<YAxis tick={false}/>`,
        `<YAxis tick={{stroke: 'red', strokeWidth: 2}}/>`,
        `<YAxis tick={<CustomizedTick/>}/>`,
      ],
    }, {
      name: 'label',
      type: 'String | Number | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawed, and the option is content. If set a React element, the option is the custom react element of drawing label.',
      format: [
        `<YAxis label="Height"/>`,
        `<YAxis label={<CustomizedLabel/>}/>`,
      ],
      examples: [
        {
          name: 'A composed chart with axis labels',
          url: '/examples#ComposedChartWithAxisLabels',
        },
      ],
    },
  ],
  examples: [

  ]
};
