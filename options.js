document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储加载保存的刷新时间
    chrome.storage.sync.get(['refreshTime'], function(result) {
      const refreshTime = result.refreshTime || '08:00'; // 默认刷新时间为早上8点
      document.getElementById('refreshTime').value = refreshTime;
    });
  
    // 当点击保存按钮时
    document.getElementById('saveButton').addEventListener('click', function() {
      const refreshTime = document.getElementById('refreshTime').value;
      // 将刷新时间保存到本地存储
      chrome.storage.sync.set({ refreshTime: refreshTime }, function() {
        console.log('Refresh time saved: ' + refreshTime);
      });
    });
  });
  