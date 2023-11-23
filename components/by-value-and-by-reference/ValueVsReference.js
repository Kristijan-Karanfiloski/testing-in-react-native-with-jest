import React from "react";
import { View, Text } from "react-native";

const ValueVsReference = () => {
  // By VALUE
  let a = 3;
  let b;

  b = a;
  a = 2;
  console.log(b);
  console.log(a);

  // By REFERENCE

  let c = { greeting: "hi" };
  let d;
  d = c;
  c.greeting = "hello";

  console.log("C :", c);
  console.log("D :", d);

  //BY REFERENCE (EVEN AS PARAMETAR0S)

  function changeGreeting(obj) {
    obj.greeting = "Hola";
  }
  changeGreeting(d);
  console.log("C AFTER THE FUNCTION CHANGE GREETING line 30 :", c);
  console.log("D AFTER THE FUNCTION CHANGE GREETING :", d);

  // EQUALS OPERATOR SETS UP NEW MEMORY SPACE (NEW ADDRESS)

  c = { greeting: "howdy" };

  console.log("LIne 37 ;", c); // Object {greeting: "howdy"} cause of the = sign this is a new object created on the fly
  console.log("Line 38 :", d); // Object {greeting: "hola"} this will still be hola

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const name = "darko";

  function test(name) {
    let name1 = "dime";
    let twoNames = `${name} i ${name1} `;

    function innerFunction(twoNames) {
      return twoNames;
    }
    return innerFunction(twoNames);
  }

  // test(name);
  console.log(test(name));

  return (
    <>
      <View>
        <Text>ValueVsReference</Text>
      </View>
    </>
  );
};

export default ValueVsReference;
