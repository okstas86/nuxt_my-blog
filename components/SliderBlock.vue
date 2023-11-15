<template>
	<div class="container">
		<button class="arrow" @click="prevSlide">
			<img src="../assets/arrow-left.png" alt="Previous Slide" />
		</button>
		<div class="slider">
			<div class="slide" :key="currentIndex">
				<img :src="images[currentIndex]" alt="Slider Image" />
				<div class="slide-counter">
					{{ currentIndex + 1 }} / {{ images.length }}
				</div>
			</div>
		</div>
		<button class="arrow" @click="nextSlide">
			<img src="../assets/arrow-right.png" alt="Next Slide" />
		</button>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			currentIndex: 0,
		}
	},
	methods: {
		prevSlide() {
			this.currentIndex =
				(this.currentIndex - 1 + this.images.length) % this.images.length
		},
		nextSlide() {
			this.currentIndex = (this.currentIndex + 1) % this.images.length
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	margin: 1vw;

	.arrow {
		width: 10vw;
		height: 5vw;
		background-color: #fff;
		border: none;

		img {
			width: 4vw;
		}
	}
}

.slider {
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 40vw;

	.slide {
		scroll-snap-align: start;
		img {
			width: 80vw;
			height: 40vw;
		}
	}

	.slide-counter {
		margin: 2vw 0;
	}
}
</style>
