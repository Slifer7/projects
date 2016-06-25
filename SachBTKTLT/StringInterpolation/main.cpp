#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Student
{
	string ID;
	string Name;
	float GPA;
};

void ClearBuffer()
{
	fseek(stdin, 0, SEEK_END);
}

void GetInfo(Student& sv)
{
	cout << "Nhap MSSV:";
	getline(cin, sv.ID);

	cout << "Nhap ho va ten:";
	getline(cin, sv.Name);

	cout << "Cho biet diem trung binh:";
	cin >> sv.GPA;
}

void Print(const Student& sv)
{
	cout << "MSSV: " << sv.ID << endl;
	cout << "Ho va ten: " << sv.Name << endl;	
	cout << "DTB: " << sv.GPA << endl;
}

void main()
{
	Student sv;
	GetInfo(sv);

	cout << "Thong tin sinh vien vua nhap:" << endl;
	Print(sv);
	cin.get();
}

//#include <stdio.h>
//#include <conio.h>
//
//struct Student
//{
//	char ID[8];
//	char Name[26];
//	float GPA;
//};
//
//void ClearBuffer()
//{
//	int c;
//	while ((c = getchar() != '\n') && c != EOF);
//}
//
//void GetInfo(Student& sv)
//{
//	printf("Nhap MSSV:");
//	gets_s(sv.ID);
//
//	printf("Nhap ho va ten:");
//	gets_s(sv.Name);
//
//	printf("Cho biet diem trung binh:");
//	scanf_s("%f", &sv.GPA);
//}
//
//void ToString(const Student& sv)
//{
//	printf("MSSV: %s \n", sv.ID);
//	printf("Ho va ten: %s \n", sv.Name);
//	printf("DTB: %.2f \n", sv.GPA);
//}
//
//void main()
//{
//	Student sv;
//	GetInfo(sv);
//
//	printf("Thong tin sinh vien vua nhap:\n");
//	ToString(sv);
//	_getch();
//}


//#include <iostream>
//#include <string>
//using namespace std;
//
//void main()
//{
//	string buffer1;
//	cout << "Nhap chuoi thu nhat:";
//	getline(cin, buffer1);
//
//	string buffer2;
//	cout << "Nhap chuoi thu hai:";
//	getline(cin, buffer2);
//
//	string buffer = buffer1 + buffer2;
//	cout << "Chuoi tong hop la:" << buffer;
//}



//#include <stdio.h>
//#include <conio.h>
//#include <string.h>
//#include <malloc.h>
//
//void main()
//{
//	const int MAX = 100;
//	char buffer1[MAX];
//	char buffer2[MAX];
//
//	printf("Nhap chuoi thu nhat:");
//	gets_s(buffer1);
//
//	printf("Nhap chuoi thu hai:");
//	gets_s(buffer2);
//
//	int len1 = strlen(buffer1);
//	int len2 = strlen(buffer2);
//	int totalLen = len1 + len2 + 1;
//
//	char* buffer = (char*)malloc(totalLen * sizeof(char));
//	strcpy_s(buffer, totalLen, buffer1);
//	strcat_s(buffer, totalLen, buffer2);
//
//	printf("Chuoi tong hop la: %s", buffer);
//
//	_getch();
//	free(buffer); // Thu hồi vùng nhớ đã cấp phát
//}






//#include <iostream>
//#include <string>
//using namespace std;
//
//void main()
//{
//	int year;
//	cout << "Nhap vao nam hien tai:";
//	cin >> year;
//
//	string name;
//	cout << "Nhap vao ho ten:";
//	getline(cin, name);
//
//	cout << "Xin chao " << name << " " << year;
//	cin.get();
//}


//#include <stdio.h>
//#include <conio.h>
//
//void main()
//{
//	const int MAX = 100;
//	char buffer[MAX];
//	
//	printf("Xin nhap ho ten:");
//	gets_s(buffer);
//
//	printf("Xin chao %s", buffer);
//
//	_getch();
//}

//char buffer2[MAX];
//
////printf("Nhap vao mot chuoi:");
////gets_s(buffer1);
//
////printf("Chuoi vua nhap la:");
////puts(buffer1);
//
//int n;
//printf("Nhap vao ten:");
//scanf_s("%d", &n);
//
//printf("So nguyen vua nhap la:");
//printf("%d", n);
//
//printf("Nhap vao mot chuoi:");
//gets_s(buffer2);
//
//printf("Chuoi vua nhap la:");
//puts(buffer2);