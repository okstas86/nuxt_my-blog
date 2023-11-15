<template>
	<div class="container">
		<div class="wrap">
			<img src="@/assets/applicant.png" alt="applicant" />
		</div>
		<div class="footer-form">
			<h2>Стань участником проекта</h2>
			<form action="#">
				<div class="input-container">
					<input type="text" placeholder="Имя" />
				</div>
				<div class="input-container">
					<input type="text" placeholder="Телефон" />
				</div>
				<div class="input-container">
					<input type="text" placeholder="Email" />
				</div>
				<button>Присоединиться</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GtaFormBlock',
}
</script>

<style lang="scss" scoped>
.container {
	margin: 5vw 10vw;
	width: 80vw;
	height: 30vw;
	background-color: #1b1b1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;

	.wrap {
		width: 50%;
		padding: 2vw;

		img {
			width: 40vw;
			height: 25vw;
		}
	}

	.footer-form {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			width: 100%;
			margin-bottom: 3vw;
			font-size: 2vw;
		}

		form {
			width: 100%;
			display: flex;
			flex-direction: column;

			.input-container {
				input {
					width: 25vw;
					border: none;
					outline: none;
					background-color: transparent;
					margin: 1vw;
					color: #fff;
					border-bottom: 0.1vw solid #8d959c;

					&:focus {
						border-bottom-color: #3657d3;
					}

					&:not(:placeholder-shown) {
						border-bottom-color: #fff;
					}
				}
			}

			button {
				width: 18vw;
				height: 4vw;
				font-size: 1.4vw;
				background-color: #3657d3;
				border: none;
				color: white;
				margin: 1vw;
				&:hover {
					background-color: #cdc8cf;
				}
			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		margin: 5vw;

		.wrap {
			width: 100%;
			margin-bottom: 3vh;
			margin: 1vw 5vw;
			img {
				margin: 5vw;
				width: 70vw;
				height: 35vw;
			}
		}

		.footer-form {
			width: 100%;
			h2 {
				font-size: 3vw;
				width: 80%;
			}

			form {
				.input-container {
					margin-left: 3vw;
					input {
						width: 80%;
						margin-bottom: 20px;
						font-size: 2vw;
					}
				}
				button {
					margin-left: 4vw;
					height: 5vw;
					margin-bottom: 4vw;
				}
			}
		}
	}

	@media (max-width: 440px) {
		flex-direction: column;
		height: auto;
		margin: 10vw;

		.wrap {
			width: 100%;
			margin-bottom: 3vw;
			img {
				margin: 0 5vw;
				width: 68vw;
				height: 15vh;
			}
		}

		.footer-form {
			width: 100%;
			h2 {
				width: 80%;
			}

			form {
				.input-container {
					input {
						width: 80%;
						margin-bottom: 20px;
					}
				}
				button {
					margin-left: 4vw;
					height: 5vw;
					margin-bottom: 4vw;
				}
			}
		}
	}
}
</style>
