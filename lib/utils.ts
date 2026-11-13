type ClassValue = string | number | false | null | undefined

/** Gabungkan class name, lewati nilai kosong. */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ')
}
