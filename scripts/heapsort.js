async function heapsort() {
    console.log("Heap Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    let n = arr.length;

    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#25f9eb';
    }


    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        await heapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        arr[0].style.background = '#f9259d';
        arr[i].style.background = '#f9259d';
        swap(arr[0], arr[i]);
        await animate(waitTime);
        arr[0].style.background = '#9df925';
        arr[i].style.background = '#9df925';
        await heapify(arr, i, 0);
    }



    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }

    enableInputs();
}


async function heapify(arr, n, i) {
    let max = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[max].style.height))
        max = l;

    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[max].style.height))
        max = r;

    if (max != i) {
        arr[i].style.background = '#f9259d';
        arr[max].style.background = '#f9259d';
        swap(arr[i], arr[max]);
        await animate(waitTime);
        arr[i].style.background = '#25f9eb';
        arr[max].style.background = '#25f9eb';
        await heapify(arr, n, max);
    }
}

