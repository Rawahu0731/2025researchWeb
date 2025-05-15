import App from './App.svelte';

const gameConfig = {
	title: 'エコシティ',
	description: '持続可能な街づくりを目指すシミュレーションゲーム',
	features: [
		"環境に配慮した街づくり",
		"再生可能エネルギーの活用",
		"住民の幸福度管理",
		"持続可能な資源管理"
	],
	version: '1.0.0',
	releaseDate: '2024年4月1日'
};

const app = new App({
	target: document.body,
	props: {
		gameConfig
	}
});

export default app;