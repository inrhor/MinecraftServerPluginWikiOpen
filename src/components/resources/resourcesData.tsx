/**
 * 
 * @param icon 图标
 * @param title 标题
 * @param description 描述
 * @param free 是否免费
 * @param category 类别
 * @param open 是否开源
 * @param originalUrl 原始链接
 * @param protocol 开源协议
 * @param content 内容
 * @param wiki 译文文档
 * @param originWiki 官方文档
 * @returns
 */
export const resources = [
    { 
        id: 1, 
        title: 'ModelEngine | 模型引擎', 
        description: '强大的实体模型引擎', 
        url: '/resources/modelengine', 
        free: false, 
        category: '扩展' ,
        wiki: '/docs/category/modelengine',
        icon: 'https://mythiccraft.io/data/resource_icons/1/1213.jpg?1696208450',
        originalUrl: 'https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-19-4-1-20-4.1213/',
        originWiki: 'https://git.lumine.io/mythiccraft/model-engine-4/-/wikis/home'
    },
    // { 
    //     id: 2, 
    //     title: 'Oraxen | 奥瑞森', 
    //     description: '为游戏添加物品、武器、方块，模块化机械系统', 
    //     url: '/resources/oraxen', 
    //     free: false, 
    //     category: '扩展'
    // },
    {
        id: 3,
        title: 'Adyeshach | 虚拟实体',
        description: 'Bukkit 平台虚拟实体解决方案',
        url: '/resources/adyeshach',
        category: '扩展',
        open: true,
        protocol: 'MIT license',
        icon: 'https://a.ptms.ink/img/icon.png',
        originalUrl: 'https://github.com/taboolib/adyeshach',
        originWiki: 'https://wiki.ptms.ink/',
    },
    {
        id: 4,
        title: 'AuthMeReloaded | 登录验证',
        description: 'Bukkit / Spigot API 的流行登录验证插件',
        url: '/resources/authmereloaded',
        category: '管理',
        free: true,
        open: true,
        protocol: 'GPL-3.0 license',
        icon: 'https://www.spigotmc.org/data/resource_icons/6/6269.jpg?1512144392',
        originalUrl: 'https://github.com/AuthMe/AuthMeReloaded',
        originWiki: 'https://github.com/AuthMe/AuthMeReloaded/wiki',
        wiki: '/docs/category/authmereloaded'
    }
];