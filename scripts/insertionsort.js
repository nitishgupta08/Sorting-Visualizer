async function inserionSort() {
    console.log("Insertion Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i].style.height;
        let j = i - 1;
        arr[i].style.background = '#9df925';
        await animate(waitTime);
        while (j >= 0 && (parseInt(arr[j].style.height) > parseInt(key))) {
            arr[j + 1].style.height = arr[j].style.height;
            arr[j].style.background = '#f9259d';
            j--;

            await animate(waitTime);

            for (let k = i; k >= 0; k--) {
                arr[k].style.background = '#25f9eb';
            }
        }
        arr[j + 1].style.height = key;
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }

    enableInputs();
}





