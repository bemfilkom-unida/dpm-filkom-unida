import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('menggabungkan class yang diberikan', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('melewati nilai kosong', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('mengembalikan string kosong tanpa argumen', () => {
    expect(cn()).toBe('')
  })
})
