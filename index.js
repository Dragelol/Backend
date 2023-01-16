// Dom, Mary, John

function getColor (name) {
    const colors = ["green", "red", "blue"];
    const index = name.length % colors.length;

    return colors [index];
}

console.log(getColor("Mary"));
console.log(getColor("john"));
console.log(getColor("dom"));
