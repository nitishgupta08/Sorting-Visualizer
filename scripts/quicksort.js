async function partition(arr, l, r) {
    console.log("In partition function");
    let pivot = r;
    let i = l - 1;
    arr[pivot].style.background = '#f9259d';

    for (let j = l; j <= r - 1; j++) {
        arr[j].style.background = '#9df925';
        await animate(waitTime);
        if (parseInt(arr[j].style.height) < parseInt(arr[pivot].style.height)) {
            i++;
            arr[i].style.background = '#f92533';
            arr[j].style.background = '#f92533';
            await animate(waitTime);
            swap(arr[i], arr[j]);
            arr[i].style.background = '#259df9';
            arr[j].style.background = '#259df9';
            await animate(waitTime);
        }
    }
    swap(arr[++i], arr[r]);


    await animate(waitTime);

    for (let k = 0; k <= pivot; k++)
        arr[k].style.background = '#25f9eb';

    for (let k = pivot + 1; k < arr.length; k++)
        arr[k].style.background = '#25f9eb';


    return i;
}

async function quickSort(arr, l, r) {
    if (l < r) {
        let pivot_index = await partition(arr, l, r);
        await quickSort(arr, l, pivot_index - 1);
        await quickSort(arr, pivot_index + 1, r);
    }
}

async function quick_sort() {
    console.log("Quick sort running");
    disableInputs();
    let arr = document.querySelectorAll('.bar');
    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#25f9eb';
    }
    await quickSort(arr, 0, parseInt(arr.length) - 1);
    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / arr.length);
    }
    enableInputs();
}