// 全局常量配置
const PROXY_URL = 'https://tjh1.cc.cd/proxy/';   // ←←← 改成你 Cloudflare Pages 真实部署域名 + /proxy/

// 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 原来的源
    'bfzy': { api: 'https://bfzyapi.com/api.php/provide/vod', name: '暴风资源', adult: false },
    'zy360': { api: 'https://360zy.com/api.php/provide/vod', name: 'zy360', adult: false },
    'iqiyi': { api: 'https://www.iqiyizyapi.com/api.php/provide/vod', name: 'iqiyi', adult: false },
    'ruyi': { api: 'https://cj.rycjapi.com/api.php/provide/vod', name: '如意资源', adult: false },
    'liangzi': { api: 'https://cj.lziapi.com/api.php/provide/vod', name: '量子资源', adult: false },
    'feifan': { api: 'https://cj.ffzyapi.com/api.php/provide/vod', name: '非凡资源', adult: false },
    'yinghua': { api: 'https://m3u8.apiyhzy.com/api.php/provide/vod', name: '樱花资源', adult: false },
    'jizhi': { api: 'https://jizzyapi.com/api.php/provide/vod', name: '极致资源', adult: false },
    'wolong': { api: 'https://collect.wolongzyw.com/api.php/provide/vod', name: '卧龙资源', adult: false },
    'tiankong': { api: 'https://api.tiankongapi.com/api.php/provide/vod', name: '天空资源', adult: false },
    'wujin': { api: 'https://api.wujinapi.me/api.php/provide/vod', name: '无尽资源', adult: false },
    'piaohua': { api: 'https://www.phpsdy.com/api.php/provide/vod', name: '飘花资源', adult: false },
    'xinlang': { api: 'https://api.xinlangapi.com/api.php/provide/vod', name: '新浪资源', adult: false },
    'kuaikan': { api: 'https://kuaikanzy.com/api.php/provide/vod', name: '快看资源', adult: false },
    'lezhu': { api: 'https://api.lezhuapi.com/api.php/provide/vod', name: '乐猪资源', adult: false },
    'bajie': { api: 'https://api.bajieapi.com/api.php/provide/vod', name: '八戒资源', adult: false },
    'huale': { api: 'https://api.hualeapi.com/api.php/provide/vod', name: '华乐资源', adult: false },
    'hongniu': { api: 'https://www.hongniuzy.com/api.php/provide/vod', name: '红牛资源', adult: false },
    'suoni': { api: 'https://api.suoniapi.com/api.php/provide/vod', name: '索尼资源', adult: true },
    'smwy': { api: 'https://api.smwyapi.com/api.php/provide/vod', name: '双马尾资源', adult: true },
    
    // 下面是文件1里去重后的普通源
    'iqiyizyapi': { api: 'https://iqiyizyapi.com/api.php/provide/vod', name: '🎬爱奇艺', adult: false },
    'dbzy': { api: 'https://caiji.dbzy5.com/api.php/provide/vod', name: '🎬豆瓣资源', adult: false },
    'tyyszy': { api: 'https://tyyszy.com/api.php/provide/vod', name: '🎬天涯影视', adult: false },
    'mtzyme': { api: 'https://caiji.maotaizy.cc/api.php/provide/vod', name: '🎬茅台资源', adult: false },
    'ikunzycom': { api: 'https://ikunzyapi.com/api.php/provide/vod', name: '🎬iKun资源', adult: false },
    'dyttzyapicom': { api: 'http://caiji.dyttzyapi.com/api.php/provide/vod', name: '🎬电影天堂', adult: false },
    'wwwmaoyanzycom': { api: 'https://api.maoyanapi.top/api.php/provide/vod', name: '🎬猫眼资源', adult: false },
    'cjlzcaijicom': { api: 'https://cj.lzcaiji.com/api.php/provide/vod', name: '🎬量子资源', adult: false },
    'jszyapicom': { api: 'https://jszyapi.com/api.php/provide/vod', name: '🎬极速资源', adult: false },
    'wwwmoduzynet': { api: 'https://www.mdzyapi.com/api.php/provide/vod', name: '🎬魔都资源', adult: false },
    'zuidaxyz': { api: 'https://api.zuidapi.com/api.php/provide/vod', name: '🎬最大资源', adult: false },
    'apiwwzytv': { api: 'https://api.wwzy.tv/api.php/provide/vod', name: '🎬旺旺资源', adult: false },
    'wwwsubozycom': { api: 'https://subocaiji.com/api.php/provide/vod', name: '🎬速播资源', adult: false },
    'jinyingzycom': { api: 'https://jinyingzy.com/api.php/provide/vod', name: '🎬金鹰点播', adult: false },
    'p2100net': { api: 'https://p2100.net/api.php/provide/vod', name: '🎬飘零资源', adult: false },
    'apiukuapi88com': { api: 'https://api.ukuapi88.com/api.php/provide/vod', name: '🎬U酷影视', adult: false },
    'apiguangsuapicom': { api: 'https://api.guangsuapi.com/api.php/provide/vod', name: '🎬光速资源', adult: false },
    'caijimoduapicc': { api: 'https://caiji.moduapi.cc/api.php/provide/vod', name: '🎬魔都动漫', adult: false },
    'wwwhaohuazycom': { api: 'https://hhzyapi.com/api.php/provide/vod', name: '🎬豪华资源', adult: false },
    'bdzy1com': { api: 'https://api.apibdzy.com/api.php/provide/vod', name: '🎬百度云zy', adult: false },
    'lovedannet': { api: 'https://lovedan.net/api.php/provide/vod', name: '🎬艾旦影视', adult: false },

    // 下面是文件1里的成人源（已标记为 true，建议如果不需要可以删掉）
    '91mdme': { api: 'https://91md.me/api.php/provide/vod', name: '🔞麻豆视频', adult: true },
    '91jpzywcom': { api: 'https://91jpzyw.com/api.php/provide/vod', name: '🔞91-精品-', adult: true },
    'lbapibycom': { api: 'http://lbapiby.com/api.php/provide/vod', name: '🔞--AIvin-', adult: true },
    'apibwzym3u8com': { api: 'https://api.bwzyz.com/api.php/provide/vod', name: '🔞百万资源', adult: true },
    'apisouavzyvip': { api: 'https://api.souavzy.vip/api.php/provide/vod', name: '🔞souavZY', adult: true },
    '155zy2com': { api: 'https://155api.com/api.php/provide/vod', name: '🔞155-资源', adult: true },
    'apiyutu.com': { api: 'https://apiyutu.com/api.php/provide/vod', name: '🔞玉兔资源', adult: true },
    'fhapi9com': { api: 'http://fhapi9.com/api.php/provide/vod', name: '🔞番号资源', adult: true },
    'wwwjingpinxcom': { api: 'https://www.jingpinx.com/api.php/provide/vod', name: '🔞精品资源', adult: true },
    'apilsbzy1com': { api: 'https://apilsbzy1.com/api.php/provide/vod', name: '🔞-老色逼-', adult: true },
    'thzy8me': { api: 'https://thzy1.me/api.php/provide/vod', name: '🔞桃花资源', adult: true },
    'wwwyyzywcjcom': { api: 'https://www.yyzywcj.com/api.php/provide/vod', name: '🔞优优资源', adult: true },
    'xiaojizylive': { api: 'https://api.xiaojizy.live/provide/vod', name: '🔞小鸡资源', adult: true },
    'hsckzyxyz': { api: 'https://hsckzy.xyz/api.php/provide/vod', name: '🔞黄色仓库', adult: true },
    'apidanaizicom': { api: 'https://apidanaizi.com/api.php/provide/vod', name: '🔞-大奶子-', adult: true },
    'jkunzyapicom': { api: 'https://jkunzyapi.com/api.php/provide/vod', name: '🔞jkun资源', adult: true },
    'lbapi9com': { api: 'https://lbapi9.com/api.php/provide/vod', name: '🔞乐播资源', adult: true },
    'Naixxzycom': { api: 'https://Naixxzy.com/api.php/provide/vod', name: '🔞奶香资源', adult: true },
    'slapibf': { api: 'https://beiyong.slapibf.com/api.php/provide/vod', name: '🔞森林资源', adult: true },
    'apilj': { api: 'https://apilj.com/api.php/provide/vod', name: '🔞辣椒资源', adult: true },
    'shayuapi': { api: 'https://shayuapi.com/api.php/provide/vod', name: '🔞鲨鱼资源', adult: true },
    'xzytv': { api: 'https://xzybb2.com/api.php/provide/vod', name: '🔞-幸资源-', adult: true },
    'doudouzy': { api: 'https://api.douapi.cc/api.php/provide/vod', name: '🔞豆豆资源', adult: true },
    'didizycom': { api: 'https://api.ddapi.cc/api.php/provide/vod', name: '🔞滴滴资源', adult: true },
    'heiliaozy': { api: 'https://www.heiliaozyapi.com/api.php/provide/vod', name: '🔞黑料资源', adult: true }
    // 👆 新添加的内置采集源
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
