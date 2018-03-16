<!-- 比较容易引起用户注意的特效 -->
<template>
	<div class="seekers">
		<div class="ball bounce infinite"></div>
		<div class="ball headShake infinite"></div>
		<div class="ball rubberBank infinite"></div>
		<div class="ball wobble infinite"></div>
		<div class="ball jello infinite"></div>
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
.bounce{
	animation-name: bounce;
	animation-duration: 1s;
	transform-origin: center bottom;
}
@keyframes bounce{
	from,
	20%,
	53%,
	80%,
	to{
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    	transform: translate3d(0, 0, 0);
	}
	40%,43%{
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    	transform: translate3d(0, -30px, 0);
	}
	70% {
    	animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    	transform: translate3d(0, -15px, 0);
  	}

	 90% {
	    transform: translate3d(0, -4px, 0);
	 }
}
.headShake{
	animation-name: headShake;
	animation-timing-function: ease-in-out;
	animation-duration: 1s;
}
@keyframes headShake{
	0%{
		transform: translate3d(0,0,0);
	}
	6.5%{
		transform: translate3d(-6px,0,0) rotateY(-9deg);
	}
	18.5%{
		transform: translate3d(5px,0,0) rotateY(7deg);
	}
	31.5%{
		transform: translate3d(-3px,0,0) rotateY(-5deg);
	}
	43.5%{
		transform: translate3d(2px,0,0) rotateY(3deg);
	}
	50%{
		transform: translate3d(0,0,0);
	}
}
.rubberBank{
	animation-name: rubberBank;
	animation-duration: 1s;
	
}
@keyframes rubberBank{
	from{
		transform: scale3d(1,1,1);
	}
	30% {
		transform: scale3d(1.25,0.75,1);
	}
	40% {
		transform: scale3d(0.75,1.25,1);
	}
	50% {
		transform: scale3d(1.15,0.85,1);
	}
	65%{
		transform: scale3d(0.95,1.05,1);
	}
	75%{
		transform: scale3d(1.05,0.95,1);
	}
	to{
		transform: scale3d(1,1,1);
	}
}
.wobble {
  animation-name: wobble;
  animation-duration: 1s
}
@keyframes wobble {
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
.jello {
  animation-name: jello;
  animation-duration: 1s;
  transform-origin: center;
}
@keyframes jello {
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}



</style>