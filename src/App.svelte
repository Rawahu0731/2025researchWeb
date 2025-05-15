<script>
	import { onMount } from 'svelte';
	
	export let gameConfig;
</script>

<main>
	<header>
		<h1>{gameConfig.title}</h1>
		<p class="subtitle">{gameConfig.description}</p>
		<!-- <p class="version">Version {gameConfig.version} - {gameConfig.releaseDate}</p> -->
	</header>

	<section class="features">
		<h2>ゲームの特徴</h2>
		<div class="feature-grid">
			{#each gameConfig.features as feature}
				<div class="feature-card">
					<p>{feature}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="cta">
		<button class="download-btn">今すぐプレイ</button>
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 2em;
		max-width: 1200px;
		margin: 0 auto;
		font-family: 'Helvetica Neue', Arial, sans-serif;
	}

	header {
		margin-bottom: 3em;
	}

	h1 {
		color: #2ecc71;
		font-size: 3.5em;
		font-weight: 700;
		margin-bottom: 0.5em;
	}

	.subtitle {
		font-size: 1.5em;
		color: #666;
		margin-bottom: 2em;
	}

	.features {
		margin: 4em 0;
	}

	h2 {
		color: #333;
		font-size: 2em;
		margin-bottom: 1.5em;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2em;
		padding: 1em;
	}

	.feature-card {
		background: #f8f9fa;
		padding: 2em;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
	}

	.download-btn {
		background: #2ecc71;
		color: white;
		border: none;
		padding: 1em 2em;
		font-size: 1.2em;
		border-radius: 5px;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.download-btn:hover {
		background: #27ae60;
	}

	@media (max-width: 768px) {
		main {
			padding: 1em;
		}

		h1 {
			font-size: 2.5em;
		}

		.subtitle {
			font-size: 1.2em;
		}
	}

	/* .version {
		color: #666;
		font-size: 0.9em;
		margin-top: 1em;
	} */
</style>