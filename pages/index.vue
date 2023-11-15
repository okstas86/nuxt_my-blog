<template>
	<div class="container" v-if="articleGroups && articleGroups.length > 0">
		<div
			v-for="(group, index) in articleGroups"
			:key="index"
			class="article-group"
		>
			<div v-for="(article, articleIndex) in group" :key="articleIndex">
				<div>
					<img class="article-image" :src="article.image" alt="Article Image" />
					<div class="wrap">
						<p class="article-title">{{ article.title }}</p>
						<nuxt-link :to="article.link">
							<button class="btn-read">Читать</button>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>Данные не загружены</div>
</template>

<script>
import { usePageStore } from '@/store/index.js'
import { useArticleStore } from '@/store/articleStore.js'
import { defineComponent, onBeforeMount, computed } from 'vue'

export default defineComponent({
	name: 'HomePage',
	setup() {
		const store = usePageStore()
		const articleStore = useArticleStore()

		store.fetchData()

		return {
			articleGroups: computed(() => store.articleGroups),
		}
	},
})
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	gap: 5vw;
	margin: 0 6vw 6vw;

	.article-group {
		width: 100%;
		display: flex;
	}

	.wrap {
		width: 28vw;
		font-size: 2vw;
	}

	.article-image {
		width: 27vw;
		height: 25vw;
	}

	.article-title {
		font-size: 1vw;

		@media (max-width: 768px) {
			font-size: 1.2vw;
		}

		@media (max-width: 460px) {
			font-size: 1.4vw;
		}
	}

	.btn-read {
		width: 13vw;
		height: 4vw;
		background-color: #1b1b1b;
		border: #1b1b1b;
		color: #fff;
		text-decoration: none;
		font-size: 1.3vw;
		font-weight: 400;
	}
}
</style>
