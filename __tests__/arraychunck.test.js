const assert = require("assert");
import {chunk} from "../components/helperFunctions/arraychunck";

describe('Array chunking',()=>{
    it('should  create chunks of a specific size', () => {
        assert.deepEqual(chunk([1,2,3,4],2),[[1,2],[3,4]])
    });
})