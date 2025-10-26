// Trigger UI when extension icon is clicked
browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, {
    code: 'showUI();'
  });
});

