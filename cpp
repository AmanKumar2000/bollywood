/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/
#include <bits/stdc++.h>
using namespace std;

int main()
{ string ans="";
 vector<string> v;
for(int i=0;i<1927;i++){
string s;
getline(cin, s);
    int l=s.length();
    if(l<=4)
    continue;
    if(s[l-1]==')')
l-=11;
    ans+= '"'+ s.substr(4,l)+ "\" , ";
}



    cout<<ans;


    return 0;
}
