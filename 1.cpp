# include <bits/stdc++.h>
using namespace std;

priority_queue<long long, vector<long long>, greater<long long>> q;
int n;
long long  res, sum, ans;
int A[6000];

int get(int x){
	if(x == 11 || x == 12 || x == 13) return 4;
	while(x > 10) x %= 10;
	if((x > 3 && x < 10) || x == 0) return 4;
	return x;
}

int main(){
  // freopen("1.in", "r", stdin);
	q.push(1);
	ans = 1;
	sum = 1;

		while(sum <= 5842){
			if (ans * 2 < INT_MAX) q.push(ans * 2);
			if (ans * 3 < INT_MAX) q.push(ans * 3);
			if (ans * 5 < INT_MAX) q.push(ans * 5);
			if (ans * 7 < INT_MAX) q.push(ans * 7);
			ans = q.top();
      A[sum] = ans;
			q.pop();
			while(!q.empty() && ans == q.top()) q.pop();
			sum ++;
		}
    while(cin >> n && n){
		res = get(n);
		
		if(res == 1) printf("The %dst humble number is number %d.\n", n, A[n]);
		else if(res == 2) printf("The %dnd humble number is number %d.\n", n, A[n]);
		else if(res == 3) printf("The %drd humble number is number %d.\n", n, A[n]);
		else printf("The %dth humble number is number %d.\n", n, A[n]);
	}
	
	return 0;
}