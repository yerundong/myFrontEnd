import { toRaw, isReactive, isRef, unref, ref } from "vue"

/**
 * 深度解包 Proxy/Vue的Reactive/Ref，返回普通对象或数组
 */
export function deepToRaw<T>(obj: T): T {
    if (isRef(obj)) 
      return deepToRaw(unref(obj)) as T // 解开 ref
  
    if (isReactive(obj)) {
      const raw = toRaw(obj) as Record<string, unknown>
      if (Array.isArray(raw))
        return raw.map((item) => deepToRaw(item)) as  T
      return Object.fromEntries(
        Object.entries(raw).map(([k, v]) => [k, deepToRaw(v)])
      ) as  T
    }
  
    if (Array.isArray(obj)) 
      return obj.map((item) => deepToRaw(item)) as T
  
    if (obj && typeof obj === "object") 
      return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, deepToRaw(v)])
      ) as T
  
    return obj
  }