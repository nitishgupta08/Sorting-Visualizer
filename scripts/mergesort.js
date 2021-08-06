async function merge(arr, low, mid, high) {
	console.log('Inside merge function');
	const s1 = mid - low + 1;
	const s2 = high - mid;

	let left = [];
	let right = [];

	for (let i = 0; i < s1; i++) {
		arr[low + i].style.background = '#f9259d';
		left[i] = arr[low + i].style.height;
		await animate(waitTime);
	}

	for (let i = 0; i < s2; i++) {
		arr[mid + 1 + i].style.background = '#f9259d';
		right[i] = arr[mid + 1 + i].style.height;
		await animate(waitTime);
	}

	let i = 0, j = 0, k = low;

	while (i < s1 && j < s2) {
		if (parseInt(left[i]) <= parseInt(right[j])) {
			arr[k].style.background = '#25f9eb';
			arr[k].style.height = left[i];
			i++;
			k++;
		}

		else {
			arr[k].style.background = '#25f9eb';
			arr[k].style.height = right[j];
			j++;
			k++;
		}
		await animate(waitTime);
	}

	while (i < s1) {
		arr[k].style.background = '#25f9eb';
		arr[k].style.height = left[i];
		i++;
		k++;
		await animate(waitTime);
	}

	while (j < s2) {
		arr[k].style.background = '#25f9eb';
		arr[k].style.height = right[j];
		j++;
		k++;
		await animate(waitTime);
	}
}

async function mergeSort(arr, l, r) {
	if (l >= r) {
		return;
	}
	const m = l + Math.floor((r - l) / 2);
	await mergeSort(arr, l, m);
	await mergeSort(arr, m + 1, r);
	await merge(arr, l, m, r);
}

async function merge_sort() {
	console.log("Merge Sort running");
	disableInputs();
	let arr = document.querySelectorAll('.bar');
	await mergeSort(arr, 0, parseInt(arr.length) - 1);
	for (let k = arr.length - 1; k >= 0; k--) {
		arr[k].style.background = '#f98125';
		await animate(100 / randomArray.length);
	}
	enableInputs();
}
