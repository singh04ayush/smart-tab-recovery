


chrome.runtime.onInstalled.addListener(() => {
  console.log("Smart Tab Recovery Extension Installed.");
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  // Save closed tab info (URL, title, etc.)
  chrome.tabs.get(tabId, (tab) => {
    const tabInfo = {
      title: tab.title,
      url: tab.url,
      closedAt: Date.now(),
    };
    chrome.storage.local.get({ closedTabs: [] }, (result) => {
      const closedTabs = result.closedTabs || [];
      closedTabs.push(tabInfo);
      chrome.storage.local.set({ closedTabs });
    });
  });
});
