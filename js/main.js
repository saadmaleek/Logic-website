$(document).ready(function(){
    $('.nav-item').on('click', function() {
        $('.active-link').removeClass('active-link');
        $(this).addClass('active-link');
    });
    
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position>= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        autopaly:true,
        dotsSpeed: 800,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    const container = document.querySelector('#tabs');
        const tab1 = document.querySelector('#tab-1');
        const tab2 = document.querySelector('#tab-2');
        const tab3 = document.querySelector('#tab-3');
        const tab4 = document.querySelector('#tab-4');

      document.getElementById('web-design').addEventListener('click', () => {
        console.log("web-design");
        tab1.style.display = "block";
        tab2.style.display = "none";
        tab3.style.display = "none";
        tab4.style.display = "none";
        document.getElementById('web-design').classList.add('tabs-button-active');
        document.getElementById('app-design').classList.remove('tabs-button-active');
        document.getElementById('gra-design').classList.remove('tabs-button-active');
        document.getElementById('game-design').classList.remove('tabs-button-active');
       
      })
      document.getElementById('app-design').addEventListener('click', () => {
        console.log("app-design");
        tab1.style.display = "none";
        tab2.style.display = "block";
        tab3.style.display = "none";
        tab4.style.display = "none";
        document.getElementById('web-design').classList.remove('tabs-button-active');
        document.getElementById('app-design').classList.add('tabs-button-active');
        document.getElementById('gra-design').classList.remove('tabs-button-active');
        document.getElementById('game-design').classList.remove('tabs-button-active');
      })
      document.getElementById('gra-design').addEventListener('click', () => {
        console.log("graphics-design");
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "block";
        tab4.style.display = "none";
        document.getElementById('web-design').classList.remove('tabs-button-active');
        document.getElementById('app-design').classList.remove('tabs-button-active');
        document.getElementById('gra-design').classList.add('tabs-button-active');
        document.getElementById('game-design').classList.remove('tabs-button-active');
        
      })
      document.getElementById('game-design').addEventListener('click', () => {
        console.log("game-design");
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "none";
        tab4.style.display = "block";
        document.getElementById('web-design').classList.remove('tabs-button-active');
        document.getElementById('app-design').classList.remove('tabs-button-active');
        document.getElementById('gra-design').classList.remove('tabs-button-active');
        document.getElementById('game-design').classList.add('tabs-button-active');
        
      })

      let play_state = 0;
        let vol_state = 1;
        let last_vol = 1;
        let a;

var width = document.querySelector(".volume-button").getBoundingClientRect().width;
document.querySelector(".present-volume").style.width = `${(width-18)*last_vol}px`;
document.onload = function() {
    let m = document.querySelector(".my-video")
    var minutes = Math.floor(m.duration / 60);
    minutes = (minutes > 9) ? minutes : `0${minutes}`
    var seconds = Math.floor(((m.duration / 60) - minutes) * 60);
    seconds = (seconds > 9) ? seconds : `0${seconds}`
    document.querySelector(".time-duration").innerHTML = `00:00/${minutes}:${seconds}`;
}


document.querySelector(".play-pause").onclick = function() {
    document.querySelector('.video-cover').innerHTML = '<i class="fas fa-play"></i>';
    if (play_state == 0 || play_state == 2) {
        play_state = 1;
        document.querySelector(".my-video").play()
        this.innerHTML = `<i class="fas fa-pause"></i>`;
        document.querySelector(".video-cover").style.opacity = "0";
    } else {
        play_state = 0;
        document.querySelector(".my-video").pause()
        this.innerHTML = `<i class="fas fa-play"></i>`;
        document.querySelector(".video-cover").style.opacity = "1";

    }
}

document.querySelector(".my-video").onclick = function() {
    e = document.querySelector(".play-pause")
    document.querySelector('.video-cover').innerHTML = '<i class="fas fa-play"></i>';
    if (play_state == 0) {
        play_state = 1;
        document.querySelector(".my-video").play()
        e.innerHTML = `<i class="fas fa-pause"></i>`;
        document.querySelector(".video-cover").style.opacity = "0";

    } else {
        play_state = 0;
        document.querySelector(".my-video").pause()
        e.innerHTML = `<i class="fas fa-play"></i>`;
        document.querySelector(".video-cover").style.opacity = "1";
    }
}


document.querySelector(".video-cover").onclick = function() {
    e = document.querySelector(".play-pause")
    document.querySelector('.video-cover').innerHTML = '<i class="fas fa-play"></i>';

    if (play_state == 0 || play_state == 2) {
        play_state = 1;
        document.querySelector(".my-video").play()
        e.innerHTML = `<i class="fas fa-pause"></i>`;
        document.querySelector(".video-cover").style.opacity = "0";

    } else {
        play_state = 0;
        document.querySelector(".my-video").pause()
        e.innerHTML = `<i class="fas fa-play"></i>`;
        document.querySelector(".video-cover").style.opacity = "1";
    }
}

var $video=$('.my-video');
//fullscreen button clicked
$('.full-screen').on('click', function() {
$(this).toggleClass('enterFullscreenBtn');
    if($.isFunction($video.get(0).webkitEnterFullscreen)) {
              if($(this).hasClass("enterFullscreenBtn")){
                  document.querySelector('.video-element').webkitRequestFullScreen();
                  document.querySelector('.control-box').style.height = '7%';
              }   
              else{ 
                document.webkitCancelFullScreen();  
                document.querySelector('.control-box').style.height = '10%';
              }
    }  
    else if ($.isFunction($video.get(0).mozRequestFullScreen)) {
              if($(this).hasClass("enterFullscreenBtn")){
                  document.querySelector('.video-element').mozRequestFullScreen(); 
                  document.querySelector('.control-box').style.height = '7%';
              }
               else{
                  document.mozCancelFullScreen();  
                  document.querySelector('.control-box').style.height = '10%';
               }
    }
    else { 
           alert('Your browsers doesn\'t support fullscreen');
    }
});

document.querySelector(".volume-button").oninput = function() {
    document.querySelector(".my-video").volume = this.value
    last_vol = this.value
    console.log(last_vol)
    var width = document.querySelector(".volume-button").getBoundingClientRect().width;
    document.querySelector(".present-volume").style.transform = `scaleX(${last_vol})`
    if (this.value == 0) {
        vol_state = 0;
        document.querySelector(".mute-button").innerHTML = `<i class="fas fa-volume-off"></i>`
    } else {
        vol_state = 1;
        document.querySelector(".mute-button").innerHTML = `<i class="fas fa-volume-up"></i>`
    }
}

document.querySelector(".mute-button").onclick = function() {
    var width = document.querySelector(".volume-button").getBoundingClientRect().width;
    if (vol_state == 1) {
        document.querySelector(".my-video").volume = 0;
        vol_state = 0;
        this.innerHTML = `<i class="fas fa-volume-off"></i>`;
        document.querySelector(".volume-button").value = 0;
        document.querySelector(".present-volume").style.transform = `scaleX(0)`
    } else {
        document.querySelector(".my-video").volume = last_vol;
        document.querySelector(".volume-button").value = last_vol;
        vol_state = 1;
        this.innerHTML = `<i class="fas fa-volume-up"></i>`;
        document.querySelector(".present-volume").style.transform = `scaleX(${last_vol})`
    }
}

document.querySelector(".my-video").ontimeupdate = function() {
    var percentage = Math.floor((100 / this.duration) *
        this.currentTime);
    document.querySelector(".progress-slider").value = percentage;
    var width = document.querySelector(".progress-slider").getBoundingClientRect().width;
    document.querySelector(".completed-track").style.width = `${width*percentage/100}px`

    var minutes = Math.floor(this.duration / 60);
    minutes = (minutes > 9) ? minutes : `0${minutes}`
    var seconds = Math.floor(((this.duration / 60) - minutes) * 60);
    seconds = (seconds > 9) ? seconds : `0${seconds}`

    var c_minutes = Math.floor(this.currentTime / 60);
    c_minutes = (c_minutes > 9) ? c_minutes : `0${c_minutes}`

    var c_seconds = Math.floor(((this.currentTime / 60) - c_minutes) * 60);
    c_seconds = (c_seconds > 9) ? c_seconds : `0${c_seconds}`
    document.querySelector(".time-duration").innerHTML = `${c_minutes}:${c_seconds}/${minutes}:${seconds}`

    if (this.duration == this.currentTime) {
        document.querySelector(".progress-slider").value = 0;
        var width = document.querySelector(".progress-slider").getBoundingClientRect().width;
        document.querySelector(".completed-track").style.width = `${0}px`
        document.querySelector(".play-pause").innerHTML = `<i class="fas fa-redo-alt"></i>`;
        document.querySelector('.video-cover').innerHTML = '<i class="fas fa-redo-alt"></i>';
        play_state = 2;
        document.querySelector(".video-cover").style.opacity = "1";
    }
}

document.querySelector(".progress-slider").oninput = function() {
    e = document.querySelector(".my-video");
    var percentage = this.value;
    var ctime = Math.floor((e.duration * this.value) / 100)
    e.currentTime = ctime;
    var width = document.querySelector(".progress-slider").getBoundingClientRect().width;
    document.querySelector(".completed-track").style.width = `${width*percentage/100}px`
}

document.querySelector(".video-element").onmousemove = function() {
    clearTimeout(a);
    document.querySelector(".video-element .control-box").style.transform = "none";
    document.querySelector(".video-element .control-box").style.opacity = "1";
    document.querySelector(".video-cover").style.height = "90%";
    a = setTimeout(function() {
        document.querySelector(".video-element .control-box").style.transform = "translateY(100%)";
        document.querySelector(".video-element .control-box").style.opacity = "0";
        document.querySelector(".video-cover").style.height = "50%";
    }, 3000)

}


document.querySelector('.my-video').onwaiting = function() {
  document.querySelector('.video-cover').innerHTML = '<i class="fas fa-spinner rotating"></i>'
  document.querySelector('.video-cover').style.opacity = '1'
}

document.querySelector('.my-video').oncanplay = function() {
  if (play_state != 0 && play_state != 2) {
    document.querySelector('.video-cover').style.opacity = '0';
  }
  document.querySelector('.video-cover').innerHTML = '<i class="fas fa-play"></i>';
}




(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});

$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
        $('.filter').show(300);
    } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
});

$('.gallery-list-item').click(function() {
    $(this).addClass('lp-active-item').siblings().removeClass('lp-active-item');
});



  });
