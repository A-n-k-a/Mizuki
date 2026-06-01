import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/91747375-50FF-4E10-9946-754B8612AFBA_1_105_c.jpeg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Anka",
	bio: "I opened myself to the gentle indifference of the world.",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/399207656",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/anka_luotianyi",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/A-n-k-a",
		},
		{
			name: "Codeberg",
			icon: "simple-icons:codeberg",
			url: "https://codeberg.org/Anka",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.com/users/1164738341120520222",
		},
	],
};
