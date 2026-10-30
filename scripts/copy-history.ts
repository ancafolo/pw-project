import fs from 'fs';
import path from 'path';

const reportHistoryDir = path.join('allure-report', 'history');
const resultsDir = 'allure-results';
const resultsHistoryDir = path.join(resultsDir, 'history');

function copyHistory(): void {
  // wipe stale results from the previous run so they don't duplicate,
  // but do it BEFORE touching allure-report so we can still read its history
  fs.rmSync(resultsDir, { recursive: true, force: true });
  fs.mkdirSync(resultsDir, { recursive: true });

  if (fs.existsSync(reportHistoryDir)) {
    fs.cpSync(reportHistoryDir, resultsHistoryDir, { recursive: true });
    console.log('[allure] history carried forward for trend graphs.');
  } else {
    console.log('[allure] no previous report history found — starting fresh.');
  }
}

copyHistory();