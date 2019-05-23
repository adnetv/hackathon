document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.getElementById('Fantasy');
    button1.addEventListener('click', function () {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {data: button1.textContent});
			});
		});
		var button2 = document.getElementById('Conspiracy');
    button2.addEventListener('click', function () {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {data: button2.textContent});
			});
		});
		var button3 = document.getElementById('Noir');
    button3.addEventListener('click', function () {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {data: button3.textContent});
			});
    });
});
