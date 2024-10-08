# js-lesson-3

### **`Number` Constructor**

**Properties:**

| Property          | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| EPSILON           | The difference between 1 and the smallest floating-point number greater than 1.    |
| MAX_VALUE         | The largest number possible in JavaScript (approximately 1.7976931348623157e+308). |
| MIN_VALUE         | The smallest positive number possible in JavaScript (approximately 5e-324).        |
| MAX_SAFE_INTEGER  | The maximum safe integer (2^53 - 1, or 9007199254740991).                          |
| MIN_SAFE_INTEGER  | The minimum safe integer (-2^53 + 1, or -9007199254740991).                        |
| POSITIVE_INFINITY | Represents positive infinity (Infinity).                                           |
| NEGATIVE_INFINITY | Represents negative infinity (-Infinity).                                          |

**Methods:**

- **`Number.isInteger()`**: Checks if the value is an integer.
  ```jsx
  console.log(Number.isInteger(4)); // true
  console.log(Number.isInteger(4.1)); // false
  ```
- **`Number.isSafeInteger()`**: Checks if the value is a safe integer.
  ```jsx
  console.log(Number.isSafeInteger(9007199254740991)); // true
  console.log(Number.isSafeInteger(9007199254740992)); // false
  ```
- **`Number.parseInt(n)`**: Parses a string argument and returns an integer of the specified radix.
  ```jsx
  console.log(Number.parseInt("10", 10)); // 10
  console.log(Number.parseInt("10", 16)); // 16
  ```
- **`Number.parseFloat(n)`**: Parses a string argument and returns a floating-point number.
  ```jsx
  console.log(Number.parseFloat("10.5")); // 10.5
  console.log(Number.parseFloat("10.5abc")); // 10.5
  ```

**Number Methods:**

- **`n.toString()`**: Converts a number to a string.
  ```jsx
  let n = 123;
  console.log(n.toString()); // '123'
  ```
- **`n.toExponential()`**: Converts a number to its exponential form.
  ```jsx
  let n = 1234;
  console.log(n.toExponential(2)); // '1.23e+3'
  ```
- **`n.toFixed()`**: Formats a number using fixed-point notation.
  ```jsx
  let n = 123.456;
  console.log(n.toFixed(2)); // '123.46'
  ```
- **`n.toPrecision()`**: Formats a number to a specified length.
  ```jsx
  let n = 123.456;
  console.log(n.toPrecision(4)); // '123.5'
  ```

### **Type Conversion and Coercion**

**To Number:**

- **`Number(n)`**: Converts `n` to a number.
  ```jsx
  console.log(Number("123")); // 123
  console.log(Number("123abc")); // NaN
  ```
- **`+n`**: Unary plus operator to convert `n` to a number.
  ```jsx
  console.log(+"123"); // 123
  console.log(+"123abc"); // NaN
  ```
- **`n * 1`**: Multiplying by 1 converts `n` to a number.
  ```jsx
  console.log("123" * 1); // 123
  ```

**To String:**

- **`String(n)`**: Converts `n` to a string.
  ```jsx
  console.log(String(123)); // '123'
  ```
- **`n.toString()`**: Converts `n` to a string.
  ```jsx
  console.log((123).toString()); // '123'
  ```
- **`n + ""`**: Concatenating with an empty string converts `n` to a string.
  ```jsx
  console.log(123 + ""); // '123'
  ```

**`isNaN`**

- **`isNaN(value)`**: Checks if `value` is NaN when converted to a number.
  ```jsx
  console.log(isNaN("123")); // false
  console.log(isNaN("abc")); // true
  ```

### **Boolean Constructor**

```jsx
let b1 = Boolean(12);
console.log(b1); // true

let b2 = Boolean(0);
console.log(b2); // false
```

**Truthy and Falsy:**

- **Falsy Values:**
  - `false`
  - `0`
  - `0`
  - `0n`
  - `0n`
  - `""`
  - `null`
  - `undefined`
  - `NaN`
- **Truthy Values:**
  - `{}` (empty object)
  - `[]` (empty array)
  - `42`
  - `"0"`
  - `"false"`
  - `42`
  - `12n` (BigInt)
  - `3.14`
  - `3.14`
  - `Infinity`
  - `Infinity`

### **Logical Operators**

- **`||`** (Logical OR): Returns the first truthy value or the last value if all are falsy.
  ```jsx
  console.log(true || false); // true
  console.log(false || null || 1); // 1
  ```
- **`&&`** (Logical AND): Returns the first falsy value or the last value if all are truthy.
  ```jsx
  console.log(true && false); // false
  console.log(1 && "abc"); // 'abc'
  ```

### **Nullish Coalescing Operator `??`**

- Returns the first non-nullish value (`null` or `undefined`), otherwise returns the last value.
  ```jsx
  console.log(null ?? "default"); // 'default'
  console.log(undefined ?? "default"); // 'default'
  console.log("value" ?? "default"); // 'value'
  ```

### **Conditional (`Ternary`) Operator**

```jsx
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Not an Adult";
console.log(isAdult); // 'Adult'
```

### **Switch Case**

- **Basic Switch Case:**
  ```jsx
  let day = 2;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Weekend");
  }
  ```
- **Multiple Cases:**
  ```jsx
  let fruit = "apple";
  switch (fruit) {
    case "apple":
    case "banana":
      console.log("Fruit is either apple or banana");
      break;
    case "orange":
      console.log("Fruit is orange");
      break;
    default:
      console.log("Unknown fruit");
  }
  ```

### **Amaliy Mashqlar**

1. **`Number` Constructor Properties**
   - **Mashq**: Qaysi `Number` xususiyatlari mavjud va ularning qiymatlarini tekshiring.
     ```jsx
     console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
     console.log(Number.MIN_VALUE); // 5e-324
     console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
     console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
     console.log(Number.POSITIVE_INFINITY); // Infinity
     console.log(Number.NEGATIVE_INFINITY); // -Infinity
     ```
2. **To Number Conversion**
   - **Mashq**: Har qanday qiymatni songa aylantiring va natijani tekshiring.
     ```jsx
     console.log(Number("123.45")); // 123.45
     console.log(+"456.78"); // 456.78
     console.log("789" * 1); // 789
     ```
3. **To String Conversion**
   - **Mashq**: Sonlarni stringga aylantiring va natijani tekshiring.
     ```jsx
     console.log(String(123)); // '123'
     console.log((456).toString()); // '456'
     console.log(789 + ""); // '789'
     ```
4. **Falsy va Truthy Qiymatlar**
   - **Mashq**: Falsy va truthy qiymatlarni tekshirib ko'ring.
     ```jsx
     let values = [false, 0, "", null, undefined, NaN, {}, [], 42];
     values.forEach((value) => console.log(Boolean(value)));
     ```
5. **Logical Operators**
   - **Mashq**: Logical operators yordamida shartlarni baholang.
     ```jsx
     console.log(true || false); // true
     console.log(false && "text"); // false
     ```
6. **Nullish Coalescing**

   - **Mashq**: Nullish coalescing operator (`??`) yordamida qiymatlarni tekshirib ko'ring.
     ```jsx
     console.log(null ?? "default"); // 'default'
     console.log("text" ?? "default"); // 'text'
     ```

7. **Switch Case**
   - **Mashq**: Switch case yordamida turli holatlarni boshqarishni o'rganing.
     ```jsx
     let day = 3;
     switch (day) {
       case 1:
         console.log("Monday");
         break;
       case 2:
         console.log("Tuesday");
         break;
       case 3:
         console.log("Wednesday");
         break;
       default:
         console.log("Weekend");
     }
     ```

### **Intervyu Savollari**

1. `Number` constructorining qanday xususiyatlari mavjud va ular nima uchun ishlatiladi?
2. `Number.parseInt` va `Number.parseFloat` metodlari o'rtasidagi farq nima?
3. `isNaN` funksiyasi qanday ishlaydi va qanday vaziyatlarda foydalashtiriladi?
4. `Boolean` constructor qanday ishlaydi va qanday qiymatlar `true` yoki `false` bo'ladi?
5. `??` operatorining `||` operatoridan farqi nima?
6. `toFixed()` va `toPrecision()` metodlari qanday ishlaydi va ular o'rtasidagi farq nima?
7. `Number.isSafeInteger()` qanday ishlaydi va nima uchun kerak?
8. `Switch case` ifodasi qanday ishlaydi va uni `if-else` bilan qanday solishtirasiz?
9. `Boolean` constructor va `Boolean` funktsiyasi o'rtasidagi farq nima?
10. JavaScriptda qiymatlarni turli turlarga qanday konvertatsiya qilish mumkin?
