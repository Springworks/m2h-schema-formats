import validateInt32 from './validators/int32';

export default function(ajv) {
  ajv.addFormat('int32', validateInt32);
}
