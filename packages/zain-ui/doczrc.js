export default {
    /** 标题 */
    title: 'Zain UI',
    /** 菜单 */
    menu: [
        // 主页
        'Home',
        '主页',
        'ホーム',
        // 快速上手
        'Getting Started',
        '快速上手',
        'はじめに',
        // 组件
        'Components',
        'Components 组件',
        'コンポーネント'
    ],
    /** 忽略文件 */
    ignore: ['README.DEV.md'],
    /** GitHub Pages 指定在哪个子目录中部署文件（例如：'zain-ui.github.io/zain-ui' 需要填 '/zain-ui'） */
    // base: '/',
    /** build 构建输出目标文件夹 */
    dest: './out/docs',
    /** 启用 Typescript */
    typescript: true
};
