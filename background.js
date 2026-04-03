chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading" && tab.url) {

    if (tab.url.startsWith("https://councilrock.instructure.com/")) {
      const redirectUrl = chrome.runtime.getURL("locked.html");
      chrome.tabs.update(tabId, { url: redirectUrl });
    }

  }
});
