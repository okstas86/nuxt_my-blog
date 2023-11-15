<template>
	<div class="container">
		<h2 v-if="content" v-html="getContent('title')"></h2>
		<p v-if="content" v-html="getContent('paragraph')"></p>
		<ul v-if="content" v-html="getContent('list')"></ul>
		<p v-if="content" v-html="getContent('conclusion')"></p>
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
				paragraph: doc.querySelector('p'),
				conclusion: doc.querySelectorAll('p')[1],
			}

			if (section === 'list') {
				const ul = doc.querySelector('ul')
				if (ul) {
					const lis = ul.querySelectorAll('li')
					lis.forEach((li, index) => {
						li.style.listStyle = 'none'
						li.style.position = 'relative'
						li.style.paddingLeft = '5vw'
						li.style.lineHeight = '3.5vw'
						li.innerHTML = `<span style="position: absolute; width: 1vw; height: 1vw; background-color: black; transform: rotate(45deg); top: 1.2vw; left: 2vw;"></span>${li.innerHTML}`
					})
					return ul.outerHTML
				} else {
					return ''
				}
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
		font-size: 1.4vw;
		margin-bottom: 5vh;
	}

	p {
		line-height: 3vw;
		font-size: 1.5vw;
	}

	ul {
		padding: 0;
		list-style: none;
		font-size: 1.5vw;

		li {
			position: absolute;
			width: 2vw;
			height: 2vw;
			background-color: black;
			transform: rotate(45deg);
			top: 1vw;
			left: 1vw;
		}
	}
}
</style>
