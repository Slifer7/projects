//#include <stdio.h>
//#include <conio.h>
//
//void main()
//{
//	const int MAX = 100;
//
//	int n;
//	printf("Nhap so phan tu cua mang:");
//	scanf_s("%d", &n);
//
//	int a[MAX];
//	for (int i = 0; i < n; i++)
//	{
//		printf("Nhap a[%d]:", i);
//		scanf_s("%d", &a[i]);
//	}
//
//	printf("Mang vua nhap la:");
//	for (int i = 0; i < n; i++)
//	{
//		printf("%d ", a[i]);
//	}
//
//	_getch();
//}

#include <iostream>
using namespace std;

void main()
{
	const int MAX = 100;

	int n;
	cout << "Nhap so phan tu cua mang:";
	cin >> n;

	int a[MAX];
	for (int i = 0; i < n; i++)
	{
		cout << "Nhap a[" << i << "]:";
		cin >> a[i];
	}

	cout << "Mang vua nhap la:";
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}

	// Tìm số nhỏ nhất
	int min = a[0];

	for (int i = 1; i < n; i++)
	{
		if (a[i] < min)
			min = a[i];
	}

	printf("So nho nhat cua mang la: %d", min);

	// Kiểm tra mảng có toàn số dương hay không
	bool hasNegative = false;

	for (int i = 0; i < n; i++)
	{
		if (a[i] < 0) // Phát hiện số âm
		{
			hasNegative = false; // Hạ cờ
			break; // Thoát luôn khỏi vòng lặp
		}
	}

	if (hasNegative == true)
		printf("Mang co chua so am");
	else
		printf("Mang khong co so am nao");

	int sum = 0;

	for (int i = 0; i < n; i++)
	{
		if (a[i] % 2 == 0)
			sum += a[i];
	}

	printf("Tong cac so chan la: %d", sum);

	cin.get();
}