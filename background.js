chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({color: '#3aa757'}, function() {
      console.log("The color is 3aa757.");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: '*'},
          })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
  });
