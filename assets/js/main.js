/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	var $nav = $('#nav');

	if ($nav.length > 0) {

		// Shrink effect.
		$main
			.scrollex({
				mode: 'top',
				enter: function () {
					$nav.addClass('alt');
				},
				leave: function () {
					$nav.removeClass('alt');
				},
			});

		// Links.
		var $nav_a = $nav.find('a');

		$nav_a
			.scrolly({
				speed: 1000,
				offset: function () { return $nav.height(); }
			})
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$nav_a
					.removeClass('active')
					.removeClass('active-locked');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					initialize: function () {

						// Deactivate section.
						if (browser.canUse('transition'))
							$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($nav_a.filter('.active-locked').length == 0) {

							$nav_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000
	});

	var mainMachineCpu = $('#main-machine-cpu');
	var mainMachineCpuChart = new Chart(mainMachineCpu, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [4, 14]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'Intel Core i7-8559U'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var mainMachineRam = $('#main-machine-ram');
	var mainMachineRamChart = new Chart(mainMachineRam, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [16, 56]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'RAM'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var mainMachineDisk = $('#main-machine-disk');
	var mainMachineDiskChart = new Chart(mainMachineDisk, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [512, 1280]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'SSD'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});

	var subMachineCpu = $('#sub-machine-cpu');
	var subMachineCpuChart = new Chart(subMachineCpu, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [2, 16]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'Intel Core i3-6006U'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var subMachineRam = $('#sub-machine-ram');
	var subMachineRamChart = new Chart(subMachineRam, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [8, 64]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'RAM'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var subMachineDisk = $('#sub-machine-disk');
	var subMachineDiskChart = new Chart(subMachineDisk, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [256, 1536]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'SSD'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});

	var serverMachineCpu = $('#server-machine-cpu');
	var serverMachineCpuChart = new Chart(serverMachineCpu, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [12, 6]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'Intel Xeon E5-2420 x2'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var serverMachineRam = $('#server-machine-ram');
	var serverMachineRamChart = new Chart(serverMachineRam, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [48, 24]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'RAM'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
	var serverMachineDisk = $('#server-machine-disk');
	var serverMachineDiskChart = new Chart(serverMachineDisk, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					'#c2ecff',
					'#636363'
				],
				data: [1024, 768]
			}]
		},
		options: {
			title: {
				display: true,
				text: 'HDD'
			},
			tooltips:{
				enabled:false
			},
			cutoutPercentage:80
		}
	});
})(jQuery);