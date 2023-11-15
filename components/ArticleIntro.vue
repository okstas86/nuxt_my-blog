<template>
	<div class="container" v-if="articleData && articleData.body">
		<div v-for="block in articleData.body" :key="block.id">
			<div v-if="block.type === 'article_intro_block'" class="article-intro">
				<img class="intro-img" :src="block.data.image" alt="Article Image" />
				<div class="wrap">
					<h1 class="intro-title">{{ block.data.title }}</h1>
					<p class="info">
						<img src="../assets/read_time.png" alt="time" />{{
							block.data.reading_time
						}}
						мин время чтения
					</p>
					<p class="info">
						<img src="../assets/eye.png" alt="eye" />
						{{ block.data.views_count }} прочитали статью
					</p>
					<p class="intro-description">{{ block.data.short_description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		articleData: {
			type: Object,
			default: null,
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 5vw 5vw 0 7vw;

	.article-intro {
		display: flex;

		.intro-img {
			width: 80vw;
			max-width: 500px;
			height: 50vw;
			max-height: 580px;
			object-fit: cover;
		}

		.info {
			font-size: 1vw;
			color: #8d959c;
			margin-bottom: 1vw;
		}

		.wrap p img {
			width: 1.5vw;
			margin: -0.5vw 1vw -0.5vw 0;
		}

		.wrap {
			margin: 0 0 0 2vw;

			.intro-title {
				font-size: 3vw;
				font-weight: 800;
				margin-top: 2vw;
			}

			.intro-description {
				font-size: 1.2vw;
				line-height: 2vw;
			}
		}
	}
}
</style>
