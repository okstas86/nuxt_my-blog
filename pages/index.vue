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
	gap: 50px;
	margin: 0 6vw 6vw;
}

.article-group {
	width: 100%;
	display: flex;
	justify-content: space-around;
}
.wrap {
	width: 28vw;
	font-size: 2vw;
}
.article-image {
	width: 27vw;
	height: 50vh;
}
.article-title {
	font-size: 1vw;
}
.btn-read {
	width: 13vw;
	height: 8vh;
	background-color: #1b1b1b;
	border: #1b1b1b;
	color: #fff;
	text-decoration: none;
	font-size: 3vh;
	font-weight: 400;
}

@media (max-width: 1024px) {
	.wrap {
		width: 80%;
	}

	.article-image {
		width: 28vw;
		height: 20vw;
		margin: 1vw;
		object-fit: cover;
	}
	.article-title {
		font-size: 1vh;
	}

	.btn-read {
		width: 12vh;
		height: 4vh;
		font-size: 1.7vw;
	}
}
@media (max-width: 430px) {
	.wrap {
		width: 80%;
	}

	.article-image {
		width: 25vw;
		height: 10vh;
		margin: 1vh;
	}

	.btn-read {
		width: 7vh;
		height: 2vh;
		font-size: 2vw;
	}
}
</style>
