async function selectionSort() {
    console.log("Selection Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].style.background = '#f9259d';
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            arr[j].style.background = '#f9259d';
            if (parseInt(arr[j].style.height) < parseInt(arr[min].style.height)) {
                min = j;
                arr[min].style.background = '#9df925';
                await animate(waitTime);
            }
            else {
                console.log(j);
                arr[j].style.background = '#f9259d';
                await animate(waitTime);
            }

            for (let k = min + 1; k < arr.length; k++)
                arr[k].style.background = '#f98125';

            for (let l = i + 1; l < min; l++)
                arr[l].style.background = '#f98125';
        }

        swap(arr[i], arr[min]);
        arr[i].style.background = '#25f9eb';
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }

    enableInputs();
}


