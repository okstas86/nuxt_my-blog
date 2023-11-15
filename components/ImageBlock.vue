<template>
	<div class="container">
		<img :src="imageData.src" :alt="imageData.caption" />
		<p class="image-caption">{{ imageData.caption }}</p>
	</div>
</template>

<script>
export default {
	props: {
		imageData: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style land="scss" scoped>
.container {
	margin: 5vw 10vw;
	display: flex;
	flex-direction: column;
}
.image-caption {
	margin-left: 60vw;
	font-size: 1.4vw;
}
</style>
