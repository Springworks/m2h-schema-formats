const int32_min = -1 * Math.pow(2, 31);
const int32_max = Math.pow(2, 31) - 1;

function validateInt32(n) {
  return n >= int32_min && n <= int32_max;
}

export default function(ajv) {
  ajv.addFormat('int32', validateInt32);
}
