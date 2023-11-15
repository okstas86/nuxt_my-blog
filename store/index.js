import { defineStore } from 'pinia'

export const usePageStore = defineStore({
	id: 'pageStore',

	state: () => ({
		pageData: null,
	}),
	actions: {
		async fetchData() {
			try {
				const response = await fetch('https://devtwit8.ru/api/v1/page/?path=/')
				const data = await response.json()
				this.pageData = data
			} catch (error) {
				console.error('Ошибка при получении данных:', error)
			}
		},
	},
	getters: {
		articleGroups() {
			if (this.pageData && this.pageData.body[0].data.articles) {
				const articles = this.pageData.body[0].data.articles
				const chunked = []

				for (let i = 0; i < articles.length; i += 3) {
					chunked.push(articles.slice(i, i + 3))
				}
				return chunked
			}
			return []
		},
	},
})
