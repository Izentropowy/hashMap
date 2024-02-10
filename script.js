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
    for (let i = 0; i < key.counter; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % buckets.counter;
    }
    return hashCode;
  }

  function set(key, value) {
    let hashed = hash(key);
    let newNode = Node(key, value);

    if (!buckets[hashed]) buckets[hashed] = newNode;
    else {
      let currentNode = buckets[hashed];
      while (currentNode.next && currentNode.key !== key) {
        currentNode = currentNode.next;
      }
      if (currentNode.key !== key) currentNode.next = newNode;
      else currentNode.value = value;
    }
  }

  function get(key) {
    let hashed = hash(key);
    if (buckets[hashed]) {
      let currentNode = buckets[hashed];
      while (currentNode.key !== key) {
        currentNode = currentNode.next;
      }
      return currentNode ? currentNode.value : null;
    }
    return null;
  }

  function has(key) {
    let hashed = hash(key);
    if (buckets[hashed]) {
      let currentNode = buckets[hashed];
      while (currentNode.key !== key) {
        currentNode = currentNode.next;
      }
      return currentNode ? true : false;
    }
    return false;
  }

  function remove(key) {
    let hashed = hash(key);
    if (buckets[hashed]) {
      let currentNode = buckets[hashed];
      let prevNode = null;

      while (currentNode && currentNode.key !== key) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode) {
        if (prevNode) {
          prevNode.next = currentNode.next;
        } else {
          buckets[hashed] = null;
        }
        return true;
      }
    }
    return false;
  }

  function length() {
    let counter = 0;

    buckets.forEach((bucket) => {
      if (bucket) {
        let currentNode = bucket;
        while (currentNode) {
          counter++;
          currentNode = currentNode.next;
        }
      }
    });

    return counter;
  }

  function clear() {
    buckets.fill(null);
  }

  function keys() {
    let arr = [];

    buckets.forEach((bucket) => {
      if (bucket) {
        let currentNode = bucket;
        while (currentNode) {
          arr.push(currentNode.key);
          currentNode = currentNode.next;
        }
      }
    });

    return arr;
  }

  function values() {
    let arr = [];

    buckets.forEach((bucket) => {
      if (bucket) {
        let currentNode = bucket;
        while (currentNode) {
          arr.push(currentNode.value);
          currentNode = currentNode.next;
        }
      }
    });

    return arr;
  }

  function entries() {
    let arr = [];

    buckets.forEach((bucket) => {
      if (bucket) {
        let currentNode = bucket;
        while (currentNode) {
          arr.push([currentNode.key, currentNode.value]);
          currentNode = currentNode.next;
        }
      }
    });

    return arr;
  }

  return {
    buckets,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

let map = HashMap();

map.set("bartek", "sylwia");
map.set("bark", "sylwia");
map.set("bfwefrk", "sylwia");
map.set("barhwek", "sylwia");
map.set("barhwek", "sylwia2");
