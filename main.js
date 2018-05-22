// $(function(){
// let plusButton = $('#menu');
// let plusButtonV = $('#plus path:first-child');
// let twitter = $('#twitter');
// let facebook = $('#facebook');
// let instagram = $('#instagram');
// let youtube = $('#youtube');
// let iconArray = [twitter, facebook, instagram, youtube];
// let iconArrayR = [youtube,instagram, facebook, twitter];
// let i= 0;

// TweenMax.set(iconArray, {scale:0, x:80, y:80})

// plusButton.on("click", function(){

// 	if (i%2==0) {
// 		let tl = new TimelineMax();
		
// 		tl.to(plusButton, 0.5, {
// 			transformOrgin:'50% 50%',
// 			scale:0.9,
// 			ease:Elastic.easeOut
// 		})
// 		.staggerTo(iconArray, 1.5, {
// 			opacity:1,
// 			transformOrigin:'50% 50%',
// 			scale:1,
// 			ease:Elastic.easeOut
// 		}, 0.15, '-=0.4')
// 		.to(plusButtonV, 0.4, {
// 			transformOrigin:'50% 50%',
// 			rotation:90,
// 			ease:Bounce.easeOut
// 		}, '-=1.9')
// 	i++
// 	}
// 	else {
// 		let tl = new TimelineMax();
// 		tl.to(plusButton, 0.7, {
// 			scale:1,
// 			ease:Elastic.easeOut
// 		})
// 		.staggerTo(iconArrayR, 0.35, {
// 			scale:0,
// 			ease:Linear.easeNone,
// 			opacity:0.4
// 		}, 0.15, '-=0.4')
// 		.to(plusButtonV, 0.4, {
// 			transformOrigin:'50% 50%',
// 			rotation:0,
// 			ease:Bounce.easeOut
// 		}, '-=0.9')
// 	i++
// 	}


// })
	

// })
$(function(){

	let outerCircle = $('#outer-circle'),
		innerCircle = $('#inner-circle'),
		actionButton = $('#action-button'),
		youtube = $('#youtube'),
		messenger = $('#messenger'),
		twitter = $('#twitter'),
		instagram = $('#instagram'),
		iconArray = [youtube, messenger, twitter, instagram];

	let i= 0;

	TweenLite.set(outerCircle, {transformOrigin: '50% 50%', scale:0})
	TweenLite.set(innerCircle, {transformOrigin: '50% 50%', scale:0.5})
	TweenLite.set(iconArray, {transformOrigin: '50% 50%', scale:0, opacity:0})

	actionButton.on("click", function(){
		
		if (i%2==0) {
			let tl = new TimelineMax();
			tl.to(plus, 0.2, {
				transformOrigin: '50% 50%',
				rotation:45
				})
				.to(innerCircle, 0.1, {scale:1, ease: Power0.easeNone})
				.to(outerCircle, 0.5, {scale:1, ease:Elastic. easeOut.config( 1, 1)}, '-=0.1')
				.staggerTo(iconArray, 0.1, {scale:1, opacity:1},0.05, '-=0.4')

		} else {
		    TweenMax.to(outerCircle, 0.2, {scale: 0})
		    TweenMax.to(innerCircle, 0.8, {scale: 0.5, ease:Elastic. easeOut.config( 1, 0.75)})
		    TweenMax.to(plus, 0.2, {rotation: 0})
		    TweenMax.to(iconArray, 0.1, {scale:0});

		}
		i++;
	})	

})


