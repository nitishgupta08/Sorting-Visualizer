async function shellSort() {
    console.log("Shell Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    let n = arr.length;
    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#25f9eb';
    }
    for (let gap = Math.floor(n / 2); gap >= 1; gap = Math.floor(gap / 2)) {
        for (let j = gap; j < n; j++) {
            let temp = arr[j].style.height;
            let i = j - gap;
            while (i >= 0 && parseInt(arr[i].style.height) > parseInt(temp)) {
                arr[i].style.background = "#f9259d";
                arr[i + gap].style.background = "#f9259d";
                await animate(2 * waitTime);
                arr[i + gap].style.height = arr[i].style.height;
                arr[i + gap].style.background = "#9df925";
                arr[i].style.background = "#9df925";
                i = i - gap;
            }
            arr[i + gap].style.height = temp;
        }

        for (let k = arr.length - 1; k >= 0; k--) {
            arr[k].style.background = '#25f9eb';
        }
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }

    enableInputs();
}