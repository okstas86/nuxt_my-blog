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
	height: 15vh;
	background-color: #1b1b1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;

	.footer-form {
		width: 50vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 20px;

		.email-title {
			color: #8d959c;
		}

		input {
			width: 25vw;
			border: none;
			outline: none;
			background-color: transparent;
			border-bottom: 1px solid #8d959c;
		}

		button {
			width: 20vh;
			height: 46px;
			background-color: #3657d3;
			border: none;
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

@media (max-width: 768px) {
	.footer-bottom {
		margin-top: 4vw;
		height: 10vh;

		.footer-form {
			width: 100%;
			input {
				width: 30vw;
				font-size: 2vw;
			}

			button {
				width: 15vw;
				height: 3vw;
				font-size: 1vw;
			}
		}
	}
	.footer-form-text {
		margin-left: 2vw;
		font-size: 1.5vw;
	}
}

@media (max-width: 460px) {
	.footer-bottom {
		height: 5vh;

		.footer-form {
			width: 100%;
			input {
				width: 30vw;
				font-size: 2vw;
			}

			button {
				width: 15vw;
				height: 3vw;
				font-size: 1vw;
			}
		}
	}
	.footer-form-text {
		margin-left: 2vw;
		font-size: 1vw;
	}
}
</style>
