const someMap = new Map();
someMap.set("key1", "value1");
someMap.set("key2", "value2");
someMap.set("key3", "value3");
for (let item of someMap) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}
