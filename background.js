chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable();
});

function checkTab(tabId, url) {
  if (!url) return;

  if (url === "https://councilrock.instructure.com/") {
    chrome.action.enable(tabId);
  } else {
    chrome.action.disable(tabId);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    checkTab(tabId, tab.url);
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  checkTab(tab.id, tab.url);
});
