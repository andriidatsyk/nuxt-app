import { expect, it, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../stores/counter.js'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('increments', () => {
    const counter = useStore()
    expect(counter.count).toBe(0)
  })
})
