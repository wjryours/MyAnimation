<template>
	<!-- 这是个漂亮的九宫格加载动画 -->
	<div class="sudoku_wrapper">
		<div class="sudoku">
			<div class="square square_1"></div>
			<div class="square square_2"></div>
			<div class="square square_3"></div>
			<div class="square square_4"></div>
			<div class="square square_5"></div>
			<div class="square square_6"></div>
			<div class="square square_7"></div>
			<div class="square square_8"></div>
			<div class="square square_9"></div>
		</div>
	</div>	
</template>
<script>
export default{

}	
</script>
<style scoped>
.sudoku_wrapper{
	font-size: 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 9999;
}
.sudoku{
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -150px 0 0 -150px;
}
.square{
	display: inline-block;
	width: 33.3%;
	height: 33.3%;
	background: #333;
	animation: square_animation 1.3s infinite ease;
}
@keyframes square_animation{
	0%,
	70%,
	100%
	{
		transform: scale3d(1,1,1);
	}
	35%{
		transform: scale3d(0,0,0);
	}
}
.square_1,.square_5,.square_9{
	animation-delay: 0.2s
}
.square_2,.square_6{
	animation-delay: 0.3s
}
.square_3{
	animation-delay: 0.4s
}
.square_4,.square_8{
	animation-delay: 0.1s
}
.square_7{
	animation-delay: 0s
}	
</style>