chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'messagingEx1ID',
    innerBounds: { width: 800, height: 500 }
  });
});
