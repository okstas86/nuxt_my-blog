<template>
	<div class="article-list">
		<h2>{{ data.title }}</h2>
		<div class="articles">
			<div class="wrap">
				<div
					v-for="article in data.articles"
					:key="article.id"
					class="article-wrap"
				>
					<div class="article">
						<img class="article-img" :src="article.image" alt="Article Image" />
					</div>
					<div class="link">
						<nuxt-link :to="article.link">{{ article.title }}</nuxt-link>
					</div>
					<button><nuxt-link :to="article.link">Читать</nuxt-link></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.article-list {
	margin: 10vw;

	h2 {
		font-size: 2vw;
	}

	.articles {
		.wrap {
			display: flex;
			align-items: center;

			.article-wrap {
				display: flex;
				flex-direction: column;

				.article-img,
				.link {
					width: 24vw;
					margin: 1.2vw;
				}

				.link a {
					color: black;
				}

				button {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 1.2vw;
					width: 14vw;
					height: 4vw;
					background-color: #1b1b1b;
					border: #1b1b1b;

					&:hover {
						background-color: #3657d3;
					}
				}
			}
		}
	}

	a {
		text-decoration: none;
		color: #fff;
		font-size: 1.4vw;
	}
}
</style>
