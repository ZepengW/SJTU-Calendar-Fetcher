document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fetchButton').addEventListener('click', function() {
    fetchData();
  });
});

function fetchData() {
  // 执行获取数据的逻辑
  console.log('Fetching data manually...');
  // 发送通知
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.png',
    title: 'Data Fetcher',
    message: 'Data fetched manually!'
  });
}
