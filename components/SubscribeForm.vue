<template>
	<div class="footer-bottom">
		<p class="footer-form-text">Подпишись на рассылку</p>
		<div class="footer-form">
			<form action="#">
				<input type="text" placeholder="Email" />
			</form>
			<button>Подписаться</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SubscribeForm',
}
</script>
<style lang="scss" scoped>
.footer-bottom {
	margin-top: 1vw;
	height: 8vw;
	background-color: #1b1b1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;

	.footer-form {
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 2vw;

		.email-title {
			color: #8d959c;
		}

		input {
			width: 25vw;
			border: none;
			outline: none;
			background-color: transparent;
			border-bottom: 0.1vw solid #8d959c;
			font-size: 1.4vw;
		}

		button {
			width: 16vw;
			height: 4vw;
			background-color: #3657d3;
			border: none;
			font-size: 1.2vw;
			color: white;
			cursor: pointer;

			&:hover {
				background-color: #cdc8cf;
			}
		}
	}
}

.footer-form-text {
	margin-left: 3vw;
	font-size: 1.2vw;
}

@media (max-width: 1024px) {
	.footer-bottom {
		margin-top: 4vw;
	}
}

@media (max-width: 460px) {
	button {
		height: 4vw;
		font-size: 1vw;
	}

	.footer-form-text {
		margin-left: 2vw;
		font-size: 1vw;
		width: 40%;
	}
}
</style>
