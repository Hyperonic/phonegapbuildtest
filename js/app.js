var app = angular.module('soundboard', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

app.controller('SoundBoardCtrl', function ($scope, $window, $http, $interval) {

	var url = "https://a2bapp.com/api/user/?apikeypublic=42fb2c725f112115c67a424aed26fb8ce3cd1d0e30fb7f455cc337b35d76fd62&app_id=183dcce812d78798659eb538aa719a9c28c36c05df80c9b0aef24938049799a8&lat=31.5016&lon=74.2722&uuid=1axkg5xthxa1457112755271&apikeypublic=8769b446d5d79c82a37877897492fb7a2a0408368c116450a0782a4b46991b88";
	var url2 = 'https://a2bapp.com/api/vehicles/?apikeypublic=fad8a99a829e82b024b19f49f82a0885e1e6b584bf87704d2f4f73d8e3f2d1f7&app_id=183dcce812d78798659eb538aa719a9c28c36c05df80c9b0aef24938049799a8&lat=31.5017&lon=74.2722&uuid=6he1gtllvw01455593250742';
	var url3 = 'https://a2bapp.com/api/offer/?group_id[]=1&group_id[]=2&zone_id[]=1&zone_id[]=2&eta_distance[]=0.1348663766314481&eta_time[]=0.012222222222222223&quote_id[]=BUpz6PwAYVHBpyExwh5NlEuiHeOzzvUU78tjGbqKv3&offer_to_not=-KC4Qtw45rTSgkRM82YA&reply_to_message=%22%22&status=4&apikeypublic=42fb2c725f112115c67a424aed26fb8ce3cd1d0e30fb7f455cc337b35d76fd62&app_id=183dcce812d78798659eb538aa719a9c28c36c05df80c9b0aef24938049799a8&lat=31.5016&lon=74.2722&uuid=1axkg5xthxa1457112755271'
	$interval(function(){
		$http.get(url)
	        .success(function(res) {
	    })
	        .error(function(err) {
	    });
    }, 15000);

	$scope.media = null;

	$scope.model = {
		showDelete: false,
		showMove: false,
		sounds: [
			{
				'title': 'Cow',
				'image': 'img/animals/cow-icon.png',
				'desc': 'Mooo',
				'file': '/sounds/cow.mp3'
			},
			{
				'title': 'Dolphin',
				'image': 'img/animals/dolphin-icon.png',
				'desc': 'Whistle',
				'file': '/sounds/dolphin.mp3'
			},
			{
				'title': 'Frog',
				'image': 'img/animals/frog-icon.png',
				'desc': 'Croak',
				'file': '/sounds/frog.mp3'
			},
			{
				'title': 'Bird',
				'image': 'img/animals/bird-icon.png',
				'desc': 'Chirp',
				'file': '/sounds/bird.mp3'
			},
			{
				'title': 'Pig',
				'image': 'img/animals/pig-icon.png',
				'desc': 'Oink',
				'file': '/sounds/pig.mp3'
			},
			{
				'title': 'Dog',
				'image': 'img/animals/puppy-icon.png',
				'desc': 'Bark',
				'file': '/sounds/dog.mp3'
			},
			{
				'title': 'Cat',
				'image': 'img/animals/black-cat-icon.png',
				'desc': 'Meow',
				'file': '/sounds/cat.mp3'
			}
		]
	};

	$scope.deleteSound = function ($index) {
		$scope.model.sounds.splice($index, 1);
	};

	$scope.moveSound = function (sound, fromIndex, toIndex) {
		$scope.model.sounds.splice(fromIndex, 1);
		$scope.model.sounds.splice(toIndex, 0 , sound);
	};

	$scope.play = function (sound) {

		if ($scope.media) {
			$scope.media.pause();
		}

		if ($window.cordova) {
			console.log("Play called on device");
			ionic.Platform.ready(function () {

				var src = sound.file;
				if (ionic.Platform.is('android')) {
					src = '/android_asset/www' + src;
				}
				$scope.media = new $window.Media(src);
				$scope.media.play();
			});
		} else {
			$scope.media = new Audio();
			$scope.media.src = sound.file;
			$scope.media.load();
			$scope.media.play();
		}



	};
});

