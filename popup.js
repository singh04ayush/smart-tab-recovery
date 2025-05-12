document.addEventListener("DOMContentLoaded", () => {
  // Retrieve closed tabs from local storage
  chrome.storage.local.get({ closedTabs: [] }, (result) => {
    const tabList = document.getElementById("tab-list");
    const closedTabs = result.closedTabs || [];

    closedTabs.forEach((tab) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${tab.url}" target="_blank">${tab.title}</a>`;
      tabList.appendChild(listItem);
    });
  });

  // Clear saved tabs button
  document.getElementById("clearTabs").addEventListener("click", () => {
    chrome.storage.local.set({ closedTabs: [] });
    alert("Cleared all saved tabs!");
  });
});
