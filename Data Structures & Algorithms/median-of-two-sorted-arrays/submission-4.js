class Solution {
    findMedianSortedArrays(nums1, nums2) {
        const n1 = nums1.length;
        const n2 = nums2.length;
        const n = n1 + n2;

        // handle single array cases properly
        if (n1 === 0) return this.getMedian(nums2);
        if (n2 === 0) return this.getMedian(nums1);

        let i = 0, j = 0;
        let count = 0;

        let prev = 0, curr = 0;

        while (count <= Math.floor(n / 2)) {
            prev = curr;

            if (i < n1 && (j >= n2 || nums1[i] <= nums2[j])) {
                curr = nums1[i];
                i++;
            } else {
                curr = nums2[j];
                j++;
            }

            count++;
        }

        return n % 2 !== 0 ? curr : (prev + curr) / 2;
    }

    getMedian(arr) {
        const n = arr.length;
        const mid = Math.floor(n / 2);

        if (n % 2 === 0) {
            return (arr[mid - 1] + arr[mid]) / 2;
        }
        return arr[mid];
    }
}