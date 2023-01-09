#include <bits/stdc++.h>
using namespace std;

const int N = 1e5 + 10;

stack<char> stk;

int main() {
  string str;
  cin >> str;
  for (const char &ch : str) {
    if (ch == '(') stk.push('(');
    else if (ch == ')') {
      if (!stk.empty()) stk.pop();
      else { cout << "NO"; return 0; }
    }
  }
  cout << (stk.empty() ? "YES" : "NO");
}