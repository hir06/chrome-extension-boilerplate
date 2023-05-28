chrome.runtime.onInstalled.addListener(() => {
    chrome.developerPrivate.updateExtensionReload({
      extensionId: chrome.runtime.id,
      reloadFlags: {
        fileSystem: true,
        load: true,
        failQuietly: true,
      },
    });
  });
  
  chrome.developerPrivate.onItemStateChanged.addListener((eventData) => {
    if (eventData.event_type === 'ON_RELOAD_MANIFEST_CHANGED') {
      chrome.runtime.reload();
    }
  });