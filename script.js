function HashMap() {
  let buckets = new Array(16).fill(null);

  function Node(key, value) {
    return {
      key: key,
      value: value,
      next: null,
    };
  }

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % buckets.length;
    }

    return hashCode;
  }

  function set(key, value) {
    let hashed = hash(key);
    let newNode = Node(key, value);
    buckets[hashed] = newNode;
  }

  function get(key) {
    let hashed = hash(key);
    let searched = buckets[hashed].value;

    return searched;
  }

  return {
    buckets,
    set,
    get,
  };
}

let map = HashMap();

map.set("bartek", "sylwia");
console.log(map.buckets);
console.log(map.get("bartek"));
