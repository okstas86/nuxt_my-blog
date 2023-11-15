<template>
	<div id="footer">
		<div class="wrap">
			<div class="footer-top">
				<div class="footer-top-left">
					<img class="logo" src="../assets/logo.png" alt="logo" />
					<p class="left-text">
						Cтатьи о дизайне и искусстве, которые исследуют творческие
						вдохновения и актуальные тенденции, раскрывая мир эстетики и
						креативности
					</p>
				</div>
				<div class="footer-top-right">
					<p class="email">email</p>
					<p class="email-title">testblogsupport@gmail.com</p>
					<ul class="social-media">
						<li><img src="../assets/facebook.png" alt="facebook" /></li>
						<li><img src="../assets/vk.png" alt="vkontakte" /></li>
						<li><img src="../assets/instagram.png" alt="instagram" /></li>
						<li><img src="../assets/telegram.png" alt="telegram" /></li>
					</ul>
				</div>
			</div>
			<SubscribeForm />
		</div>
	</div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
#footer {
	width: 100%;
	height: auto;
	padding: 3vw 0;

	.wrap {
		width: 80%;
		margin: 0 auto;

		.footer-top {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;

			.footer-top-left {
				width: 50%;
				margin-bottom: 1vw;

				.left-text {
					font-weight: 400;
					font-size: 1.4vw;
					line-height: 2vw;
				}
				.social-media {
					display: flex;
					list-style-type: none;
					justify-content: flex-start;
					margin: 0;
					padding: 0;
				}
			}

			.footer-top-right {
				width: 50%;
				display: flex;
				flex-direction: column;

				.email {
					font-size: 1.4vw;
					font-weight: bold;
					margin-bottom: 1vw;
					padding-left: 20vw;
				}
				.email-title {
					padding-left: 20vw;
					font-size: 1.4vw;
				}
				.social-media {
					display: flex;
					list-style-type: none;
					justify-content: flex-start;
					margin: 0;
					padding-left: 20vw;
					li {
						margin-right: 1vw;
						img {
							width: 2vw;
						}
					}
				}
			}
		}
	}
}
</style>
