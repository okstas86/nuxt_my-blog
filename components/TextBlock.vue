<template>
	<div class="container">
		<h2 v-if="content" v-html="getContent('title')"></h2>
		<p v-if="content" v-html="getContent('paragraph1')"></p>
		<p v-if="content" v-html="getContent('paragraph2')"></p>
		<blockquote v-if="content" class="blockquote">
			<img src="../assets/quotes.png" alt="" />
			<p class="quote" v-html="getContent('quote')"></p>
		</blockquote>
		<footer
			v-if="content"
			class="quoteFooter"
			v-html="getContent('quoteFooter')"
		></footer>
	</div>
</template>

<script>
export default {
	props: {
		content: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getContent(section) {
			const parser = new DOMParser()
			const doc = parser.parseFromString(this.content.data, 'text/html')

			const elements = {
				title: doc.querySelector('h2'),
				paragraph1: doc.querySelector('p'),
				paragraph2: doc.querySelectorAll('p')[1],
				quote: doc.querySelector('blockquote p'),
				quoteFooter: doc.querySelector('blockquote footer'),
			}

			if (elements[section]) {
				return elements[section].outerHTML
			}

			return ''
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 5vw 20vw;

	h2 {
		font-size: 2vw;
	}

	p {
		line-height: 2.6vw;
		font-size: 1.4vw;
	}

	.blockquote {
		display: flex;
		align-items: center;

		img {
			margin-right: 3vw;
			width: 8vw;
			height: 6.4vw;
		}

		.quote {
			font-style: italic;
			font-weight: 300;
			font-size: 1.4vw;
		}
	}

	.quoteFooter {
		font-size: 1.4vw;
		color: #8d959c;
	}
}
</style>
