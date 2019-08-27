chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
  	chrome.tabs.getSelected(null,function(tab) {
  		if (tab.url.includes("app/likes-you")) {
  			setTimeout(function(){ showLoading(); }, 500);
  			setTimeout(function(){ unlockMatches(); }, 3000);
  		}
	});
  }
});

function showLoading() {
	chrome.tabs.executeScript(null, 
		{code:"document.body.innerHTML = document.body.innerHTML.replace('Upgrade to Gold to see people who already liked you.', 'Loading TindrUnblur, please wait...')"});
}

function unlockMatches() {
	chrome.tabs.executeScript(null, 
		{code:"document.body.innerHTML = document.body.innerHTML.replace('Loading TindrUnblur, please wait...', 'Enjoy the magic of TindrUnblur 🔥')"});

	chrome.tabs.executeScript(null, 
		{code:"document.body.innerHTML = document.body.innerHTML.replace('><span class=\"button__text Pos(r) Z(1)\">See Who Likes You</span></button>', 'hidden=\"true\"><span class=\"button__text Pos(r) Z(1)\">See Who Likes You</span></button>')"});

	for (var i = 0; i < 11; i++) { 
		chrome.tabs.executeScript(null, 
		{code:"document.body.innerHTML = document.body.innerHTML.replace('Blur(12px)::a', 'Blur(0px)::a')"});
	}
}