<template>
	<div v-if="!isLoading">
		<ArticleIntro v-if="articleData" :articleData="articleData" />
		<TextBlock
			v-if="getBlockData('10b951d3-d595-4776-b85f-7e6ba5d8818e')"
			:content="getBlockData('10b951d3-d595-4776-b85f-7e6ba5d8818e')"
		/>
		<ImageBlock v-if="hasImageBlock()" :imageData="getImageData()" />

		<TextBlockSecond
			v-if="getBlockData('1d070b6c-8848-4b76-8197-b581b3098f17')"
			:content="getBlockData('1d070b6c-8848-4b76-8197-b581b3098f17')"
		/>
		<SliderBlock v-if="hasImageBlocks()" :images="getImageBlockSrcs()" />
		<div class="wrap">
			<SubscribeForm />
		</div>
		<ArticleListBlock
			v-if="hasArticleListBlock()"
			:data="getArticleListBlock()"
		/>
		<CtaFormBlock />
	</div>
	<div v-else>
		<p>Загрузка...</p>
	</div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import { useArticleStore } from '@/store/articleStore'
import { useRoute } from 'vue-router'
import CtaFormBlock from '../components/CtaFormBlock.vue'

export default {
	components: { CtaFormBlock },
	name: 'ArticlePage',
	setup() {
		const store = useArticleStore()
		const articleData = ref(null)
		const isLoading = ref(true)
		const route = useRoute()

		onBeforeMount(async () => {
			const id = route.params.id
			if (id) {
				await store.fetchArticleData(id)
				articleData.value = store.articleData
				isLoading.value = false
			}
		})

		const getBlockData = blockId => {
			return articleData.value.body.find(
				block => block.type === 'text_block' && block.id === blockId
			)
		}

		const hasImageBlock = () => {
			return (
				articleData.value &&
				articleData.value.body.some(block => block.type === 'image_block')
			)
		}

		const getImageData = () => {
			return articleData.value.body.find(block => block.type === 'image_block')
				.data
		}

		const hasImageBlocks = () => {
			return (
				articleData.value &&
				articleData.value.body.some(block => block.type === 'image_block')
			)
		}

		const getImageBlockSrcs = () => {
			return articleData.value.body
				.filter(block => block.type === 'image_block')
				.map(block => block.data.src)
		}

		const hasArticleListBlock = () => {
			return (
				articleData.value &&
				articleData.value.body.some(
					block => block.type === 'article_list_block'
				)
			)
		}

		const getArticleListBlock = () => {
			return articleData.value.body.find(
				block => block.type === 'article_list_block'
			).data
		}

		return {
			articleData,
			isLoading,
			getBlockData,
			hasImageBlock,
			getImageData,
			hasImageBlocks,
			getImageBlockSrcs,
			hasArticleListBlock,
			getArticleListBlock,
		}
	},
}
</script>

<style land="scss" scoped>
.wrap {
	margin: 10vw;
	width: 80%;
}
</style>
