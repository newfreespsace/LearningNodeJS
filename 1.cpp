#include <bits/stdc++.h>
using namespace std;

int n, mp[10][10];

int count(int x) { // 数 x 的二进制表示中有多少个 1
  int cnt = 0;
  while (x) {
    if (x & 1) cnt++;
    x >>= 1;
  }
  return cnt;
}

void press(int x, int y) {
  mp[x][y] = !mp[x][y];
  mp[x][y + 1] = !mp[x][y + 1];
  mp[x][y - 1] = !mp[x][y - 1];
  mp[x + 1][y] = !mp[x + 1][y];
  mp[x - 1][y] = !mp[x - 1][y];
}

int solve() {
  int ans = 100; 
  int bak[10][10];
  
  for (int stat = 0; stat < (1 << 5); stat++) {
    int cnt = count(stat);
    if (cnt >= ans) continue;
    memcpy(bak, mp, sizeof mp);

    for (int bit = 0; bit < 5; bit++) {
      if (((stat >> bit) & 1) == 0) continue;
      int x = bit / 5, y = bit % 5;
      press(x + 1, y + 1);
    }

    for (int i = 2; i <= 5; i++) {
      for (int j = 1; j <= 5; j++)
      if (mp[i - 1][j] == 0) {
        cnt++;
        press(i, j);
      }
    }

    bool flag = true;
    for (int j = 1; j <= 5; j++)
      if (mp[5][j] == 0) flag = false;

    if (flag) ans = min(ans, cnt);
    memcpy(mp, bak, sizeof mp);
  }
  return ans;
}

int main() {
  // freopen("1.in", "r", stdin);
  cin >> n;
  while (n--) {
    for (int i = 1; i <= 5; i++) {
      for (int j = 1; j <= 5; j++) {
        char ch;
        cin >> ch;
        mp[i][j] = ch - '0';
      }
    }
    int ans = solve();
    cout << (ans > 6 ? -1 : ans) << "\n";
  }
}