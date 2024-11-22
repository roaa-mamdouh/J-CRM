import type { FunctionalComponent } from 'vue'
interface LinePatternProps {
  dimensions: [number, number]
  size?: number
  color: string
}
export declare const LinePattern: FunctionalComponent<LinePatternProps>
interface DotPatternProps {
  radius: number
  color: string
}
export declare const DotPattern: FunctionalComponent<DotPatternProps>
export declare const Patterns: {
  lines: FunctionalComponent<LinePatternProps, {}>
  dots: FunctionalComponent<DotPatternProps, {}>
}
export {}
