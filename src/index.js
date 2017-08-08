import validateInt32 from './validators/int32';
import validateDouble from './validators/double';

export default function(ajv) {
  ajv.addFormat('int32', validateInt32);
  ajv.addFormat('double', validateDouble);
}
