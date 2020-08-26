const developmentPlugins = [require('react-hot-loader/babel')];

const productionPlugins = [
    // // babel-preset-react-optimize
    require('@babel/plugin-transform-react-constant-elements'),
    require('@babel/plugin-transform-react-inline-elements'),
    require('babel-plugin-transform-react-remove-prop-types')
];

/**
 * JavaScript 编译器模块
 * 已知触发途径：
 * require('@babel/register') 参数中添加 extensions 属性后执行会触发
 * webpack 设置有 loader: 'babel-loader' 执行后触发
 * @param {*} api
 */
module.exports = (api) => {
    /**
     * 必须加上 api.cache(true);
     * 永久缓存计算出的配置，不再调用该函数。
     * See docs about api at https://babeljs.io/docs/en/config-files#apicache
     */
    api.cache(true);
    const development = process.env.BUILD_ENV === 'development';

    return {
        presets: [
            // @babel/preset-env will automatically target our browserslist targets
            require('@babel/preset-env'),
            require('@babel/preset-typescript'),
            [require('@babel/preset-react'), { development }]
        ],
        plugins: [
            // 支持类(class)中的静态函数、箭头函数...编译
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],
            [
                // 模块导入别名，指定后可以在文件之直接 import * from 'src/*';
                require('babel-plugin-module-resolver'),
                {
                    root: ['./'],
                    alias: {
                        src: './src'
                    }
                }
            ],
            ...(development ? developmentPlugins : productionPlugins)
        ]
    };
};
