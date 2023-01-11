# include <bits/stdc++.h>
using namespace std;

queue<int> q[4];
int A[6000];

int main() {
    for (int i = 0; i < 4; i++) q[i].push(1);
    for (int i = 1; i <= 5842; i++) {
        int min_val = INT_MAX;
        for (int j = 0; j < 4; j++) min_val = min(min_val, q[j].front());
        for (int j = 0; j < 4; j++) {
            if (min_val == q[j].front()) 
                q[j].pop();
        }
        A[i] = min_val;
        q[0].push(min_val * 2);
        q[1].push(min_val * 3);
        q[2].push(min_val * 5);
        q[3].push(min_val * 7);
    }
    for (int i = 1; i <= 100; i++) cout << A[i] << " ";
}