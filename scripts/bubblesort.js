async function bubbleSort() {
    console.log("Bubble Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
                arr[j].style.background = '#f9259d';
                arr[j + 1].style.background = '#f9259d';
                swap(arr[j], arr[j + 1]);
                await animate(2 * waitTime);
                arr[j].style.background = '#25f9eb';
                arr[j + 1].style.background = '#25f9eb';
                await animate(waitTime);


            }
            else {
                arr[j].style.background = '#25f9eb';
                arr[j + 1].style.background = '#25f9eb';
                await animate(waitTime);
            }
            for (let k = j; k >= 0; k--)
                arr[k].style.background = '#f98125';
        }
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }
    enableInputs();
}
