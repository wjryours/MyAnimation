<template>
	<div class="bounce">
		<div class="ball bounceLeftIn infinite"></div>
		<div class="ball bounceUpIn infinite"></div>
		<div class="ball bounceRightOut infinite"></div>
		<div class="ball bounceDownOut infinite"></div>
	</div>
</template>
<script>
export default{
	
}	
</script>
<style scoped>
.ball{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #409EFF;
	display: inline-block;
	margin-left: 20px;
}
.infinite{
	animation-iteration-count: infinite;
}
.bounceUpIn{
	animation-name: bounceUpIn;
	animation-duration: 0.75s;
	animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
	
@keyframes bounceUpIn{
	from{
		opacity:0;
		transform:translate3d(0,3000px,0);
	}
	60%{
		opacity: 1;
		transform: translate3d(0,-20px,0);
	}
	75%{
		transform:translate3d(0,10px,0);
	}
	90%{
		transform: translate3d(0,5px,0);
	}
	to{
		transform: translate3d(0,0,0);
	}	
}
.bounceLeftIn{
	animation-name: bounceLeftIn;
	animation-duration: 0.75s;
	animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes bounceLeftIn{
	from{
		opacity:0;
		transform: translate3d(-3000px,0,0);
	}
	60%{
		opacity: 1;
		transform: translate3d(25px,0,0);
	}
	75%{
		transform: translate3d(-10px,0,0);
	}
	90%{
		transform: translate3d(5px,0,0);
	}
	to{
		transform: translate3d(0,0,0);
	}
}
/*进来的bounce就写两个，其他可以参照*/

.bounceRightOut{
	animation-name: bounceRightOut;
	animation-duration: 0.75s;
	animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes bounceRightOut{
	20%{
		opacity: 1;
		transform: translate3d(-20px,0,0);
	}
	to{
		opacity: 0;
		transform: translate3d(3000px,0,0);
	}
}
.bounceDownOut{
	animation-name: bounceDownOut;
	animation-duration: 0.75s;
	animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes bounceDownOut{
	20%{
		transform: translate3d(0, 10px, 0);
	}
	40%,45%{
		opacity: 1;
		transform: translate3d(0,20px,0);
	}
	to{
		opacity: 0;
		transform: translate3d(0,2000px,0);
	}
}
</style>