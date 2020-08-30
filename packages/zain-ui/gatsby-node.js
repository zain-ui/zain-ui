const path = require('path')

exports.onCreateWebpackConfig = args => {
    args.actions.setWebpackConfig({
        resolve: {
            /**
             * ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
             * ⚠ 注意路径中的“ ..”，因为docz gatsby项目位于“ .docz”目录中
             * 给组件路径取别名（docz mdx 文档引入组件： import MenuList from "zain-ui/MenuList";）
             */
            modules: [path.resolve(__dirname, '..'), 'node_modules'],
            alias: {
                'zain-ui': path.resolve(__dirname, '../components')
            },
        },
    })
}
