<template>
  <div class="h1">
    <h1>{{ msg }}</h1>
    <h3>{{ store.count }}</h3>
    <div class="btn-wrapper">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="decrement"
      >
        -
      </button>
      <button
        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from './../stores/counter'

export default {
  name: 'counter',
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  data() {
    return {
      msg: 'Counter App',
    }
  },
  methods: {
    decrement() {
      if (this.store.count) {
        this.store.count -= 1
      }
    },
    increment() {
      if (this.store.count < 10) {
        this.store.count += 1
      }
    },
  },
}
</script>
