import type { FooterConfig } from "../types/config";

// 页脚配置
export const footerConfig: FooterConfig = {
	enable: true, // 是否启用Footer HTML注入功能
	customHtml: `<div class="power"><a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2025154874号</a> ｜ <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51012402001508" rel="noreferrer" target="_blank">川公网安备51012402001508号</a></div>`, // HTML格式的自定义页脚信息，例如备案号等，默认留空
	// 也可以直接编辑 FooterConfig.html 文件来添加备案号等自定义内容
	// 注意：若 customHtml 不为空，则使用 customHtml 中的内容；若 customHtml 留空，则使用 FooterConfig.html 文件中的内容
	// FooterConfig.html 可能会在未来的某个版本弃用
};
