import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
	state: () => ({
		articleData: null,
	}),
	actions: {
		async fetchArticleData(id) {
			try {
				const response = await fetch(
					`https://devtwit8.ru/api/v1/page/?path=/${id}`
				)
				const data = await response.json()
				this.articleData = data
			} catch (error) {
				console.error('Ошибка при получении данных статьи:', error)
			}
		},
	},
	getters: {
		articleBlocks() {
			return this.articleData ? this.articleData.body : []
		},
	},
})
