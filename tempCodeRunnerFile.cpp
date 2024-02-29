#include<iostream>
#include<vector>
using namespace std;

int solve(int idx, vector<int> prices, vector<int> profit, int last, int transactions)
{
    if( idx >= prices.size() || transactions == 0 )
    return 0;

    int include = 0;

    if( last == -1 || prices[idx] >= prices[last] )
    include = profit[idx] + solve(idx+1, prices, idx, transactions-1);

    int exclude = solve(idx+1, prices, profit, last,  transactions);

    return max(include, exclude);
}

int main(){
    vector<int> prices{1, 5, 3, 4, 6};
    vector<int> profit{2, 3, 4, 5, 6};
    int transaction = 3;
    cout << "ans : " << solve(0, prices, profit, -1, transaction);
    return 0;
}