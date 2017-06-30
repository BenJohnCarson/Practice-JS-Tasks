const str1 = "aabbcc";
const str2 = "eeddaa";

function combineSort(s1, s2){
    return [...new Set([...s1,...s2])].sort().join("");
};

console.log(combineSort(str1, str2));
