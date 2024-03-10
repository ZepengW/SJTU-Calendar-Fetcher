chrome.storage.sync.get(['refreshTime'], function(result) {
    const refreshTime = result.refreshTime || '08:00'; // 默认刷新时间为早上8点
    const [hour, minute] = refreshTime.split(':').map(Number);
    chrome.alarms.create({ delayInMinutes: computeDelay(hour, minute), periodInMinutes: 24 * 60 });
  });
  
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'dailyDataFetcher') {
      fetchData();
    }
  });
  
  function computeDelay(targetHour, targetMinute) {
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute);
    let delay = target - now;
    if (delay < 0) {
      delay += 24 * 60 * 60 * 1000; // 如果目标时间已过，则等到下一天同一时间
    }
    return delay / 60000; // 转换为分钟
  }
  
  function fetchData() {
    // 在这里执行获取数据的逻辑
    console.log('Fetching data...');
    // 发送通知
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Data Fetcher',
      message: 'Data fetched successfully!'
    });
  }
  