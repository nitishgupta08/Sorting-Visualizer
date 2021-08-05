async function 
 
 
 
 
 #include<iostream>

    using namespace std;

//left-most element is pivot
int partition(int * arr, int p, int r) {
    int pivot = arr[p];
    int i = p;
    int j = r;

    while (i < j) {
        while (arr[i] <= pivot && i <= r)
            i = i + 1;
        while (arr[j] > pivot && j >= p)
            j = j - 1;
        if (i < j)
            swap(arr[i], arr[j]);
    }
    swap(arr[p], arr[j]);
    return j;
}

void QuickSort(int * arr, int p, int r) {
    if (p < r) {
        int q = partition(arr, p, r);
        QuickSort(arr, p, q - 1);
        QuickSort(arr, q + 1, r);
    }
}

int main() {
    int n;
    cout << "Enter number of elements: ";
    cin >> n;
    int A[n];
    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++)
    cin >> A[i];

    QuickSort(A, 0, n - 1);

    cout << "Sorted Array(Quick Sort): ";
    for (int i = 0; i < n; i++)
    cout << A[i] << " ";
    cout << "\n";
}