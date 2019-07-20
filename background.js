chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    console.log("Callledddd");
    let msg = {
      'msg': "Helloooo"
    };
    chrome.tabs.sendMessage(tab.id, msg);
  });

// browserAction.onClicked is not triggered if popup is there.