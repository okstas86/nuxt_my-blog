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
	margin: 50px 100px;
	display: flex;
	flex-direction: column;
}
.image-caption {
	margin-left: 600px;
}

@media (max-width: 768px) {
	.container {
		margin: 20px;
	}

	.image-caption {
		font-size: 10px;
		margin-left: 0;
		text-align: center;
	}
}
</style>
