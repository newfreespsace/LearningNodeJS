#include <bits/stdc++.h>
using namespace std;

const int N = 1e6 + 10, P = 13331;

char ch;

string s;

int n, tot, max_val;
unsigned long long h1[N], h2[N], p[N];

unsigned long long query(int l, int r) { return h1[r] - h1[l - 1] * p[r - l + 1]; }

bool check(int x) {
    bool flag = false;

    for (int i = x + 1; i < n - x; i++) {
        if (query(i - x, i) == query(i, i + x)) {
            if (s[i - x] == '#' && s[i + x] == '#')
                flag = true;
        }
    }

    if (flag)
        return true;
    return false;
}

int main() {
    freopen("1.in", "r", stdin);
    p[0] = 1;
    for (int i = 0; i < N; i++) p[i + 1] = p[i] * P;
    while (cin >> ch && ch != 'E') {
        tot++;
        max_val = -0x3f3f3f3f;
        s = "";
        s += '#';
        s += ch;
        while (cin >> ch) {
            s += '#';
            s += ch;
        }
        s += '#';
        cout << s << endl;
        n = s.size();

        for (int i = 0; i < n; i++) h1[i + 1] = h1[i] * P + s[i];
        for (int i = n; i > 0; i--) h2[i - 1] = h2[i] * P + s[i];

        int l = 1, r = n;
        while (l < r) {
            int mid = (l + r + 1) / 2;
            if (check(mid))
                l = mid;
            else
                r = mid - 1;
        }

        printf("Case %d: %d\n", tot, max_val);
    }

    return 0;
}