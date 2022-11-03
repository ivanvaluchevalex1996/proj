export function truncate(str) {
  const text = str.slice(0, 90);
  const a = text.split(" ");
  a.splice(a.length - 1, 1);
  const res = a.join(" ");
  return `${res}...`;
}

export function changeColor(value) {
  if (value > 7) {
    return "#66E900";
  }
  if (value > 5) {
    return "#E9D100";
  }
  if (value > 3) {
    return "#E97E00";
  }
  return "#E90000";
}

export default changeColor;
