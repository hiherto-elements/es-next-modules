import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { 
    new_byte, 
    new_short, 
    new_int, 
    new_float, 
    new_double, 
    new_float_n, 
    new_int_n,
    new_short_n,
    new_array_n,
    Arrays,
    System,
    Util,
    ShortBlock,
    Float,
    VbrMode
} from '../common.js';

Assert.isFunction(new_byte);
Assert.isFunction(new_short);
Assert.isFunction(new_int);
Assert.isFunction(new_float);
Assert.isFunction(new_double);
Assert.isFunction(new_float_n);
Assert.isFunction(new_int_n);
Assert.isFunction(new_short_n);
Assert.isFunction(new_array_n);
Assert.object(Arrays);
Assert.object(System);
Assert.object(Util);
Assert.isFunction(ShortBlock);
Assert.object(Float);
Assert.isFunction(VbrMode);
