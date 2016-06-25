//#include <stdio.h>
//#include <conio.h>
//
//void XuatHcn(); // Khai báo nguyên mẫu hàm
//
//void main()
//{
//	XuatHcn(); // Gọi hàm
//	_getch();  // Đợi bấm phím bất kì
//}
//
//// Cài đặt hàm xuất HCN
//void XuatHcn()
//{
//	printf("****\n");
//	printf("****\n");
//	printf("****\n");
//}

//#include <iostream>
//using namespace std;
//
//void XuatHcn(); // Khai báo nguyên mẫu hàm
//
//void main()
//{
//	XuatHcn(); // Gọi hàm
//	cin.get();  // Đợi bấm phím bất kì
//}
//
//// Cài đặt hàm xuất HCN
//void XuatHcn()
//{
//	cout << "****" << endl;
//	cout << "****" << endl;
//	cout << "****" << endl;
//}
//
//bool IsEven(int n)
//{
//	if (n % 2 == 0)
//		return true;
//	else
//		return false;
//}

//#include <iostream>
//using namespace std;
//
//int square(int x);
//
//void main()
//{
//	int n = 3;
//	int x = square(n);
//
//	cout << x;
//}
//
//int square(int x)
//{
//	return x * x;
//}

#include <iostream>
using namespace std;

void DrawIsocelesTriangle(char c, int rows)
{
	// Vẽ tam giác cân
}

void DrawSquare(char c, int rows)
{
	// Vẽ hình vuông
}

void Draw(void fn(char, int), 
	char c = '*', int rows = 3)
{
	fn(c, rows);
}


void main()
{
	
}
